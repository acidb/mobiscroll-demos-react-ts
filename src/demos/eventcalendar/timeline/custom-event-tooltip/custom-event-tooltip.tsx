import {
  Button,
  Eventcalendar,
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  Popup,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useMemo, useRef, useState } from 'react';
import './custom-event-tooltip.css';

setOptions({
  // localeJs,
  // themeJs
});

const doctors: MbscResource[] = [
  {
    id: 1,
    name: 'Dr. Breanne Lorinda',
    color: '#b33d3d',
  },
  {
    id: 2,
    name: 'Dr. Ryan Melicent',
    color: '#309346',
  },
  {
    id: 3,
    name: 'Dr. Meredith Chantelle',
    color: '#c77c0a',
  },
];

const defaultAppointments: MbscCalendarEvent[] = [
  {
    title: 'Jude Chester',
    age: 69,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,8,45)',
    confirmed: false,
    reason: 'Headaches morning & afternoon',
    location: 'Topmed, Building A, Room 203',
    resource: 1,
  },
  {
    title: 'Leon Porter',
    age: 44,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,9,45)',
    confirmed: false,
    reason: 'Left abdominal pain',
    location: 'Topmed, Building D, Room 360',
    resource: 1,
  },
  {
    title: 'Merv Kenny',
    age: 56,
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,10,45)',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Topmed, Building D, Room 360',
    resource: 1,
  },
  {
    title: 'Derek Austyn',
    age: 72,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,13,45)',
    confirmed: false,
    reason: 'Nausea & weakness',
    location: 'Rose Medical Center, Room 18',
    resource: 1,
  },
  {
    title: 'Jenifer Kalyn',
    age: 65,
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,14,45)',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Rose Medical Center, Room 18',
    resource: 1,
  },
  {
    title: 'Lily Racquel',
    age: 54,
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,10,45)',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Procare, Building C, Room 12',
    resource: 2,
  },
  {
    title: 'Mia Sawyer',
    age: 59,
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,45)',
    confirmed: true,
    reason: 'Difficulty sleeping & loss of appetite',
    location: 'Procare, Building C, Room 12',
    resource: 2,
  },
  {
    title: 'Fred Valdez',
    age: 62,
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,15,45)',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Procare, Building C, Room 40',
    resource: 2,
  },
  {
    title: 'Sylvia Cale',
    age: 41,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,8,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'MedStar, Building A, Room 1',
    resource: 3,
  },
  {
    title: 'Isadora Lyric',
    age: 30,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,9,45)',
    confirmed: false,
    reason: 'Constant tiredness & weakness',
    location: 'MedStar, Building A, Room 1',
    resource: 3,
  },
  {
    title: 'Jon Candace',
    age: 63,
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,12,45)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'MedStar, Building A, Room 1',
    resource: 3,
  },
  {
    title: 'Layton Drake',
    age: 57,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,13,45)',
    confirmed: true,
    reason: 'Headaches & loss of appetite',
    location: 'Vitalife, Room 160',
    resource: 3,
  },
  {
    title: 'Florence Amy',
    age: 73,
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,14,45)',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitalife, Room 160',
    resource: 3,
  },
  {
    title: 'Willis Kane',
    age: 44,
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,8,45)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Care Cente, Room 320r',
    resource: 1,
  },
  {
    title: 'Theo Calanthia',
    age: 60,
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,9,45)',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 320',
    resource: 1,
  },
  {
    title: 'Ford Kaiden',
    age: 53,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,14,45)',
    confirmed: true,
    reason: 'Nausea & vomiting',
    location: 'Care Center, Room 206',
    resource: 1,
  },
  {
    title: 'Jewell Ryder',
    age: 75,
    start: 'dyndatetime(y,m,d+1,15)',
    end: 'dyndatetime(y,m,d+1,15,45)',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Care Center, Room 206',
    resource: 1,
  },
  {
    title: 'Antonia Cindra',
    age: 48,
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,12,45)',
    confirmed: true,
    reason: 'Dry, persistent cough',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3,
  },
  {
    title: 'Gerry Irma',
    age: 50,
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,13,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3,
  },
  {
    title: 'Carlyn Dorothy',
    age: 36,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,14,45)',
    confirmed: true,
    reason: 'Tiredness & muscle pain',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3,
  },
  {
    title: 'Alma Potter',
    age: 74,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Vitacure, Building D, Room 2',
    resource: 1,
  },
  {
    title: 'Debra Aguilar',
    age: 47,
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Vitacure, Building D, Room 2',
    resource: 1,
  },
  {
    title: 'Tommie Love',
    age: 42,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitacure, Building D, Room 2',
    resource: 1,
  },
  {
    title: 'Marjorie White',
    age: 55,
    start: 'dyndatetime(y,m,d-1,13)',
    end: 'dyndatetime(y,m,d-1,13,45)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Vitacure, Building D, Room 2',
    resource: 1,
  },
  {
    title: 'Brandon Perkins',
    age: 68,
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,14,45)',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building D, Room 2',
    resource: 1,
  },
  {
    title: 'Lora Wilson',
    age: 66,
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,15,45)',
    confirmed: false,
    reason: 'Fever & headache',
    location: 'Vitacure, Building D, Room 2',
    resource: 1,
  },
  {
    title: 'Ismael Bates',
    age: 58,
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,8,45)',
    confirmed: false,
    reason: 'Tiredness & muscle pain',
    location: 'Care Center, Room 300',
    resource: 2,
  },
  {
    title: 'Archie Wilkins',
    age: 69,
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,9,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Care Center, Room 300',
    resource: 2,
  },
  {
    title: 'Christie Baker',
    age: 71,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'Headaches morning & afternoon',
    location: 'Care Center, Room 300',
    resource: 2,
  },
  {
    title: 'Laura Shelton',
    age: 45,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: false,
    reason: 'Dry, persistent cough',
    location: 'Care Center, Room 300',
    resource: 2,
  },
  {
    title: 'Mary Hudson',
    age: 77,
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,9,45)',
    confirmed: true,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Room 45',
    resource: 3,
  },
  {
    title: 'Ralph Rice',
    age: 64,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'Left abdominal pain',
    location: 'Medica Zone, Room 45',
    resource: 3,
  },
  {
    title: 'Marc Hoffman',
    age: 53,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Medica Zone, Room 45',
    resource: 3,
  },
  {
    title: 'Arlene Lyons',
    age: 41,
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,14,45)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'Care Center, Room 202',
    resource: 3,
  },
  {
    title: 'Thelma Shaw',
    age: 26,
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,15,45)',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 202',
    resource: 3,
  },
  {
    title: 'Dory Edie',
    age: 45,
    start: 'dyndatetime(y,m,d-2,9)',
    end: 'dyndatetime(y,m,d-2,9,45)',
    confirmed: true,
    reason: 'Right abdominal pain',
    location: 'Vitacure, Building A, Room 203',
    resource: 2,
  },
  {
    title: 'Kaylin Toni',
    age: 68,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,10,45)',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Vitacure, Building A, Room 203',
    resource: 2,
  },
  {
    title: 'Gray Kestrel',
    age: 60,
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,12,45)',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Vitacure, Building A, Room 203',
    resource: 2,
  },
  {
    title: 'Reg Izabelle',
    age: 41,
    start: 'dyndatetime(y,m,d-2,14)',
    end: 'dyndatetime(y,m,d-2,14,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Medica Zone, Room 13',
    resource: 2,
  },
  {
    title: 'Lou Andie',
    age: 76,
    start: 'dyndatetime(y,m,d-2,15)',
    end: 'dyndatetime(y,m,d-2,15,45)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Medica Zone, Room 13',
    resource: 2,
  },
  {
    title: 'Yancy Dustin',
    age: 52,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,10,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Vitacure, Building E, Room 50',
    resource: 3,
  },
  {
    title: 'Terry Clark',
    age: 78,
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,45)',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building E, Room 50',
    resource: 3,
  },
];

