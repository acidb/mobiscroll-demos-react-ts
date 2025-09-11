import {
  Button,
  Eventcalendar,
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageChangeEvent,
  MbscPopupPositionEvent,
  MbscResource,
  MbscResourceHoverEvent,
  Popup,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import './display-resource-information-on-hover.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [resourceAvatar, setResourceAvatar] = useState<string>('');
  const [resourceName, setResourceName] = useState<string>('');
  const [resourceCost, setResourceCost] = useState<string>('');
  const [resourceDate, setResourceDate] = useState<string>('');
  const [resourceTotal, setResourceTotal] = useState<string>('');
  const [currentResource, setCurrentResource] = useState<MbscResource>();
  const [isTooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const hoveredResourceElmRef = useRef<HTMLElement>();
  const mySelectedDate = useRef(new Date());
  const calInst = useRef<Eventcalendar>(null);
  const popupInst = useRef<Popup>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout>>();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 'res1',
        name: 'Adam Miller',
        color: '#F39C12',
        profession: 'Mason',
        avatar: 'https://img.mobiscroll.com/demos/m1.png',
        cost: '15',
      },
      {
        id: 'res2',
        name: 'Emily Carter',
        color: '#76e083',
        profession: 'Electrician',
        avatar: 'https://img.mobiscroll.com/demos/f1.png',
        cost: '20',
      },
      {
        id: 'res3',
        name: 'James Brown',
        color: '#b13f49',
        profession: 'Carpenter',
        avatar: 'https://img.mobiscroll.com/demos/m2.png',
        cost: '18',
      },
      {
        id: 'res4',
        name: 'Daniel Wilson',
        color: '#e25dd2',
        profession: 'Welder',
        avatar: 'https://img.mobiscroll.com/demos/m3.png',
        cost: '22',
      },
      {
        id: 'res5',
        name: 'Benjamin Harris',
        color: '#7056ff',
        profession: 'Plumber',
        avatar: 'https://img.mobiscroll.com/demos/m4.png',
        cost: '20',
      },
      {
        id: 'res6',
        name: 'Olivia Anderson',
        color: '#56aaff',
        profession: 'Concrete Finisher',
        avatar: 'https://img.mobiscroll.com/demos/f2.png',
        cost: '15',
      },
      {
        id: 'res7',
        name: 'Emma Thompson',
        color: '#84852f',
        profession: 'Steelworker',
        avatar: 'https://img.mobiscroll.com/demos/f3.png',
        cost: '18',
      },
      {
        id: 'res8',
        name: 'Natalie Roberts',
        color: '#ff6e56',
        profession: 'Painter',
        avatar: 'https://img.mobiscroll.com/demos/f4.png',
        cost: '25',
      },
    ],
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d-1,12)',
        end: 'dyndatetime(y,m,d-1,15)',
        title: 'Repoint Brick Facade',
        resource: 'res1',
      },
      {
        start: 'dyndatetime(y,m,d-1,9)',
        end: 'dyndatetime(y,m,d-1,12)',
        title: 'Install Custom Wood Trim',
        resource: 'res3',
      },
      {
        start: 'dyndatetime(y,m,d-1,14)',
        end: 'dyndatetime(y,m,d-1,18)',
        title: 'Repair Steel Stair Treads',
        resource: 'res4',
      },
      {
        start: 'dyndatetime(y,m,d-1,10)',
        end: 'dyndatetime(y,m,d-1,13)',
        title: 'Pour and Finish Driveway Slab',
        resource: 'res6',
      },
      {
        start: 'dyndatetime(y,m,d-1,11)',
        end: 'dyndatetime(y,m,d-1,16)',
        title: 'Paint Interior Drywall',
        resource: 'res8',
      },
      {
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,11)',
        title: 'Block Wall Construction',
        resource: 'res1',
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,16)',
        title: 'Task 2',
        resource: 'Paver Installation',
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Install ceiling fan',
        resource: 'res2',
      },
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Roof Beam Replacement',
        resource: 'res3',
      },
      {
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Custom Metalworks Creation',
        resource: 'res4',
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Pipe Welding',
        resource: 'res4',
      },
      {
        start: 'dyndatetime(y,m,10,8)',
        end: 'dyndatetime(y,m,11,20)',
        title: 'Leak Detection & Repair',
        resource: 'res5',
      },
      {
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Faucet & Sink Fitting',
        resource: 'res5',
      },
      {
        start: 'dyndatetime(y,m,d,18)',
        end: 'dyndatetime(y,m,d,20)',
        title: 'Drainage System Setup',
        resource: 'res5',
      },
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Surface Polishing',
        resource: 'res6',
      },
      {
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,10)',
        title: 'Structural Steel Inspections',
        resource: 'res7',
      },
      {
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,16)',
        title: 'Metal Structure Assembly',
        resource: 'res7',
      },
      {
        start: 'dyndatetime(y,m,d,17)',
        end: 'dyndatetime(y,m,d,19)',
        title: 'Heavy Steel Beam Placement',
        resource: 'res7',
      },
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Exterior House Painting',
        resource: 'res8',
      },
      {
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Deck Staining & Sealing',
        resource: 'res8',
      },
      {
        start: 'dyndatetime(y,m,d+1,12)',
        end: 'dyndatetime(y,m,d+1,15)',
        title: 'Troubleshoot Faulty Breaker',
        resource: 'res2',
      },
      {
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,13)',
        title: 'Frame Interior Partitions',
        resource: 'res3',
      },
      {
        start: 'dyndatetime(y,m,d+1,16)',
        end: 'dyndatetime(y,m,d+1,20)',
        title: 'Weld Structural Beam Connections',
        resource: 'res4',
      },
      {
        start: 'dyndatetime(y,m,d+1,12)',
        end: 'dyndatetime(y,m,d+1,16)',
        title: 'Apply Smooth Trowel Finish to Basement Floor',
        resource: 'res6',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'day',
        startTime: '07:00',
        endTime: '22:00',
      },
    }),
    [],
  );

  const getTotalHoursForResource = useCallback(
    (resourceId: string | number) =>
      calInst
        .current!.getEvents()
        .filter((e: MbscCalendarEvent) => e.resource === resourceId)
        .reduce((sum: number, e: MbscCalendarEvent) => {
          const start = new Date(e.start as Date);
          const end = new Date(e.end as Date);
          const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
          return sum + hours;
        }, 0),
    [],
  );

  // Handles both Mobiscroll hover and native mouse events
  const openTooltip = useCallback(
    (resource: MbscResource, target: HTMLElement) => {
      clearTimeout(closeTimer.current!);
      clearTimeout(openTimer.current!);

      openTimer.current = setTimeout(() => {
        const totalHours = getTotalHoursForResource(resource.id);

        setCurrentResource(resource);
        hoveredResourceElmRef.current = target;

        setResourceAvatar(resource.avatar);
        setResourceName(resource.name!);
        setResourceCost('$' + resource.cost);
        setResourceDate(formatDate('D DDD MMM YYYY', mySelectedDate.current));
        setResourceTotal(totalHours + 'h, $' + totalHours * resource.cost);

        popupInst.current!.position();
        setTooltipOpen(true);

        openTimer.current = undefined;
      }, 100);
    },
    [mySelectedDate, getTotalHoursForResource],
  );

  const closeTooltip = useCallback(() => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(() => {
      setTooltipOpen(false);
      closeTimer.current = undefined;
    }, 200);
  }, []);

  // Mobiscroll resource hover events
  const handleResourceHoverIn = useCallback(
    (args: MbscResourceHoverEvent) => {
      openTooltip(args.resource, args.target);
    },
    [openTooltip],
  );

  const handleResourceHoverOut = useCallback(
    (args: MbscResourceHoverEvent) => {
      args.target.classList.remove('mds-resource-info-hover');
      closeTooltip();
    },
    [closeTooltip],
  );

  const handlePageChange = useCallback((args: MbscPageChangeEvent) => {
    mySelectedDate.current = args.firstDay;
  }, []);

  const handleTooltipPosition = useCallback((args: MbscPopupPositionEvent, inst: Popup) => {
    const popupElm = args.target.querySelector('.mbsc-popup') as HTMLElement;
    const rect = hoveredResourceElmRef.current!.getBoundingClientRect();

    popupElm.style.top = rect.top - 10 + 'px';

    if (inst.s.rtl) {
      popupElm.style.right = window.innerWidth - rect.left + 10 + 'px';
    } else {
      popupElm.style.left = rect.right + 10 + 'px';
    }
    return false; // Prevent default positioning
  }, []);

  // Native mouse events for the popup
  const handlePopupMouseEnter = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  const handlePopupMouseLeave = useCallback(() => {
    closeTooltip();
  }, [closeTooltip]);

  const customResource = useCallback(
    (res: MbscResource) => (
      <div className="mbsc-flex">
        <img className="mds-resource-info-avatar" src={res.avatar} alt="Avatar" />
        <div className="mds-resource-info-details">
          <div className="mds-resource-info-title">{res.name}</div>
          <div className="mds-resource-info-profession">{res.profession}</div>
        </div>
      </div>
    ),
    [],
  );

  const handlePay = () => {
    setTooltipOpen(false);
    setToastMessage(currentResource!.name + ' paid');
    setToastOpen(true);
  };

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        // drag
        ref={calInst}
        data={myEvents}
        resources={myResources}
        view={myView}
        renderResource={customResource}
        onResourceHoverIn={handleResourceHoverIn}
        onResourceHoverOut={handleResourceHoverOut}
        onPageChange={handlePageChange}
      />
      <Popup
        ref={popupInst}
        display="anchored"
        showOverlay={false}
        touchUi={false}
        width={280}
        isOpen={isTooltipOpen}
        onPosition={handleTooltipPosition}
        onClose={handleTooltipClose}
      >
        <div onMouseEnter={handlePopupMouseEnter} onMouseLeave={handlePopupMouseLeave}>
          <div className="mbsc-flex mbsc-align-items-center mds-resource-info-header">
            <img className="mds-resource-info-avatar" src={resourceAvatar} alt="Avatar" />
            <div className="mds-resource-info-name mbsc-flex-1-0">{resourceName}</div>
            <Button color="success" variant="outline" className="mds-resource-info-pay mbsc-button-xs" onClick={handlePay}>
              Pay
            </Button>
          </div>
          <div className="mds-resource-info-cont">
            <div>
              <span className="mbsc-txt-muted">Hourly rate </span>
              <span className="mds-resource-info-detail">{resourceCost}</span>
            </div>
            <div>
              <span className="mbsc-txt-muted">{resourceDate}</span>
              <span className="mds-resource-info-detail">{resourceTotal}</span>
            </div>
          </div>
        </div>
      </Popup>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </>
  );
};

export default App;
