import {
  Eventcalendar,
  formatDate,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscNewEventData,
  MbscPageLoadingEvent,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useMemo, useRef, useState } from 'react';
import './show-summaries-aggregates-for-resource-groups.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const myEvents = useRef<MbscCalendarEvent[]>([
    {
      id: 1,
      allDay: true,
      start: 'dyndatetime(y,m,d-7, 6)',
      end: 'dyndatetime(y,m,d-7, 19)',
      resource: 'orlando_1',
      title: 'Sales meeting with JLL',
      name: 'John C. Johnson',
      distance: 120,
      consumption: 35,
    },
    {
      id: 2,
      allDay: true,
      start: 'dyndatetime(y,m,d-6, 3)',
      end: 'dyndatetime(y,m,d-6, 20)',
      resource: 'orlando_1',
      title: 'Client consultation',
      name: 'Mary K. Adams',
      distance: 95,
      consumption: 30,
    },
    {
      id: 3,
      allDay: true,
      start: 'dyndatetime(y,m,d-4, 10)',
      end: 'dyndatetime(y,m,d-4,17)',
      resource: 'orlando_1',
      title: 'Project review at XYZ',
      name: 'Robert B. Brown',
      distance: 150,
      consumption: 40,
    },
    {
      id: 4,
      allDay: true,
      start: 'dyndatetime(y,m,d-2,9)',
      end: 'dyndatetime(y,m,d-2,16)',
      resource: 'orlando_1',
      title: 'Team building workshop',
      name: 'Susan E. Smith',
      distance: 60,
      consumption: 20,
    },
    //<hide-comment>
    {
      id: 5,
      allDay: true,
      start: 'dyndatetime(y,m,d-1,8)',
      end: 'dyndatetime(y,m,d-1,18)',
      resource: 'orlando_1',
      title: 'Conference Downtown',
      name: 'William T. Harris',
      distance: 45,
      consumption: 18,
    },
    {
      id: 6,
      allDay: true,
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,17)',
      resource: 'orlando_1',
      title: 'Product demo at Expo',
      name: 'James P. Clark',
      distance: 110,
      consumption: 33,
    },
    {
      id: 7,
      allDay: true,
      start: 'dyndatetime(y,m,d+2,6)',
      end: 'dyndatetime(y,m,d+2,16)',
      resource: 'orlando_1',
      title: 'Visit to site',
      name: 'Patricia L. Green',
      distance: 85,
      consumption: 28,
    },
    {
      id: 8,
      allDay: true,
      start: 'dyndatetime(y,m,d+3,9)',
      end: 'dyndatetime(y,m,d+3,18)',
      resource: 'orlando_1',
      title: 'Investor meeting',
      name: 'Michael R. White',
      distance: 75,
      consumption: 25,
    },
    {
      id: 9,
      allDay: true,
      start: 'dyndatetime(y,m,d+4,10)',
      end: 'dyndatetime(y,m,d+4,17)',
      resource: 'orlando_1',
      title: 'Supplier negotiation',
      name: 'Barbara D. Wright',
      distance: 90,
      consumption: 32,
    },
    {
      id: 10,
      allDay: true,
      start: 'dyndatetime(y,m,d+1,8)',
      end: 'dyndatetime(y,m,d+1,17)',
      resource: 'orlando_1',
      title: 'Training session',
      name: 'David F. Martin',
      distance: 70,
      consumption: 27,
    },
    {
      id: 11,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,10)',
      end: 'dyndatetime(y,m,d+6,20)',
      resource: 'orlando_1',
      title: 'Strategy session',
      name: 'Jennifer S. Lee',
      distance: 55,
      consumption: 21,
    },
    {
      id: 12,
      allDay: true,
      start: 'dyndatetime(y,m,d-7,7,30)',
      end: 'dyndatetime(y,m,d-7,19)',
      resource: 'orlando_2',
      title: 'Board meeting',
      name: 'Charles H. King',
      distance: 130,
      consumption: 36,
    },
    {
      id: 13,
      allDay: true,
      start: 'dyndatetime(y,m,d-3,7)',
      end: 'dyndatetime(y,m,d-3,21)',
      resource: 'orlando_2',
      title: 'Networking event',
      name: 'Elizabeth J. Scott',
      distance: 40,
      consumption: 16,
    },
    {
      id: 14,
      allDay: true,
      start: 'dyndatetime(y,m,d,9,30)',
      end: 'dyndatetime(y,m,d,17)',
      resource: 'orlando_2',
      title: 'Client appreciation lunch',
      name: 'Thomas A. Taylor',
      distance: 50,
      consumption: 19,
    },
    {
      id: 15,
      allDay: true,
      start: 'dyndatetime(y,m,d+2,8)',
      end: 'dyndatetime(y,m,d+2,16,30)',
      resource: 'orlando_2',
      title: 'Legal consultation',
      name: 'Jessica M. Lewis',
      distance: 100,
      consumption: 34,
    },
    {
      id: 16,
      allDay: true,
      start: 'dyndatetime(y,m,d+3,9,30)',
      end: 'dyndatetime(y,m,d+3,19)',
      resource: 'orlando_2',
      title: 'Branch visit',
      name: 'Christopher N. Hill',
      distance: 65,
      consumption: 22,
    },
    {
      id: 17,
      allDay: true,
      start: 'dyndatetime(y,m,d+4,11)',
      end: 'dyndatetime(y,m,d+4,22)',
      resource: 'orlando_2',
      title: 'Product launch',
      name: 'Margaret O. Allen',
      distance: 80,
      consumption: 29,
    },
    {
      id: 18,
      allDay: true,
      start: 'dyndatetime(y,m,d+5,10)',
      end: 'dyndatetime(y,m,d+5,20,30)',
      resource: 'orlando_2',
      title: 'Sales pitch to New Clients',
      name: 'Daniel P. Nelson',
      distance: 115,
      consumption: 31,
    },
    {
      id: 19,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,5,40)',
      end: 'dyndatetime(y,m,d+6,15,30)',
      resource: 'orlando_2',
      title: 'Financial review',
      name: 'Ashley Q. Young',
      distance: 125,
      consumption: 37,
    },
    {
      id: 20,
      allDay: true,
      start: 'dyndatetime(y,m,d-7,9)',
      end: 'dyndatetime(y,m,d-7,21)',
      resource: 'orlando_3',
      title: 'Team luncheon at Restaurant',
      name: 'Joseph R. Walker',
      distance: 35,
      consumption: 14,
    },
    {
      id: 21,
      allDay: true,
      start: 'dyndatetime(y,m,d-5,9,30)',
      end: 'dyndatetime(y,m,d-5,17)',
      resource: 'orlando_3',
      title: 'Technical support visit',
      name: 'Nancy S. Hall',
      distance: 105,
      consumption: 33,
    },
    {
      id: 22,
      allDay: true,
      start: 'dyndatetime(y,m,d-4,12)',
      end: 'dyndatetime(y,m,d-4,23)',
      resource: 'orlando_3',
      title: 'Industry seminar',
      name: 'Steven T. Allen',
      distance: 95,
      consumption: 28,
    },
    {
      id: 23,
      allDay: true,
      start: 'dyndatetime(y,m,d-2,11)',
      end: 'dyndatetime(y,m,d-2,20,30)',
      resource: 'orlando_3',
      title: 'Partnership discussion',
      name: 'Linda U. Young',
      distance: 140,
      consumption: 39,
    },
    {
      id: 24,
      allDay: true,
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,18)',
      resource: 'orlando_3',
      title: 'Marketing campaign launch',
      name: 'Paul V. Wright',
      distance: 120,
      consumption: 35,
    },
    {
      id: 25,
      allDay: true,
      start: 'dyndatetime(y,m,d+4,7)',
      end: 'dyndatetime(y,m,d+4,20)',
      resource: 'orlando_3',
      title: 'Research presentation',
      name: 'Karen W. Martinez',
      distance: 65,
      consumption: 24,
    },
    {
      id: 26,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,10,30)',
      end: 'dyndatetime(y,m,d+6,22)',
      resource: 'orlando_3',
      title: 'Executive retreat',
      name: 'Kevin X. Gonzalez',
      distance: 110,
      consumption: 30,
    },
    {
      id: 27,
      allDay: true,
      start: 'dyndatetime(y,m,d-7,8,30)',
      end: 'dyndatetime(y,m,d-7,16)',
      resource: 'las-vegas_1',
      title: 'Quarterly review',
      name: 'Sandra Y. Adams',
      distance: 85,
      consumption: 27,
    },
    {
      id: 28,
      allDay: true,
      start: 'dyndatetime(y,m,d-5,8)',
      end: 'dyndatetime(y,m,d-5,15)',
      resource: 'las-vegas_1',
      title: 'Sales training',
      name: 'Mark Z. Robinson',
      distance: 75,
      consumption: 25,
    },
    {
      id: 29,
      allDay: true,
      start: 'dyndatetime(y,m,d-2,6,30)',
      end: 'dyndatetime(y,m,d-2,17)',
      resource: 'las-vegas_1',
      title: 'Client onboarding session',
      name: 'Lisa A. Harris',
      distance: 55,
      consumption: 22,
    },
    {
      id: 30,
      allDay: true,
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,16)',
      resource: 'las-vegas_1',
      title: 'Product testing',
      name: 'Brian B. Lewis',
      distance: 100,
      consumption: 31,
    },
    {
      id: 31,
      allDay: true,
      start: 'dyndatetime(y,m,d+1,8,30)',
      end: 'dyndatetime(y,m,d+1,16,30)',
      resource: 'las-vegas_1',
      title: 'Customer feedback meeting',
      name: 'Rebecca C. Wilson',
      distance: 70,
      consumption: 23,
    },
    {
      id: 32,
      allDay: true,
      start: 'dyndatetime(y,m,d+2,4)',
      end: 'dyndatetime(y,m,d+2,14)',
      resource: 'las-vegas_1',
      title: 'Market research trip',
      name: 'Edward D. Evans',
      distance: 135,
      consumption: 38,
    },
    {
      id: 33,
      allDay: true,
      start: 'dyndatetime(y,m,d+4,12)',
      end: 'dyndatetime(y,m,d+4,23)',
      resource: 'las-vegas_1',
      title: 'Financial planning',
      name: 'Deborah E. Garcia',
      distance: 45,
      consumption: 17,
    },
    {
      id: 34,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,9)',
      end: 'dyndatetime(y,m,d+6,17,30)',
      resource: 'las-vegas_1',
      title: 'Safety inspection',
      name: 'George F. Clark',
      distance: 90,
      consumption: 29,
    },
    {
      id: 35,
      allDay: true,
      start: 'dyndatetime(y,m,d-7,7,30)',
      end: 'dyndatetime(y,m,d-7,17)',
      resource: 'las-vegas_2',
      title: 'IT upgrade assessment',
      name: 'Amanda G. Walker',
      distance: 115,
      consumption: 34,
    },
    {
      id: 36,
      allDay: true,
      start: 'dyndatetime(y,m,d-3,10)',
      end: 'dyndatetime(y,m,d-3,21)',
      resource: 'las-vegas_2',
      title: 'Employee training',
      name: 'Patrick H. Hall',
      distance: 50,
      consumption: 20,
    },
    {
      id: 37,
      allDay: true,
      start: 'dyndatetime(y,m,d-1,8,30)',
      end: 'dyndatetime(y,m,d-1,17)',
      resource: 'las-vegas_2',
      title: 'Strategic partnership meeting',
      name: 'Cynthia I. Nelson',
      distance: 95,
      consumption: 28,
    },
    {
      id: 38,
      allDay: true,
      start: 'dyndatetime(y,m,d+3,7,30)',
      end: 'dyndatetime(y,m,d+3,16,30)',
      resource: 'las-vegas_2',
      title: 'Annual general meeting',
      name: 'Matthew J. Baker',
      distance: 125,
      consumption: 36,
    },
    {
      id: 39,
      allDay: true,
      start: 'dyndatetime(y,m,d+5,9)',
      end: 'dyndatetime(y,m,d+5,18)',
      resource: 'las-vegas_2',
      title: 'Legal deposition at Court',
      name: 'Michelle K. Wright',
      distance: 60,
      consumption: 22,
    },
    {
      id: 40,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,8)',
      end: 'dyndatetime(y,m,d+6,18)',
      resource: 'las-vegas_2',
      title: 'Technology expo',
      name: 'Benjamin L. Scott',
      distance: 110,
      consumption: 33,
    },
    {
      id: 41,
      allDay: true,
      start: 'dyndatetime(y,m,d-7,9)',
      end: 'dyndatetime(y,m,d-7,19)',
      resource: 'las-vegas_3',
      title: 'Client negotiation',
      name: 'Stephanie M. Turner',
      distance: 80,
      consumption: 27,
    },
    {
      id: 42,
      allDay: true,
      start: 'dyndatetime(y,m,d-4,6,30)',
      end: 'dyndatetime(y,m,d-4,17,30)',
      resource: 'las-vegas_3',
      title: 'Executive meeting',
      name: 'Jason N. Harris',
      distance: 100,
      consumption: 30,
    },
    {
      id: 43,
      allDay: true,
      start: 'dyndatetime(y,m,d-2,8)',
      end: 'dyndatetime(y,m,d-2,16)',
      resource: 'las-vegas_3',
      title: 'Investor briefing',
      name: 'Sharon O. Lewis',
      distance: 55,
      consumption: 21,
    },
    {
      id: 44,
      allDay: true,
      start: 'dyndatetime(y,m,d,7)',
      end: 'dyndatetime(y,m,d,17)',
      resource: 'las-vegas_3',
      title: 'Project handover',
      name: 'Timothy P. Adams',
      distance: 130,
      consumption: 35,
    },
    {
      id: 45,
      allDay: true,
      start: 'dyndatetime(y,m,d+3,8,30)',
      end: 'dyndatetime(y,m,d+3,18)',
      resource: 'las-vegas_3',
      title: 'Customer satisfaction survey',
      name: 'Melissa Q. White',
      distance: 70,
      consumption: 23,
    },
    {
      id: 46,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,8)',
      end: 'dyndatetime(y,m,d+6,20)',
      resource: 'las-vegas_3',
      title: 'Industry trade show',
      name: 'Aaron R. Martin',
      distance: 90,
      consumption: 28,
    },
    {
      id: 47,
      allDay: true,
      start: 'dyndatetime(y,m,d-7,9,30)',
      end: 'dyndatetime(y,m,d-7,17)',
      resource: 'miami_1',
      title: 'Supplier assessment',
      name: 'Laura S. Young',
      distance: 105,
      consumption: 32,
    },
    {
      id: 48,
      allDay: true,
      start: 'dyndatetime(y,m,d-5,10)',
      end: 'dyndatetime(y,m,d-5,21)',
      resource: 'miami_1',
      title: 'Product innovation summit',
      name: 'Jeffrey T. Allen',
      distance: 145,
      consumption: 40,
    },
    {
      id: 49,
      allDay: true,
      start: 'dyndatetime(y,m,d-2,9,30)',
      end: 'dyndatetime(y,m,d-2,17)',
      resource: 'miami_1',
      title: 'Operational audit',
      name: 'Diane U. Hill',
      distance: 120,
      consumption: 34,
    },
    {
      id: 50,
      allDay: true,
      start: 'dyndatetime(y,m,d,11,30)',
      end: 'dyndatetime(y,m,d,22)',
      resource: 'miami_1',
      title: 'CEO roundtable',
      name: 'Gregory V. Wright',
      distance: 115,
      consumption: 33,
    },
    {
      id: 51,
      allDay: true,
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,18)',
      resource: 'miami_1',
      title: 'Field research',
      name: 'Angela W. Martinez',
      distance: 125,
      consumption: 37,
    },
    {
      id: 52,
      allDay: true,
      start: 'dyndatetime(y,m,d+2,8)',
      end: 'dyndatetime(y,m,d+2,15)',
      resource: 'miami_1',
      title: 'Corporate retreat',
      name: 'Ryan X. Gonzalez',
      distance: 70,
      consumption: 24,
    },
    {
      id: 53,
      allDay: true,
      start: 'dyndatetime(y,m,d+5,7)',
      end: 'dyndatetime(y,m,d+5,15,30)',
      resource: 'miami_1',
      title: 'Executive workshop',
      name: 'Ruth Y. Adams',
      distance: 135,
      consumption: 36,
    },
    {
      id: 54,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,7,30)',
      end: 'dyndatetime(y,m,d+6,18)',
      resource: 'miami_1',
      title: 'Regional meeting',
      name: 'Gary Z. Robinson',
      distance: 80,
      consumption: 26,
    },
    {
      id: 55,
      allDay: true,
      start: 'dyndatetime(y,m,d-7,11)',
      end: 'dyndatetime(y,m,d-7,22)',
      resource: 'miami_2',
      title: 'Employee orientation',
      name: 'Donna A. Harris',
      distance: 65,
      consumption: 23,
    },
    {
      id: 56,
      allDay: true,
      start: 'dyndatetime(y,m,d-3,6)',
      end: 'dyndatetime(y,m,d-3,16)',
      resource: 'miami_2',
      title: 'Contract negotiation',
      name: 'Keith B. Lewis',
      distance: 95,
      consumption: 29,
    },
    {
      id: 57,
      allDay: true,
      start: 'dyndatetime(y,m,d-1,8)',
      end: 'dyndatetime(y,m,d-1,19)',
      resource: 'miami_2',
      title: 'Team brainstorming',
      name: 'Rachel C. Wilson',
      distance: 100,
      consumption: 30,
    },
    {
      id: 58,
      allDay: true,
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,18)',
      resource: 'miami_2',
      title: 'Leadership training',
      name: 'Henry D. Evans',
      distance: 110,
      consumption: 31,
    },
    {
      id: 59,
      allDay: true,
      start: 'dyndatetime(y,m,d+5,7,30)',
      end: 'dyndatetime(y,m,d+5,18)',
      resource: 'miami_2',
      title: 'Business development meeting',
      name: 'Carol E. Garcia',
      distance: 140,
      consumption: 39,
    },
    {
      id: 60,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,6)',
      end: 'dyndatetime(y,m,d+6,15)',
      resource: 'miami_2',
      title: 'Annual performance review',
      name: 'Scott F. Clark',
      distance: 85,
      consumption: 28,
    },
    {
      id: 61,
      allDay: true,
      start: 'dyndatetime(y,m,d-7,11)',
      end: 'dyndatetime(y,m,d-7,19)',
      resource: 'miami_3',
      title: 'Corporate luncheon',
      name: 'Judith G. Walker',
      distance: 50,
      consumption: 18,
    },
    {
      id: 62,
      allDay: true,
      start: 'dyndatetime(y,m,d-4,8)',
      end: 'dyndatetime(y,m,d-4,18)',
      resource: 'miami_3',
      title: 'Client follow-up',
      name: 'Douglas H. Hall',
      distance: 125,
      consumption: 36,
    },
    {
      id: 63,
      allDay: true,
      start: 'dyndatetime(y,m,d-2,6,30)',
      end: 'dyndatetime(y,m,d-2,17)',
      resource: 'miami_3',
      title: 'Service inspection',
      name: 'Janet I. Nelson',
      distance: 75,
      consumption: 26,
    },
    {
      id: 64,
      allDay: true,
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,18,30)',
      resource: 'miami_3',
      title: 'System upgrade',
      name: 'Walter J. Baker',
      distance: 110,
      consumption: 32,
    },
    {
      id: 65,
      allDay: true,
      start: 'dyndatetime(y,m,d+2,8)',
      end: 'dyndatetime(y,m,d+2,17)',
      resource: 'miami_3',
      title: 'Management meeting',
      name: 'Katherine K. Wright',
      distance: 45,
      consumption: 17,
    },
    {
      id: 66,
      allDay: true,
      start: 'dyndatetime(y,m,d+6,9,30)',
      end: 'dyndatetime(y,m,d+6,17)',
      resource: 'miami_3',
      title: 'Performance appraisal',
      name: 'Adam L. Scott',
      distance: 130,
      consumption: 35,
    },
    //</hide-comment>
  ]);

  const [eventsWithSummaries, setEventsWithSummaries] = useState<MbscCalendarEvent[]>(myEvents.current);

  const firstViewDay = useRef<Date>();
  const lastViewDay = useRef<Date>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        eventList: true,
        eventHeight: 'variable',
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 'orlando',
        name: 'CNL Tower II',
        address: '420 S Orange Ave, Orlando, FL 32801',
        eventCreation: false,
        eventDragBetweenResources: false,
        eventDragInTime: false,
        eventResize: false,
        color: 'transparent',
        children: [
          {
            id: 'orlando_1',
            car: 'Lincoln Continental',
            plate: '51-5375',
            type: 'Sedan',
          },
          {
            id: 'orlando_2',
            car: 'Porsche Panamera',
            plate: '72-2590',
            type: 'Sports sedan',
          },
          {
            id: 'orlando_3',
            car: 'Range Rover Velar',
            plate: '41-7701',
            type: 'Compact SUV',
          },
        ],
      },
      //<hide-comment>
      {
        id: 'las-vegas',
        name: 'Tower 300',
        address: '300 S. 4th Street, Suite 704 Las Vegas, NV 89101',
        eventCreation: false,
        eventDragBetweenResources: false,
        eventDragInTime: false,
        eventResize: false,
        color: 'transparent',
        children: [
          {
            id: 'las-vegas_1',
            car: 'Mercedes-Benz E-Class',
            plate: '14-5508',
            type: 'Mid-size sedan',
          },
          {
            id: 'las-vegas_2',
            car: 'BMW 5 Series',
            plate: '47-1522',
            type: 'Mid-size sedan',
          },
          {
            id: 'las-vegas_3',
            car: 'Audi A6',
            plate: '72-2590',
            type: 'Mid-size sedan',
          },
        ],
      },
      {
        id: 'miami',
        name: 'One Biscayne Tower',
        address: '2 S Biscayne Boulevard, Suite 2460 Miami, FL 33131',
        eventCreation: false,
        eventDragBetweenResources: false,
        eventDragInTime: false,
        eventResize: false,
        color: 'transparent',
        children: [
          {
            id: 'miami_1',
            car: 'Lexus ES',
            plate: '91-6278',
            type: 'Mid-size sedan',
          },
          {
            id: 'miami_2',
            car: 'Cadillac CT6',
            plate: '81-7719',
            type: 'Full-size sedan',
          },
          {
            id: 'miami_3',
            car: 'Jaguar XF',
            plate: '42-6067',
            type: 'Mid-size sedan',
          },
        ],
      },
      //</hide-comment>
    ],
    [],
  );

  const handleDefaultEvent = useCallback((args: MbscNewEventData): MbscCalendarEvent => {
    const d = args.start;
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 9);
    const end = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 18);
    return {
      allDay: true,
      start: start,
      end: end,
      title: 'New event',
      name: 'John Doe',
      distance: 42,
      consumption: 6,
    };
  }, []);

  const getAggregateEvents = useCallback(
    (dayEvents: MbscCalendarEvent[]): MbscCalendarEvent[] => {
      const aggregateEvents: { [key: string]: MbscCalendarEvent } = {};

      myResources.forEach(function (resource) {
        for (let date = new Date(firstViewDay.current as Date); date < (lastViewDay.current as Date); date.setDate(date.getDate() + 1)) {
          aggregateEvents[(resource.id as string) + +date] = {
            id: (resource.id as string) + +date,
            isSummary: true,
            allDay: true,
            start: new Date(date),
            end: new Date(date),
            consumption: 0,
            distance: 0,
            resource: resource.id,
          };
        }
      });
      dayEvents.forEach((event) => {
        if (!event.isSummary) {
          const parentResource = (event.resource as string).split('_')[0];
          const dayStart = new Date(event.start as Date).setHours(0, 0, 0, 0);
          if (aggregateEvents[parentResource + dayStart]) {
            aggregateEvents[parentResource + dayStart].consumption += event.consumption;
            aggregateEvents[parentResource + dayStart].distance += event.distance;
          }
        }
      });

      return Object.values(aggregateEvents);
    },
    [firstViewDay, lastViewDay, myResources],
  );

  const updateCalendarEvents = useCallback(
    (inst: Eventcalendar) => {
      const dailyEvents = inst.getEvents();
      const updatedSummaries = getAggregateEvents(dailyEvents);
      setEventsWithSummaries([...myEvents.current, ...updatedSummaries]);
    },
    [getAggregateEvents, myEvents],
  );

  const handlePageLoading = useCallback(
    (args: MbscPageLoadingEvent, inst: Eventcalendar) => {
      firstViewDay.current = new Date(args.firstDay);
      lastViewDay.current = new Date(args.lastDay);
      setTimeout(() => updateCalendarEvents(inst));
    },
    [updateCalendarEvents],
  );

  const handleEventUpdated = useCallback(
    (args: MbscEventUpdatedEvent, inst: Eventcalendar) => {
      const updatedEvent = args.event;
      const index = myEvents.current.indexOf(updatedEvent);
      myEvents.current.splice(index, 1, updatedEvent);
      setTimeout(() => updateCalendarEvents(inst));
    },
    [updateCalendarEvents],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent, inst: Eventcalendar) => {
      const newEvent = args.event;
      myEvents.current = [...myEvents.current, newEvent];
      setTimeout(() => {
        updateCalendarEvents(inst);
      });
    },
    [updateCalendarEvents],
  );

  const handleEventDeleted = useCallback(
    (args: MbscEventDeletedEvent, inst: Eventcalendar) => {
      const deletedEvent = args.event;
      const index = myEvents.current.indexOf(deletedEvent);
      myEvents.current.splice(index, 1);
      setTimeout(() => {
        updateCalendarEvents(inst);
      });
    },
    [myEvents, updateCalendarEvents],
  );

  const customResource = useCallback((res: MbscResource) => {
    if (res.isParent) {
      return (
        <>
          <div>{res.name}</div>
          <div className="mds-aggregates-address">{res.address}</div>
        </>
      );
    }
    return (
      <>
        <div>{res.car}</div>
        <div className="mds-aggregates-plate">Plate {res.plate}</div>
        <div className="mds-aggregates-cartype">{res.type}</div>
      </>
    );
  }, []);

  const customScheduleEventContent = useCallback((event: MbscCalendarEventData) => {
    if (event.currentResource!.isParent) {
      return (
        <>
          <div className="mds-aggregates-summary-event mbsc-flex">
            <div className="mds-aggregates-summary-details mbsc-flex mbsc-flex-1-1">
              <div className="mds-aggregates-summary-label">
                Total dist.
                <div className="mds-aggregates-summary-value">{event.original!.distance} mi</div>
              </div>
              <div className="mds-aggregates-summary-label">
                Total cons.
                <div className="mds-aggregates-summary-value">{event.original!.consumption} gal</div>
              </div>
              <div className="mds-aggregates-summary-label">
                Est. cost
                <div className="mds-aggregates-summary-value">$ {Math.round(event.original!.consumption * 3.706 || 0)}</div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="mds-aggregates-event">
          <div className="mds-aggregates-title">{event.title}</div>
          <div className="mds-aggregates-name">{event.original!.name}</div>
          <div className="mds-aggregates-details">
            <div className="mds-aggregates-label">
              Est. distance:
              <span className="mds-aggregates-value">{event.original!.distance} mi</span>
            </div>
            <div className="mds-aggregates-label">
              Est. consumption:
              <span className="mds-aggregates-value">{event.original!.consumption} gal</span>
            </div>
          </div>
          <div className="mds-aggregates-label mbsc-flex">
            <div className="mbsc-flex-1-1">
              Pick up: <span className="mds-aggregates-value">{formatDate('hh:mm A', new Date(event.original!.start as Date))}</span>
            </div>
            <div>
              Drop off: <span className="mds-aggregates-value">{formatDate('hh:mm A', new Date(event.original!.end as Date))}</span>
            </div>
          </div>
        </div>
      </>
    );
  }, []);

  return (
    <Eventcalendar
      cssClass="mds-aggregates"
      clickToCreate={true}
      dragToCreate={false}
      dragToMove={true}
      dragToResize={false}
      eventOverlap={false}
      view={myView}
      data={eventsWithSummaries}
      resources={myResources}
      min="dyndatetime(y,m,d-7)"
      max="dyndatetime(y,m,d+6)"
      extendDefaultEvent={handleDefaultEvent}
      onPageLoading={handlePageLoading}
      onEventUpdated={handleEventUpdated}
      onEventCreated={handleEventCreated}
      onEventDeleted={handleEventDeleted}
      renderResource={customResource}
      renderScheduleEventContent={customScheduleEventContent}
    />
  );
}

export default App;
