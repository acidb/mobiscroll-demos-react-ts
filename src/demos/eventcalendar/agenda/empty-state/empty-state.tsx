import { Button, Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

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

  const calView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week' },
      agenda: { type: 'week' },
    }),
    [],
  );

  const displayToast = useCallback(() => {
    setToastOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const customAgendaEmpty = useCallback(
    () => (
      <div className="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png" alt="Empty can" style={{ width: 150, margin: '50px 0' }} />
        <div className="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Looks like this can is empty</div>
        <Button color="primary" variant="outline" onClick={displayToast}>
          Add something to it
        </Button>
        <div className="mbsc-txt-xs" style={{ paddingTop: 150 }}>
          Illustration by &nbsp;<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>
          &nbsp;from&nbsp;<a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </div>
    ),
    [displayToast],
  );

  return (
    <>
      <Eventcalendar renderAgendaEmpty={customAgendaEmpty} view={calView} data={myEvents} />
      <Toast message="Add button clicked" isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
