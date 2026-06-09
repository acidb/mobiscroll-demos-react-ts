import {
  Button,
  Checkbox,
  Datepicker,
  Draggable,
  Eventcalendar,
  formatDate,
  Input,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscDatepickerChangeEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventCreateFailedEvent,
  MbscEventDragEvent,
  MbscEventUpdateFailedEvent,
  MbscPageLoadedEvent,
  MbscPopupButton,
  MbscResource,
  MbscSelectChangeEvent,
  Page,
  Popup,
  Segmented,
  SegmentedGroup,
  Select,
  setOptions,
  Toast,
} from '@mobiscroll/react';
import { ChangeEvent, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { dyndatetime } from '../../../../dyndatetime';
import './truck-transport-planning-and-dispatch.css';

setOptions({
  // localeJs,
  // themeJs
});

const statusColors: Record<string, string> = {
  scheduled: '#2196f3',
  'in progress': '#f97316',
  completed: '#78909c',
};

const maintenanceColors: Record<string, string> = {
  'in-maintenance': '#f44336',
  'maintenance-planned': '#ff9800',
  operational: '#4caf50',
};

const maintenanceLabels: Record<string, string> = {
  'in-maintenance': 'In Maintenance',
  'maintenance-planned': 'Maintenance Planned',
  operational: 'Operational',
};

interface TruckResource extends MbscResource {
  capacity?: number;
  status?: string;
  plate?: string;
  maintenanceFrom?: Date | string;
  maintenanceTo?: Date | string;
  isParent?: boolean;
}

interface CapacityGroup extends MbscResource {
  children: TruckResource[];
}

interface ExternalJob {
  id: number;
  from: string;
  to: string;
  size: number;
  pickup: [Date | string, Date | string];
  drop: [Date | string, Date | string];
  start?: Date | string;
  end?: Date | string;
  title?: string;
}

interface DispatchEvent extends MbscCalendarEvent {
  from?: string;
  to?: string;
  size?: number;
  pickup?: [Date | string, Date | string];
  drop?: [Date | string, Date | string];
  status?: string;
  actual?: boolean;
  actualRef?: DispatchEvent;
}

interface JobListItem {
  type: 'header' | 'job';
  label?: string;
  key: string;
  job?: ExternalJob;
}

type Filters = Record<string, boolean>;

interface CalendarMethods {
  navigate(date: Date): void;
  getEvents(): MbscCalendarEvent[];
  updateEvent(event: MbscCalendarEvent): void;
  addEvent(event: MbscCalendarEvent): void;
  navigateToEvent(event: { start?: Date | string; resource?: string | number }): void;
}

const allResources: CapacityGroup[] = [
  {
    id: 'cap1',
    name: '3.5 tons capacity',
    eventCreation: false,
    children: [
      { id: 1, name: 'Isuzu N-Series N35', capacity: 3.5, status: 'operational', plate: 'AB14 KTP' },
      {
        id: '1-actual',
        name: '',
        capacity: 3.5,
        status: 'operational',
        plate: 'AB14 KTP',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      { id: 2, name: 'Mercedes-Benz Sprinter 3500', capacity: 3.5, status: 'operational', plate: 'FR19 XDL' },
      {
        id: '2-actual',
        name: '',
        capacity: 3.5,
        status: 'operational',
        plate: 'FR19 XDL',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      {
        id: 3,
        name: 'Ford Transit 350',
        capacity: 3.5,
        status: 'operational',
        plate: 'QN62 RPV',
        maintenanceFrom: dyndatetime('y,m,d-2,0'),
        maintenanceTo: dyndatetime('y,m,d+2,0'),
      },
      {
        id: '3-actual',
        name: '',
        capacity: 3.5,
        status: 'operational',
        plate: 'QN62 RPV',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
        maintenanceFrom: dyndatetime('y,m,d-2,0'),
        maintenanceTo: dyndatetime('y,m,d+2,0'),
      },
    ],
  },
  {
    id: 'cap2',
    name: '7 tons capacity',
    eventCreation: false,
    children: [
      { id: 4, name: 'Ford F-650 Super Duty', capacity: 7, status: 'operational', plate: 'GR12 PEV' },
      {
        id: '4-actual',
        name: '',
        capacity: 7,
        status: 'operational',
        plate: 'GR12 PEV',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      { id: 5, name: 'Isuzu F-Series FTR', capacity: 7, status: 'operational', plate: 'MB27 FTK' },
      {
        id: '5-actual',
        name: '',
        capacity: 7,
        status: 'operational',
        plate: 'MB27 FTK',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      {
        id: 6,
        name: 'Hino 300 Series 716',
        capacity: 7,
        status: 'operational',
        plate: 'KT73 ZLD',
        maintenanceFrom: dyndatetime('y,m,d+2,0'),
        maintenanceTo: dyndatetime('y,m,d+5,0'),
      },
      {
        id: '6-actual',
        name: '',
        capacity: 7,
        status: 'operational',
        plate: 'KT73 ZLD',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
        maintenanceFrom: dyndatetime('y,m,d+2,0'),
        maintenanceTo: dyndatetime('y,m,d+5,0'),
      },
    ],
  },
  {
    id: 'cap3',
    name: '12 tons capacity',
    eventCreation: false,
    children: [
      { id: 7, name: 'Hino 500 Series FD', capacity: 12, status: 'operational', plate: 'EP17 GMF' },
      {
        id: '7-actual',
        name: '',
        capacity: 12,
        status: 'operational',
        plate: 'EP17 GMF',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      { id: 8, name: 'Isuzu F-Series FVR', capacity: 12, status: 'operational', plate: 'DS41 CXP' },
      {
        id: '8-actual',
        name: '',
        capacity: 12,
        status: 'operational',
        plate: 'DS41 CXP',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      {
        id: 9,
        name: 'Mercedes-Benz Atego 1218',
        capacity: 12,
        status: 'operational',
        plate: 'NH65 QWD',
        maintenanceFrom: dyndatetime('y,m,d-1,0'),
        maintenanceTo: dyndatetime('y,m,d+1,0'),
      },
      {
        id: '9-actual',
        name: '',
        capacity: 12,
        status: 'operational',
        plate: 'NH65 QWD',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
        maintenanceFrom: dyndatetime('y,m,d-1,0'),
        maintenanceTo: dyndatetime('y,m,d+1,0'),
      },
    ],
  },
  {
    id: 'cap4',
    name: '20 tons capacity',
    eventCreation: false,
    children: [
      { id: 10, name: 'Mercedes Actros 2545', capacity: 20, status: 'operational', plate: 'KT19 LNV' },
      {
        id: '10-actual',
        name: '',
        capacity: 20,
        status: 'operational',
        plate: 'KT19 LNV',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      { id: 11, name: 'DAF XF 530', capacity: 20, status: 'operational', plate: 'WP64 GBX' },
      {
        id: '11-actual',
        name: '',
        capacity: 20,
        status: 'operational',
        plate: 'WP64 GBX',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      {
        id: 12,
        name: 'Renault T High 520',
        capacity: 20,
        status: 'operational',
        plate: 'CD70 UJE',
        maintenanceFrom: dyndatetime('y,m,d+4,0'),
        maintenanceTo: dyndatetime('y,m,d+7,0'),
      },
      {
        id: '12-actual',
        name: '',
        capacity: 20,
        status: 'operational',
        plate: 'CD70 UJE',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
        maintenanceFrom: dyndatetime('y,m,d+4,0'),
        maintenanceTo: dyndatetime('y,m,d+7,0'),
      },
    ],
  },
  {
    id: 'cap5',
    name: '24 tons capacity',
    eventCreation: false,
    children: [
      { id: 13, name: 'Volvo FH16', capacity: 24, status: 'operational', plate: 'BD67 HTA' },
      {
        id: '13-actual',
        name: '',
        capacity: 24,
        status: 'operational',
        plate: 'BD67 HTA',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      { id: 14, name: 'Freightliner Cascadia', capacity: 24, status: 'operational', plate: 'VA18 RQW' },
      {
        id: '14-actual',
        name: '',
        capacity: 24,
        status: 'operational',
        plate: 'VA18 RQW',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
      { id: 15, name: 'Kenworth T680', capacity: 24, status: 'operational', plate: 'HY22 BPL' },
      {
        id: '15-actual',
        name: '',
        capacity: 24,
        status: 'operational',
        plate: 'HY22 BPL',
        eventCreation: false,
        cssClass: 'mds-dispatch-actual-resource',
      },
    ],
  },
];

function buildMaintenanceInvalids(): MbscCalendarEvent[] {
  const invalids: MbscCalendarEvent[] = [];
  allResources.forEach((group) => {
    group.children.forEach((resource) => {
      if (resource.maintenanceFrom && resource.maintenanceTo && !String(resource.id).includes('actual')) {
        invalids.push({
          start: resource.maintenanceFrom,
          end: resource.maintenanceTo,
          resource: resource.id,
          cssClass: 'mds-dispatch-maintenance-invalid',
        });
      }
    });
  });
  return invalids;
}

function initEvents(): DispatchEvent[] {
  return [
    {
      resource: 1,
      from: '100 Main St, Dallas, TX',
      to: '50 Congress Ave, Tulsa, OK',
      size: 3,
      pickup: [dyndatetime('y,m,d-1,8'), dyndatetime('y,m,d-1,10')],
      drop: [dyndatetime('y,m,d-1,12'), dyndatetime('y,m,d-1,14')],
      status: 'completed',
    },
    {
      resource: 2,
      from: '200 Elm St, Fargo, ND',
      to: '75 N 3rd St, Bismarck, ND',
      size: 2.5,
      pickup: [dyndatetime('y,m,d,9'), dyndatetime('y,m,d,11')],
      drop: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
      status: 'in progress',
    },
    {
      resource: 3,
      from: '150 Broadway, Manchester, NH',
      to: '50 Kennedy Memorial Dr, Waterville, ME',
      size: 3.5,
      pickup: [dyndatetime('y,m,d+3,7'), dyndatetime('y,m,d+3,9')],
      drop: [dyndatetime('y,m,d+3,12'), dyndatetime('y,m,d+3,14')],
      status: 'scheduled',
    },
    {
      resource: 1,
      from: '50 N Main St, Phoenix, AZ',
      to: '200 Broadway Ave, Albuquerque, NM',
      size: 3,
      pickup: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,12')],
      drop: [dyndatetime('y,m,d+3,15'), dyndatetime('y,m,d+3,17')],
      status: 'scheduled',
    },
    {
      resource: 4,
      from: '85 Arch St, Boston, MA',
      to: '40 Middle St, Portland, ME',
      size: 6.5,
      pickup: [dyndatetime('y,m,d-1,8'), dyndatetime('y,m,d-1,10')],
      drop: [dyndatetime('y,m,d-1,12'), dyndatetime('y,m,d-1,14')],
      status: 'completed',
    },
    {
      resource: 5,
      from: '300 E Main St, Richmond, VA',
      to: '100 S Tryon St, Charlotte, NC',
      size: 7,
      pickup: [dyndatetime('y,m,d,5'), dyndatetime('y,m,d,7')],
      drop: [dyndatetime('y,m,d,10'), dyndatetime('y,m,d,12')],
      status: 'completed',
    },
    {
      resource: 6,
      from: '900 W Belmont Ave, Chicago, IL',
      to: '300 Market St, St Louis, MO',
      size: 6,
      pickup: [dyndatetime('y,m,d+6,9'), dyndatetime('y,m,d+6,11')],
      drop: [dyndatetime('y,m,d+6,14'), dyndatetime('y,m,d+6,16')],
      status: 'scheduled',
    },
    {
      resource: 4,
      from: '250 King St, Greensboro, NC',
      to: '200 Hay St, Fayetteville, NC',
      size: 6.5,
      pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
      drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,20')],
      status: 'scheduled',
    },
    {
      resource: 7,
      from: '233 S Wacker Dr, Chicago, IL',
      to: '10 Public Square, Cleveland, OH',
      size: 11,
      pickup: [dyndatetime('y,m,d,8'), dyndatetime('y,m,d,11')],
      drop: [dyndatetime('y,m,d,16'), dyndatetime('y,m,d,19')],
      status: 'scheduled',
    },
    {
      resource: 8,
      from: '180 S High St, Columbus, OH',
      to: '75 E Main St, Lexington, KY',
      size: 12,
      pickup: [dyndatetime('y,m,d+2,7'), dyndatetime('y,m,d+2,10')],
      drop: [dyndatetime('y,m,d+2,15'), dyndatetime('y,m,d+2,18')],
      status: 'scheduled',
    },
    {
      resource: 9,
      from: '100 E Capitol St, Jackson, MS',
      to: '250 Riverfront Pkwy, Chattanooga, TN',
      size: 10,
      pickup: [dyndatetime('y,m,d+5,7'), dyndatetime('y,m,d+5,10')],
      drop: [dyndatetime('y,m,d+5,16'), dyndatetime('y,m,d+5,19')],
      status: 'scheduled',
    },
    {
      resource: 7,
      from: '50 Arch St, Boston, MA',
      to: '200 Middle St, Portland, ME',
      size: 9,
      pickup: [dyndatetime('y,m,d+6,8'), dyndatetime('y,m,d+6,10')],
      drop: [dyndatetime('y,m,d+6,12'), dyndatetime('y,m,d+6,14')],
      status: 'scheduled',
    },
    {
      resource: 10,
      from: '50 N 1st Ave, Phoenix, AZ',
      to: '200 Broadway Ave, Albuquerque, NM',
      size: 20,
      pickup: [dyndatetime('y,m,d,10'), dyndatetime('y,m,d,13')],
      drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,21')],
      status: 'in progress',
    },
    {
      resource: 11,
      from: '120 Broadway, New York, NY',
      to: '55 Canal St, New Orleans, LA',
      size: 18,
      pickup: [dyndatetime('y,m,d+3,6'), dyndatetime('y,m,d+3,9')],
      drop: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,14')],
      status: 'scheduled',
    },
    {
      resource: 12,
      from: '600 Poydras St, New Orleans, LA',
      to: '200 Commerce St, Montgomery, AL',
      size: 20,
      pickup: [dyndatetime('y,m,d+7,6'), dyndatetime('y,m,d+7,9')],
      drop: [dyndatetime('y,m,d+7,14'), dyndatetime('y,m,d+7,17')],
      status: 'scheduled',
    },
    {
      resource: 10,
      from: '120 Main St, Boston, MA',
      to: '50 Canal St, New Orleans, LA',
      size: 19,
      pickup: [dyndatetime('y,m,d+1,7'), dyndatetime('y,m,d+1,10')],
      drop: [dyndatetime('y,m,d+1,14'), dyndatetime('y,m,d+1,17')],
      status: 'scheduled',
    },
    {
      resource: 13,
      from: '100 Main St, Dallas, TX',
      to: '15 Broadway St, Denver, CO',
      size: 22,
      pickup: [dyndatetime('y,m,d,7'), dyndatetime('y,m,d,10')],
      drop: [dyndatetime('y,m,d+1,4'), dyndatetime('y,m,d+1,8')],
      status: 'scheduled',
    },
    {
      resource: 14,
      from: '300 Main St, Houston, TX',
      to: '120 W Capitol Ave, Little Rock, AR',
      size: 24,
      pickup: [dyndatetime('y,m,d+2,10'), dyndatetime('y,m,d+2,13')],
      drop: [dyndatetime('y,m,d+2,18'), dyndatetime('y,m,d+2,22')],
      status: 'scheduled',
    },
    {
      resource: 15,
      from: '900 S Flower St, Los Angeles, CA',
      to: '300 2nd Ave, Seattle, WA',
      size: 23,
      pickup: [dyndatetime('y,m,d+5,5'), dyndatetime('y,m,d+5,8')],
      drop: [dyndatetime('y,m,d+5,12'), dyndatetime('y,m,d+5,16')],
      status: 'scheduled',
    },
    {
      resource: 13,
      from: '350 S Spring St, Los Angeles, CA',
      to: '500 E Rim Rd, El Paso, TX',
      size: 24,
      pickup: [dyndatetime('y,m,d+8,6'), dyndatetime('y,m,d+8,9')],
      drop: [dyndatetime('y,m,d+8,18'), dyndatetime('y,m,d+8,21')],
      status: 'scheduled',
    },
    {
      resource: 14,
      from: '200 Market St, Philadelphia, PA',
      to: '400 Washington Ave, Minneapolis, MN',
      size: 23,
      pickup: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,16')],
      drop: [dyndatetime('y,m,d+3,20'), dyndatetime('y,m,d+3,23')],
      status: 'scheduled',
    },
    {
      resource: 15,
      from: '500 S Wacker Dr, Chicago, IL',
      to: '100 State St, Portland, ME',
      size: 24,
      pickup: [dyndatetime('y,m,d+6,8'), dyndatetime('y,m,d+6,11')],
      drop: [dyndatetime('y,m,d+6,16'), dyndatetime('y,m,d+6,19')],
      status: 'scheduled',
    },
    {
      resource: 1,
      from: '300 W Madison St, Chicago, IL',
      to: '500 Euclid Ave, Cleveland, OH',
      size: 3,
      pickup: [dyndatetime('y,m,d+1,8'), dyndatetime('y,m,d+1,10')],
      drop: [dyndatetime('y,m,d+1,13'), dyndatetime('y,m,d+1,16')],
      status: 'scheduled',
    },
    {
      resource: 4,
      from: '800 N 3rd St, Philadelphia, PA',
      to: '200 W Baltimore St, Baltimore, MD',
      size: 6.5,
      pickup: [dyndatetime('y,m,d+2,7'), dyndatetime('y,m,d+2,9')],
      drop: [dyndatetime('y,m,d+2,12'), dyndatetime('y,m,d+2,15')],
      status: 'scheduled',
    },
    {
      resource: 5,
      from: '900 Biscayne Blvd, Miami, FL',
      to: '400 N Orange Ave, Orlando, FL',
      size: 7,
      pickup: [dyndatetime('y,m,d+1,9'), dyndatetime('y,m,d+1,11')],
      drop: [dyndatetime('y,m,d+1,14'), dyndatetime('y,m,d+1,18')],
      status: 'scheduled',
    },
    {
      resource: 7,
      from: '100 S 5th St, Minneapolis, MN',
      to: '300 W Kellogg Blvd, St Paul, MN',
      size: 9,
      pickup: [dyndatetime('y,m,d+3,8'), dyndatetime('y,m,d+3,10')],
      drop: [dyndatetime('y,m,d+3,14'), dyndatetime('y,m,d+3,17')],
      status: 'scheduled',
    },
    {
      resource: 8,
      from: '500 W 2nd St, Austin, TX',
      to: '2200 Post Oak Blvd, Houston, TX',
      size: 12,
      pickup: [dyndatetime('y,m,d+4,7'), dyndatetime('y,m,d+4,10')],
      drop: [dyndatetime('y,m,d+4,15'), dyndatetime('y,m,d+4,18')],
      status: 'scheduled',
    },
    {
      resource: 11,
      from: '600 Grant St, Pittsburgh, PA',
      to: '200 W Washington St, Indianapolis, IN',
      size: 18,
      pickup: [dyndatetime('y,m,d+1,6'), dyndatetime('y,m,d+1,9')],
      drop: [dyndatetime('y,m,d+1,16'), dyndatetime('y,m,d+1,20')],
      status: 'scheduled',
    },
    {
      resource: 14,
      from: '400 N Michigan Ave, Chicago, IL',
      to: '250 E Wisconsin Ave, Milwaukee, WI',
      size: 23,
      pickup: [dyndatetime('y,m,d+5,8'), dyndatetime('y,m,d+5,11')],
      drop: [dyndatetime('y,m,d+5,15'), dyndatetime('y,m,d+5,18')],
      status: 'scheduled',
    },
    {
      resource: 13,
      from: '700 Figueroa St, Los Angeles, CA',
      to: '50 W San Fernando St, San Jose, CA',
      size: 22,
      pickup: [dyndatetime('y,m,d+4,6'), dyndatetime('y,m,d+4,9')],
      drop: [dyndatetime('y,m,d+4,17'), dyndatetime('y,m,d+4,21')],
      status: 'scheduled',
    },
  ].map((e) => ({ ...e, start: e.pickup[0], end: e.drop[0], title: e.from + ' → ' + e.to })) as DispatchEvent[];
}

const allExternalEvents: ExternalJob[] = [
  {
    id: 1,
    from: '2000 Q St, Sacramento, CA',
    to: '500 Poydras St, New Orleans, LA',
    size: 9,
    pickup: [dyndatetime('y,m,d,9'), dyndatetime('y,m,d,11')],
    drop: [dyndatetime('y,m,d,12'), dyndatetime('y,m,d,17')],
  },
  {
    id: 2,
    from: '100 State St, Madison, WI',
    to: '300 S Wacker Dr, Chicago, IL',
    size: 22,
    pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
    drop: [dyndatetime('y,m,d,16'), dyndatetime('y,m,d,21')],
  },
  {
    id: 3,
    from: '1500 Market St, Philadelphia, PA',
    to: '600 Liberty St, Pittsburgh, PA',
    size: 13,
    pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,17')],
    drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,22')],
  },
  {
    id: 25,
    from: '350 Fifth Ave, New York, NY',
    to: '100 Broad St, Newark, NJ',
    size: 3.5,
    pickup: [dyndatetime('y,m,d,14'), dyndatetime('y,m,d,16')],
    drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,21')],
  },
  {
    id: 26,
    from: '800 Market St, San Francisco, CA',
    to: '400 Capitol Mall, Sacramento, CA',
    size: 6,
    pickup: [dyndatetime('y,m,d,15'), dyndatetime('y,m,d,17')],
    drop: [dyndatetime('y,m,d,19'), dyndatetime('y,m,d,22')],
  },
  {
    id: 4,
    from: '1100 Congress Ave, Austin, TX',
    to: '500 E Main St, Dallas, TX',
    size: 20,
    pickup: [dyndatetime('y,m,d+1,7'), dyndatetime('y,m,d+1,9')],
    drop: [dyndatetime('y,m,d+1,10'), dyndatetime('y,m,d+1,15')],
  },
  {
    id: 5,
    from: '200 Peachtree St NW, Atlanta, GA',
    to: '50 Music Sq E, Nashville, TN',
    size: 8,
    pickup: [dyndatetime('y,m,d+1,8'), dyndatetime('y,m,d+1,10')],
    drop: [dyndatetime('y,m,d+1,12'), dyndatetime('y,m,d+1,16')],
  },
  {
    id: 6,
    from: '500 Boylston St, Boston, MA',
    to: '200 State St, Portland, ME',
    size: 3.5,
    pickup: [dyndatetime('y,m,d+1,8,30'), dyndatetime('y,m,d+1,10,30')],
    drop: [dyndatetime('y,m,d+1,12,30'), dyndatetime('y,m,d+1,18,30')],
  },
  {
    id: 27,
    from: '200 S Lamar Blvd, Austin, TX',
    to: '500 Commerce St, Dallas, TX',
    size: 19,
    pickup: [dyndatetime('y,m,d+1,13'), dyndatetime('y,m,d+1,15')],
    drop: [dyndatetime('y,m,d+1,18'), dyndatetime('y,m,d+1,22')],
  },
  {
    id: 28,
    from: '300 W Colfax Ave, Denver, CO',
    to: '100 N Main St, Pueblo, CO',
    size: 10,
    pickup: [dyndatetime('y,m,d+2,10'), dyndatetime('y,m,d+2,12')],
    drop: [dyndatetime('y,m,d+2,14'), dyndatetime('y,m,d+2,18')],
  },
  {
    id: 7,
    from: '400 S 4th St, Louisville, KY',
    to: '1400 Main St, Cincinnati, OH',
    size: 7,
    pickup: [dyndatetime('y,m,d+2,6'), dyndatetime('y,m,d+2,8')],
    drop: [dyndatetime('y,m,d+2,9'), dyndatetime('y,m,d+2,12')],
  },
  {
    id: 8,
    from: '410 S Houston Ave, Tulsa, OK',
    to: '250 W Capitol Ave, Little Rock, AR',
    size: 11.5,
    pickup: [dyndatetime('y,m,d+2,6,30'), dyndatetime('y,m,d+2,8,30')],
    drop: [dyndatetime('y,m,d+2,10,30'), dyndatetime('y,m,d+2,15,30')],
  },
  {
    id: 29,
    from: '450 Sutter St, San Francisco, CA',
    to: '200 Pine Ave, Long Beach, CA',
    size: 22,
    pickup: [dyndatetime('y,m,d+3,7'), dyndatetime('y,m,d+3,9')],
    drop: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,17')],
  },
  {
    id: 9,
    from: '999 3rd Ave, Seattle, WA',
    to: '500 W 8th St, Vancouver, WA',
    size: 3,
    pickup: [dyndatetime('y,m,d+3,9'), dyndatetime('y,m,d+3,11')],
    drop: [dyndatetime('y,m,d+3,12'), dyndatetime('y,m,d+3,17')],
  },
  {
    id: 10,
    from: '50 S Main St, Salt Lake City, UT',
    to: '300 N Broadway, Denver, CO',
    size: 5,
    pickup: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,12')],
    drop: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,18')],
  },
  {
    id: 11,
    from: '300 S Grand Ave, Los Angeles, CA',
    to: '400 E Van Buren St, Phoenix, AZ',
    size: 5,
    pickup: [dyndatetime('y,m,d+7,8'), dyndatetime('y,m,d+7,10')],
    drop: [dyndatetime('y,m,d+7,13'), dyndatetime('y,m,d+7,18')],
  },
  {
    id: 12,
    from: '200 W Washington St, Indianapolis, IN',
    to: '100 N Main St, Louisville, KY',
    size: 18,
    pickup: [dyndatetime('y,m,d+8,7'), dyndatetime('y,m,d+8,9')],
    drop: [dyndatetime('y,m,d+8,12'), dyndatetime('y,m,d+8,17')],
  },
  {
    id: 13,
    from: '500 N Michigan Ave, Chicago, IL',
    to: '250 Marquette Ave, Minneapolis, MN',
    size: 3,
    pickup: [dyndatetime('y,m,d+9,9'), dyndatetime('y,m,d+9,11')],
    drop: [dyndatetime('y,m,d+9,14'), dyndatetime('y,m,d+9,19')],
  },
  {
    id: 14,
    from: '600 Congress Ave, Austin, TX',
    to: '700 Texas Ave, Houston, TX',
    size: 12,
    pickup: [dyndatetime('y,m,d+10,6'), dyndatetime('y,m,d+10,8')],
    drop: [dyndatetime('y,m,d+10,11'), dyndatetime('y,m,d+10,16')],
  },
  {
    id: 15,
    from: '100 Broad St, Newark, NJ',
    to: '200 S Orange Ave, Orlando, FL',
    size: 7,
    pickup: [dyndatetime('y,m,d+12,10'), dyndatetime('y,m,d+12,12')],
    drop: [dyndatetime('y,m,d+12,15'), dyndatetime('y,m,d+12,20')],
  },
  {
    id: 16,
    from: '400 Pike St, Seattle, WA',
    to: '800 SW Broadway, Portland, OR',
    size: 9,
    pickup: [dyndatetime('y,m,d+14,7'), dyndatetime('y,m,d+14,9')],
    drop: [dyndatetime('y,m,d+14,12'), dyndatetime('y,m,d+14,16')],
  },
  {
    id: 17,
    from: '300 Main St, Buffalo, NY',
    to: '500 Euclid Ave, Cleveland, OH',
    size: 22,
    pickup: [dyndatetime('y,m,d+15,8'), dyndatetime('y,m,d+15,11')],
    drop: [dyndatetime('y,m,d+15,14'), dyndatetime('y,m,d+15,19')],
  },
  {
    id: 18,
    from: '150 S Miami Ave, Miami, FL',
    to: '300 Peachtree St, Atlanta, GA',
    size: 6,
    pickup: [dyndatetime('y,m,d+16,9'), dyndatetime('y,m,d+16,11')],
    drop: [dyndatetime('y,m,d+16,13'), dyndatetime('y,m,d+16,18')],
  },
  {
    id: 19,
    from: '700 W 3rd St, Kansas City, MO',
    to: '400 N Broadway, St Louis, MO',
    size: 15,
    pickup: [dyndatetime('y,m,d+18,6'), dyndatetime('y,m,d+18,8')],
    drop: [dyndatetime('y,m,d+18,10'), dyndatetime('y,m,d+18,15')],
  },
  {
    id: 20,
    from: '250 E Houston St, San Antonio, TX',
    to: '1200 Commerce St, Dallas, TX',
    size: 4,
    pickup: [dyndatetime('y,m,d+19,11'), dyndatetime('y,m,d+19,13')],
    drop: [dyndatetime('y,m,d+19,15'), dyndatetime('y,m,d+19,20')],
  },
  {
    id: 21,
    from: '800 N Michigan Ave, Chicago, IL',
    to: '500 Woodward Ave, Detroit, MI',
    size: 11,
    pickup: [dyndatetime('y,m,d+21,7'), dyndatetime('y,m,d+21,9')],
    drop: [dyndatetime('y,m,d+21,12'), dyndatetime('y,m,d+21,17')],
  },
  {
    id: 22,
    from: '900 Market St, San Francisco, CA',
    to: '600 Wilshire Blvd, Los Angeles, CA',
    size: 20,
    pickup: [dyndatetime('y,m,d+22,8'), dyndatetime('y,m,d+22,10')],
    drop: [dyndatetime('y,m,d+22,14'), dyndatetime('y,m,d+22,19')],
  },
  {
    id: 23,
    from: '350 5th Ave, New York, NY',
    to: '100 Federal St, Boston, MA',
    size: 3.5,
    pickup: [dyndatetime('y,m,d+23,9'), dyndatetime('y,m,d+23,11')],
    drop: [dyndatetime('y,m,d+23,13'), dyndatetime('y,m,d+23,17')],
  },
  {
    id: 24,
    from: '200 S Tryon St, Charlotte, NC',
    to: '100 N Main St, Greenville, SC',
    size: 8,
    pickup: [dyndatetime('y,m,d+25,6'), dyndatetime('y,m,d+25,8')],
    drop: [dyndatetime('y,m,d+25,10'), dyndatetime('y,m,d+25,14')],
  },
];

function initExternalEvents(): ExternalJob[] {
  const events = allExternalEvents.map((e) => ({ ...e }));
  events.forEach((ev) => {
    ev.start = ev.start || ev.pickup[0];
    ev.end = ev.end || ev.drop[0];
    ev.title = ev.from + ' → ' + ev.to;
  });
  return events;
}

function getResourceMaintenanceStatus(resource: TruckResource, now: Date, currentViewStart: Date, currentViewEnd: Date): string {
  if (!resource.maintenanceFrom || !resource.maintenanceTo) return 'operational';
  const from = new Date(resource.maintenanceFrom as string);
  const to = new Date(resource.maintenanceTo as string);
  if (now >= from && now <= to) return 'in-maintenance';
  if (from < currentViewEnd && to > currentViewStart) return 'maintenance-planned';
  return 'operational';
}

function buildViewConfig(days: number): MbscEventcalendarView {
  return {
    timeline: {
      type: 'day',
      size: days,
      timeCellStep: 60,
      timeLabelStep: 60,
      eventHeight: 'variable',
      zoomLevels: {
        1: { type: 'day', size: days, columnWidth: 'xsmall', timeCellStep: 240, timeLabelStep: 240 },
        2: { type: 'day', size: days, columnWidth: 'small', timeCellStep: 120, timeLabelStep: 120 },
        3: { type: 'day', size: days, columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
        4: { type: 'day', size: days, columnWidth: 'xlarge', timeCellStep: 30, timeLabelStep: 60 },
        5: { type: 'day', size: days, columnWidth: 'xlarge', timeCellStep: 15, timeLabelStep: 60 },
      },
    },
  };
}

function JobCard({ job }: { job: ExternalJob }) {
  const [elem, setElem] = useState<HTMLDivElement | null>(null);
  return (
    <div ref={setElem} className="mds-dispatch-jobs mbsc-flex">
      <div className="mds-dispatch-job-route">
        <div className="mds-dispatch-job-stop mbsc-flex">
          <span className="mds-dispatch-job-dot mds-dispatch-job-dot-origin"></span>
          <span className="mds-dispatch-job-addr">{job.from}</span>
        </div>
        <div className="mds-dispatch-job-connector"></div>
        <div className="mds-dispatch-job-stop mbsc-flex">
          <span className="mds-dispatch-job-dot mds-dispatch-job-dot-dest"></span>
          <span className="mds-dispatch-job-addr">{job.to}</span>
        </div>
      </div>
      <div className="mds-dispatch-job-meta mbsc-flex-col mbsc-flex-none">
        <span className="mds-dispatch-job-time">
          {formatDate('H:mm', new Date(job.pickup[0] as string))} – {formatDate('H:mm', new Date(job.drop[1] as string))}
        </span>
        <span className="mds-dispatch-job-size">{job.size} t</span>
      </div>
      <Draggable dragData={job} element={elem} />
    </div>
  );
}

interface ResourceHeaderProps {
  onSearch: (q: string) => void;
  onFilterOpen: (e: MouseEvent<HTMLButtonElement>) => void;
}

function ResourceHeader({ onSearch, onFilterOpen }: ResourceHeaderProps) {
  const [query, setQuery] = useState<string>('');

  return (
    <div className="mbsc-flex mbsc-align-items-center mbsc-font mds-dispatch-search">
      <Input
        className="mbsc-flex-1-1"
        type="text"
        inputStyle="outline"
        startIcon="material-search"
        autoComplete="off"
        placeholder="Search..."
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const q = e.target.value.toLowerCase();
          setQuery(q);
          onSearch(q);
        }}
      />
      <Button startIcon="material-filter-list" variant="outline" className="mbsc-flex-none" onClick={onFilterOpen}>
        Filter
      </Button>
    </div>
  );
}

function App() {
  const _initNow = new Date();
  const _initToday = new Date(_initNow.getFullYear(), _initNow.getMonth(), _initNow.getDate());
  const nowRef = useRef<Date>(_initNow);
  const todayRef = useRef<Date>(_initToday);
  const searchQueryRef = useRef<string>('');
  const calendarRef = useRef<(Eventcalendar & CalendarMethods) | null>(null);
  const myEventsRef = useRef<DispatchEvent[]>(null!);
  if (!myEventsRef.current) myEventsRef.current = initEvents();
  const externalEventsRef = useRef<ExternalJob[]>(null!);
  if (!externalEventsRef.current) externalEventsRef.current = initExternalEvents();
  const scheduledJobIdsRef = useRef<number[]>([]);
  const myInvalidsRef = useRef<MbscCalendarEvent[]>([]);
  const currentViewStartRef = useRef<Date>(_initToday);
  const currentViewEndRef = useRef<Date>(new Date(_initToday.getTime() + 7 * 24 * 60 * 60 * 1000));
  const currentRangeStartRef = useRef<Date>(_initToday);
  const currentRangeDaysRef = useRef<number>(7);
  const pendingRangeStartRef = useRef<Date>(_initToday);
  const pendingRangeDaysRef = useRef<number>(7);
  const filterPopupRef = useRef<Popup | null>(null);
  const rangePopupRef = useRef<Popup | null>(null);
  const [filterAnchor, setFilterAnchor] = useState<HTMLElement | null>(null);

  const [myEvents, setMyEvents] = useState<DispatchEvent[]>(initEvents);
  const [filteredResources, setFilteredResources] = useState<CapacityGroup[]>([]);
  const [maintenanceInvalids] = useState<MbscCalendarEvent[]>(buildMaintenanceInvalids);
  const [calendarInvalid, setCalendarInvalid] = useState<MbscCalendarEvent[]>(buildMaintenanceInvalids);
  const [zoomLevel, setZoomLevel] = useState<number>(3);
  const [calView, setCalView] = useState<MbscEventcalendarView>(() => buildViewConfig(7));
  const [refDate, setRefDate] = useState<Date>(_initToday);
  const [jobListItems, setJobListItems] = useState<JobListItem[]>([]);
  const [filters, setFilters] = useState<Filters>(() => {
    const f: Filters = { operational: true, maintenance: true };
    allResources.forEach((cat) => {
      f[cat.id as string] = true;
    });
    return f;
  });
  const [tempFilters, setTempFilters] = useState<Filters>({});
  const [statusFilters, setStatusFilters] = useState<string[]>(['scheduled', 'in progress', 'completed']);
  const [resetKey, setResetKey] = useState<number>(0);
  const [rangeLabel, setRangeLabel] = useState<string>('');
  const [rangeSelectValue, setRangeSelectValue] = useState<string>('7');
  const [rangeInputsDisabled, setRangeInputsDisabled] = useState<boolean>(true);
  const [calendarRangeValue, setCalendarRangeValue] = useState<[Date, Date] | null>(null);
  const [rangeStartInput, rangeStartRef] = useState<Input | null>(null);
  const [rangeEndInput, rangeEndRef] = useState<Input | null>(null);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setIsToastOpen(true);
  }, []);

  const filtersRef = useRef<Filters>(filters);
  filtersRef.current = filters;

  const computeFilteredResources = useCallback(
    (currentFilters?: Filters, currentSearchQuery?: string): CapacityGroup[] => {
      const f = currentFilters !== undefined ? currentFilters : filtersRef.current;
      const sq = currentSearchQuery !== undefined ? currentSearchQuery : searchQueryRef.current;
      return allResources
        .map((category) => {
          const keptIds: Record<string, boolean> = {};
          category.children.forEach((resource) => {
            if (String(resource.id).includes('actual')) return;
            const filterKey =
              getResourceMaintenanceStatus(resource, nowRef.current, currentViewStartRef.current, currentViewEndRef.current) ===
              'operational'
                ? 'operational'
                : 'maintenance';
            if (
              f[filterKey] &&
              (!sq || resource.name!.toLowerCase().includes(sq.toLowerCase()) || resource.plate!.toLowerCase().includes(sq.toLowerCase()))
            ) {
              keptIds[String(resource.id)] = true;
            }
          });
          return {
            id: category.id,
            name: category.name,
            eventCreation: category.eventCreation,
            children: category.children.filter((resource) => {
              if (String(resource.id).includes('actual')) {
                const parentId = String(resource.id).replace('-actual', '');
                if (!keptIds[parentId]) return false;
                const parent = category.children.find((r) => String(r.id) === parentId);
                return (
                  !parent ||
                  getResourceMaintenanceStatus(parent, nowRef.current, currentViewStartRef.current, currentViewEndRef.current) ===
                    'operational'
                );
              }
              return keptIds[String(resource.id)];
            }),
          };
        })
        .filter((res) => res.children.length > 0 && f[res.id as string]);
    },
    [nowRef, currentViewStartRef, currentViewEndRef],
  );

  const getEffectiveStatus = useCallback((ev: DispatchEvent): string => {
    if (ev.status === 'actual') return ev.title === 'Completed' ? 'completed' : 'in progress';
    if (ev.end && new Date(ev.end as string) <= nowRef.current) return 'completed';
    if (ev.start && new Date(ev.start as string) < nowRef.current) return 'in progress';
    return ev.status || 'scheduled';
  }, []);

  const getStatusFilteredEvents = useCallback(
    (events: DispatchEvent[], currentStatusFilters?: string[]): DispatchEvent[] => {
      const sf = currentStatusFilters || statusFilters;
      return events.filter((ev) => sf.includes(getEffectiveStatus(ev)));
    },
    [statusFilters, getEffectiveStatus],
  );

  const getMaxAvailableCapacity = useCallback((currentFilters?: Filters): number => {
    const f = currentFilters !== undefined ? currentFilters : filtersRef.current;
    let max = 0;
    allResources.forEach((group) => {
      if (f[group.id as string]) {
        group.children.forEach((child) => {
          if (!String(child.id).includes('actual') && (child.capacity || 0) > max) max = child.capacity!;
        });
      }
    });
    return max;
  }, []);

  const refreshJobList = useCallback(
    (currentFilters?: Filters, currentScheduledIds?: number[], rangeStart?: Date, rangeDays?: number) => {
      const now = nowRef.current;
      const rStart = rangeStart || currentRangeStartRef.current;
      const rDays = rangeDays || currentRangeDaysRef.current;
      const rangeEnd = new Date(rStart.getTime() + rDays * 24 * 60 * 60 * 1000);
      const minPickup = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      const maxCapacity = getMaxAvailableCapacity(currentFilters);
      const sIds = currentScheduledIds || scheduledJobIdsRef.current;
      const visible = externalEventsRef.current.filter((job) => {
        if (sIds.indexOf(job.id) !== -1) return false;
        if (job.size > maxCapacity) return false;
        const pickupStart = new Date(job.pickup[0] as string);
        if (pickupStart < minPickup) return false;
        return pickupStart >= rStart && pickupStart < rangeEnd;
      });
      const items: JobListItem[] = [];
      let lastDayKey: string | null = null;
      for (const job of visible) {
        const pickupDate = new Date(job.pickup[0] as string);
        const dayKey = formatDate('YYYY-MM-DD', pickupDate);
        if (dayKey !== lastDayKey) {
          items.push({ type: 'header', label: formatDate('DDD, DD MMM', pickupDate), key: 'hdr-' + dayKey });
          lastDayKey = dayKey;
        }
        items.push({ type: 'job', job, key: 'job-' + job.id });
      }
      setJobListItems(items);
    },
    [getMaxAvailableCapacity, nowRef, currentRangeStartRef, currentRangeDaysRef, scheduledJobIdsRef, externalEventsRef],
  );

  const addActualEvents = useCallback(
    (events: DispatchEvent[]) => {
      const now = nowRef.current;
      const possibleOffsets = [-120, -90, -60, -30, -15, 0, 15, 30, 60, 90, 120];
      for (let i = 0; i < events.length; ++i) {
        const event = events[i];
        event.start = event.start ? new Date(event.start as string) : event.start;
        event.end = event.end ? new Date(event.end as string) : event.end;
        if (event.status === 'actual') continue;
        const evEnd = event.end as Date;
        const evStart = event.start as Date;
        if (evEnd <= now) event.color = statusColors['completed'];
        else if (evStart < now) event.color = statusColors['in progress'];
        else event.color = statusColors[event.status!] || statusColors['scheduled'];
        event.editable = now < evStart;
        if (evStart < now && evEnd > now) {
          if (!event.actual) {
            const dOff = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)] * 60000;
            const aStart = new Date(evStart.getTime() + dOff);
            const actualStart = aStart >= evStart && aStart < now ? aStart : evStart;
            const newEvent: DispatchEvent = {
              resource: event.resource + '-actual',
              from: event.from,
              to: event.to,
              pickup: event.pickup,
              drop: event.drop,
              size: event.size,
              start: actualStart,
              end: now,
              title: 'In progress',
              status: 'actual',
              color: event.color,
              cssClass: 'mds-dispatch-actual-event mds-dispatch-pulse',
              editable: false,
            };
            event.actual = true;
            event.actualRef = newEvent;
            events.push(newEvent);
          } else if (event.actualRef) {
            event.actualRef.end = now;
          }
        } else if (evEnd <= now) {
          if (!event.actual) {
            const dOff = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)] * 60000;
            const aOff = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)] * 60000;
            let cAStart = new Date(evStart.getTime() + dOff);
            if (!(cAStart >= evStart && cAStart < evEnd)) cAStart = evStart;
            const drop0 =
              event.drop![0] instanceof Date ? (event.drop![0] as Date).getTime() : new Date(event.drop![0] as string).getTime();
            let cAEnd = new Date(drop0 + aOff);
            const minEnd = new Date(cAStart.getTime() + 30 * 60000);
            if (cAEnd < minEnd) cAEnd = minEnd;
            const cNewEvent: DispatchEvent = {
              resource: event.resource + '-actual',
              from: event.from,
              to: event.to,
              pickup: event.pickup,
              drop: event.drop,
              size: event.size,
              start: cAStart,
              end: cAEnd,
              title: 'Completed',
              status: 'actual',
              color: event.color,
              cssClass: 'mds-dispatch-actual-event',
              editable: false,
            };
            event.actual = true;
            event.actualRef = cNewEvent;
            events.push(cNewEvent);
          } else if (event.actualRef && event.actualRef.title !== 'Completed') {
            const aOff = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)] * 60000;
            const drop0 =
              event.drop![0] instanceof Date ? (event.drop![0] as Date).getTime() : new Date(event.drop![0] as string).getTime();
            let cAEnd = new Date(drop0 + aOff);
            const minEnd = new Date((event.actualRef.start as Date).getTime() + 30 * 60000);
            if (cAEnd < minEnd) cAEnd = minEnd;
            event.actualRef.end = cAEnd;
            event.actualRef.color = event.color;
            event.actualRef.cssClass = 'mds-dispatch-actual-event';
            event.actualRef.title = 'Completed';
          }
        }
      }
    },
    [nowRef],
  );

  const findResourceById = useCallback((id: string | number): TruckResource | null => {
    const baseId = String(id).replace('-actual', '');
    for (const group of allResources) {
      for (const child of group.children) {
        if (String(child.id) === baseId) return child;
      }
    }
    return null;
  }, []);

  const findFirstSlot = useCallback(
    (draggedEvent: DispatchEvent): { start: Date; end: Date } | null => {
      const now = new Date();
      const minStart = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      const windowStart = new Date(draggedEvent.pickup![0] as string);
      const windowEnd = new Date(draggedEvent.drop![1] as string);
      let eventStart = new Date(draggedEvent.start as string);
      let eventEnd = new Date(draggedEvent.end as string);
      const effectiveWindowStart = windowStart < minStart ? minStart : windowStart;
      const eventDuration = eventEnd.getTime() - eventStart.getTime();
      const windowSize = windowEnd.getTime() - effectiveWindowStart.getTime();
      if (eventDuration > windowSize) return null;
      if (eventStart < effectiveWindowStart) {
        eventStart = new Date(effectiveWindowStart);
        eventEnd = new Date(effectiveWindowStart.getTime() + eventDuration);
      }
      if (eventEnd > windowEnd) {
        eventEnd = new Date(windowEnd);
        eventStart = new Date(windowEnd.getTime() - eventDuration);
      }
      if (draggedEvent.resource) {
        const resource = findResourceById(draggedEvent.resource as string | number);
        if (resource?.maintenanceFrom && resource?.maintenanceTo) {
          const mFrom = new Date(resource.maintenanceFrom as string);
          const mTo = new Date(resource.maintenanceTo as string);
          if (eventStart < mTo && eventEnd > mFrom) {
            eventStart = new Date(mTo);
            eventEnd = new Date(mTo.getTime() + eventDuration);
            if (eventEnd > windowEnd) return null;
          }
        }
      }
      return { start: eventStart, end: eventEnd };
    },
    [findResourceById],
  );

  useEffect(() => {
    allResources.forEach((group) => {
      group.children.forEach((resource) => {
        if (resource.maintenanceFrom) resource.maintenanceFrom = new Date(resource.maintenanceFrom as string);
        if (resource.maintenanceTo) resource.maintenanceTo = new Date(resource.maintenanceTo as string);
      });
    });
    addActualEvents(myEventsRef.current);
    const fResources = computeFilteredResources(undefined, '');
    /* eslint-disable react-hooks/set-state-in-effect */
    setFilteredResources(fResources);
    setMyEvents([...myEventsRef.current]);
    const today = todayRef.current;
    const end = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000);
    setCalendarRangeValue([today, end]);
    setRangeLabel(formatDate('MMM D', today) + ' – ' + formatDate('MMM D, YYYY', end));
    /* eslint-enable react-hooks/set-state-in-effect */
    refreshJobList(undefined, []);
    const interval = setInterval(() => {
      const currentNow = new Date();
      nowRef.current = currentNow;
      addActualEvents(myEventsRef.current);
      setMyEvents([...myEventsRef.current]);
    }, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleZoom = useCallback(
    (zoom: number) => {
      setZoomLevel(zoom);
      setCalView(buildViewConfig(currentRangeDaysRef.current));
    },
    [currentRangeDaysRef],
  );

  const applyDaysRange = useCallback(
    (days: number, startDate?: Date) => {
      const target = startDate || todayRef.current;
      currentViewStartRef.current = target;
      currentViewEndRef.current = new Date(target.getTime() + days * 24 * 60 * 60 * 1000);
      setRefDate(target);
      setCalView(buildViewConfig(days));
      const fResources = computeFilteredResources();
      setFilteredResources(fResources);
      const navigateTo = todayRef.current >= target && todayRef.current < currentViewEndRef.current ? nowRef.current : target;
      setTimeout(() => calendarRef.current?.navigate(navigateTo), 100);
    },
    [computeFilteredResources, todayRef, nowRef, currentViewStartRef, currentViewEndRef, calendarRef],
  );

  const applyPendingRange = useCallback(() => {
    currentRangeStartRef.current = pendingRangeStartRef.current;
    currentRangeDaysRef.current = pendingRangeDaysRef.current;
    applyDaysRange(currentRangeDaysRef.current, currentRangeStartRef.current);
    const start = currentRangeStartRef.current;
    const days = currentRangeDaysRef.current;
    const end = new Date(start.getTime() + (days - 1) * 24 * 60 * 60 * 1000);
    setRangeLabel(formatDate('MMM D', start) + ' – ' + formatDate('MMM D, YYYY', end));
    refreshJobList();
    rangePopupRef.current?.close();
  }, [applyDaysRange, refreshJobList]);

  const invalidateResources = useCallback(
    (event: DispatchEvent): number | null => {
      const now = new Date();
      nowRef.current = now;
      const minTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      const invalidIds: (number | string)[] = [];
      const validIds: number[] = [];
      const windowStart = new Date(event.pickup![0] as string);
      const windowEnd = new Date(event.drop![1] as string);
      const allCalendarEvents = calendarRef.current?.getEvents() || [];
      for (const group of allResources) {
        for (const truck of group.children) {
          let isValid = true;
          if ((truck.capacity || 0) < (event.size || 0)) {
            truck.eventCreation = false;
            invalidIds.push(truck.id as number);
            isValid = false;
          }
          if (isValid) {
            const truckEvents = allCalendarEvents.filter((ev: DispatchEvent) => ev.resource === truck.id);
            const overlappingEvent = truckEvents.find((ev: DispatchEvent) => {
              const evEnd = ev.drop ? new Date(ev.drop[1] as string) : new Date(ev.end as string);
              return evEnd > windowStart && new Date(ev.start as string) < windowEnd;
            });
            if (overlappingEvent && event.resource !== truck.id) {
              truck.eventCreation = false;
              invalidIds.push(truck.id as number);
              if (!String(truck.id).includes('actual')) invalidIds.push(truck.id + '-actual');
              isValid = false;
            }
          }
          if (isValid && !String(truck.id).includes('actual')) validIds.push(truck.id as number);
        }
      }
      myInvalidsRef.current = [
        { start: todayRef.current, end: windowStart < minTime ? minTime : windowStart, cssClass: 'mds-dispatch-disabled-row' },
        {
          start: windowStart < minTime ? minTime : windowStart,
          end: windowEnd,
          resource: invalidIds,
          cssClass: 'mds-dispatch-disabled-row',
        },
        { start: windowEnd, end: sevenDaysFromNow, cssClass: 'mds-dispatch-disabled-row' },
      ];
      setCalendarInvalid([...myInvalidsRef.current, ...maintenanceInvalids]);
      return validIds.length > 0 ? validIds[0] : null;
    },
    [maintenanceInvalids, nowRef, todayRef, calendarRef, myInvalidsRef],
  );

  const resetEventCreationFlags = useCallback(() => {
    for (const group of allResources) {
      for (const truck of group.children) {
        if (!String(truck.id).includes('actual')) truck.eventCreation = true;
      }
    }
  }, []);

  const onEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      const event = args.event as DispatchEvent;
      if (args.action === 'externalDrop') {
        scheduledJobIdsRef.current = [...scheduledJobIdsRef.current, event.id as number];
        const scheduledEvent = { ...event, status: 'scheduled', color: statusColors['scheduled'] };
        calendarRef.current?.updateEvent(scheduledEvent);
        myEventsRef.current = [...myEventsRef.current, scheduledEvent];
        setMyEvents([...myEventsRef.current]);
        setJobListItems((prev) => prev.filter((item) => item.type !== 'job' || item.job!.id !== event.id));
      }
      showToast(event.from + ' → ' + event.to + ' added');
    },
    [showToast],
  );

  const onEventCreateFailed = useCallback(
    (args: MbscEventCreateFailedEvent) => {
      const draggedEvent = args.event as DispatchEvent;
      const slot = findFirstSlot(draggedEvent);
      if (slot) {
        draggedEvent.start = slot.start;
        draggedEvent.end = slot.end;
        calendarRef.current?.addEvent(draggedEvent);
        if (args.action === 'externalDrop') {
          scheduledJobIdsRef.current = [...scheduledJobIdsRef.current, draggedEvent.id as number];
          setJobListItems((prev) => prev.filter((item) => item.type !== 'job' || item.job!.id !== draggedEvent.id));
        }
        setTimeout(() => calendarRef.current?.navigateToEvent({ start: draggedEvent.start, resource: draggedEvent.resource }));
        showToast(draggedEvent.from + ' → ' + draggedEvent.to + ' added to first available slot');
      } else {
        showToast('No available slot found for ' + draggedEvent.from + ' → ' + draggedEvent.to);
      }
    },
    [findFirstSlot, showToast],
  );

  const onEventUpdateFailed = useCallback(
    (args: MbscEventUpdateFailedEvent) => {
      const draggedEvent = args.event as DispatchEvent;
      const slot = findFirstSlot(draggedEvent);
      if (slot) {
        draggedEvent.start = slot.start;
        draggedEvent.end = slot.end;
        calendarRef.current?.updateEvent(draggedEvent);
        setTimeout(() => calendarRef.current?.navigateToEvent({ start: draggedEvent.start, resource: draggedEvent.resource }));
        showToast(draggedEvent.from + ' → ' + draggedEvent.to + ' moved to first available slot');
      } else {
        const originalEvent = args.oldEvent as DispatchEvent;
        setTimeout(() => calendarRef.current?.navigateToEvent({ start: originalEvent.start, resource: originalEvent.resource }));
        showToast('No available slot found for ' + draggedEvent.from + ' → ' + draggedEvent.to);
      }
    },
    [findFirstSlot, showToast],
  );

  const onEventDragStart = useCallback(
    (args: MbscEventDragEvent) => {
      const event = args.event as DispatchEvent;
      const resourceToNavigate = invalidateResources(event);
      if (!event.resource) {
        const slot = findFirstSlot(event);
        if (resourceToNavigate && slot) {
          setTimeout(() => calendarRef.current?.navigateToEvent({ start: slot.start, resource: resourceToNavigate }));
        } else {
          showToast('No available slot for: ' + event.from + ' → ' + event.to);
        }
      }
    },
    [invalidateResources, findFirstSlot, showToast],
  );

  const onEventDragEnd = useCallback(() => {
    resetEventCreationFlags();
    myInvalidsRef.current = [];
    const fResources = computeFilteredResources();
    setFilteredResources(fResources);
    setCalendarInvalid([...maintenanceInvalids]);
  }, [resetEventCreationFlags, computeFilteredResources, maintenanceInvalids]);

  const onEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      const ev = args.event as DispatchEvent;
      if (ev.status === 'actual') {
        const actualStart = new Date(ev.start as string);
        const scheduledDeparture = new Date(ev.pickup![0] as string);
        const departureDelay = Math.round((actualStart.getTime() - scheduledDeparture.getTime()) / 60000);
        const formatDelay = (min: number) => {
          if (Math.abs(min) < 5) return 'on time';
          if (min > 0) return min + ' min late';
          return Math.abs(min) + ' min early';
        };
        const formatDuration = (ms: number) => {
          const t = Math.round(ms / 60000);
          const h = Math.floor(t / 60);
          const m = t % 60;
          if (h === 0) return m + ' min';
          if (m === 0) return h + ' h';
          return h + ' h ' + m + ' min';
        };
        let msg: string;
        if (ev.title === 'In progress') {
          msg =
            'Actual transport: departed ' +
            formatDelay(departureDelay) +
            ' · running ' +
            formatDuration(new Date().getTime() - actualStart.getTime());
        } else {
          const actualEnd = new Date(ev.end as string);
          const scheduledArrival = new Date(ev.drop![0] as string);
          const arrivalDelay = Math.round((actualEnd.getTime() - scheduledArrival.getTime()) / 60000);
          msg = 'Actual transport: departed ' + formatDelay(departureDelay) + ' · arrived ' + formatDelay(arrivalDelay);
        }
        showToast(msg);
      }
    },
    [showToast],
  );

  const onPageLoaded = useCallback(
    (args: MbscPageLoadedEvent) => {
      currentViewStartRef.current = args.firstDay as Date;
      currentViewEndRef.current = args.lastDay as Date;
    },
    [currentViewStartRef, currentViewEndRef],
  );

  const renderResource = useCallback(
    (resource: TruckResource) => {
      const mStatus = getResourceMaintenanceStatus(resource, nowRef.current, currentViewStartRef.current, currentViewEndRef.current);
      return (
        <div>
          <div className="mds-dispatch-name">
            {resource.name}
            {resource.name && resource.plate && <span className="mds-dispatch-plate">{resource.plate}</span>}
          </div>
          {!resource.isParent && resource.name && (
            <div className="mds-dispatch-status">
              <span className="mds-dispatch-status-dot" style={{ backgroundColor: maintenanceColors[mStatus] }}></span>
              {maintenanceLabels[mStatus]}
            </div>
          )}
        </div>
      );
    },
    [nowRef, currentViewStartRef, currentViewEndRef],
  );

  const handleSearch = useCallback(
    (q: string) => {
      searchQueryRef.current = q;
      setTimeout(() => {
        const fResources = computeFilteredResources(undefined, q);
        setFilteredResources(fResources);
      }, 300);
    },
    [computeFilteredResources],
  );

  const handleFilterOpen = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setTempFilters({ ...filtersRef.current });
    setFilterAnchor(e.currentTarget as HTMLElement);
    setTimeout(() => filterPopupRef.current?.open());
  }, []);

  const renderResourceEmpty = useCallback(
    () => (
      <div className="mds-dispatch-empty mbsc-flex mbsc-align-items-center">
        <div className="mbsc-flex-1-1">
          <img src="https://img.mobiscroll.com/demos/filter-no-result.png" alt="Empty list" style={{ width: 100 }} />
          <p className="mbsc-font mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">No resources match your search.</p>
          <p className="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Adjust your filters or try a different keyword.</p>
          <Button
            variant="outline"
            onClick={() => {
              searchQueryRef.current = '';
              setResetKey((k) => k + 1);
              const newFilters: Filters = { operational: true, maintenance: true };
              allResources.forEach((cat) => {
                newFilters[cat.id as string] = true;
              });
              setFilters(newFilters);
              const fResources = computeFilteredResources(newFilters, '');
              setFilteredResources(fResources);
              refreshJobList(newFilters);
              showToast('Filters cleared');
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    ),
    [computeFilteredResources, refreshJobList, showToast],
  );

  const renderResourceHeader = useCallback(
    () => <ResourceHeader key={resetKey} onSearch={handleSearch} onFilterOpen={handleFilterOpen} />,
    [handleSearch, handleFilterOpen, resetKey],
  );

  const renderTimelineEventContent = useCallback((data: MbscCalendarEventData) => {
    const job = data.original as DispatchEvent;
    if (job.status === 'actual') {
      return job.title === 'In progress' ? <span className="mds-dispatch-actual-label">In progress</span> : null;
    }
    return (
      <div className="mds-dispatch-event-content-wrapper mbsc-flex">
        <span className="mds-dispatch-event-route mbsc-flex-1-1">
          {job.from} → {job.to}
        </span>
        <span className="mds-dispatch-event-planned-badge">
          <span className="mds-dispatch-event-planned-badge-text">Planned</span>
        </span>
      </div>
    );
  }, []);

  const calendarData = useMemo(() => getStatusFilteredEvents(myEvents, statusFilters), [myEvents, statusFilters, getStatusFilteredEvents]);

  const rangeSelectData = useMemo(
    () => [
      { value: 'custom', text: 'Custom' },
      { value: '7', text: 'Next 7 days' },
      { value: '14', text: 'Next 14 days' },
      { value: '30', text: 'Next 30 days' },
      { value: '60', text: 'Next 60 days' },
      { value: '90', text: 'Next 90 days' },
    ],
    [],
  );

  const rangePopupResponsive = useMemo(
    () => ({
      xsmall: {
        display: 'bottom' as const,
        touchUi: true,
        buttons: [
          { text: 'Apply', keyCode: 'enter' as const, handler: applyPendingRange, cssClass: 'mbsc-popup-button-primary' },
          'cancel',
        ],
      },
      custom: {
        breakpoint: 575,
        buttons: [] as MbscPopupButton[],
        display: 'anchored' as const,
        touchUi: false,
        scrollLock: false,
        maxWidth: 920,
      },
    }),
    [applyPendingRange],
  );

  const filterPopupButtons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      'cancel',
      {
        text: 'Apply',
        keyCode: 'enter',
        cssClass: 'mbsc-popup-button-primary',
        handler: () => {
          setFilters({ ...tempFilters });
          const fResources = computeFilteredResources(tempFilters);
          setFilteredResources(fResources);
          refreshJobList(tempFilters);
          filterPopupRef.current?.close();
          showToast('Filters applied');
        },
      },
    ],
    [tempFilters, computeFilteredResources, refreshJobList, showToast],
  );

  return (
    <Page className="mds-dispatch-page">
      <div className="mds-dispatch-outer mbsc-flex-col">
        <div className="mds-dispatch-custom-header mbsc-flex">
          <Button variant="flat" onClick={() => rangePopupRef.current?.open()}>
            <span className="mds-dispatch-range-label">{rangeLabel}</span>
          </Button>
          <div className="mds-dispatch-header-right mbsc-flex">
            <SegmentedGroup cssClass="mds-dispatch-status-filter" select="multiple">
              <Segmented
                value="scheduled"
                checked={statusFilters.includes('scheduled')}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.checked) setStatusFilters((sf) => [...sf, 'scheduled']);
                  else setStatusFilters((sf) => sf.filter((s) => s !== 'scheduled'));
                }}
              >
                <span className="mds-dispatch-seg-dot mds-dispatch-seg-dot-scheduled"></span>Scheduled
              </Segmented>
              <Segmented
                value="in progress"
                checked={statusFilters.includes('in progress')}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.checked) setStatusFilters((sf) => [...sf, 'in progress']);
                  else setStatusFilters((sf) => sf.filter((s) => s !== 'in progress'));
                }}
              >
                <span className="mds-dispatch-seg-dot mds-dispatch-seg-dot-inprogress"></span>In progress
              </Segmented>
              <Segmented
                value="completed"
                checked={statusFilters.includes('completed')}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.checked) setStatusFilters((sf) => [...sf, 'completed']);
                  else setStatusFilters((sf) => sf.filter((s) => s !== 'completed'));
                }}
              >
                <span className="mds-dispatch-seg-dot mds-dispatch-seg-dot-completed"></span>Completed
              </Segmented>
            </SegmentedGroup>
            <div className="mds-dispatch-zoom mbsc-flex">
              <Button icon="minus" variant="flat" disabled={zoomLevel === 1} onClick={() => handleZoom(zoomLevel - 1)} />
              <input
                type="range"
                min="1"
                max="5"
                value={zoomLevel}
                className="mds-dispatch-zoom-slider"
                onChange={(e) => handleZoom(+e.target.value)}
              />
              <Button icon="plus" variant="flat" disabled={zoomLevel === 5} onClick={() => handleZoom(zoomLevel + 1)} />
            </div>
            <Button
              variant="outline"
              startIcon="clock"
              className="mds-dispatch-now-btn"
              onClick={() => {
                const now = new Date();
                nowRef.current = now;
                todayRef.current = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                currentRangeStartRef.current = todayRef.current;
                applyDaysRange(currentRangeDaysRef.current, todayRef.current);
                const start = todayRef.current;
                const days = currentRangeDaysRef.current;
                const end = new Date(start.getTime() + (days - 1) * 24 * 60 * 60 * 1000);
                setRangeLabel(formatDate('MMM D', start) + ' – ' + formatDate('MMM D, YYYY', end));
                setTimeout(() => calendarRef.current?.navigate(now));
                refreshJobList();
              }}
            >
              Now
            </Button>
          </div>
        </div>
        <div className="mbsc-grid mbsc-no-padding mds-dispatch-content">
          <div className="mbsc-row mds-dispatch-full-height">
            <div className="mbsc-col-sm-3 mds-dispatch-full-height mds-dispatch-wrapper">
              <div className="mbsc-flex-col mbsc-flex-1-0 mbsc-padding">
                {jobListItems.length === 0 && (
                  <p className="mbsc-font mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">No jobs for this period.</p>
                )}
                {jobListItems.map((item) =>
                  item.type === 'header' ? (
                    <div key={item.key} className="mds-dispatch-job-day-header">
                      {item.label}
                    </div>
                  ) : (
                    <JobCard key={item.key} job={item.job!} />
                  ),
                )}
              </div>
            </div>
            <div className="mbsc-col-sm-9 mds-dispatch-column mds-dispatch-full-height">
              <Eventcalendar
                ref={calendarRef}
                clickToCreate={false}
                dragToCreate={false}
                dragToResize={false}
                dragToMove={true}
                externalDrop={true}
                eventOverlap={false}
                cssClass="mds-dispatch-calendar"
                refDate={refDate}
                zoomLevel={zoomLevel}
                view={calView}
                data={calendarData}
                resources={filteredResources}
                invalid={calendarInvalid}
                renderResource={renderResource}
                renderResourceEmpty={renderResourceEmpty}
                renderResourceHeader={renderResourceHeader}
                renderTimelineEventContent={renderTimelineEventContent}
                onEventCreated={onEventCreated}
                onEventCreateFailed={onEventCreateFailed}
                onEventUpdateFailed={onEventUpdateFailed}
                onEventDragStart={onEventDragStart}
                onEventDragEnd={onEventDragEnd}
                onEventClick={onEventClick}
                onPageLoaded={onPageLoaded}
              />
            </div>
          </div>
        </div>

        <Popup
          ref={filterPopupRef}
          buttons={filterPopupButtons}
          contentPadding={false}
          display="anchored"
          focusOnClose={false}
          focusOnOpen={false}
          showOverlay={false}
          width={400}
          anchor={filterAnchor ?? undefined}
        >
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Capacity</div>
            {allResources.map((res) => (
              <Checkbox
                key={res.id as string}
                label={res.name}
                checked={!!tempFilters[res.id as string]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTempFilters((tf) => ({ ...tf, [res.id as string]: e.target.checked }))}
              />
            ))}
          </div>
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Operational Status</div>
            <Checkbox
              label="In maintenance/Maintenance planned"
              checked={!!tempFilters['maintenance']}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTempFilters((tf) => ({ ...tf, maintenance: e.target.checked }))}
            />
            <Checkbox
              label="Operational"
              checked={!!tempFilters['operational']}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTempFilters((tf) => ({ ...tf, operational: e.target.checked }))}
            />
          </div>
        </Popup>

        <Popup ref={rangePopupRef} responsive={rangePopupResponsive}>
          <div className="mds-dispatch-range-popup">
            <div className="mbsc-grid mbsc-no-padding">
              <div className="mbsc-row">
                <div className="mbsc-col-sm-4 mbsc-push-sm-8 mbsc-flex mbsc-flex-col">
                  <div className="mds-dispatch-range-inputs">
                    <Select
                      label="Date range"
                      labelStyle="stacked"
                      inputStyle="box"
                      data={rangeSelectData}
                      value={rangeSelectValue}
                      onChange={(args: MbscSelectChangeEvent) => {
                        const val = args.value as string;
                        setRangeSelectValue(val);
                        if (val === 'custom') {
                          setRangeInputsDisabled(false);
                        } else {
                          setRangeInputsDisabled(true);
                          pendingRangeDaysRef.current = +val;
                          pendingRangeStartRef.current = todayRef.current;
                          const end = new Date(todayRef.current.getTime() + (+val - 1) * 24 * 60 * 60 * 1000);
                          setCalendarRangeValue([todayRef.current, end]);
                        }
                      }}
                    />
                    <Input
                      ref={rangeStartRef}
                      label="Start"
                      labelStyle="stacked"
                      inputStyle="box"
                      className="mds-dispatch-range-input"
                      disabled={rangeInputsDisabled}
                    />
                    <Input
                      ref={rangeEndRef}
                      label="End"
                      labelStyle="stacked"
                      inputStyle="box"
                      className="mds-dispatch-range-input"
                      disabled={rangeInputsDisabled}
                    />
                  </div>
                  <div className="mds-dispatch-range-desktop-btns mbsc-button-group-justified">
                    <Button onClick={applyPendingRange}>Apply</Button>
                    <Button onClick={() => rangePopupRef.current?.close()}>Cancel</Button>
                  </div>
                </div>
                <div className="mbsc-col-sm-8 mbsc-pull-sm-4">
                  <Datepicker
                    display="inline"
                    controls={['calendar']}
                    select="range"
                    showRangeLabels={false}
                    pages="auto"
                    showOnClick={false}
                    showOnFocus={false}
                    value={calendarRangeValue}
                    startInput={rangeStartInput}
                    endInput={rangeEndInput}
                    onChange={(args: MbscDatepickerChangeEvent) => {
                      const dates = args.value as [Date | null, Date | null] | null;
                      if (dates) {
                        setCalendarRangeValue(dates as [Date, Date]);
                        setRangeInputsDisabled(false);
                        setRangeSelectValue('custom');
                        if (dates[0] && dates[1]) {
                          const start = new Date(dates[0]);
                          const end = new Date(dates[1]);
                          pendingRangeStartRef.current = start;
                          pendingRangeDaysRef.current = Math.round((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) + 1;
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Popup>

        <Toast message={toastMessage} isOpen={isToastOpen} onClose={() => setIsToastOpen(false)} />
      </div>
    </Page>
  );
}

export default App;
