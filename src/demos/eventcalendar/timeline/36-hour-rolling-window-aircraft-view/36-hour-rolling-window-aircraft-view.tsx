import {
  dayjsTimezone,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { FC, useCallback, useMemo } from 'react';
import { dyndatetime } from '../../../../dyndatetime';
import './36-hour-rolling-window-aircraft-view.css';

dayjs.extend(utc);

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const startTime = useMemo(() => dayjs.utc().format('HH:00'), []);

  const endTime = useMemo(() => {
    const start = dayjs.utc().startOf('hour');
    const end = start.add(36, 'hours');
    const dayOffset = end.subtract(1, 'minute').startOf('day').diff(start.startOf('day'), 'days');
    const suffix = dayOffset > 0 ? '+' + dayOffset : '';
    return end.format('HH:00') + suffix;
  }, []);

  const myEvents: MbscCalendarEvent[] = useMemo(
    () => [
      {
        resource: '1-1',
        title: 'DXB → BKK',
        start: dyndatetime('y,m,d,8,30'),
        end: dyndatetime('y,m,d,14,45'),
        color: '#22c55e',
      },
      {
        resource: '1-1',
        title: 'BKK → SIN',
        start: dyndatetime('y,m,d,20,30'),
        end: dyndatetime('y,m,d,23,00'),
        color: '#22c55e',
      },
      {
        resource: '1-1',
        title: 'SIN → CDG',
        start: dyndatetime('y,m,d+1,4,30'),
        end: dyndatetime('y,m,d+1,15,00'),
        color: '#22c55e',
      },
      {
        resource: '1-1',
        title: 'CDG → GVA',
        start: dyndatetime('y,m,d+1,21,30'),
        end: dyndatetime('y,m,d+1,22,45'),
        color: '#22c55e',
      },
      {
        resource: '1-2',
        title: 'JFK → AMS',
        start: dyndatetime('y,m,d,21'),
        end: dyndatetime('y,m,d+1,08,30'),
        color: '#3b82f6',
      },
      //<hide-comment>
      {
        resource: '1-2',
        title: 'AMS → CPH',
        start: dyndatetime('y,m,d+1,12'),
        end: dyndatetime('y,m,d+1,13,30'),
        color: '#3b82f6',
      },
      {
        resource: '1-2',
        title: 'CPH → KEF',
        start: dyndatetime('y,m,d+1,20'),
        end: dyndatetime('y,m,d+1,22,30'),
        color: '#3b82f6',
      },
      {
        resource: '1-2',
        title: 'KEF → BOS',
        start: dyndatetime('y,m,d+2,2'),
        end: dyndatetime('y,m,d+2,4'),
        color: '#3b82f6',
      },
      {
        resource: '1-3',
        title: 'HND → SFO',
        start: dyndatetime('y,m,d,17'),
        end: dyndatetime('y,m,d+1,9,30'),
        color: '#f97316',
      },
      {
        resource: '1-3',
        title: 'SFO → DEN',
        start: dyndatetime('y,m,d+1,13'),
        end: dyndatetime('y,m,d+1,15,45'),
        color: '#f97316',
      },
      {
        resource: '1-3',
        title: 'DEN → MEX',
        start: dyndatetime('y,m,d+1,22'),
        end: dyndatetime('y,m,d+2,2,30'),
        color: '#f97316',
      },
      {
        resource: '1-3',
        title: 'MEX → HAV',
        start: dyndatetime('y,m,d+2,6'),
        end: dyndatetime('y,m,d+2,8'),
        color: '#f97316',
      },
      {
        resource: '2-1',
        title: 'LHR → PER',
        start: dyndatetime('y,m,d,11'),
        end: dyndatetime('y,m,d+1,9'),
        color: '#dc2626',
      },
      {
        resource: '2-1',
        title: 'PER → AKL',
        start: dyndatetime('y,m,d+1,14'),
        end: dyndatetime('y,m,d+1,20,15'),
        color: '#dc2626',
      },
      {
        resource: '2-1',
        title: 'AKL → PPT',
        start: dyndatetime('y,m,d+2,2'),
        end: dyndatetime('y,m,d+2,7,45'),
        color: '#dc2626',
      },
      {
        resource: '2-1',
        title: 'PPT → IPC',
        start: dyndatetime('y,m,d+2,16'),
        end: dyndatetime('y,m,d+2,23'),
        color: '#dc2626',
      },
      {
        resource: '2-2',
        title: 'IST → PVG',
        start: dyndatetime('y,m,d,0,30'),
        end: dyndatetime('y,m,d,15'),
        color: '#9333ea',
      },
      {
        resource: '2-2',
        title: 'PVG → PUS',
        start: dyndatetime('y,m,d,20'),
        end: dyndatetime('y,m,d,22'),
        color: '#9333ea',
      },
      {
        resource: '2-2',
        title: 'PUS → GUM',
        start: dyndatetime('y,m,d+1,6'),
        end: dyndatetime('y,m,d+1,11'),
        color: '#9333ea',
      },
      {
        resource: '2-2',
        title: 'GUM → AKL',
        start: dyndatetime('y,m,d+1,17'),
        end: dyndatetime('y,m,d+2,0,30'),
        color: '#9333ea',
      },
      {
        resource: '2-3',
        title: 'ORD → FRA',
        start: dyndatetime('y,m,d,16,45'),
        end: dyndatetime('y,m,d+1,7,15'),
        color: '#14b8a6',
      },
      {
        resource: '2-3',
        title: 'FRA → JED',
        start: dyndatetime('y,m,d+1,15'),
        end: dyndatetime('y,m,d+1,20,30'),
        color: '#14b8a6',
      },
      {
        resource: '2-3',
        title: 'JED → ADD',
        start: dyndatetime('y,m,d+2,4'),
        end: dyndatetime('y,m,d+2,7,45'),
        color: '#14b8a6',
      },
      {
        resource: '2-3',
        title: 'ADD → CPT',
        start: dyndatetime('y,m,d+2,12,30'),
        end: dyndatetime('y,m,d+2,20'),
        color: '#14b8a6',
      },
      {
        resource: '3-1',
        title: 'PVG → CDG',
        start: dyndatetime('y,m,d,10'),
        end: dyndatetime('y,m,d,17'),
        color: '#facc15',
      },
      {
        resource: '3-1',
        title: 'CDG → MRS',
        start: dyndatetime('y,m,d,20'),
        end: dyndatetime('y,m,d,21,30'),
        color: '#facc15',
      },
      {
        resource: '3-1',
        title: 'MRS → TUN',
        start: dyndatetime('y,m,d+1,3'),
        end: dyndatetime('y,m,d+1,4,45'),
        color: '#facc15',
      },
      {
        resource: '3-1',
        title: 'TUN → DAK',
        start: dyndatetime('y,m,d+1,12'),
        end: dyndatetime('y,m,d+1,17'),
        color: '#facc15',
      },
      {
        resource: '3-2',
        title: 'DEL → LHR',
        start: dyndatetime('y,m,d,5,30'),
        end: dyndatetime('y,m,d,10,30'),
        color: '#0ea5e9',
      },
      {
        resource: '3-2',
        title: 'LHR → TLV',
        start: dyndatetime('y,m,d,17'),
        end: dyndatetime('y,m,d,20,30'),
        color: '#0ea5e9',
      },
      {
        resource: '3-2',
        title: 'TLV → BOM',
        start: dyndatetime('y,m,d+1,3,30'),
        end: dyndatetime('y,m,d+1,10,30'),
        color: '#0ea5e9',
      },
      {
        resource: '3-2',
        title: 'BOM → DPS',
        start: dyndatetime('y,m,d+1,22'),
        end: dyndatetime('y,m,d+2,3'),
        color: '#0ea5e9',
      },
      {
        resource: '3-3',
        title: 'LAX → MEL',
        start: dyndatetime('y,m,d,10'),
        end: dyndatetime('y,m,d+1,18'),
        color: '#4f46e5',
      },
      {
        resource: '3-3',
        title: 'MEL → KUL',
        start: dyndatetime('y,m,d+1,22'),
        end: dyndatetime('y,m,d+2,6,30'),
        color: '#4f46e5',
      },
      {
        resource: '3-3',
        title: 'KUL → DOH',
        start: dyndatetime('y,m,d+2,13,30'),
        end: dyndatetime('y,m,d+2,21'),
        color: '#4f46e5',
      },
      {
        resource: '3-3',
        title: 'DOH → ATL',
        start: dyndatetime('y,m,d+3,6'),
        end: dyndatetime('y,m,d+3,21'),
        color: '#4f46e5',
      },
      {
        resource: '4-1',
        title: 'ORD → EZE',
        start: dyndatetime('y,m,d,18'),
        end: dyndatetime('y,m,d+1,6'),
        color: '#f97316',
      },
      {
        resource: '4-1',
        title: 'EZE → JNB',
        start: dyndatetime('y,m,d+1,14'),
        end: dyndatetime('y,m,d+2,1,30'),
        color: '#f97316',
      },
      {
        resource: '4-1',
        title: 'JNB → DAR',
        start: dyndatetime('y,m,d+2,7'),
        end: dyndatetime('y,m,d+2,10,45'),
        color: '#f97316',
      },
      {
        resource: '4-1',
        title: 'DAR → AUH',
        start: dyndatetime('y,m,d+2,15,30'),
        end: dyndatetime('y,m,d+2,22'),
        color: '#f97316',
      },
      {
        resource: '4-2',
        title: 'DFW → HNL',
        start: dyndatetime('y,m,d,9'),
        end: dyndatetime('y,m,d,13,30'),
        color: '#06b6d4',
      },
      {
        resource: '4-2',
        title: 'HNL → GUM',
        start: dyndatetime('y,m,d,18'),
        end: dyndatetime('y,m,d+1,5,30'),
        color: '#06b6d4',
      },
      {
        resource: '4-2',
        title: 'GUM → MNL',
        start: dyndatetime('y,m,d+1,12'),
        end: dyndatetime('y,m,d+1,16'),
        color: '#06b6d4',
      },
      {
        resource: '4-2',
        title: 'MNL → HKG',
        start: dyndatetime('y,m,d+1,23'),
        end: dyndatetime('y,m,d+2,1'),
        color: '#06b6d4',
      },
      {
        resource: '4-3',
        title: 'CDG → NRT',
        start: dyndatetime('y,m,d,13'),
        end: dyndatetime('y,m,d+1,7'),
        color: '#7f1d1d',
      },
      {
        resource: '4-3',
        title: 'NRT → TPE',
        start: dyndatetime('y,m,d+1,13'),
        end: dyndatetime('y,m,d+1,16,45'),
        color: '#7f1d1d',
      },
      {
        resource: '4-3',
        title: 'TPE → CEB',
        start: dyndatetime('y,m,d+1,23'),
        end: dyndatetime('y,m,d+2,2'),
        color: '#7f1d1d',
      },
      {
        resource: '4-3',
        title: 'CEB → ZQN',
        start: dyndatetime('y,m,d+2,10'),
        end: dyndatetime('y,m,d+2,15'),
        color: '#7f1d1d',
      },
      {
        resource: '5-1',
        title: 'MIA → LIM',
        start: dyndatetime('y,m,d,22'),
        end: dyndatetime('y,m,d+1,3,30'),
        color: '#1e40af',
      },
      {
        resource: '5-1',
        title: 'LIM → SCL',
        start: dyndatetime('y,m,d+1,7'),
        end: dyndatetime('y,m,d+1,10,30'),
        color: '#1e40af',
      },
      {
        resource: '5-1',
        title: 'SCL → EZE',
        start: dyndatetime('y,m,d+1,18'),
        end: dyndatetime('y,m,d+1,20'),
        color: '#1e40af',
      },
      {
        resource: '5-1',
        title: 'EZE → BOG',
        start: dyndatetime('y,m,d+2,4'),
        end: dyndatetime('y,m,d+2,9,30'),
        color: '#1e40af',
      },
      {
        resource: '5-2',
        title: 'JFK → LIS',
        start: dyndatetime('y,m,d,19,30'),
        end: dyndatetime('y,m,d+1,5'),
        color: '#1d4ed8',
      },
      {
        resource: '5-2',
        title: 'LIS → MAD',
        start: dyndatetime('y,m,d+1,12'),
        end: dyndatetime('y,m,d+1,13,30'),
        color: '#1d4ed8',
      },
      {
        resource: '5-2',
        title: 'MAD → CMN',
        start: dyndatetime('y,m,d+1,19,30'),
        end: dyndatetime('y,m,d+1,21'),
        color: '#1d4ed8',
      },
      {
        resource: '5-2',
        title: 'CMN → ABJ',
        start: dyndatetime('y,m,d+2,3'),
        end: dyndatetime('y,m,d+2,8'),
        color: '#1d4ed8',
      },
      {
        resource: '5-3',
        title: 'LAX → SYD',
        start: dyndatetime('y,m,d,15'),
        end: dyndatetime('y,m,d+1,6'),
        color: '#3b82f6',
      },
      {
        resource: '5-3',
        title: 'SYD → ICN',
        start: dyndatetime('y,m,d+1,17'),
        end: dyndatetime('y,m,d+2,3,30'),
        color: '#3b82f6',
      },
      {
        resource: '5-3',
        title: 'ICN → DXB',
        start: dyndatetime('y,m,d+2,14'),
        end: dyndatetime('y,m,d+2,23,30'),
        color: '#3b82f6',
      },
      {
        resource: '5-3',
        title: 'DXB → JNB',
        start: dyndatetime('y,m,d+3,7'),
        end: dyndatetime('y,m,d+3,13,30'),
        color: '#3b82f6',
      },
      {
        resource: '6-1',
        title: 'FRA → DFW',
        start: dyndatetime('y,m,d,8'),
        end: dyndatetime('y,m,d,12'),
        color: '#60a5fa',
      },
      {
        resource: '6-1',
        title: 'DFW → PHX',
        start: dyndatetime('y,m,d,16'),
        end: dyndatetime('y,m,d,20'),
        color: '#60a5fa',
      },
      {
        resource: '6-1',
        title: 'PHX → MEX',
        start: dyndatetime('y,m,d+1,4'),
        end: dyndatetime('y,m,d+1,7'),
        color: '#60a5fa',
      },
      {
        resource: '6-1',
        title: 'MEX → GYE',
        start: dyndatetime('y,m,d+1,13'),
        end: dyndatetime('y,m,d+1,18'),
        color: '#60a5fa',
      },
      {
        resource: '6-2',
        title: 'DXB → LHR',
        start: dyndatetime('y,m,d,14'),
        end: dyndatetime('y,m,d+1,18'),
        color: '#9333ea',
      },
      {
        resource: '6-2',
        title: 'LHR → PRG',
        start: dyndatetime('y,m,d+2,1'),
        end: dyndatetime('y,m,d+2,3'),
        color: '#9333ea',
      },
      {
        resource: '6-2',
        title: 'PRG → TLL',
        start: dyndatetime('y,m,d+2,10'),
        end: dyndatetime('y,m,d+2,13,30'),
        color: '#9333ea',
      },
      {
        resource: '6-2',
        title: 'TLL → HEL',
        start: dyndatetime('y,m,d+2,20'),
        end: dyndatetime('y,m,d+2,21'),
        color: '#9333ea',
      },
      {
        resource: '6-3',
        title: 'BOS → DUB',
        start: dyndatetime('y,m,d,18,30'),
        end: dyndatetime('y,m,d+1,5'),
        color: '#b91c1c',
      },
      {
        resource: '6-3',
        title: 'DUB → MXP',
        start: dyndatetime('y,m,d+1,11'),
        end: dyndatetime('y,m,d+1,13,15'),
        color: '#b91c1c',
      },
      {
        resource: '6-3',
        title: 'MXP → ATH',
        start: dyndatetime('y,m,d+1,18,30'),
        end: dyndatetime('y,m,d+1,21,30'),
        color: '#b91c1c',
      },
      {
        resource: '6-3',
        title: 'ATH → CAI',
        start: dyndatetime('y,m,d+2,3,30'),
        end: dyndatetime('y,m,d+2,5'),
        color: '#b91c1c',
      },
      {
        resource: '7-1',
        title: 'ORD → NRT',
        start: dyndatetime('y,m,d,11'),
        end: dyndatetime('y,m,d+1,14'),
        color: '#dc2626',
      },
      {
        resource: '7-1',
        title: 'NRT → PTY',
        start: dyndatetime('y,m,d+1,21'),
        end: dyndatetime('y,m,d+2,9'),
        color: '#dc2626',
      },
      {
        resource: '7-1',
        title: 'PTY → SJO',
        start: dyndatetime('y,m,d+2,16'),
        end: dyndatetime('y,m,d+2,17'),
        color: '#dc2626',
      },
      {
        resource: '7-1',
        title: 'SJO → JFK',
        start: dyndatetime('y,m,d+2,23'),
        end: dyndatetime('y,m,d+3,4,30'),
        color: '#dc2626',
      },
      {
        resource: '7-2',
        title: 'LHR → DEL',
        start: dyndatetime('y,m,d,20,30'),
        end: dyndatetime('y,m,d+1,9,30'),
        color: '#ef4444',
      },
      {
        resource: '7-2',
        title: 'DEL → AUH',
        start: dyndatetime('y,m,d+1,19,30'),
        end: dyndatetime('y,m,d+2,2'),
        color: '#ef4444',
      },
      {
        resource: '7-2',
        title: 'AUH → MRU',
        start: dyndatetime('y,m,d+2,10'),
        end: dyndatetime('y,m,d+2,16'),
        color: '#ef4444',
      },
      {
        resource: '7-2',
        title: 'MRU → PER',
        start: dyndatetime('y,m,d+2,23, 30'),
        end: dyndatetime('y,m,d+3,7'),
        color: '#ef4444',
      },
      {
        resource: '7-3',
        title: 'SFO → GRU',
        start: dyndatetime('y,m,d,23'),
        end: dyndatetime('y,m,d+1,14'),
        color: '#f87171',
      },
      {
        resource: '7-3',
        title: 'GRU → MAD',
        start: dyndatetime('y,m,d+1,23'),
        end: dyndatetime('y,m,d+2,9'),
        color: '#f87171',
      },
      {
        resource: '7-3',
        title: 'MAD → MXP',
        start: dyndatetime('y,m,d+2,14'),
        end: dyndatetime('y,m,d+2,15'),
        color: '#f87171',
      },
      {
        resource: '7-3',
        title: 'MXP → VIE',
        start: dyndatetime('y,m,d+2,23'),
        end: dyndatetime('y,m,d+3,0,30'),
        color: '#f87171',
      },
      {
        resource: '8-1',
        title: 'CDG → YUL',
        start: dyndatetime('y,m,d,10'),
        end: dyndatetime('y,m,d,11,30'),
        color: '#fca5a5',
      },
      {
        resource: '8-1',
        title: 'YUL → YVR',
        start: dyndatetime('y,m,d,16'),
        end: dyndatetime('y,m,d,20,30'),
        color: '#fca5a5',
      },
      {
        resource: '8-1',
        title: 'YVR → ANC',
        start: dyndatetime('y,m,d+2,3'),
        end: dyndatetime('y,m,d+2,7,30'),
        color: '#fca5a5',
      },
      {
        resource: '8-1',
        title: 'ANC → PUS',
        start: dyndatetime('y,m,d+2,14'),
        end: dyndatetime('y,m,d+3,0,30'),
        color: '#fca5a5',
      },
      {
        resource: '8-2',
        title: 'EWR → DXB',
        start: dyndatetime('y,m,d,23'),
        end: dyndatetime('y,m,d+1,20,30'),
        color: '#fecaca',
      },
      {
        resource: '8-2',
        title: 'DXB → JNB',
        start: dyndatetime('y,m,d+2,3'),
        end: dyndatetime('y,m,d+2,10,30'),
        color: '#fecaca',
      },
      {
        resource: '8-2',
        title: 'JNB → MRU',
        start: dyndatetime('y,m,d+2,16'),
        end: dyndatetime('y,m,d+2,20,30'),
        color: '#fecaca',
      },
      {
        resource: '8-2',
        title: 'MRU → TNR',
        start: dyndatetime('y,m,d+3,4'),
        end: dyndatetime('y,m,d+3,5,30'),
        color: '#fecaca',
      },
      {
        resource: '8-3',
        title: 'HND → LHR',
        start: dyndatetime('y,m,d,1'),
        end: dyndatetime('y,m,d,8'),
        color: '#4c0519',
      },
      {
        resource: '8-3',
        title: 'LHR → CDG',
        start: dyndatetime('y,m,d,12'),
        end: dyndatetime('y,m,d,13,15'),
        color: '#4c0519',
      },
      {
        resource: '8-3',
        title: 'CDG → GVA',
        start: dyndatetime('y,m,d,17'),
        end: dyndatetime('y,m,d,18,15'),
        color: '#4c0519',
      },
      {
        resource: '8-3',
        title: 'GVA → ZRH',
        start: dyndatetime('y,m,d+1,6'),
        end: dyndatetime('y,m,d+1,7'),
        color: '#4c0519',
      },
      //</hide-comment>
    ],
    [],
  );

  const myResources: MbscResource[] = useMemo(
    () => [
      {
        id: '1',
        name: 'A330-200 / DXB',
        eventCreation: false,
        children: [
          {
            id: '1-1',
            name: 'A6-ECC',
          },
          {
            id: '1-2',
            name: 'A6-AFA',
          },
          {
            id: '1-3',
            name: 'A6-DHB',
          },
        ],
      },
      {
        id: '2',
        name: 'A330-300 / JFK',
        eventCreation: false,
        children: [
          {
            id: '2-1',
            name: 'N733AL',
          },
          {
            id: '2-2',
            name: 'N338UA',
          },
          {
            id: '2-3',
            name: 'N412NY',
          },
        ],
      },
      //<hide-comment>
      {
        id: '3',
        name: 'A350-900 / HND',
        eventCreation: false,
        children: [
          {
            id: '3-1',
            name: 'JA01XH',
          },
          {
            id: '3-2',
            name: 'JA359A',
          },
          {
            id: '3-3',
            name: 'JA602K',
          },
        ],
      },
      {
        id: '4',
        name: 'A350-1000 / LHR',
        eventCreation: false,
        children: [
          {
            id: '4-1',
            name: 'G-VLRH',
          },
          {
            id: '4-2',
            name: 'G-A35X',
          },
          {
            id: '4-3',
            name: 'G-LNDR',
          },
        ],
      },
      {
        id: '5',
        name: 'A380 / IST',
        eventCreation: false,
        children: [
          {
            id: '5-1',
            name: 'TC-A80A',
          },
          {
            id: '5-2',
            name: 'TC-TKM',
          },
          {
            id: '5-3',
            name: 'TC-IST',
          },
        ],
      },
      {
        id: '6',
        name: 'B777-300ER / PVG',
        eventCreation: false,
        children: [
          {
            id: '6-1',
            name: 'B-207W',
          },
          {
            id: '6-2',
            name: 'B-7389',
          },
          {
            id: '6-3',
            name: 'B-30ER',
          },
        ],
      },
      {
        id: '7',
        name: 'B787-8 / DEL',
        eventCreation: false,
        children: [
          {
            id: '7-1',
            name: 'VT-788A',
          },
          {
            id: '7-2',
            name: 'VT-DLI',
          },
          {
            id: '7-3',
            name: 'VT-BLR',
          },
        ],
      },
      {
        id: '8',
        name: 'B747-8 / CDG',
        eventCreation: false,
        children: [
          {
            id: '8-1',
            name: 'F-GIGA',
          },
          {
            id: '8-2',
            name: 'F-748A',
          },
          {
            id: '8-3',
            name: 'F-CDGX',
          },
        ],
      },
      //</hide-comment>
    ],
    [],
  );

  const myView: MbscEventcalendarView = useMemo(
    () => ({
      timeline: {
        type: 'day',
        startTime,
        endTime,
      },
    }),
    [startTime, endTime],
  );

  const customResourceHeader = useCallback(
    () => (
      <div className="mds-36-hour-resource-header">
        TIMES SHOWN IN <span className="mds-36-hour-resource-header-utc">UTC</span>
      </div>
    ),
    [],
  );

  return (
    <Eventcalendar
      cssClass="mds-36-hour-rolling-calendar"
      data={myEvents}
      dataTimezone="utc"
      displayTimezone="utc"
      view={myView}
      resources={myResources}
      showControls={false}
      renderResourceHeader={customResourceHeader}
      timezonePlugin={dayjsTimezone}
    />
  );
};

export default App;
