import {
  Eventcalendar,
  MbscCalendarCellData,
  MbscCalendarEvent,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo } from 'react';
import './cell-content-template.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myEvents: MbscCalendarEvent[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Team Sync Meeting',
        start: 'dyndatetime(y, m, d - 1, 10, 15)',
        end: 'dyndatetime(y, m, d - 1, 11, 30)',
      },
      {
        id: 2,
        title: 'Apply Security Update',
        start: 'dyndatetime(y, m, d - 1, 15, 0)',
        end: 'dyndatetime(y, m, d - 1, 16, 0)',
      },
      {
        id: 3,
        title: 'Database Backup',
        start: 'dyndatetime(y, m, d - 2, 12, 0)',
        end: 'dyndatetime(y, m, d - 2, 13, 0)',
      },
      {
        id: 4,
        title: 'Project Kickoff & Coffee',
        start: 'dyndatetime(y, m, d - 2, 9, 0)',
        end: 'dyndatetime(y, m, d - 2, 10, 0)',
      },
      {
        id: 5,
        title: 'System Health Review',
        start: 'dyndatetime(y, m, d - 2, 8, 0)',
        end: 'dyndatetime(y, m, d - 2, 8, 45)',
      },
      {
        id: 6,
        title: 'Quarterly Health Audit',
        start: 'dyndatetime(y, m, d, 16, 0)',
        end: 'dyndatetime(y, m, d, 17, 0)',
      },
      {
        id: 7,
        title: 'Deployment Window',
        start: 'dyndatetime(y, m, d, 14, 0)',
        end: 'dyndatetime(y, m, d, 15, 0)',
      },
      {
        id: 8,
        title: 'Nightly Backup Prep',
        start: 'dyndatetime(y, m, d, 12, 0)',
        end: 'dyndatetime(y, m, d, 13, 0)',
      },
      {
        id: 9,
        title: 'Morning System Scan',
        start: 'dyndatetime(y, m, d, 8, 0)',
        end: 'dyndatetime(y, m, d, 8, 45)',
      },
      {
        id: 10,
        title: 'Sprint Review & Coffee',
        start: 'dyndatetime(y, m, d + 2, 9, 0)',
        end: 'dyndatetime(y, m, d + 2, 9, 45)',
      },
      {
        id: 11,
        title: 'Final Health Check',
        start: 'dyndatetime(y, m, d + 2, 16, 0)',
        end: 'dyndatetime(y, m, d + 2, 16, 45)',
      },
      {
        id: 12,
        title: 'Weekly Backup',
        start: 'dyndatetime(y, m, d + 2, 12, 0)',
        end: 'dyndatetime(y, m, d + 2, 12, 45)',
      },
      {
        id: 13,
        title: 'Morning Health Scan',
        start: 'dyndatetime(y, m, d + 1, 8, 15)',
        end: 'dyndatetime(y, m, d + 1, 9, 0)',
      },
      {
        id: 14,
        title: 'Afternoon Backup',
        start: 'dyndatetime(y, m, d + 1, 12, 15)',
        end: 'dyndatetime(y, m, d + 1, 13, 0)',
      },
    ],
    [],
  );

  const myView: MbscEventcalendarView = useMemo(
    () => ({
      schedule: { type: 'week', startTime: '08:00', endTime: '18:00', startDay: 1, endDay: 5 },
    }),
    [],
  );

  const renderCell = useCallback((cell: MbscCalendarCellData) => {
    const h = cell.date.getHours();
    const d = cell.date.getDay();
    const icons = [];

    (d === 1 || d === 5) &&
      h === 9 &&
      icons.push(
        { icon: 'material-people', title: d === 1 ? 'Launch Meeting' : 'Sprint Review' },
        { icon: 'material-message', title: 'Coffee Break' },
      );
    h === 13 && icons.push({ icon: 'bubbles', title: 'Lunch Time' });
    d >= 1 && d <= 5 && h === 17 && icons.push({ icon: 'clock', title: 'Wrap Up' });
    d === 2 && (h === 10 || h === 11) && icons.push({ icon: 'loop2', title: 'Dev Sync' });
    h % 4 === 0 && icons.push({ icon: 'cogs', title: 'Health Check' });
    h === 3 && icons.push({ icon: 'connection', title: 'Network Probe' });
    h === 12 && icons.push({ icon: 'upload', title: 'Backup' });
    h === 15 && icons.push({ icon: 'lock', title: 'Security Patch' });
    d === 3 && h === 14 && icons.push({ icon: 'line-paperplane', title: 'Deploy Window' });

    if (!icons.length) return null;

    return (
      <div className="mds-schedule-cell-icons-background">
        <div className="mds-schedule-cell-icons">
          {icons.map((i, idx) => (
            <div key={idx} className="mds-schedule-cell-icon" title={i.title}>
              <div className={'mbsc-font-icon mbsc-icon-' + i.icon} />
            </div>
          ))}
        </div>
      </div>
    );
  }, []);

  return (
    <>
      <Eventcalendar cssClass="mds-schedule-cell-template" data={myEvents} renderCell={renderCell} view={myView} />
    </>
  );
};

export default App;
