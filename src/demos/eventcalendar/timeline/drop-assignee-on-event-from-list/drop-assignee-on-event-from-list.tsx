import {
  Draggable,
  Dropcontainer,
  Eventcalendar,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscItemDragEvent,
  MbscResource,
  Page,
  setOptions,
  Snackbar,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { dyndatetime } from '../../../../dyndatetime';
import './drop-assignee-on-event-from-list.css';

setOptions({
  // localeJs,
  // themeJs
});

interface Employee {
  id: string;
  name: string;
  avatar: string;
  color: string;
}

interface Meeting extends MbscCalendarEvent {
  id: string;
  title: string;
  color: string;
  attendees: Employee[];
}

const employees: Employee[] = [
  { id: 'emp1', name: 'Alice Martin', avatar: 'AM', color: '#e74c3c' },
  { id: 'emp2', name: 'Bob Johnson', avatar: 'BJ', color: '#3498db' },
  { id: 'emp3', name: 'Carol Smith', avatar: 'CS', color: '#2ecc71' },
  { id: 'emp4', name: 'David Lee', avatar: 'DL', color: '#f39c12' },
  { id: 'emp5', name: 'Eva Chen', avatar: 'EC', color: '#9b59b6' },
  { id: 'emp6', name: 'Frank Diaz', avatar: 'FD', color: '#1abc9c' },
  { id: 'emp7', name: 'Grace Kim', avatar: 'GK', color: '#e67e22' },
  { id: 'emp8', name: 'Henry Patel', avatar: 'HP', color: '#34495e' },
  { id: 'emp9', name: 'Ivy Torres', avatar: 'IT', color: '#e84393' },
  { id: 'emp10', name: 'Jack Murphy', avatar: 'JM', color: '#0984e3' },
];

const rooms: MbscResource[] = [
  { id: 1, name: 'Conference Room' },
  { id: 2, name: 'Board Room' },
  { id: 3, name: 'Meeting Room' },
  { id: 4, name: 'Training Room' },
];

function EmployeeItem({ emp, assignmentCount, onDragStart }: { emp: Employee; assignmentCount: number; onDragStart: () => void }) {
  const [dragEl, setDragEl] = useState<HTMLDivElement | null>(null);

  return (
    <div className="mds-employee-item mbsc-flex" ref={setDragEl} onPointerDown={onDragStart}>
      <div className="mds-employee-avatar mbsc-flex" style={{ background: emp.color }}>
        {emp.avatar}
      </div>
      <div className="mds-employee-info mbsc-flex">
        <div className="mds-employee-name">{emp.name}</div>
        <div className="mds-employee-count">
          {assignmentCount > 0 ? `${assignmentCount} meeting${assignmentCount > 1 ? 's' : ''}` : 'No assignments'}
        </div>
      </div>
      <Draggable dragData={emp} element={dragEl} />
    </div>
  );
}

function MeetingEvent({
  data,
  findConflict,
  onAssign,
  onRemove,
  onToast,
}: {
  data: MbscCalendarEventData;
  findConflict: (empId: string, targetEventId: string) => Meeting | null;
  onAssign: (eventId: string, employee: Employee) => void;
  onRemove: (eventId: string, employee: Employee, eventTitle: string) => void;
  onToast: (message: string, color: 'success' | 'danger') => void;
}) {
  const [dropEl, setDropEl] = useState<HTMLDivElement | null>(null);
  const [dropState, setDropState] = useState<string>('');

  const event = data.original as Meeting;
  const attendees = useMemo(() => event.attendees || [], [event.attendees]);

  const handleItemDrop = useCallback(
    (args: MbscItemDragEvent) => {
      const employee = args.data as Employee;
      setDropState('');

      if (attendees.some((a) => a.id === employee.id)) {
        onToast(`${employee.name} is already assigned`, 'danger');
        return;
      }

      const conflict = findConflict(employee.id, event.id);
      if (conflict) {
        onToast(`${employee.name} already has a ${conflict.title} on this timeslot`, 'danger');
        return;
      }

      onAssign(event.id, employee);
      onToast(`${employee.name} assigned to ${event.title}`, 'success');
    },
    [attendees, event, findConflict, onAssign, onToast],
  );

  const handleDragEnter = useCallback(
    (args: MbscItemDragEvent) => {
      const employee = args.data as Employee;
      if (employee) {
        if (attendees.some((a) => a.id === employee.id)) {
          setDropState('mds-drop-conflict');
        } else {
          const conflict = findConflict(employee.id, event.id);
          setDropState(conflict ? 'mds-drop-conflict' : 'mds-drop-active');
        }
      } else {
        setDropState('mds-drop-active');
      }
    },
    [attendees, event, findConflict],
  );

  const handleDragLeave = useCallback(() => {
    setDropState('');
  }, []);

  return (
    <div ref={setDropEl} className={`mds-custom-event mbsc-flex ${dropState}`} style={{ borderLeft: `4px solid ${event.color}` }}>
      <Dropcontainer element={dropEl} onItemDrop={handleItemDrop} onItemDragEnter={handleDragEnter} onItemDragLeave={handleDragLeave} />
      <div className="mds-event-header mbsc-flex">
        <div className="mds-event-title">{event.title}</div>
        <div className="mds-event-time">
          {data.start} - {data.end}
        </div>
      </div>
      {attendees.length > 0 && (
        <div className="mds-event-attendees mbsc-flex">
          {attendees.map((att) => (
            <span
              key={att.id}
              className="mds-attendee-chip"
              style={{ background: att.color }}
              title={`${att.name} (click to remove)`}
              onClick={(e) => {
                e.stopPropagation();
                onRemove(event.id, att, event.title);
              }}
            >
              {att.avatar}
              <span className="mds-attendee-remove">&times;</span>
            </span>
          ))}
        </div>
      )}
      <div className="mds-event-drop-hint">Drop people to assign</div>
    </div>
  );
}

const App: FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>(() => [
    {
      id: 'evt1',
      title: 'Sprint Planning',
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,11'),
      resource: 1,
      color: '#b52db9',
      attendees: [],
    },
    {
      id: 'evt2',
      title: 'Budget Review',
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,13'),
      resource: 2,
      color: '#669ce2',
      attendees: [],
    },
    {
      id: 'evt3',
      title: 'Client Presentation',
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,18'),
      resource: 2,
      color: '#88bd42',
      attendees: [],
    },
    {
      id: 'evt4',
      title: 'Project Kickoff',
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,11'),
      resource: 3,
      color: '#b6962f',
      attendees: [],
    },
    {
      id: 'evt5',
      title: 'New Hire Orientation',
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,16'),
      resource: 4,
      color: '#c864f0',
      attendees: [],
    },
    {
      id: 'evt6',
      title: 'Design Review',
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,15'),
      resource: 1,
      color: '#c7682d',
      attendees: [],
    },
    {
      id: 'evt7',
      title: 'Product Demo',
      start: dyndatetime('y,m,d+1,9'),
      end: dyndatetime('y,m,d+1,11'),
      resource: 1,
      color: '#ad2b6c',
      attendees: [],
    },
    {
      id: 'evt8',
      title: 'Stakeholder Update',
      start: dyndatetime('y,m,d+1,10'),
      end: dyndatetime('y,m,d+1,12'),
      resource: 2,
      color: '#0f60ca',
      attendees: [],
    },
    {
      id: 'evt9',
      title: 'Code Review',
      start: dyndatetime('y,m,d+1,10'),
      end: dyndatetime('y,m,d+1,12'),
      resource: 3,
      color: '#56a823',
      attendees: [],
    },
    {
      id: 'evt10',
      title: 'Safety Training',
      start: dyndatetime('y,m,d+1,13'),
      end: dyndatetime('y,m,d+1,16'),
      resource: 4,
      color: '#aa36d8',
      attendees: [],
    },
    {
      id: 'evt11',
      title: 'Retrospective',
      start: dyndatetime('y,m,d+2,9'),
      end: dyndatetime('y,m,d+2,11'),
      resource: 1,
      color: '#c45f20',
      attendees: [],
    },
    {
      id: 'evt12',
      title: 'Board Briefing',
      start: dyndatetime('y,m,d+2,13'),
      end: dyndatetime('y,m,d+2,16'),
      resource: 2,
      color: '#1e58a5',
      attendees: [],
    },
    {
      id: 'evt13',
      title: 'Marketing Sync',
      start: dyndatetime('y,m,d+2,10'),
      end: dyndatetime('y,m,d+2,12'),
      resource: 3,
      color: '#549e27',
      attendees: [],
    },
    {
      id: 'evt14',
      title: 'API Workshop',
      start: dyndatetime('y,m,d+2,13'),
      end: dyndatetime('y,m,d+2,16'),
      resource: 4,
      color: '#7c1ca1',
      attendees: [],
    },
    {
      id: 'evt15',
      title: 'Architecture Review',
      start: dyndatetime('y,m,d+3,9'),
      end: dyndatetime('y,m,d+3,11,30'),
      resource: 1,
      color: '#a7511c',
      attendees: [],
    },
    {
      id: 'evt16',
      title: 'Quarterly Planning',
      start: dyndatetime('y,m,d+3,13'),
      end: dyndatetime('y,m,d+3,16'),
      resource: 2,
      color: '#13488d',
      attendees: [],
    },
    {
      id: 'evt17',
      title: 'Hiring Debrief',
      start: dyndatetime('y,m,d+3,10'),
      end: dyndatetime('y,m,d+3,12'),
      resource: 3,
      color: '#51ac19',
      attendees: [],
    },
    {
      id: 'evt18',
      title: 'Team Standup',
      start: dyndatetime('y,m,d-1,9'),
      end: dyndatetime('y,m,d-1,11'),
      resource: 1,
      color: '#e74c3c',
      attendees: [],
    },
    {
      id: 'evt19',
      title: 'Daily Scrum',
      start: dyndatetime('y,m,d-1,10'),
      end: dyndatetime('y,m,d-1,13'),
      resource: 2,
      color: '#3498db',
      attendees: [],
    },
    {
      id: 'evt20',
      title: 'Lunch Meeting',
      start: dyndatetime('y,m,d-1,12'),
      end: dyndatetime('y,m,d-1,14'),
      resource: 3,
      color: '#2ecc71',
      attendees: [],
    },
    {
      id: 'evt21',
      title: 'Weekly Sync',
      start: dyndatetime('y,m,d-1,14'),
      end: dyndatetime('y,m,d-1,16'),
      resource: 4,
      color: '#f39c12',
      attendees: [],
    },
    {
      id: 'evt22',
      title: 'Morning Briefing',
      start: dyndatetime('y,m,d-2,9'),
      end: dyndatetime('y,m,d-2,11'),
      resource: 1,
      color: '#9b59b6',
      attendees: [],
    },
    {
      id: 'evt23',
      title: 'Status Update',
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,14'),
      resource: 2,
      color: '#1abc9c',
      attendees: [],
    },
    {
      id: 'evt24',
      title: 'Client Call',
      start: dyndatetime('y,m,d-2,13'),
      end: dyndatetime('y,m,d-2,15'),
      resource: 3,
      color: '#e67e22',
      attendees: [],
    },
    {
      id: 'evt25',
      title: 'End of Day Review',
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,18'),
      resource: 4,
      color: '#34495e',
      attendees: [],
    },
  ]);

  const [isExternalDragging, setIsExternalDragging] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const [undoData, setUndoData] = useState<{ eventId: string; employee: Employee } | null>(null);

  const meetingsRef = useRef<Meeting[]>(meetings);
  useEffect(() => {
    meetingsRef.current = meetings;
  }, [meetings]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '18:00',
        timeCellStep: 60,
        timeLabelStep: 60,
        virtualScroll: false,
      },
    }),
    [],
  );

  const findConflict = useCallback((empId: string, targetEventId: string): Meeting | null => {
    const allMeetings = meetingsRef.current;
    const target = allMeetings.find((m) => m.id === targetEventId);
    if (!target) return null;

    const targetStart = new Date(target.start as string).getTime();
    const targetEnd = new Date(target.end as string).getTime();

    for (const m of allMeetings) {
      if (m.id === targetEventId) continue;
      if (!m.attendees.some((a) => a.id === empId)) continue;
      const mStart = new Date(m.start as string).getTime();
      const mEnd = new Date(m.end as string).getTime();
      if (mStart < targetEnd && mEnd > targetStart) return m;
    }
    return null;
  }, []);

  const handleAssign = useCallback((eventId: string, employee: Employee) => {
    setMeetings((prev) => prev.map((m) => (m.id === eventId ? { ...m, attendees: [...m.attendees, employee] } : m)));
  }, []);

  const handleRemove = useCallback((eventId: string, employee: Employee, eventTitle: string) => {
    setMeetings((prev) => prev.map((m) => (m.id === eventId ? { ...m, attendees: m.attendees.filter((a) => a.id !== employee.id) } : m)));
    setSnackbarMessage(`${employee.name} removed from ${eventTitle}`);
    setUndoData({ eventId, employee });
    setIsSnackbarOpen(true);
  }, []);

  const showToast = useCallback((message: string, color: 'success' | 'danger') => {
    setToastMessage(message);
    setToastColor(color);
    setIsToastOpen(true);
  }, []);

  const handleDragStart = useCallback(() => {
    const onMove = () => {
      setIsExternalDragging(true);
      document.removeEventListener('pointermove', onMove);
    };
    const onUp = () => {
      setIsExternalDragging(false);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
    };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  }, []);

  const snackbarButton = useMemo(
    () => ({
      text: 'Undo',
      action: () => {
        if (!undoData) return;
        setMeetings((prev) => prev.map((m) => (m.id === undoData.eventId ? { ...m, attendees: [...m.attendees, undoData.employee] } : m)));
        showToast('Assignment restored', 'success');
      },
    }),
    [undoData, showToast],
  );

  const renderEvent = useCallback(
    (data: MbscCalendarEventData) => (
      <MeetingEvent data={data} findConflict={findConflict} onAssign={handleAssign} onRemove={handleRemove} onToast={showToast} />
    ),
    [findConflict, handleAssign, handleRemove, showToast],
  );

  const handleToastClose = useCallback(() => {
    setIsToastOpen(false);
  }, []);

  const handleSnackbarClose = useCallback(() => {
    setIsSnackbarOpen(false);
  }, []);

  return (
    <Page className={`mds-drop-assignee-on-event-from-list${isExternalDragging ? ' mds-external-dragging' : ''}`}>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-3 mbsc-flex-col mds-sidebar">
            <div className="mbsc-form-group-title">Team Members</div>
            <div className="mds-employee-list mbsc-flex">
              {employees.map((emp) => (
                <EmployeeItem
                  key={emp.id}
                  emp={emp}
                  assignmentCount={meetings.filter((m) => m.attendees.some((a) => a.id === emp.id)).length}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
          </div>
          <div className="mbsc-col-sm-9 mds-calendar-wrapper">
            <Eventcalendar
              view={myView}
              data={meetings}
              resources={rooms}
              dragToCreate={false}
              dragToMove={false}
              dragToResize={false}
              clickToCreate={false}
              eventDelete={false}
              showEventTooltip={false}
              renderTimelineEvent={renderEvent}
            />
          </div>
        </div>
      </div>
      <Toast message={toastMessage} color={toastColor} isOpen={isToastOpen} onClose={handleToastClose} />
      <Snackbar message={snackbarMessage} isOpen={isSnackbarOpen} onClose={handleSnackbarClose} button={snackbarButton} />
    </Page>
  );
};

export default App;
