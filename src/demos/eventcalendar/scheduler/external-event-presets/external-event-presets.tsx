import {
  Draggable,
  Eventcalendar,
  Input,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscSelectChangeEvent,
  Popup,
  Select,
  setOptions,
  Textarea,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';
import './external-event-presets.css';

setOptions({
  // localeJs,
  // themeJs
});

const tasks = [
  {
    title: 'Tire change',
    color: '#7a5886',
    start: '08:00',
    end: '08:30',
    length: '0.5 h',
  },
  {
    title: 'Brake maintenance',
    color: '#9da721',
    start: '08:00',
    end: '09:30',
    length: '1.5 h',
  },
  {
    title: 'Fluid maintenance',
    color: '#cd6957',
    start: '08:00',
    end: '10:00',
    length: '2 h',
  },
  {
    title: 'Oil change',
    color: '#637e57',
    start: '08:00',
    end: '10:00',
    length: '2 h',
  },
  {
    title: 'Electrical inspection',
    color: '#50789d',
    start: '08:00',
    end: '10:30',
    length: '2.5 h',
  },
  {
    title: 'Engine inspection',
    color: '#6c5d45',
    start: '08:00',
    end: '12:30',
    length: '4.5 h',
  },
];

const myData = [
  { value: '1', text: 'Roly Chester' },
  { value: '2', text: 'Tucker Wayne' },
  { value: '3', text: 'Baker Brielle' },
  { value: '4', text: 'Jami Walter' },
  { value: '5', text: 'Patrick Toby' },
  { value: '6', text: 'Tranter Logan' },
  { value: '7', text: 'Payton Sinclair' },
];

function Task(props: { data: { title: string; color: string; start: string; end: string; length: string } }) {
  const [draggable, setDraggable] = useState<HTMLDivElement>();

  const setDragElm = useCallback((elm: HTMLDivElement) => {
    setDraggable(elm);
  }, []);

  return (
    <div ref={setDragElm} style={{ background: props.data.color }} className="external-event-task">
      <div>{props.data.title}</div>
      <div>{props.data.length}</div>
      <Draggable dragData={props.data} element={draggable} />
    </div>
  );
}

const App: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [technician, setTechnician] = useState<string>('');
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();

  const view = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'week',
        allDay: false,
        startTime: '06:00',
        endTime: '20:00',
      },
    }),
    [],
  );

  const invalid = useMemo(
    () => [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
      {
        start: '12:00',
        end: '12:30',
        title: 'Lunch break',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
    ],
    [],
  );

  const fillDialog = useCallback((args: MbscEventCreatedEvent) => {
    setTitle(args.event.title!);
    setDetails(args.event.details);
    setTechnician(args.event.technician);
    setAnchor(args.target!);
    setOpen(true);
  }, []);

  const onEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      fillDialog(args);
    },
    [fillDialog],
  );

  const eventCreateFail = useCallback(() => {
    setToastText("Can't create event on this date");
    setToastOpen(true);
  }, []);

  const eventUpdateFail = useCallback(() => {
    setToastText("Can't add event on this date");
    setToastOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
    setToastText('New task added');
    setToastOpen(true);
  }, []);

  const changeSelected = useCallback((event: MbscSelectChangeEvent) => {
    setTechnician(event.value);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-9 external-event-calendar">
          <Eventcalendar
            view={view}
            invalid={invalid}
            dragToMove={true}
            externalDrop={true}
            onEventCreated={onEventCreated}
            onEventCreateFailed={eventCreateFail}
            onEventUpdateFailed={eventUpdateFail}
          />
        </div>
        <div className="mbsc-col-sm-3">
          <div className="mbsc-form-group-title">Available tasks</div>
          {tasks.map((task, i) => (
            <Task key={i} data={task} />
          ))}
        </div>
        <Popup
          display="anchored"
          width={400}
          contentPadding={false}
          touchUi={false}
          headerText="Assign task"
          buttons={['ok']}
          anchor={anchor}
          isOpen={isOpen}
          onClose={onClose}
        >
          <div className="mbsc-form-group">
            <Input label="Task" defaultValue={title} readOnly></Input>
            <Textarea label="Details" defaultValue={details} placeholder="Add description..."></Textarea>
            <Select
              data={myData}
              value={technician}
              onChange={changeSelected}
              display="anchored"
              touchUi={false}
              label="Technician"
              inputProps={{ placeholder: 'Please select...' }}
            />
          </div>
        </Popup>
      </div>
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
