import {
  Button,
  Datepicker,
  Eventcalendar,
  Input,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDatepickerControl,
  MbscDateType,
  Page,
  Popup,
  Segmented,
  SegmentedGroup,
  setOptions,
  Switch,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [popupEventAllDay, setAllDay] = useState<boolean>(false);
  const [popupEventTitle, setTitle] = useState<string>('');
  const [popupEventDescription, setDescription] = useState<string>('');
  const [popupEventStatus, setStatus] = useState<boolean>(false);
  const [popupEventDate, setDate] = useState<MbscDateType[]>([]);
  const [start, startRef] = useState<Input | null>(null);
  const [end, endRef] = useState<Input | null>(null);
  const [mySelectedDate, setSelectedDate] = useState<MbscDateType>();

  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>();

  const controls = useMemo(() => (popupEventAllDay ? ['calendar'] : ['calendar', 'time']) as MbscDatepickerControl[], [popupEventAllDay]);

  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>([
    {
      id: 1,
      start: 'dyndatetime(y,m,8,13)',
      end: 'dyndatetime(y,m,8,13,45)',
      title: "Lunch @ Butcher's",
      description: '',
      allDay: false,
      bufferBefore: 15,
      free: true,
      color: '#009788',
    },
    {
      id: 2,
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,16)',
      title: 'Conference',
      description: '',
      allDay: false,
      bufferBefore: 30,
      free: false,
      color: '#ff9900',
    },
    {
      id: 3,
      start: 'dyndatetime(y,m,d-1,18)',
      end: 'dyndatetime(y,m,d-1,22)',
      title: 'Site Visit',
      description: '',
      allDay: false,
      bufferBefore: 60,
      free: true,
      color: '#3f51b5',
    },
    {
      id: 4,
      start: 'dyndatetime(y,m,d+1,10,30)',
      end: 'dyndatetime(y,m,d+1,11,30)',
      title: 'Stakeholder mtg.',
      description: '',
      allDay: false,
      free: false,
      color: '#f44437',
    },
  ]);

  const openPopup = useCallback(() => {
    setDate([new Date(), new Date()]);
    setTitle('New Event');
    setDescription('');
    setAllDay(false);
    setStatus(false);
    setPopupOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const dateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    setDate(args.value as Array<MbscDateType>);
  }, []);

  const allDayChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setAllDay(ev.target.checked);
  }, []);

  const titleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setTitle(ev.target.value);
  }, []);

  const descriptionChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setDescription(ev.target.value);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <Page class="mds-full-height">
      <div className="mds-full-height mbsc-flex-col">
        <div className="mbsc-button-group-block">
          <Button onClick={openPopup}>Add new event</Button>
        </div>

        <Popup
          width={400}
          contentPadding={false}
          headerText="Add new event"
          display="center"
          showOverlay={false}
          isOpen={isPopupOpen}
          buttons={[
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                const newEvent = {
                  title: popupEventTitle,
                  description: popupEventDescription,
                  allDay: popupEventAllDay,
                  status: popupEventStatus,
                  start: popupEventDate[0],
                  end: popupEventDate[1],
                };
                setMyEvents([...myEvents, newEvent]);
                setSelectedDate(newEvent.start);

                handleClose();
                setToastMessage('Event added');
                setToastOpen(true);
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ]}
          onClose={() => {
            handleClose();
          }}
        >
          <div id="demo-add-event-popup">
            <div className="mbsc-form-group">
              <Input label="Title" value={popupEventTitle} onChange={titleChange} />
              <Input label="Description" value={popupEventDescription} onChange={descriptionChange} />
            </div>
            <div className="mbsc-form-group">
              <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
              <Input ref={startRef} label="Starts" />
              <Input ref={endRef} label="Ends" />
              <Datepicker
                select="range"
                display="anchored"
                controls={controls}
                touchUi={true}
                startInput={start}
                endInput={end}
                showRangeLabels={false}
                onChange={dateChange}
                value={popupEventDate}
              />
            </div>
            <div className="mbsc-form-group">
              <SegmentedGroup>
                <Segmented value="busy" checked={true}>
                  Show as busy
                </Segmented>
                <Segmented value="free">Show as free</Segmented>
              </SegmentedGroup>
            </div>
          </div>
        </Popup>
        <Eventcalendar class="mbsc-flex-1-1" data={myEvents} selectedDate={mySelectedDate}></Eventcalendar>
        <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
      </div>
    </Page>
  );
}

export default App;
