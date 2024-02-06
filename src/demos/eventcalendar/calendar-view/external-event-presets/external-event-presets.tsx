import {
  Draggable,
  Eventcalendar,
  Input,
  MbscCalendarEvent,
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

const myTasks = [
  {
    title: 'Small wrap',
    color: '#637e57',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+1)',
    length: '2 days',
  },
  {
    title: 'Full-size wrap',
    color: '#50789d',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days',
  },
  {
    title: 'Mid-size wrap',
    color: '#6c5d45',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days',
  },
  {
    title: 'Roadster wrap',
    color: '#9da721',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days',
  },
  {
    title: 'SUV wrap',
    color: '#cd6957',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+3)',
    length: '4 days',
  },
  {
    title: 'Hypercar wrap',
    color: '#7a5886',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+4)',
    length: '5 days',
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

function Task(props: { data: MbscCalendarEvent }) {
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
  const [toastMessage, setToastMessage] = useState<string>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { labels: true },
    }),
    [],
  );

  const myInvalid = useMemo(
    () => [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
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

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      fillDialog(args);
    },
    [fillDialog],
  );

  const handleEventUpdateFailed = useCallback(() => {
    setToastMessage("Can't create event on this date");
    setToastOpen(true);
  }, []);

  const handlePopupClose = useCallback(() => {
    setOpen(false);
    setToastMessage('New task added');
    setToastOpen(true);
  }, []);

  const handleSelectChange = useCallback((event: MbscSelectChangeEvent) => {
    setTechnician(event.value);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-9 external-event-calendar">
          <Eventcalendar
            view={myView}
            invalid={myInvalid}
            dragToMove={true}
            externalDrop={true}
            onEventCreated={handleEventCreated}
            onEventCreateFailed={handleEventUpdateFailed}
            onEventUpdateFailed={handleEventUpdateFailed}
          />
        </div>
        <div className="mbsc-col-sm-3">
          <div className="mbsc-form-group-title">Available tasks</div>
          {myTasks.map((task, i) => (
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
          onClose={handlePopupClose}
        >
          <div className="mbsc-form-group">
            <Input label="Task" defaultValue={title} readOnly></Input>
            <Textarea label="Details" defaultValue={details} placeholder="Add description..."></Textarea>
            <Select
              data={myData}
              value={technician}
              onChange={handleSelectChange}
              display="anchored"
              touchUi={false}
              label="Technician"
              inputProps={{ placeholder: 'Please select...' }}
            />
          </div>
        </Popup>
      </div>
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleToastClose} />
    </div>
  );
};
export default App;