function App() {
  const [appointments, setAppointments] = useState<MbscCalendarEvent[]>(defaultAppointments);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [anchor, setAnchor] = useState();
  const [currentEvent, setCurrentEvent] = useState<MbscCalendarEvent | null>(null);
  const [info, setInfo] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('');
  const [buttonType, setButtonType] = useState<
    'info' | 'warning' | 'success' | 'light' | 'dark' | 'primary' | 'secondary' | 'danger' | undefined
  >();
  const [bgColor, setBgColor] = useState<string>('');
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const [toastText, setToastText] = useState<string>('');
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'day',
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '16:00',
        allDay: false,
      },
    }),
    [],
  );

  const handleEventHoverIn = useCallback((args: MbscCalendarEvent) => {
    const event = args.event;
    const resource: MbscResource = doctors.find((dr) => dr.id === event.resource)!;
    const time = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));

    setCurrentEvent(event);

    if (event.confirmed) {
      setStatus('Confirmed');
      setButtonText('Cancel appointment');
      setButtonType('warning');
    } else {
      setStatus('Canceled');
      setButtonText('Confirm appointment');
      setButtonType('success');
    }

    setBgColor(resource.color!);
    setInfo(event.title + ', Age: ' + event.age);
    setTime(time);
    setReason(event.reason);
    setLocation(event.location);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setAnchor(args.domEvent.target);
    setOpen(true);
  }, []);

  const handleEventHoverOut = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  }, []);

  const handleEventClick = useCallback(() => {
    setOpen(true);
  }, []);

  const onMouseEnter = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const showToast = useCallback((message: string) => {
    setToastText(message);
    setToastOpen(true);
  }, []);
  const setStatusButton = useCallback(() => {
    setOpen(false);
    const index = appointments.findIndex((item: MbscCalendarEvent) => item.id === currentEvent!.id);
    const newApp = [...appointments];
    newApp[index].confirmed = !appointments[index].confirmed;
    setAppointments(newApp);
    showToast('Appointment ' + (currentEvent!.confirmed ? 'confirmed' : 'canceled'));
  }, [appointments, currentEvent, showToast]);

  const viewFile = useCallback(() => {
    setOpen(false);
    showToast('View file');
  }, [showToast]);

  const deleteApp = useCallback(() => {
    setAppointments(appointments.filter((item: MbscCalendarEvent) => item.id !== currentEvent!.id));
    setOpen(false);
    showToast('Appointment deleted');
  }, [appointments, currentEvent, showToast]);

  return (
    <div>
      <Eventcalendar
        view={myView}
        resources={doctors}
        data={appointments}
        clickToCreate={false}
        dragToCreate={false}
        showEventTooltip={false}
        onEventHoverIn={handleEventHoverIn}
        onEventHoverOut={handleEventHoverOut}
        onEventClick={handleEventClick}
      />
      <Popup
        display="anchored"
        isOpen={isOpen}
        anchor={anchor}
        touchUi={false}
        showOverlay={false}
        contentPadding={false}
        closeOnOverlayClick={false}
        width={350}
        cssClass="md-tooltip"
      >
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div className="md-tooltip-header" style={{ backgroundColor: bgColor }}>
            <span className="md-tooltip-name-age">{info}</span>
            <span className="md-tooltip-time">{time}</span>
          </div>
          <div className="md-tooltip-info">
            <div className="md-tooltip-title">
              Status: <span className="md-tooltip-status md-tooltip-text">{status}</span>
              <Button color={buttonType} variant="outline" className="md-tooltip-status-button" onClick={setStatusButton}>
                {buttonText}
              </Button>
            </div>
            <div className="md-tooltip-title">
              Reason for visit: <span className="md-tooltip-reason md-tooltip-text">{reason}</span>
            </div>
            <div className="md-tooltip-title">
              Location: <span className="md-tooltip-location md-tooltip-text">{location}</span>
            </div>
            <Button color="secondary" className="md-tooltip-view-button" onClick={viewFile}>
              View patient file
            </Button>
            <Button color="danger" variant="outline" className="md-tooltip-delete-button" onClick={deleteApp}>
              Delete appointment
            </Button>
          </div>
        </div>
      </Popup>
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
}
export default App;
