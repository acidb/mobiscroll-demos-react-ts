import {
  Draggable,
  Dropcontainer,
  Eventcalendar,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscItemDragEvent,
  Page,
  setOptions,
  Snackbar,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, RefObject, useCallback, useMemo, useRef, useState } from 'react';
import { dyndatetime } from '../../../../dyndatetime';
import './drop-assignee-on-event-from-list.css';

setOptions({
  // localeJs,
  // themeJs
});

interface Attendee {
  id: string;
  name: string;
  avatar: string;
  color: string;
}

interface Meeting extends MbscCalendarEvent {
  attendees: Attendee[];
}

const rooms = [
  { id: 1, name: 'Conference Room' },
  { id: 2, name: 'Board Room' },
  { id: 3, name: 'Meeting Room' },
  { id: 4, name: 'Training Room' },
];

const employees: Attendee[] = [
  { id: 'emp1', name: 'Alice Martin', avatar: 'AM', color: '#e74c3c' },
  { id: 'emp2', name: 'Bob Johnson', avatar: 'BJ', color: '#3498db' },
  { id: 'emp3', name: 'Carol Smith', avatar: 'CS', color: '#2ecc71' },
  { id: 'emp4', name: 'David Lee', avatar: 'DL', color: '#f39c12' },
  { id: 'emp5', name: 'Eva Chen', avatar: 'EC', color: '#9b59b6' },
  { id: 'emp6', name: 'Frank Diaz', avatar: 'FD', color: '#1abc9c' },
  { id: 'emp7', name: 'Grace Kim', avatar: 'GK', color: '#e67e22' },
  { id: 'emp8', name: 'Henry Patel', avatar: 'HP', color: '#34495e' },
  { id: 'emp9', name: 'Ivy Torres', avatar: 'IT', color: '#e84393' },
];

const initialMeetings: Meeting[] = [
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
];

interface EmployeeItemProps {
  employee: Attendee;
  count: number;
  onPointerDown: () => void;
}

function EmployeeItem({ employee, count, onPointerDown }: EmployeeItemProps) {
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setEl} className="mds-employee-item mbsc-flex" id={'mds-emp-' + employee.id} onPointerDown={onPointerDown}>
      <div className="mds-employee-avatar mbsc-flex" style={{ background: employee.color }}>
        {employee.avatar}
      </div>
      <div className="mds-employee-info mbsc-flex">
        <div className="mds-employee-name">{employee.name}</div>
        <div className="mds-employee-count">{count > 0 ? count + ' meeting' + (count > 1 ? 's' : '') : 'No assignments'}</div>
      </div>
      <Draggable element={el} dragData={employee} />
    </div>
  );
}

interface SchedulerEventProps {
  data: MbscCalendarEventData;
  meetingsRef: RefObject<Meeting[]>;
  onDrop: (e: MbscItemDragEvent, eventId: string) => void;
  onFindConflict: (empId: string, targetEventId: string) => Meeting | null;
  onRemoveAttendee: (eventId: string, empId: string) => void;
}

function SchedulerEvent({ data, meetingsRef, onDrop, onFindConflict, onRemoveAttendee }: SchedulerEventProps) {
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const [dropClass, setDropClass] = useState('');
  const event = data.original as Meeting;
  const attendees: Attendee[] = event.attendees || [];

  const handleDrop = useCallback(
    (e: MbscItemDragEvent) => {
      setDropClass('');
      onDrop(e, event.id as string);
    },
    [onDrop, event.id],
  );

  const handleDragEnter = useCallback(
    (e: MbscItemDragEvent) => {
      const emp = e.data as Attendee;
      const meeting = meetingsRef.current.find((m) => m.id === event.id);
      if (!meeting) {
        setDropClass('mds-drop-active');
        return;
      }
      if (emp) {
        if (meeting.attendees.some((a) => a.id === emp.id) || onFindConflict(emp.id, event.id as string)) {
          setDropClass('mds-drop-conflict');
        } else {
          setDropClass('mds-drop-active');
        }
      } else {
        setDropClass('mds-drop-active');
      }
    },
    [event.id, meetingsRef, onFindConflict],
  );

  const handleDragLeave = useCallback(() => {
    setDropClass('');
  }, []);

  return (
    <div ref={setContainerEl} className={'mds-custom-event mbsc-flex ' + dropClass} style={{ borderLeft: '4px solid ' + event.color }}>
      <Dropcontainer element={containerEl} onItemDrop={handleDrop} onItemDragEnter={handleDragEnter} onItemDragLeave={handleDragLeave}>
        <div className="mds-event-header mbsc-flex">
          <div className="mds-event-title">{event.title as string}</div>
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
                title={att.name + ' (click to remove)'}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveAttendee(event.id as string, att.id);
                }}
              >
                {att.avatar}
                <span className="mds-attendee-remove">&times;</span>
              </span>
            ))}
          </div>
        )}
        <div className="mds-event-drop-hint">Drop people to assign</div>
      </Dropcontainer>
    </div>
  );
}

