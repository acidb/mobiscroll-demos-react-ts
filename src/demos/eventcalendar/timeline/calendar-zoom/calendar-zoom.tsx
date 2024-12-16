import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [zoomLevel, setZoomLevel] = useState(9);

  const calRef = useRef<Eventcalendar>(null);

  const myResources = useMemo<MbscResource[]>(
    () => [
      { id: 1, name: 'Resource A', color: '#e20000' },
      { id: 2, name: 'Resource B', color: '#76e083' },
      { id: 3, name: 'Resource C', color: '#4981d6' },
      { id: 4, name: 'Resource D', color: '#e25dd2' },
      { id: 5, name: 'Resource E', color: '#1dab2f' },
      { id: 6, name: 'Resource F', color: '#d6d145' },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        zoomLevels: {
          1: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'small' },
          2: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'xlarge' },
          3: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'small' },
          4: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'xlarge' },
          5: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'medium' },
          6: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'xxxlarge' },
          7: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'medium' },
          8: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'xxxlarge' },
          9: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'small' },
          10: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
          11: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 720, timeLabelStep: 720 },
          12: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 360, timeLabelStep: 360 },
          13: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 180, timeLabelStep: 180 },
          14: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
          15: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'medium' },
          16: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'xxxlarge' },
          17: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 15, timeLabelStep: 15, columnWidth: 'xxxlarge' },
          18: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 5, timeLabelStep: 5, columnWidth: 'large' },
        },
      },
    }),
    [],
  );

  const refDate = useMemo(() => {
    const viewDate = calRef.current ? calRef.current.getViewDate() : new Date();
    if (zoomLevel < 11) {
      return new Date(viewDate.getFullYear() - 12, 0, 1);
    }
    if (zoomLevel < 15) {
      return new Date(viewDate.getFullYear() - 1, 0, 1);
    }
    return new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
  }, [zoomLevel]);

  const zoomIn = useCallback(() => {
    setZoomLevel((prevZoom) => prevZoom + 1);
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel((prevZoom) => prevZoom - 1);
  }, []);

  const handleSliderChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setZoomLevel(+ev.target!.value);
  }, []);

  const myHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
          <Button onClick={zoomOut} disabled={zoomLevel === 1} icon="minus" variant="flat" />
          <input type="range" value={zoomLevel} min="1" max="18" onChange={handleSliderChange} />
          <Button onClick={zoomIn} disabled={zoomLevel === 18} icon="plus" variant="flat" />
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [handleSliderChange, zoomIn, zoomOut, zoomLevel],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      data={myEvents}
      ref={calRef}
      refDate={refDate}
      resources={myResources}
      view={myView}
      zoomLevel={zoomLevel}
      renderHeader={myHeader}
    />
  );
};

export default App;
