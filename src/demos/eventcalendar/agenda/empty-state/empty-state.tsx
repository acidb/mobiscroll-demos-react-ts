import { Button, Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';
import './empty-state.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        title: 'Zumba Class',
        start: 'dyndatetime(y,m,d-7,17)',
        end: 'dyndatetime(y,m,d-7,19)',
      },
      {
        title: 'Silent Party',
        start: 'dyndatetime(y,m,d-7,21)',
        end: 'dyndatetime(y,m,d-7,23)',
      },
      {
        title: 'Garbage Collection',
        start: 'dyndatetime(y,m,d+7,15)',
        end: 'dyndatetime(y,m,d+7,17)',
      },
      {
        title: 'Karaoke Night',
        start: 'dyndatetime(y,m,d+7,20)',
        end: 'dyndatetime(y,m,d+7,22)',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week' },
      agenda: { type: 'week' },
    }),
    [],
  );

  const handleButtonClick = useCallback(() => {
    setToastOpen(true);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const customAgendaEmpty = useCallback(
    () => (
      <div className="mbsc-align-center mbsc-padding">
        <img className="mds-empty-img" src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png" alt="Empty can" />
        <div className="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Looks like this can is empty</div>
        <Button color="primary" variant="outline" onClick={handleButtonClick}>
          Add something to it
        </Button>
        <div className="mds-empty-txt mbsc-txt-xs">
          Illustration by &nbsp;<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>
          &nbsp;from&nbsp;<a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </div>
    ),
    [handleButtonClick],
  );

  return (
    <>
      <Eventcalendar renderAgendaEmpty={customAgendaEmpty} data={myEvents} view={myView} />
      <Toast message="Add button clicked" isOpen={isToastOpen} onClose={handleToastClose} />
    </>
  );
};
export default App;