const App: FC = () => {
  const meetingsRef = useRef<Meeting[]>(initialMeetings);
  const [myEvents, setMyEvents] = useState<Meeting[]>(initialMeetings);
  const [isExternalDragging, setIsExternalDragging] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');
  const [isToastOpen, setIsToastOpen] = useState(false);

  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarButton, setSnackbarButton] = useState<{ text: string; action: () => void } | undefined>(undefined);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      scheduler: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '18:00',
        timeCellStep: 30,
        timeLabelStep: 30,
        virtualScroll: false,
      },
    }),
    [],
  );

  const getAssignmentCount = useCallback(
    (empId: string): number => myEvents.filter((m) => m.attendees.some((a) => a.id === empId)).length,
    [myEvents],
  );

  const findConflict = useCallback((empId: string, targetEventId: string): Meeting | null => {
    const target = meetingsRef.current.find((m) => m.id === targetEventId);
    if (!target) return null;
    const tStart = new Date(target.start as string).getTime();
    const tEnd = new Date(target.end as string).getTime();
    for (const m of meetingsRef.current) {
      if (m.id === targetEventId || !m.attendees.some((a) => a.id === empId)) continue;
      const mStart = new Date(m.start as string).getTime();
      const mEnd = new Date(m.end as string).getTime();
      if (mStart < tEnd && mEnd > tStart) return m;
    }
    return null;
  }, []);

  const handleDrop = useCallback(
    (dropEvent: MbscItemDragEvent, eventId: string) => {
      const employee = dropEvent.data as Attendee;
      const meetingIdx = meetingsRef.current.findIndex((m) => m.id === eventId);
      if (meetingIdx === -1) return;
      const meeting = meetingsRef.current[meetingIdx];

      if (meeting.attendees.some((a) => a.id === employee.id)) {
        setToastMessage(employee.name + ' is already assigned');
        setToastColor('danger');
        setIsToastOpen(true);
        return;
      }

      const conflict = findConflict(employee.id, eventId);
      if (conflict) {
        setToastMessage(employee.name + ' already has a ' + conflict.title + ' on this timeslot');
        setToastColor('danger');
        setIsToastOpen(true);
        return;
      }

      const updatedMeeting: Meeting = {
        ...meeting,
        attendees: [...meeting.attendees, { id: employee.id, name: employee.name, avatar: employee.avatar, color: employee.color }],
      };
      meetingsRef.current = [...meetingsRef.current.slice(0, meetingIdx), updatedMeeting, ...meetingsRef.current.slice(meetingIdx + 1)];
      setMyEvents(meetingsRef.current);

      setToastMessage(employee.name + ' assigned to ' + (meeting.title as string));
      setToastColor('success');
      setIsToastOpen(true);
    },
    [findConflict],
  );

  const handleRemoveAttendee = useCallback((eventId: string, empId: string) => {
    const meetingIdx = meetingsRef.current.findIndex((m) => m.id === eventId);
    if (meetingIdx === -1) return;
    const meeting = meetingsRef.current[meetingIdx];
    const idx = meeting.attendees.findIndex((a) => a.id === empId);
    if (idx === -1) return;

    const removedAtt = meeting.attendees[idx];
    const updatedMeeting: Meeting = {
      ...meeting,
      attendees: [...meeting.attendees.slice(0, idx), ...meeting.attendees.slice(idx + 1)],
    };
    meetingsRef.current = [...meetingsRef.current.slice(0, meetingIdx), updatedMeeting, ...meetingsRef.current.slice(meetingIdx + 1)];
    setMyEvents(meetingsRef.current);

    setSnackbarMessage(removedAtt.name + ' removed from ' + (meeting.title as string));
    setSnackbarButton({
      text: 'Undo',
      action: () => {
        const mIdx = meetingsRef.current.findIndex((m) => m.id === eventId);
        if (mIdx === -1) return;
        const m = meetingsRef.current[mIdx];
        const restored: Meeting = { ...m, attendees: [...m.attendees.slice(0, idx), removedAtt, ...m.attendees.slice(idx)] };
        meetingsRef.current = [...meetingsRef.current.slice(0, mIdx), restored, ...meetingsRef.current.slice(mIdx + 1)];
        setMyEvents(meetingsRef.current);
        setIsSnackbarOpen(false);
        setToastMessage('Assignment restored');
        setToastColor('success');
        setIsToastOpen(true);
      },
    });
    setIsSnackbarOpen(true);
  }, []);

  const handleEmployeePointerDown = useCallback(() => {
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

  const renderSchedulerEvent = useCallback(
    (data: MbscCalendarEventData) => (
      <SchedulerEvent
        data={data}
        meetingsRef={meetingsRef}
        onDrop={handleDrop}
        onFindConflict={findConflict}
        onRemoveAttendee={handleRemoveAttendee}
      />
    ),
    [handleDrop, findConflict, handleRemoveAttendee],
  );

  return (
    <Page className={'mds-scheduler-drop-assignee-on-event-from-list' + (isExternalDragging ? ' mds-external-dragging' : '')}>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-3 mbsc-flex-col mds-sidebar">
            <div className="mbsc-form-group-title">Team Members</div>
            <div className="mds-employee-list mbsc-flex">
              {employees.map((emp) => (
                <EmployeeItem key={emp.id} employee={emp} count={getAssignmentCount(emp.id)} onPointerDown={handleEmployeePointerDown} />
              ))}
            </div>
          </div>
          <div className="mbsc-col-sm-9 mds-calendar-wrapper">
            <Eventcalendar
              view={myView}
              data={myEvents}
              resources={rooms}
              dragToCreate={false}
              dragToMove={false}
              dragToResize={false}
              clickToCreate={false}
              eventDelete={false}
              showEventTooltip={false}
              renderSchedulerEvent={renderSchedulerEvent}
            />
          </div>
        </div>
      </div>
      <Toast message={toastMessage} color={toastColor} isOpen={isToastOpen} onClose={() => setIsToastOpen(false)} />
      <Snackbar message={snackbarMessage} button={snackbarButton} isOpen={isSnackbarOpen} onClose={() => setIsSnackbarOpen(false)} />
    </Page>
  );
};

export default App;
