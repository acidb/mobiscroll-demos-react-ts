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
import './custom-event-tooltip.css';

setOptions({
  // localeJs,
  // themeJs
});

const defaultAppointments: MbscCalendarEvent[] = [
  {
    title: 'Jude Chester',
    age: 69,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,8,45)',
    confirmed: false,
    reason: 'Headaches morning & afternoon',
    location: 'Topmed, Building A, Room 203',
    color: '#b33d3d',
  },
  {
    title: 'Leon Porter',
    age: 44,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,9,45)',
    confirmed: false,
    reason: 'Left abdominal pain',
    location: 'Topmed, Building D, Room 360',
    color: '#b33d3d',
  },
  {
    title: 'Merv Kenny',
    age: 56,
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,10,45)',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Topmed, Building D, Room 360',
    color: '#b33d3d',
  },
  {
    title: 'Derek Austyn',
    age: 72,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,13,45)',
    confirmed: false,
    reason: 'Nausea & weakness',
    location: 'Rose Medical Center, Room 18',
    color: '#b33d3d',
  },
  {
    title: 'Jenifer Kalyn',
    age: 65,
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,14,45)',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Rose Medical Center, Room 18',
    color: '#b33d3d',
  },
  {
    title: 'Lily Racquel',
    age: 54,
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,10,45)',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Procare, Building C, Room 12',
    color: '#309346',
  },
  {
    title: 'Mia Sawyer',
    age: 59,
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,45)',
    confirmed: true,
    reason: 'Difficulty sleeping & loss of appetite',
    location: 'Procare, Building C, Room 12',
    color: '#309346',
  },
  {
    title: 'Fred Valdez',
    age: 62,
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,15,45)',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Procare, Building C, Room 40',
    color: '#309346',
  },
  {
    title: 'Sylvia Cale',
    age: 41,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,8,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'MedStar, Building A, Room 1',
    color: '#c77c0a',
  },
  {
    title: 'Isadora Lyric',
    age: 30,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,9,45)',
    confirmed: false,
    reason: 'Constant tiredness & weakness',
    location: 'MedStar, Building A, Room 1',
    color: '#c77c0a',
  },
  {
    title: 'Jon Candace',
    age: 63,
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,12,45)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'MedStar, Building A, Room 1',
    color: '#c77c0a',
  },
  {
    title: 'Layton Drake',
    age: 57,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,13,45)',
    confirmed: true,
    reason: 'Headaches & loss of appetite',
    location: 'Vitalife, Room 160',
    color: '#c77c0a',
  },
  {
    title: 'Florence Amy',
    age: 73,
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,14,45)',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitalife, Room 160',
    color: '#c77c0a',
  },
  {
    title: 'Willis Kane',
    age: 44,
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,8,45)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Care Cente, Room 320r',
    color: '#b33d3d',
  },
  {
    title: 'Theo Calanthia',
    age: 60,
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,9,45)',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 320',
    color: '#b33d3d',
  },
  {
    title: 'Ford Kaiden',
    age: 53,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,14,45)',
    confirmed: true,
    reason: 'Nausea & vomiting',
    location: 'Care Center, Room 206',
    color: '#b33d3d',
  },
  {
    title: 'Jewell Ryder',
    age: 75,
    start: 'dyndatetime(y,m,d+1,15)',
    end: 'dyndatetime(y,m,d+1,15,45)',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Care Center, Room 206',
    color: '#b33d3d',
  },
  {
    title: 'Antonia Cindra',
    age: 48,
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,12,45)',
    confirmed: true,
    reason: 'Dry, persistent cough',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a',
  },
  {
    title: 'Gerry Irma',
    age: 50,
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,13,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a',
  },
  {
    title: 'Carlyn Dorothy',
    age: 36,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,14,45)',
    confirmed: true,
    reason: 'Tiredness & muscle pain',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a',
  },
  {
    title: 'Alma Potter',
    age: 74,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Debra Aguilar',
    age: 47,
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Tommie Love',
    age: 42,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Marjorie White',
    age: 55,
    start: 'dyndatetime(y,m,d-1,13)',
    end: 'dyndatetime(y,m,d-1,13,45)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Brandon Perkins',
    age: 68,
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,14,45)',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Lora Wilson',
    age: 66,
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,15,45)',
    confirmed: false,
    reason: 'Fever & headache',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d',
  },
  {
    title: 'Ismael Bates',
    age: 58,
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,8,45)',
    confirmed: false,
    reason: 'Tiredness & muscle pain',
    location: 'Care Center, Room 300',
    color: '#309346',
  },
  {
    title: 'Archie Wilkins',
    age: 69,
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,9,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Care Center, Room 300',
    color: '#309346',
  },
  {
    title: 'Christie Baker',
    age: 71,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'Headaches morning & afternoon',
    location: 'Care Center, Room 300',
    color: '#309346',
  },
  {
    title: 'Laura Shelton',
    age: 45,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: false,
    reason: 'Dry, persistent cough',
    location: 'Care Center, Room 300',
    color: '#309346',
  },
  {
    title: 'Mary Hudson',
    age: 77,
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,9,45)',
    confirmed: true,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Room 45',
    color: '#c77c0a',
  },
  {
    title: 'Ralph Rice',
    age: 64,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'Left abdominal pain',
    location: 'Medica Zone, Room 45',
    color: '#c77c0a',
  },
  {
    title: 'Marc Hoffman',
    age: 53,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Medica Zone, Room 45',
    color: '#c77c0a',
  },
  {
    title: 'Arlene Lyons',
    age: 41,
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,14,45)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'Care Center, Room 202',
    color: '#c77c0a',
  },
  {
    title: 'Thelma Shaw',
    age: 26,
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,15,45)',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 202',
    color: '#c77c0a',
  },
  {
    title: 'Dory Edie',
    age: 45,
    start: 'dyndatetime(y,m,d-2,9)',
    end: 'dyndatetime(y,m,d-2,9,45)',
    confirmed: true,
    reason: 'Right abdominal pain',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346',
  },
  {
    title: 'Kaylin Toni',
    age: 68,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,10,45)',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346',
  },
  {
    title: 'Gray Kestrel',
    age: 60,
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,12,45)',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346',
  },
  {
    title: 'Reg Izabelle',
    age: 41,
    start: 'dyndatetime(y,m,d-2,14)',
    end: 'dyndatetime(y,m,d-2,14,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Medica Zone, Room 13',
    color: '#309346',
  },
  {
    title: 'Lou Andie',
    age: 76,
    start: 'dyndatetime(y,m,d-2,15)',
    end: 'dyndatetime(y,m,d-2,15,45)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Medica Zone, Room 13',
    color: '#309346',
  },
  {
    title: 'Yancy Dustin',
    age: 52,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,10,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a',
  },
  {
    title: 'Terry Clark',
    age: 78,
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,45)',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a',
  },
];

