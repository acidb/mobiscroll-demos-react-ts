import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';
import './hide-non-working-resources.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      // Dr. Alice Johnson
      { start: 'dyndatetime(y,m,d-7,10)', end: 'dyndatetime(y,m,d-7,12)', title: 'Consultation - John Doe', resource: 1 },
      { start: 'dyndatetime(y,m,d-6,9)', end: 'dyndatetime(y,m,d-6,10,30)', title: 'Checkup - Michael Brown', resource: 1 },
      { start: 'dyndatetime(y,m,d-6,15)', end: 'dyndatetime(y,m,d-6,17)', title: 'Consultation - Laura Wilson', resource: 1 },
      { start: 'dyndatetime(y,m,d-5,11)', end: 'dyndatetime(y,m,d-5,12,30)', title: 'Follow-up - Sarah Miller', resource: 1 },
      { start: 'dyndatetime(y,m,d-4,10)', end: 'dyndatetime(y,m,d-4,11)', title: 'Vaccination - Chris Davis', resource: 1 },
      { start: 'dyndatetime(y,m,d-3,13)', end: 'dyndatetime(y,m,d-3,15)', title: 'Consultation - Emily Taylor', resource: 1 },
      { start: 'dyndatetime(y,m,d-2,9,30)', end: 'dyndatetime(y,m,d-2,11)', title: 'Checkup - Matthew Harris', resource: 1 },
      { start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,15,30)', title: 'Follow-up - Anna Thomas', resource: 1 },
      { start: 'dyndatetime(y,m,d,15)', end: 'dyndatetime(y,m,d,16,30)', title: 'Follow-up - Jane Smith', resource: 1 },
      { start: 'dyndatetime(y,m,d,17)', end: 'dyndatetime(y,m,d,19)', title: 'Consultation - Olivia White', resource: 1 },
      { start: 'dyndatetime(y,m,d+1,9)', end: 'dyndatetime(y,m,d+1,10,30)', title: 'Consultation - Sophia Martinez', resource: 1 },
      { start: 'dyndatetime(y,m,d+2,13)', end: 'dyndatetime(y,m,d+2,14,30)', title: 'Checkup - Liam Clark', resource: 1 },
      { start: 'dyndatetime(y,m,d+3,15)', end: 'dyndatetime(y,m,d+3,17)', title: 'Consultation - Chloe Johnson', resource: 1 },
      { start: 'dyndatetime(y,m,d+4,10)', end: 'dyndatetime(y,m,d+4,11,30)', title: 'Follow-up - William Walker', resource: 1 },
      { start: 'dyndatetime(y,m,d+5,14)', end: 'dyndatetime(y,m,d+5,15)', title: 'Vaccination - Ava King', resource: 1 },

      // Dr. Brian Smith
      { start: 'dyndatetime(y,m,d-7,9)', end: 'dyndatetime(y,m,d-7,11)', title: 'Consultation - Daniel Moore', resource: 2 },
      { start: 'dyndatetime(y,m,d-7,15)', end: 'dyndatetime(y,m,d-7,16,30)', title: 'Follow-up - Sophia Clark', resource: 2 },
      { start: 'dyndatetime(y,m,d-6,10)', end: 'dyndatetime(y,m,d-6,11,30)', title: 'Checkup - James Hall', resource: 2 },
      { start: 'dyndatetime(y,m,d-5,9)', end: 'dyndatetime(y,m,d-5,10,30)', title: 'Follow-up - Ethan Young', resource: 2 },
      { start: 'dyndatetime(y,m,d-4,13)', end: 'dyndatetime(y,m,d-4,14)', title: 'Vaccination - Lily King', resource: 2 },
      { start: 'dyndatetime(y,m,d-3,11)', end: 'dyndatetime(y,m,d-3,13)', title: 'Consultation - Noah Scott', resource: 2 },
      { start: 'dyndatetime(y,m,d-2,15)', end: 'dyndatetime(y,m,d-2,16,30)', title: 'Follow-up - Grace Green', resource: 2 },
      { start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,11,30)', title: 'Checkup - Lucas Adams', resource: 2 },
      { start: 'dyndatetime(y,m,d,9)', end: 'dyndatetime(y,m,d,11)', title: 'Consultation - Chloe Baker', resource: 2 },
      { start: 'dyndatetime(y,m,d,12,30)', end: 'dyndatetime(y,m,d,14,30)', title: 'Consultation - Mia Allen', resource: 2 },
      { start: 'dyndatetime(y,m,d+1,8)', end: 'dyndatetime(y,m,d+1,9,30)', title: 'Follow-up - Nathan Perry', resource: 2 },
      { start: 'dyndatetime(y,m,d+2,11)', end: 'dyndatetime(y,m,d+2,13)', title: 'Consultation - Scarlett Evans', resource: 2 },
      { start: 'dyndatetime(y,m,d+3,16)', end: 'dyndatetime(y,m,d+3,17,30)', title: 'Checkup - Jacob Ramirez', resource: 2 },
      { start: 'dyndatetime(y,m,d+4,13)', end: 'dyndatetime(y,m,d+4,14)', title: 'Vaccination - Madison Flores', resource: 2 },
      { start: 'dyndatetime(y,m,d+5,15)', end: 'dyndatetime(y,m,d+5,17)', title: 'Consultation - Logan Sanders', resource: 2 },

      // Dr. Catherine Lee
      { start: 'dyndatetime(y,m,d-7,11)', end: 'dyndatetime(y,m,d-7,13)', title: 'Consultation - Jack Nelson', resource: 3 },
      { start: 'dyndatetime(y,m,d-7,16)', end: 'dyndatetime(y,m,d-7,17,30)', title: 'Follow-up - Ella Carter', resource: 3 },
      { start: 'dyndatetime(y,m,d-6,12)', end: 'dyndatetime(y,m,d-6,14)', title: 'Consultation - Zoe Rivera', resource: 3 },
      { start: 'dyndatetime(y,m,d-5,10)', end: 'dyndatetime(y,m,d-5,11,30)', title: 'Follow-up - Mason Cooper', resource: 3 },
      { start: 'dyndatetime(y,m,d-4,14)', end: 'dyndatetime(y,m,d-4,15)', title: 'Vaccination - Harper Reed', resource: 3 },
      { start: 'dyndatetime(y,m,d-3,13)', end: 'dyndatetime(y,m,d-3,15)', title: 'Consultation - William Torres', resource: 3 },
      { start: 'dyndatetime(y,m,d-2,10)', end: 'dyndatetime(y,m,d-2,11,30)', title: 'Checkup - Amelia Ramirez', resource: 3 },
      { start: 'dyndatetime(y,m,d-1,15)', end: 'dyndatetime(y,m,d-1,16,30)', title: 'Follow-up - Benjamin Cox', resource: 3 },
      { start: 'dyndatetime(y,m,d,9)', end: 'dyndatetime(y,m,d,11)', title: 'Consultation - Charlotte Ward', resource: 3 },
      { start: 'dyndatetime(y,m,d+1,16)', end: 'dyndatetime(y,m,d+1,17,30)', title: 'Checkup - Henry Perez', resource: 3 },
      { start: 'dyndatetime(y,m,d+1,18)', end: 'dyndatetime(y,m,d+1,20)', title: 'Consultation - Samuel Long', resource: 3 },
      { start: 'dyndatetime(y,m,d+2,14)', end: 'dyndatetime(y,m,d+2,15,30)', title: 'Checkup - Victoria Gray', resource: 3 },
      { start: 'dyndatetime(y,m,d+3,9)', end: 'dyndatetime(y,m,d+3,10,30)', title: 'Follow-up - Isaac Hughes', resource: 3 },
      { start: 'dyndatetime(y,m,d+4,16)', end: 'dyndatetime(y,m,d+4,18)', title: 'Consultation - Penelope Foster', resource: 3 },
      { start: 'dyndatetime(y,m,d+5,13)', end: 'dyndatetime(y,m,d+5,14)', title: 'Vaccination - David Simmons', resource: 3 },

      // Dr. Daniel Kim
      { start: 'dyndatetime(y,m,d-7,13)', end: 'dyndatetime(y,m,d-7,15)', title: 'Consultation - Elijah Brooks', resource: 4 },
      { start: 'dyndatetime(y,m,d-7,9)', end: 'dyndatetime(y,m,d-7,11)', title: 'Checkup - Abigail Bell', resource: 4 },
      { start: 'dyndatetime(y,m,d-6,11)', end: 'dyndatetime(y,m,d-6,12,30)', title: 'Follow-up - Logan Murphy', resource: 4 },
      { start: 'dyndatetime(y,m,d-6,14)', end: 'dyndatetime(y,m,d-6,16)', title: 'Consultation - Aria Cook', resource: 4 },
      { start: 'dyndatetime(y,m,d-5,16)', end: 'dyndatetime(y,m,d-5,17,30)', title: 'Follow-up - Jackson Rogers', resource: 4 },
      { start: 'dyndatetime(y,m,d-4,9)', end: 'dyndatetime(y,m,d-4,10)', title: 'Vaccination - Scarlett Morgan', resource: 4 },
      { start: 'dyndatetime(y,m,d-3,18)', end: 'dyndatetime(y,m,d-3,20)', title: 'Consultation - Aiden Peterson', resource: 4 },
      { start: 'dyndatetime(y,m,d-2,13)', end: 'dyndatetime(y,m,d-2,14,30)', title: 'Follow-up - Evelyn Bailey', resource: 4 },
      { start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,11,30)', title: 'Checkup - Carter Rivera', resource: 4 },
      { start: 'dyndatetime(y,m,d,11)', end: 'dyndatetime(y,m,d,13)', title: 'Consultation - Layla Howard', resource: 4 },
      { start: 'dyndatetime(y,m,d+1,9)', end: 'dyndatetime(y,m,d+1,11)', title: 'Consultation - Julian Bennett', resource: 4 },
      { start: 'dyndatetime(y,m,d+2,15)', end: 'dyndatetime(y,m,d+2,16,30)', title: 'Follow-up - Nora James', resource: 4 },
      { start: 'dyndatetime(y,m,d+3,13)', end: 'dyndatetime(y,m,d+3,14,30)', title: 'Checkup - Elias Mitchell', resource: 4 },
      { start: 'dyndatetime(y,m,d+4,8)', end: 'dyndatetime(y,m,d+4,10)', title: 'Consultation - Aurora Ross', resource: 4 },
      { start: 'dyndatetime(y,m,d+5,14)', end: 'dyndatetime(y,m,d+5,15)', title: 'Vaccination - Miles Edwards', resource: 4 },

      // Dr. Eva Martinez
      { start: 'dyndatetime(y,m,d-7,14)', end: 'dyndatetime(y,m,d-7,16)', title: 'Consultation - Wyatt Barnes', resource: 5 },
      { start: 'dyndatetime(y,m,d-8,13)', end: 'dyndatetime(y,m,d-8,14,30)', title: 'Checkup - Lily Sanders', resource: 5 },
      { start: 'dyndatetime(y,m,d-6,9)', end: 'dyndatetime(y,m,d-6,11)', title: 'Consultation - James Foster', resource: 5 },
      { start: 'dyndatetime(y,m,d-6,15)', end: 'dyndatetime(y,m,d-6,16,30)', title: 'Follow-up - Natalie Gonzales', resource: 5 },
      { start: 'dyndatetime(y,m,d-5,11)', end: 'dyndatetime(y,m,d-5,12,30)', title: 'Follow-up - David Bryant', resource: 5 },
      { start: 'dyndatetime(y,m,d-4,13)', end: 'dyndatetime(y,m,d-4,15)', title: 'Consultation - Zoey Alexander', resource: 5 },
      { start: 'dyndatetime(y,m,d-3,10)', end: 'dyndatetime(y,m,d-3,11)', title: 'Vaccination - Oliver Russell', resource: 5 },
      { start: 'dyndatetime(y,m,d-2,14)', end: 'dyndatetime(y,m,d-2,16)', title: 'Consultation - Grace Griffin', resource: 5 },
      { start: 'dyndatetime(y,m,d-1,9,30)', end: 'dyndatetime(y,m,d-1,11)', title: 'Follow-up - Lucas Diaz', resource: 5 },
      { start: 'dyndatetime(y,m,d,16)', end: 'dyndatetime(y,m,d,17,30)', title: 'Checkup - Mila Hayes', resource: 5 },
      { start: 'dyndatetime(y,m,d+1,11)', end: 'dyndatetime(y,m,d+1,13)', title: 'Consultation - Stella Rivera', resource: 5 },
      { start: 'dyndatetime(y,m,d+2,9)', end: 'dyndatetime(y,m,d+2,11)', title: 'Consultation - Adrian Hughes', resource: 5 },
      { start: 'dyndatetime(y,m,d+3,14,30)', end: 'dyndatetime(y,m,d+3,16)', title: 'Follow-up - Bella Coleman', resource: 5 },
      { start: 'dyndatetime(y,m,d+4,15)', end: 'dyndatetime(y,m,d+4,16,30)', title: 'Checkup - Wyatt James', resource: 5 },
      { start: 'dyndatetime(y,m,d+5,10)', end: 'dyndatetime(y,m,d+5,11)', title: 'Vaccination - Emily Ward', resource: 5 },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Dr. Alice Johnson',
        specialty: 'Neurology',
        color: '#ffc5b3ff',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
      {
        id: 2,
        name: 'Dr. Brian Smith',
        specialty: 'Pediatrics',
        color: '#a2cff1ff',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 3,
        name: 'Dr. Catherine Lee',
        specialty: 'Dermatology',
        color: '#aaeeaeff',
        img: 'https://img.mobiscroll.com/demos/f2.png',
      },
      {
        id: 4,
        name: 'Dr. Daniel Kim',
        specialty: 'Cardiology',
        color: '#e8bdf5ff',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
      {
        id: 5,
        name: 'Dr. Eva Martinez',
        specialty: 'Orthopedics',
        color: '#f9fab9ff',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
    ],
    [],
  );

  const myInvalids = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        recurring: { repeat: 'weekly', weekDays: 'FR' },
        resource: 1,
      },
      {
        recurring: { repeat: 'weekly', weekDays: 'MO' },
        resource: 2,
      },
      {
        recurring: { repeat: 'weekly', weekDays: 'TU,TH' },
        resource: 3,
      },
      {
        recurring: { repeat: 'weekly', weekDays: 'TH,FR' },
        resource: 4,
      },
      {
        recurring: { repeat: 'weekly', weekDays: 'WE' },
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+1)',
        end: 'dyndatetime(y,m,d+1)',
        allDay: true,
        resource: 1,
        title: 'Dr. Alice Johnson OFF',
      },
      {
        start: 'dyndatetime(y,m,d-2)',
        end: 'dyndatetime(y,m,d-2)',
        allDay: true,
        resource: 2,
        title: 'Dr. Brian Smith OFF',
      },
      {
        start: 'dyndatetime(y,m,d-3)',
        end: 'dyndatetime(y,m,d-3)',
        allDay: true,
        resource: 3,
        title: 'Dr. Catherine Lee OFF',
      },
      {
        start: 'dyndatetime(y,m,d+2)',
        end: 'dyndatetime(y,m,d+2)',
        allDay: true,
        resource: 4,
        title: 'Dr. Daniel Kim OFF',
      },
      {
        start: 'dyndatetime(y,m,d+5)',
        end: 'dyndatetime(y,m,d+5)',
        allDay: true,
        resource: 5,
        title: 'Dr. Eva Martinez OFF',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'week',
        allDay: false,
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '20:00',
        hideInvalidColumns: true,
      },
    }),
    [],
  );
  return (
    <Eventcalendar
      view={myView}
      data={myEvents}
      resources={myResources}
      invalid={myInvalids}
      groupBy="date"
      cssClass="mds-hide-non-working-resources"
    />
  );
};
export default App;
