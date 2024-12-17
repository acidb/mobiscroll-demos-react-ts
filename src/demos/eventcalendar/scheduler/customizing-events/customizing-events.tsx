import {
  Button,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscCalendarEventData /* localeImport */,
  MbscEventcalendarOptions,
  MbscResponsiveOptions,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './customizing-events.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const resp: MbscResponsiveOptions<MbscEventcalendarOptions> = useMemo(
    () => ({
      xsmall: {
        view: {
          schedule: {
            type: 'day',
          },
        },
      },
      medium: {
        view: {
          schedule: {
            type: 'week',
          },
        },
      },
    }),
    [],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const getCategory = (id: number) => {
    switch (id) {
      case 1:
        return {
          name: 'Project X',
          color: '#ff825d',
        };
      case 2:
        return {
          name: 'Stakeholder Mtg.',
          color: '#bd75d0',
        };
      case 3:
        return {
          name: 'Status Update',
          color: '#7f9230',
        };
      case 4:
        return {
          name: 'Information Sharing',
          color: '#f14590',
        };
      case 5:
        return {
          name: 'Team Building',
          color: '#64cad4',
        };
      default:
        return {
          name: '',
          color: '',
        };
    }
  };

  const getParticipant = (id: number) => {
    switch (id) {
      case 1:
        return {
          name: 'Lisa',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        };
      case 2:
        return {
          name: 'Sharon',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        };
      case 3:
        return {
          name: 'Emily',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        };
      case 4:
        return {
          name: 'Rose',
          img: 'https://img.mobiscroll.com/demos/f4.png',
        };
      case 5:
        return {
          name: 'Matt',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        };
      case 6:
        return {
          name: 'Rick',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        };
      case 7:
        return {
          name: 'John',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        };
      case 8:
        return {
          name: 'Ethan',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        };
      default:
        return {
          name: '',
          img: '',
        };
    }
  };

  const edit = () => {
    setToastOpen(true);
  };

  const customScheduleEvent = useCallback((data: MbscCalendarEventData) => {
    const original = data.original!;
    const cat = getCategory(original.category);
    if (data.allDay) {
      return (
        <div style={{ background: cat.color }} className="md-custom-event-allday-title">
          {data.title}
        </div>
      );
    } else {
      return (
        <div className="md-custom-event-cont" style={{ borderLeft: '5px solid ' + cat.color, background: cat.color }}>
          <div className="md-custom-event-wrapper">
            <div style={{ background: cat.color }} className="md-custom-event-category">
              {cat.name}
            </div>
            <div className="md-custom-event-details">
              <div className="md-custom-event-title">{data.title}</div>
              <div className="md-custom-event-time">
                {data.start} - {data.end}
              </div>
              <Button className="md-custom-event-btn" color="dark" variant="outline" onClick={edit}>
                Edit
              </Button>
              <div className="md-cutom-event-img-cont">
                {original.participants.map((p: number) => (
                  <img key={p} className="md-custom-event-img" src={getParticipant(p).img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }, []);

  const myBeforeBuffer = useCallback((args: MbscCalendarEventData) => {
    const cat = getCategory(args.original!.category);

    return (
      <div className="md-schedule-buffer md-schedule-before-buffer">
        <div
          className="md-schedule-buffer-background"
          style={{ background: `repeating-linear-gradient(-45deg,#fcfffc,#fcfffc 10px,${cat.color} 10px,${cat.color} 20px)` }}
        ></div>
        <span className="md-buffer-text">Travel time </span>
        <span className="md-buffer-time">{args.original!.bufferBefore} minutes </span>
      </div>
    );
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/multi-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div>
      <Eventcalendar
        // drag
        renderScheduleEvent={customScheduleEvent}
        renderBufferBefore={myBeforeBuffer}
        responsive={resp}
        data={myEvents}
      />
      <Toast message="Edit clicked" isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
