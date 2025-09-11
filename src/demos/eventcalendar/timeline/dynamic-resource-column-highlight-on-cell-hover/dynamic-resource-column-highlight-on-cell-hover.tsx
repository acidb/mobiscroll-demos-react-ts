import {
  Eventcalendar,
  formatDate,
  MbscCalendarCellData,
  MbscCalendarDayData,
  MbscCalendarEvent,
  MbscCellHoverEvent,
  MbscEventcalendarView,
  MbscResource,
  Popup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';
import './dynamic-resource-column-highlight-on-cell-hover.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [hoverResource, setHoverResource] = useState<MbscResource | null>(null);
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'month',
        resolutionHorizontal: 'day',
      },
    }),
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      { start: 'dyndatetime(y,m,2)', end: 'dyndatetime(y,m,5)', title: 'Event 1', resource: 1 },
      { start: 'dyndatetime(y,m,10,9)', end: 'dyndatetime(y,m,15,15)', title: 'Event 2', resource: 3 },
      { start: 'dyndatetime(y,m,12)', end: 'dyndatetime(y,m,14)', title: 'Event 3', resource: 4 },
      { start: 'dyndatetime(y,m,15,7)', end: 'dyndatetime(y,m,20,12)', title: 'Event 4', resource: 5 },
      { start: 'dyndatetime(y,m,3)', end: 'dyndatetime(y,m,10)', title: 'Event 5', resource: 6 },
      { start: 'dyndatetime(y,m,10,8)', end: 'dyndatetime(y,m,11,20)', title: 'Event 6', resource: 7 },
      { start: 'dyndatetime(y,m,22)', end: 'dyndatetime(y,m,28)', title: 'Event 7', resource: 7 },
      { start: 'dyndatetime(y,m,8)', end: 'dyndatetime(y,m,13)', title: 'Event 8', resource: 15 },
      { start: 'dyndatetime(y,m,25)', end: 'dyndatetime(y,m,27)', title: 'Event 9', resource: 10 },
      { start: 'dyndatetime(y,m,20)', end: 'dyndatetime(y,m,23)', title: 'Event 10', resource: 12 },
    ],
    [],
  );

  const [myResources, setResources] = useState<MbscResource[]>([
    { id: 1, name: 'Resource A', color: '#e20000' },
    { id: 2, name: 'Resource B', color: '#76e083' },
    { id: 3, name: 'Resource C', color: '#4981d6' },
    { id: 4, name: 'Resource D', color: '#e25dd2' },
    { id: 5, name: 'Resource E', color: '#1dab2f' },
    { id: 6, name: 'Resource F', color: '#d6d145' },
    { id: 7, name: 'Resource G', color: '#34c8e0' },
    { id: 8, name: 'Resource H', color: '#9dde46' },
    { id: 9, name: 'Resource I', color: '#166f6f' },
    { id: 10, name: 'Resource J', color: '#f7961e' },
    { id: 11, name: 'Resource K', color: '#34c8e0' },
    { id: 12, name: 'Resource L', color: '#af0000' },
    { id: 13, name: 'Resource M', color: '#446f1c' },
    { id: 14, name: 'Resource N', color: '#073138' },
    { id: 15, name: 'Resource O', color: '#4caf00' },
  ]);

  const handleCellHoverIn = useCallback((args: MbscCellHoverEvent) => {
    setResources((prevResources) => {
      const updated = prevResources.map((r) => ({
        ...r,
        cssClass: r.id === args.resource.id ? 'mds-highlight-row-hover' : '',
      }));
      setHoverResource(updated.find((r) => r.id === args.resource.id) || null);
      return updated;
    });

    setHoverDate(args.date);
    setAnchor(args.domEvent.target as HTMLElement);
    setPopupOpen(true);
  }, []);

  const handleCellHoverOut = useCallback(() => {
    setHoverDate(null);
    setHoverResource(null);
    setResources((prevResources) => prevResources.map((r) => ({ ...r, cssClass: '' })));
    setPopupOpen(false);
  }, []);

  const renderCell = useCallback(
    (args: MbscCalendarCellData) => {
      const isHover = hoverDate && args.date.getTime() === hoverDate.getTime();
      return isHover ? <div className="mds-highlight-col-hover" /> : null;
    },
    [hoverDate],
  );

  const renderSidebar = useCallback((resource: MbscResource) => <div>{resource.name} Sidebar</div>, []);

  const renderDay = useCallback(
    (day: MbscCalendarDayData) => {
      const isHover = hoverDate && day.date.getTime() === hoverDate.getTime();
      const hoverClass = isHover ? ' mds-highlight-col-hover' : '';
      return <div className={'mds-highlight-day-content' + hoverClass}>{formatDate('D DDD', day.date)}</div>;
    },
    [hoverDate],
  );

  const renderDayFooter = useCallback(
    (day: MbscCalendarDayData) => {
      const isHover = hoverDate && day.date.getTime() === hoverDate.getTime();
      const hoverClass = isHover ? ' mds-highlight-col-hover' : '';
      return <div className={'mds-highlight-day-content' + hoverClass}>{formatDate('D DDD', day.date)}</div>;
    },
    [hoverDate],
  );

  return (
    <>
      <Eventcalendar
        cssClass="mds-highlight-hover"
        data={myEvents}
        resources={myResources}
        renderCell={renderCell}
        renderSidebar={renderSidebar}
        renderDay={renderDay}
        renderDayFooter={renderDayFooter}
        onCellHoverIn={handleCellHoverIn}
        onCellHoverOut={handleCellHoverOut}
        view={myView}
      />
      <Popup
        anchor={anchor}
        closeOnScroll={true}
        display="anchored"
        focusOnClose={false}
        isOpen={isPopupOpen}
        scrollLock={false}
        showOverlay={false}
      >
        {hoverResource && hoverDate && (
          <div className="mds-highlight-tooltip">
            <div className="mds-highlight-tooltip-name">{hoverResource.name}</div>
            <div className="mds-highlight-tooltip-date">{formatDate('MMM DD, YYYY', hoverDate)}</div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default App;
