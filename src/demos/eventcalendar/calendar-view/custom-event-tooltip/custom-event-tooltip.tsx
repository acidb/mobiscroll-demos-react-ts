import {
  Button,
  Eventcalendar,
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  Popup,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useMemo, useRef, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const defaultAppointments: MbscCalendarEvent[] = [
  {
    title: 'Jude Chester',
    age: 69,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9)',
    confirmed: false,
    reason: 'Headaches morning & afternoon',
    location: 'Topmed, Building A, Room 203',
    color: '#b33d3d',
  },
  {
    title: 'Leon Porter',
    age: 44,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,10)',
    confirmed: false,
    reason: 'Left abdominal pain',
    location: 'Topmed, Building D, Room 360',
    color: '#b33d3d',
  },
  {
    title: 'Lily Racquel',
    age: 54,
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,11)',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Procare, Building C, Room 12',
    color: '#309346',
  },
  {
    title: 'Mia Sawyer',
    age: 59,
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,12)',
    confirmed: true,
    reason: 'Difficulty sleeping & loss of appetite',
    location: 'Procare, Building C, Room 12',
    color: '#309346',
  },
  {
    title: 'Jon Candace',
    age: 63,
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,13)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'MedStar, Building A, Room 1',
    color: '#c77c0a',
  },
  {
    title: 'Layton Drake',
    age: 57,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,14)',
    confirmed: true,
    reason: 'Headaches & loss of appetite',
    location: 'Vitalife, Room 160',
    color: '#c77c0a',
  },
  {
    title: 'Willis Kane',
    age: 44,
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,9)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Care Cente, Room 320r',
    color: '#b33d3d',
  },
  {
    title: 'Theo Calanthia',
    age: 60,
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,10)',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 320',
    color: '#b33d3d',
  },
  {
    title: 'Ford Kaiden',
    age: 53,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,15)',
    confirmed: true,
    reason: 'Nausea & vomiting',
    location: 'Care Center, Room 206',
    color: '#b33d3d',
  },
  {
    title: 'Gerry Irma',
    age: 50,
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,14)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a',
  },
  {
    title: 'Carlyn Dorothy',
    age: 36,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,15)',
    confirmed: true,
    reason: 'Tiredness & muscle pain',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a',
  },
  {
    title: 'Alma Potter',
    age: 74,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,11)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Debra Aguilar',
    age: 47,
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,12)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Marjorie White',
    age: 55,
    start: 'dyndatetime(y,m,d-1,13)',
    end: 'dyndatetime(y,m,d-1,14)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Lora Wilson',
    age: 66,
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,16)',
    confirmed: false,
    reason: 'Fever & headache',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Christie Baker',
    age: 71,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,11)',
    confirmed: true,
    reason: 'Headaches morning & afternoon',
    location: 'Care Center, Room 300',
    color: '#309346',
  },
  {
    title: 'Arlene Lyons',
    age: 41,
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,15)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'Care Center, Room 202',
    color: '#c77c0a',
  },
  {
    title: 'Dory Edie',
    age: 45,
    start: 'dyndatetime(y,m,d-2,9)',
    end: 'dyndatetime(y,m,d-2,10)',
    confirmed: true,
    reason: 'Right abdominal pain',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346',
  },
  {
    title: 'Kaylin Toni',
    age: 68,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,11)',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346',
  },
  {
    title: 'Gray Kestrel',
    age: 60,
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,13)',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346',
  },
  {
    title: 'Lou Andie',
    age: 76,
    start: 'dyndatetime(y,m,d-2,15)',
    end: 'dyndatetime(y,m,d-2,16)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Medica Zone, Room 13',
    color: '#309346',
  },
  {
    title: 'Yancy Dustin',
    age: 52,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,11)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a',
  },
  {
    title: 'Terry Clark',
    age: 78,
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,12)',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a',
  },
];

function App() {
  const [appointments, setAppointments] = useState<MbscCalendarEvent[]>(defaultAppointments);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [anchor, setAnchor] = useState();
  const [currentEvent, setCurrentEvent] = useState<MbscCalendarEvent>();
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
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const timerRef = useRef<number>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        type: 'week',
      },
    }),
    [],
  );

  const handleEventHoverIn = useCallback((args: MbscEventClickEvent) => {
    const event = args.event;
    const time = formatDate('hh:mm A', new Date(event.start as string)) + ' - ' + formatDate('hh:mm A', new Date(event.end as string));

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

    setBgColor(event.color!);
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

  const handleMouseEnter = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const setStatusButton = useCallback(() => {
    setOpen(false);
    const index = appointments.findIndex((item) => item.id === currentEvent!.id);
    const newApp = [...appointments];
    newApp[index].confirmed = !appointments[index].confirmed;
    setAppointments(newApp);
    setToastMessage('Appointment ' + (currentEvent!.confirmed ? 'confirmed' : 'canceled'));
    setToastOpen(true);
  }, [appointments, currentEvent]);

  const viewFile = useCallback(() => {
    setOpen(false);
    setToastMessage('View file');
    setToastOpen(true);
  }, []);

  const deleteApp = useCallback(() => {
    setAppointments(appointments.filter((item) => item.id !== currentEvent!.id));
    setOpen(false);
    setToastMessage('Appointment deleted');
    setToastOpen(true);
  }, [appointments, currentEvent]);

  return (
    <div>
      <Eventcalendar
        view={myView}
        data={appointments}
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={true}
        dragToResize={false}
        showEventTooltip={false}
        height={260}
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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </div>
  );
}
export default App;