function App() {
  const [appointments, setAppointments] = useState<MbscCalendarEvent[]>(defaultAppointments);
  const [appointment, setAppointment] = useState<MbscCalendarEvent>();
  const [appointmentInfo, setAppointmentInfo] = useState<string>('');
  const [appointmentLocation, setAppointmentLocation] = useState<string>('');
  const [appointmentReason, setAppointmentReason] = useState<string>('');
  const [appointmentStatus, setAppointmentStatus] = useState<string>('');
  const [appointmentTime, setAppointmentTime] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('');
  const [buttonType, setButtonType] = useState<'warning' | 'success' | undefined>();
  const [isTooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [tooltipAnchor, setTooltipAnchor] = useState();
  const [tooltipColor, setTooltipColor] = useState<string>('');

  const timer = useRef<ReturnType<typeof setTimeout>>();

  const myView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'week' } }), []);

  const openTooltip = useCallback((args: MbscEventClickEvent) => {
    const event: MbscCalendarEvent = args.event;
    const time = formatDate('hh:mm A', new Date(event.start! as string)) + ' - ' + formatDate('hh:mm A', new Date(event.end! as string));

    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }

    if (event.confirmed) {
      setAppointmentStatus('Confirmed');
      setButtonText('Cancel appointment');
      setButtonType('warning');
    } else {
      setAppointmentStatus('Canceled');
      setButtonText('Confirm appointment');
      setButtonType('success');
    }

    setAppointment(event);
    setAppointmentInfo(event.title + ', Age: ' + event.age);
    setAppointmentLocation(event.location);
    setAppointmentTime(time);
    setAppointmentReason(event.reason);
    setTooltipColor(event.color!);
    setTooltipAnchor(args.domEvent.target.closest('.mbsc-event'));
    setTooltipOpen(true);
  }, []);

  const handleEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      openTooltip(args);
    },
    [openTooltip],
  );

  const handleEventHoverIn = useCallback(
    (args: MbscEventClickEvent) => {
      openTooltip(args);
    },
    [openTooltip],
  );

  const handleEventHoverOut = useCallback(() => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        setTooltipOpen(false);
      }, 200);
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    timer.current = setTimeout(() => {
      setTooltipOpen(false);
    }, 200);
  }, []);

  const handleTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const updateAppointmentStatus = useCallback(() => {
    appointment!.confirmed = !appointment!.confirmed;
    setTooltipOpen(false);
    setToastMessage('Appointment ' + (appointment!.confirmed ? 'confirmed' : 'canceled'));
    setToastOpen(true);
  }, [appointment]);

  const viewAppointmentFile = useCallback(() => {
    setTooltipOpen(false);
    setToastMessage('View file');
    setToastOpen(true);
  }, []);

  const deleteAppointment = useCallback(() => {
    setAppointments(appointments.filter((item) => item.id !== appointment!.id));
    setTooltipOpen(false);
    setToastMessage('Appointment deleted');
    setToastOpen(true);
  }, [appointments, appointment]);

  return (
    <>
      <Eventcalendar
        data={appointments}
        showEventTooltip={false}
        view={myView}
        onEventClick={handleEventClick}
        onEventHoverIn={handleEventHoverIn}
        onEventHoverOut={handleEventHoverOut}
      />
      <Popup
        anchor={tooltipAnchor}
        contentPadding={false}
        display="anchored"
        isOpen={isTooltipOpen}
        scrollLock={false}
        showOverlay={false}
        touchUi={false}
        width={350}
        onClose={handleTooltipClose}
      >
        <div className="mds-tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mds-tooltip-header" style={{ backgroundColor: tooltipColor }}>
            <span>{appointmentInfo}</span>
            <span className="mbsc-pull-right">{appointmentTime}</span>
          </div>
          <div className="mbsc-padding">
            <div className="mds-tooltip-label mbsc-margin">
              Status: <span className="mbsc-light">{appointmentStatus}</span>
              <Button color={buttonType} variant="outline" className="mds-tooltip-button mbsc-pull-right" onClick={updateAppointmentStatus}>
                {buttonText}
              </Button>
            </div>
            <div className="mds-tooltip-label mbsc-margin">
              Reason for visit: <span className="mbsc-light">{appointmentReason}</span>
            </div>
            <div className="mds-tooltip-label mbsc-margin">
              Location: <span className="mbsc-light">{appointmentLocation}</span>
            </div>
            <Button color="secondary" className="mds-tooltip-button" onClick={viewAppointmentFile}>
              View patient file
            </Button>
            <Button color="danger" variant="outline" className="mds-tooltip-button mbsc-pull-right" onClick={deleteAppointment}>
              Delete appointment
            </Button>
          </div>
        </div>
      </Popup>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </>
  );
}

export default App;
