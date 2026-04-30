import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Checkbox,
  Confirm,
  Datepicker,
  Eventcalendar,
  formatDate,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscDatepickerChangeEvent,
  MbscDateType,
  MbscEventUpdateEvent,
  MbscResource,
  MbscSelectData,
  Segmented,
  SegmentedGroup,
  Select,
  setOptions,
  Toast,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react';
import { dyndatetime } from '../../../../dyndatetime';
import './event-grouping-bulk-action.css';

interface WorkEvent extends MbscCalendarEvent {
  type: string;
  clientGroup: string;
}

interface DisplayEvent extends WorkEvent {
  assignee: number | string;
}

interface GroupedWorkEvent extends MbscCalendarEvent {
  clientGroup: string;
  year: number;
  period: number;
  count: number;
  originalEvents: WorkEvent[];
  collapsed: boolean;
}

interface AssigneeResource extends MbscResource {
  img: string;
  title: string;
}

setOptions({
  // localeJs,
  // themeJs
});

const assigneeResources: AssigneeResource[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior HVAC Technician',
    color: '#4a7c9e',
    img: 'https://img.mobiscroll.com/demos/f1.png',
  },
  {
    id: 2,
    name: 'Mike Chen',
    title: 'Lead Facilities Engineer',
    color: '#7fa650',
    img: 'https://img.mobiscroll.com/demos/m1.png',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Electrical Systems Specialist',
    color: '#c76b8a',
    img: 'https://img.mobiscroll.com/demos/f2.png',
  },
  {
    id: 4,
    name: 'James Wilson',
    title: 'Master Electrician',
    color: '#4a9dad',
    img: 'https://img.mobiscroll.com/demos/m2.png',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    title: 'Building Automation Technician',
    color: '#d4a056',
    img: 'https://img.mobiscroll.com/demos/f3.png',
  },
  {
    id: 6,
    name: 'David Kim',
    title: 'HVAC Project Manager',
    color: '#5a9d76',
    img: 'https://img.mobiscroll.com/demos/m3.png',
  },
];

const typeResources: MbscResource[] = [
  { id: 'installation', name: 'installation', color: '#3b5998' },
  { id: 'maintenance', name: 'maintenance', color: '#2d7a4f' },
  { id: 'repair', name: 'repair', color: '#b8621b' },
  { id: 'inspection', name: 'inspection', color: '#6b4fa3' },
  { id: 'upgrade', name: 'upgrade', color: '#a03a3a' },
];

const selectData: MbscSelectData[] = [
  { text: 'View by Assignee', value: 'assignee' },
  { text: 'View by Type', value: 'type' },
];

const defaultEvents: WorkEvent[] = [
  {
    id: 1,
    title: 'Office Tower HVAC System Overhaul',
    start: dyndatetime('y,1,5'),
    end: dyndatetime('y,3,15'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 2,
    title: 'Executive Floor Climate Control Installation',
    start: dyndatetime('y,1,10'),
    end: dyndatetime('y,3,20'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 3,
    title: 'Headquarters Heating System Maintenance',
    start: dyndatetime('y,2,1'),
    end: dyndatetime('y,3,31'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 4,
    title: 'Building Infrastructure Assessment',
    start: dyndatetime('y,1,15'),
    end: dyndatetime('y,3,25'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 5,
    title: 'Campus Facilities Modernization',
    start: dyndatetime('y,2,5'),
    end: dyndatetime('y,3,31'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  //<hide-comment>
  {
    id: 6,
    title: 'Factory Data & Electrical Infrastructure',
    start: dyndatetime('y,1,8'),
    end: dyndatetime('y,3,18'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 7,
    title: 'Production Floor Power Distribution Upgrade',
    start: dyndatetime('y,1,20'),
    end: dyndatetime('y,3,30'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 8,
    title: 'Industrial Control Room Electrical Repair',
    start: dyndatetime('y,2,10'),
    end: dyndatetime('y,3,31'),
    resource: 3,
    type: 'repair',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 9,
    title: 'Smart Building Controls Installation',
    start: dyndatetime('y,1,12'),
    end: dyndatetime('y,3,22'),
    resource: 5,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 10,
    title: 'Building Automation System Upgrade',
    start: dyndatetime('y,2,8'),
    end: dyndatetime('y,3,31'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 11,
    title: 'Factory Campus HVAC Project',
    start: dyndatetime('y,1,18'),
    end: dyndatetime('y,3,28'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 12,
    title: 'Industrial Climate System Modernization',
    start: dyndatetime('y,2,12'),
    end: dyndatetime('y,3,31'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 13,
    title: 'Office Tower Cooling System Installation',
    start: dyndatetime('y,4,2'),
    end: dyndatetime('y,6,12'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 14,
    title: 'Headquarters Air Quality System Upgrade',
    start: dyndatetime('y,4,15'),
    end: dyndatetime('y,6,25'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 15,
    title: 'Conference Center HVAC Maintenance',
    start: dyndatetime('y,5,5'),
    end: dyndatetime('y,6,30'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 16,
    title: 'Building Systems Integration Project',
    start: dyndatetime('y,4,8'),
    end: dyndatetime('y,6,18'),
    resource: 2,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 17,
    title: 'Campus Infrastructure Maintenance',
    start: dyndatetime('y,4,20'),
    end: dyndatetime('y,6,30'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 18,
    title: 'Facility Safety Systems Inspection',
    start: dyndatetime('y,5,10'),
    end: dyndatetime('y,6,30'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 19,
    title: 'Plant Backup Power System Installation',
    start: dyndatetime('y,4,5'),
    end: dyndatetime('y,6,15'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 20,
    title: 'Factory Electrical Panel Upgrade',
    start: dyndatetime('y,5,1'),
    end: dyndatetime('y,6,30'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 21,
    title: 'Corporate Building Electrical Inspection',
    start: dyndatetime('y,4,12'),
    end: dyndatetime('y,6,22'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 22,
    title: 'Emergency Power System Repair',
    start: dyndatetime('y,5,8'),
    end: dyndatetime('y,6,30'),
    resource: 4,
    type: 'repair',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 23,
    title: 'Security System Integration',
    start: dyndatetime('y,4,18'),
    end: dyndatetime('y,6,28'),
    resource: 5,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 24,
    title: 'Access Control System Maintenance',
    start: dyndatetime('y,5,12'),
    end: dyndatetime('y,6,30'),
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 25,
    title: 'Multi-Plant Climate Control Project',
    start: dyndatetime('y,4,22'),
    end: dyndatetime('y,6,30'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 26,
    title: 'Summer Cooling System Optimization',
    start: dyndatetime('y,7,3'),
    end: dyndatetime('y,9,13'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 27,
    title: 'Office Tower Ventilation Upgrade',
    start: dyndatetime('y,8,1'),
    end: dyndatetime('y,9,30'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 28,
    title: 'Campus Building Systems Inspection',
    start: dyndatetime('y,7,8'),
    end: dyndatetime('y,9,18'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 29,
    title: 'Headquarters Facility Upgrades',
    start: dyndatetime('y,7,20'),
    end: dyndatetime('y,9,30'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 30,
    title: 'Building Infrastructure Maintenance',
    start: dyndatetime('y,8,10'),
    end: dyndatetime('y,9,30'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 31,
    title: 'Plant Power Infrastructure Upgrade',
    start: dyndatetime('y,7,5'),
    end: dyndatetime('y,9,15'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 32,
    title: 'Factory Building Electrical Maintenance',
    start: dyndatetime('y,7,18'),
    end: dyndatetime('y,9,28'),
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 33,
    title: 'Industrial Emergency Generator Installation',
    start: dyndatetime('y,8,5'),
    end: dyndatetime('y,9,30'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 34,
    title: 'Corporate Electrical Safety Inspection',
    start: dyndatetime('y,7,12'),
    end: dyndatetime('y,9,22'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 35,
    title: 'Lighting System Repair',
    start: dyndatetime('y,8,8'),
    end: dyndatetime('y,9,30'),
    resource: 4,
    type: 'repair',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 36,
    title: 'Building Controls System Upgrade',
    start: dyndatetime('y,7,15'),
    end: dyndatetime('y,9,25'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 37,
    title: 'Factory Climate Control Renovation',
    start: dyndatetime('y,8,12'),
    end: dyndatetime('y,9,30'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 38,
    title: 'Winter HVAC System Preparation',
    start: dyndatetime('y,10,2'),
    end: dyndatetime('y,12,12'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 39,
    title: 'Headquarters Heating System Upgrade',
    start: dyndatetime('y,10,15'),
    end: dyndatetime('y,12,25'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 40,
    title: 'Office Climate Control Installation',
    start: dyndatetime('y,11,5'),
    end: dyndatetime('y,12,31'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 41,
    title: 'Year-End Facility Inspection',
    start: dyndatetime('y,10,8'),
    end: dyndatetime('y,12,18'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 42,
    title: 'Building Systems Winterization',
    start: dyndatetime('y,10,20'),
    end: dyndatetime('y,12,30'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 43,
    title: 'Campus Infrastructure Upgrade',
    start: dyndatetime('y,11,10'),
    end: dyndatetime('y,12,31'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 44,
    title: 'Factory Electrical System Upgrade',
    start: dyndatetime('y,10,5'),
    end: dyndatetime('y,12,15'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 45,
    title: 'Industrial Power Distribution Maintenance',
    start: dyndatetime('y,11,1'),
    end: dyndatetime('y,12,31'),
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 46,
    title: 'Year-End Electrical Safety Audit',
    start: dyndatetime('y,10,12'),
    end: dyndatetime('y,12,22'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 47,
    title: 'Emergency Systems Installation',
    start: dyndatetime('y,11,8'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 48,
    title: 'Security System Annual Maintenance',
    start: dyndatetime('y,10,18'),
    end: dyndatetime('y,12,28'),
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 49,
    title: 'Building Automation Upgrade',
    start: dyndatetime('y,11,12'),
    end: dyndatetime('y,12,31'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 50,
    title: 'Industrial Multi-Zone Climate System',
    start: dyndatetime('y,10,22'),
    end: dyndatetime('y,12,31'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 51,
    title: 'Hospital HVAC System Overhaul',
    start: dyndatetime('y,1,4'),
    end: dyndatetime('y,3,14'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 52,
    title: 'Medical Ward Climate Control Installation',
    start: dyndatetime('y,2,3'),
    end: dyndatetime('y,3,31'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 53,
    title: 'Medical Facility Systems Upgrade',
    start: dyndatetime('y,1,9'),
    end: dyndatetime('y,3,19'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 54,
    title: 'Hospital Infrastructure Inspection',
    start: dyndatetime('y,1,22'),
    end: dyndatetime('y,3,31'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 55,
    title: 'Clinic Facility Maintenance',
    start: dyndatetime('y,2,14'),
    end: dyndatetime('y,3,31'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 56,
    title: 'Production Line Electrical Installation',
    start: dyndatetime('y,1,12'),
    end: dyndatetime('y,3,22'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 57,
    title: 'Factory Power System Upgrade',
    start: dyndatetime('y,2,8'),
    end: dyndatetime('y,3,31'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 58,
    title: 'Manufacturing Equipment Electrical Inspection',
    start: dyndatetime('y,1,6'),
    end: dyndatetime('y,3,16'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 59,
    title: 'Industrial Electrical Panel Repair',
    start: dyndatetime('y,1,25'),
    end: dyndatetime('y,3,31'),
    resource: 4,
    type: 'repair',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 60,
    title: 'Plant Emergency Power Installation',
    start: dyndatetime('y,2,18'),
    end: dyndatetime('y,3,31'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 61,
    title: 'Campus Automation System Setup',
    start: dyndatetime('y,1,16'),
    end: dyndatetime('y,3,26'),
    resource: 5,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 62,
    title: 'School Building Controls Upgrade',
    start: dyndatetime('y,2,11'),
    end: dyndatetime('y,3,31'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 63,
    title: 'Industrial HVAC Modernization Project',
    start: dyndatetime('y,1,19'),
    end: dyndatetime('y,3,29'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 64,
    title: 'Hospital Cooling System Installation',
    start: dyndatetime('y,4,4'),
    end: dyndatetime('y,6,14'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 65,
    title: 'Patient Area Ventilation Upgrade',
    start: dyndatetime('y,4,18'),
    end: dyndatetime('y,6,28'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 66,
    title: 'Clinic HVAC System Maintenance',
    start: dyndatetime('y,5,7'),
    end: dyndatetime('y,6,30'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 67,
    title: 'Hospital Safety Systems Inspection',
    start: dyndatetime('y,4,10'),
    end: dyndatetime('y,6,20'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 68,
    title: 'Medical Building Systems Maintenance',
    start: dyndatetime('y,5,3'),
    end: dyndatetime('y,6,30'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 69,
    title: 'Industrial Electrical System Upgrade',
    start: dyndatetime('y,4,6'),
    end: dyndatetime('y,6,16'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 70,
    title: 'Factory Power Infrastructure Maintenance',
    start: dyndatetime('y,5,12'),
    end: dyndatetime('y,6,30'),
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 71,
    title: 'Production Equipment Electrical Certification',
    start: dyndatetime('y,4,13'),
    end: dyndatetime('y,6,23'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 72,
    title: 'Manufacturing Line Power Installation',
    start: dyndatetime('y,4,25'),
    end: dyndatetime('y,6,30'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 73,
    title: 'Plant Electrical Panel Upgrade',
    start: dyndatetime('y,5,16'),
    end: dyndatetime('y,6,30'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 74,
    title: 'Municipal Control Systems Maintenance',
    start: dyndatetime('y,4,20'),
    end: dyndatetime('y,6,30'),
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 75,
    title: 'Factory Climate Control Project',
    start: dyndatetime('y,5,9'),
    end: dyndatetime('y,6,30'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 76,
    title: 'Hospital Summer HVAC Service',
    start: dyndatetime('y,7,2'),
    end: dyndatetime('y,9,12'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 77,
    title: 'Medical Center Climate System Upgrade',
    start: dyndatetime('y,8,3'),
    end: dyndatetime('y,9,30'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 78,
    title: 'Hospital Facility Annual Inspection',
    start: dyndatetime('y,7,9'),
    end: dyndatetime('y,9,19'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 79,
    title: 'Medical Center Maintenance Program',
    start: dyndatetime('y,7,22'),
    end: dyndatetime('y,9,30'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 80,
    title: 'Hospital Infrastructure Modernization',
    start: dyndatetime('y,8,12'),
    end: dyndatetime('y,9,30'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 81,
    title: 'Factory Electrical Infrastructure Upgrade',
    start: dyndatetime('y,7,6'),
    end: dyndatetime('y,9,16'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 82,
    title: 'Production Power System Installation',
    start: dyndatetime('y,7,19'),
    end: dyndatetime('y,9,29'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 83,
    title: 'Industrial Electrical Maintenance',
    start: dyndatetime('y,8,8'),
    end: dyndatetime('y,9,30'),
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 84,
    title: 'Plant Electrical Safety Inspection',
    start: dyndatetime('y,7,13'),
    end: dyndatetime('y,9,23'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 85,
    title: 'Manufacturing Equipment Power Repair',
    start: dyndatetime('y,8,6'),
    end: dyndatetime('y,9,30'),
    resource: 4,
    type: 'repair',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 86,
    title: 'University Automation System Upgrade',
    start: dyndatetime('y,7,16'),
    end: dyndatetime('y,9,26'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 87,
    title: 'Campus Control Systems Maintenance',
    start: dyndatetime('y,8,14'),
    end: dyndatetime('y,9,30'),
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 88,
    title: 'Industrial Climate System Project',
    start: dyndatetime('y,8,10'),
    end: dyndatetime('y,9,30'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 89,
    title: 'Hospital Winter HVAC Preparation',
    start: dyndatetime('y,10,3'),
    end: dyndatetime('y,12,13'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 90,
    title: 'Medical Facility Heating Installation',
    start: dyndatetime('y,10,17'),
    end: dyndatetime('y,12,27'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 91,
    title: 'Patient Area Climate Upgrade',
    start: dyndatetime('y,11,7'),
    end: dyndatetime('y,12,31'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 92,
    title: 'Year-End Hospital Facility Inspection',
    start: dyndatetime('y,10,9'),
    end: dyndatetime('y,12,19'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 93,
    title: 'Medical Center Winterization',
    start: dyndatetime('y,11,2'),
    end: dyndatetime('y,12,31'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 94,
    title: 'Factory Electrical System Upgrade',
    start: dyndatetime('y,10,6'),
    end: dyndatetime('y,12,16'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 95,
    title: 'Production Line Power Maintenance',
    start: dyndatetime('y,11,4'),
    end: dyndatetime('y,12,31'),
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 96,
    title: 'Year-End Industrial Electrical Audit',
    start: dyndatetime('y,10,13'),
    end: dyndatetime('y,12,23'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 97,
    title: 'Manufacturing Electrical Safety Installation',
    start: dyndatetime('y,10,25'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 98,
    title: 'Plant Power Distribution Upgrade',
    start: dyndatetime('y,11,14'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 99,
    title: 'Municipal Automation Year-End Maintenance',
    start: dyndatetime('y,10,19'),
    end: dyndatetime('y,12,29'),
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 100,
    title: 'Factory-Wide HVAC Upgrade Project',
    start: dyndatetime('y,11,11'),
    end: dyndatetime('y,12,31'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 101,
    title: 'Hospital Wing HVAC System Overhaul',
    start: dyndatetime('y,1,5'),
    end: dyndatetime('y,3,10'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 102,
    title: 'ICU Climate Control Installation',
    start: dyndatetime('y,1,12'),
    end: dyndatetime('y,3,18'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 103,
    title: 'Operating Theater Air Quality Upgrade',
    start: dyndatetime('y,1,20'),
    end: dyndatetime('y,3,25'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 104,
    title: 'Emergency Ward Ventilation Repair',
    start: dyndatetime('y,2,3'),
    end: dyndatetime('y,3,28'),
    resource: 1,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 105,
    title: 'Medical Center HVAC Inspection',
    start: dyndatetime('y,2,14'),
    end: dyndatetime('y,3,31'),
    resource: 1,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 106,
    title: 'Clinic Heating System Upgrade',
    start: dyndatetime('y,2,20'),
    end: dyndatetime('y,3,31'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 107,
    title: 'Hospital Electrical Infrastructure Installation',
    start: dyndatetime('y,1,8'),
    end: dyndatetime('y,3,20'),
    resource: 2,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 108,
    title: 'Medical Building Power Distribution Upgrade',
    start: dyndatetime('y,1,18'),
    end: dyndatetime('y,3,28'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 109,
    title: 'Radiology Wing Electrical Inspection',
    start: dyndatetime('y,2,1'),
    end: dyndatetime('y,3,31'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 110,
    title: 'Emergency Power Backup Installation',
    start: dyndatetime('y,2,10'),
    end: dyndatetime('y,3,31'),
    resource: 2,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 111,
    title: 'Pharmacy Electrical System Repair',
    start: dyndatetime('y,1,25'),
    end: dyndatetime('y,3,22'),
    resource: 2,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 112,
    title: 'Patient Ward Power Upgrade',
    start: dyndatetime('y,2,18'),
    end: dyndatetime('y,3,31'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 113,
    title: 'Hospital BAS Controls Installation',
    start: dyndatetime('y,1,10'),
    end: dyndatetime('y,3,15'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 114,
    title: 'Medical Center Automation Upgrade',
    start: dyndatetime('y,1,22'),
    end: dyndatetime('y,3,25'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 115,
    title: 'Clinic Environmental Controls Repair',
    start: dyndatetime('y,2,5'),
    end: dyndatetime('y,3,31'),
    resource: 3,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 116,
    title: 'Hospital Security System Integration',
    start: dyndatetime('y,2,12'),
    end: dyndatetime('y,3,31'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 117,
    title: 'ICU Monitoring System Upgrade',
    start: dyndatetime('y,1,16'),
    end: dyndatetime('y,3,20'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 118,
    title: 'School District HVAC Overhaul',
    start: dyndatetime('y,1,7'),
    end: dyndatetime('y,3,17'),
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 119,
    title: 'City Hall Climate Control Installation',
    start: dyndatetime('y,1,15'),
    end: dyndatetime('y,3,25'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 120,
    title: 'University Building HVAC Upgrade',
    start: dyndatetime('y,1,23'),
    end: dyndatetime('y,3,31'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 121,
    title: 'Public Library Ventilation Repair',
    start: dyndatetime('y,2,4'),
    end: dyndatetime('y,3,28'),
    resource: 4,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 122,
    title: 'Fire Station HVAC Inspection',
    start: dyndatetime('y,2,13'),
    end: dyndatetime('y,3,31'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 123,
    title: 'Community Center Heating Upgrade',
    start: dyndatetime('y,2,21'),
    end: dyndatetime('y,3,31'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 124,
    title: 'Campus Electrical Infrastructure Installation',
    start: dyndatetime('y,1,9'),
    end: dyndatetime('y,3,19'),
    resource: 5,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 125,
    title: 'Municipal Building Power Upgrade',
    start: dyndatetime('y,1,19'),
    end: dyndatetime('y,3,29'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 126,
    title: 'School Electrical Safety Inspection',
    start: dyndatetime('y,2,2'),
    end: dyndatetime('y,3,31'),
    resource: 5,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 127,
    title: 'Police Station Power Installation',
    start: dyndatetime('y,2,11'),
    end: dyndatetime('y,3,31'),
    resource: 5,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 128,
    title: 'University Lab Electrical Repair',
    start: dyndatetime('y,1,26'),
    end: dyndatetime('y,3,23'),
    resource: 5,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 129,
    title: 'City Hall Building Automation Setup',
    start: dyndatetime('y,1,11'),
    end: dyndatetime('y,3,16'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 130,
    title: 'School BAS Modernization',
    start: dyndatetime('y,1,21'),
    end: dyndatetime('y,3,26'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 131,
    title: 'Municipal Controls System Repair',
    start: dyndatetime('y,2,6'),
    end: dyndatetime('y,3,31'),
    resource: 6,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 132,
    title: 'Library Automation System Installation',
    start: dyndatetime('y,2,16'),
    end: dyndatetime('y,3,31'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 133,
    title: 'Campus Security Integration Project',
    start: dyndatetime('y,1,14'),
    end: dyndatetime('y,3,21'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 134,
    title: 'Hospital Summer Cooling System Service',
    start: dyndatetime('y,4,3'),
    end: dyndatetime('y,6,13'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 135,
    title: 'ICU HVAC System Upgrade',
    start: dyndatetime('y,4,14'),
    end: dyndatetime('y,6,24'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 136,
    title: 'Operating Theater Ventilation Installation',
    start: dyndatetime('y,5,2'),
    end: dyndatetime('y,6,28'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 137,
    title: 'Medical Center Air Filtration Upgrade',
    start: dyndatetime('y,4,20'),
    end: dyndatetime('y,6,30'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 138,
    title: 'Clinic HVAC Inspection Program',
    start: dyndatetime('y,5,10'),
    end: dyndatetime('y,6,30'),
    resource: 1,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 139,
    title: 'Hospital Wing Electrical Upgrade',
    start: dyndatetime('y,4,5'),
    end: dyndatetime('y,6,15'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 140,
    title: 'Medical Building Power Installation',
    start: dyndatetime('y,4,16'),
    end: dyndatetime('y,6,26'),
    resource: 2,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 141,
    title: 'Radiology Equipment Power Upgrade',
    start: dyndatetime('y,5,4'),
    end: dyndatetime('y,6,30'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 142,
    title: 'Hospital Electrical Safety Inspection',
    start: dyndatetime('y,4,22'),
    end: dyndatetime('y,6,30'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 143,
    title: 'Emergency Generator Installation',
    start: dyndatetime('y,5,13'),
    end: dyndatetime('y,6,30'),
    resource: 2,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 144,
    title: 'Hospital Controls System Upgrade',
    start: dyndatetime('y,4,7'),
    end: dyndatetime('y,6,17'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 145,
    title: 'Medical Center BAS Installation',
    start: dyndatetime('y,4,18'),
    end: dyndatetime('y,6,28'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 146,
    title: 'Clinic Automation Maintenance',
    start: dyndatetime('y,5,6'),
    end: dyndatetime('y,6,30'),
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 147,
    title: 'Hospital Security System Upgrade',
    start: dyndatetime('y,4,24'),
    end: dyndatetime('y,6,30'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 148,
    title: 'ICU Controls Integration',
    start: dyndatetime('y,5,15'),
    end: dyndatetime('y,6,30'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 149,
    title: 'School HVAC Spring Service',
    start: dyndatetime('y,4,4'),
    end: dyndatetime('y,6,14'),
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 150,
    title: 'University Campus Climate Upgrade',
    start: dyndatetime('y,4,15'),
    end: dyndatetime('y,6,25'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 151,
    title: 'City Hall HVAC Installation',
    start: dyndatetime('y,5,3'),
    end: dyndatetime('y,6,29'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 152,
    title: 'Municipal Building Ventilation Upgrade',
    start: dyndatetime('y,4,21'),
    end: dyndatetime('y,6,30'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 153,
    title: 'Public Works HVAC Inspection',
    start: dyndatetime('y,5,11'),
    end: dyndatetime('y,6,30'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 154,
    title: 'Campus Power Distribution Upgrade',
    start: dyndatetime('y,4,6'),
    end: dyndatetime('y,6,16'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 155,
    title: 'School Electrical Infrastructure Installation',
    start: dyndatetime('y,4,17'),
    end: dyndatetime('y,6,27'),
    resource: 5,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 156,
    title: 'Municipal Electrical Maintenance',
    start: dyndatetime('y,5,5'),
    end: dyndatetime('y,6,30'),
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 157,
    title: 'University Power System Inspection',
    start: dyndatetime('y,4,23'),
    end: dyndatetime('y,6,30'),
    resource: 5,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 158,
    title: 'City Buildings Electrical Repair',
    start: dyndatetime('y,5,14'),
    end: dyndatetime('y,6,30'),
    resource: 5,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 159,
    title: 'School BAS Spring Upgrade',
    start: dyndatetime('y,4,8'),
    end: dyndatetime('y,6,18'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 160,
    title: 'Municipal Automation System Installation',
    start: dyndatetime('y,4,19'),
    end: dyndatetime('y,6,29'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 161,
    title: 'City Hall Controls Maintenance',
    start: dyndatetime('y,5,7'),
    end: dyndatetime('y,6,30'),
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 162,
    title: 'Campus Security System Upgrade',
    start: dyndatetime('y,4,25'),
    end: dyndatetime('y,6,30'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 163,
    title: 'Library Automation Maintenance',
    start: dyndatetime('y,5,16'),
    end: dyndatetime('y,6,30'),
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 164,
    title: 'Hospital Summer HVAC Optimization',
    start: dyndatetime('y,7,3'),
    end: dyndatetime('y,9,13'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 165,
    title: 'Medical Center Cooling Upgrade',
    start: dyndatetime('y,7,14'),
    end: dyndatetime('y,9,24'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 166,
    title: 'Hospital Ventilation System Repair',
    start: dyndatetime('y,8,2'),
    end: dyndatetime('y,9,28'),
    resource: 1,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 167,
    title: 'ICU Climate Control Inspection',
    start: dyndatetime('y,7,20'),
    end: dyndatetime('y,9,30'),
    resource: 1,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 168,
    title: 'Clinic Air Quality Installation',
    start: dyndatetime('y,8,10'),
    end: dyndatetime('y,9,30'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 169,
    title: 'Hospital Power Infrastructure Upgrade',
    start: dyndatetime('y,7,5'),
    end: dyndatetime('y,9,15'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 170,
    title: 'Medical Center Electrical Maintenance',
    start: dyndatetime('y,7,17'),
    end: dyndatetime('y,9,27'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 171,
    title: 'Radiology Wing Power Installation',
    start: dyndatetime('y,8,4'),
    end: dyndatetime('y,9,30'),
    resource: 2,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 172,
    title: 'Hospital Electrical Safety Audit',
    start: dyndatetime('y,7,22'),
    end: dyndatetime('y,9,30'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 173,
    title: 'Pharmacy Power System Repair',
    start: dyndatetime('y,8,12'),
    end: dyndatetime('y,9,30'),
    resource: 2,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 174,
    title: 'Medical BAS Summer Upgrade',
    start: dyndatetime('y,7,7'),
    end: dyndatetime('y,9,17'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 175,
    title: 'Hospital Controls Maintenance',
    start: dyndatetime('y,7,19'),
    end: dyndatetime('y,9,29'),
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 176,
    title: 'Clinic Automation System Installation',
    start: dyndatetime('y,8,6'),
    end: dyndatetime('y,9,30'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 177,
    title: 'ICU Security System Upgrade',
    start: dyndatetime('y,7,24'),
    end: dyndatetime('y,9,30'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 178,
    title: 'Medical Center Inspection Program',
    start: dyndatetime('y,8,14'),
    end: dyndatetime('y,9,30'),
    resource: 3,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 179,
    title: 'School Summer HVAC Service',
    start: dyndatetime('y,7,4'),
    end: dyndatetime('y,9,14'),
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 180,
    title: 'University Cooling System Upgrade',
    start: dyndatetime('y,7,15'),
    end: dyndatetime('y,9,25'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 181,
    title: 'City Hall Ventilation Installation',
    start: dyndatetime('y,8,3'),
    end: dyndatetime('y,9,29'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 182,
    title: 'Municipal HVAC Inspection',
    start: dyndatetime('y,7,21'),
    end: dyndatetime('y,9,30'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 183,
    title: 'Public Library Climate Repair',
    start: dyndatetime('y,8,11'),
    end: dyndatetime('y,9,30'),
    resource: 4,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 184,
    title: 'Campus Power Infrastructure Upgrade',
    start: dyndatetime('y,7,6'),
    end: dyndatetime('y,9,16'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 185,
    title: 'School Electrical Maintenance Program',
    start: dyndatetime('y,7,18'),
    end: dyndatetime('y,9,28'),
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 186,
    title: 'Municipal Power Installation',
    start: dyndatetime('y,8,5'),
    end: dyndatetime('y,9,30'),
    resource: 5,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 187,
    title: 'University Electrical Safety Inspection',
    start: dyndatetime('y,7,23'),
    end: dyndatetime('y,9,30'),
    resource: 5,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 188,
    title: 'City Buildings Power Repair',
    start: dyndatetime('y,8,13'),
    end: dyndatetime('y,9,30'),
    resource: 5,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 189,
    title: 'School BAS Summer Upgrade',
    start: dyndatetime('y,7,8'),
    end: dyndatetime('y,9,18'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 190,
    title: 'Municipal Automation Maintenance',
    start: dyndatetime('y,7,20'),
    end: dyndatetime('y,9,30'),
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 191,
    title: 'City Hall Controls Installation',
    start: dyndatetime('y,8,7'),
    end: dyndatetime('y,9,30'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 192,
    title: 'Campus Security Upgrade',
    start: dyndatetime('y,7,25'),
    end: dyndatetime('y,9,30'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 193,
    title: 'Library System Inspection',
    start: dyndatetime('y,8,15'),
    end: dyndatetime('y,9,30'),
    resource: 6,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 194,
    title: 'Hospital Winter HVAC Preparation',
    start: dyndatetime('y,10,3'),
    end: dyndatetime('y,12,13'),
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 195,
    title: 'Medical Center Heating Installation',
    start: dyndatetime('y,10,16'),
    end: dyndatetime('y,12,26'),
    resource: 1,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 196,
    title: 'ICU Climate System Upgrade',
    start: dyndatetime('y,11,4'),
    end: dyndatetime('y,12,31'),
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 197,
    title: 'Hospital Year-End HVAC Inspection',
    start: dyndatetime('y,10,22'),
    end: dyndatetime('y,12,31'),
    resource: 1,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 198,
    title: 'Clinic Heating System Repair',
    start: dyndatetime('y,11,12'),
    end: dyndatetime('y,12,31'),
    resource: 1,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 199,
    title: 'Hospital Electrical Winter Upgrade',
    start: dyndatetime('y,10,5'),
    end: dyndatetime('y,12,15'),
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 200,
    title: 'Medical Facility Power Maintenance',
    start: dyndatetime('y,10,18'),
    end: dyndatetime('y,12,28'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 201,
    title: 'Radiology Wing Heating Installation',
    start: dyndatetime('y,11,3'),
    end: dyndatetime('y,12,31'),
    resource: 2,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 202,
    title: 'Hospital Electrical Year-End Inspection',
    start: dyndatetime('y,10,24'),
    end: dyndatetime('y,12,31'),
    resource: 2,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 203,
    title: 'Emergency Power System Repair',
    start: dyndatetime('y,11,14'),
    end: dyndatetime('y,12,31'),
    resource: 2,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 204,
    title: 'Hospital BAS Winter Upgrade',
    start: dyndatetime('y,10,6'),
    end: dyndatetime('y,12,16'),
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 205,
    title: 'Medical Center Controls Maintenance',
    start: dyndatetime('y,10,19'),
    end: dyndatetime('y,12,29'),
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 206,
    title: 'Clinic Automation Year-End Inspection',
    start: dyndatetime('y,11,3'),
    end: dyndatetime('y,12,31'),
    resource: 3,
    type: 'inspection',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 207,
    title: 'Hospital Security System Installation',
    start: dyndatetime('y,11,14'),
    end: dyndatetime('y,12,31'),
    resource: 3,
    type: 'installation',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 208,
    title: 'ICU Controls Year-End Repair',
    start: dyndatetime('y,10,24'),
    end: dyndatetime('y,12,31'),
    resource: 3,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 209,
    title: 'School Winter Heating Preparation',
    start: dyndatetime('y,10,4'),
    end: dyndatetime('y,12,14'),
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 210,
    title: 'University Heating System Upgrade',
    start: dyndatetime('y,10,17'),
    end: dyndatetime('y,12,27'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 211,
    title: 'City Hall Heating Installation',
    start: dyndatetime('y,11,5'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 212,
    title: 'Municipal HVAC Year-End Inspection',
    start: dyndatetime('y,10,23'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 213,
    title: 'Public Library Heating Repair',
    start: dyndatetime('y,11,13'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 214,
    title: 'Campus Power Winter Upgrade',
    start: dyndatetime('y,10,7'),
    end: dyndatetime('y,12,17'),
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 215,
    title: 'School Electrical Year-End Maintenance',
    start: dyndatetime('y,10,20'),
    end: dyndatetime('y,12,30'),
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 216,
    title: 'Municipal Power Installation',
    start: dyndatetime('y,11,6'),
    end: dyndatetime('y,12,31'),
    resource: 5,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 217,
    title: 'University Electrical Safety Audit',
    start: dyndatetime('y,10,25'),
    end: dyndatetime('y,12,31'),
    resource: 5,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 218,
    title: 'City Buildings Electrical Repair',
    start: dyndatetime('y,11,15'),
    end: dyndatetime('y,12,31'),
    resource: 5,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 219,
    title: 'School BAS Winter Upgrade',
    start: dyndatetime('y,10,8'),
    end: dyndatetime('y,12,18'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 220,
    title: 'Municipal Automation Year-End Maintenance',
    start: dyndatetime('y,10,21'),
    end: dyndatetime('y,12,31'),
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 221,
    title: 'City Hall Controls Installation',
    start: dyndatetime('y,11,7'),
    end: dyndatetime('y,12,31'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 222,
    title: 'Campus Security Year-End Inspection',
    start: dyndatetime('y,10,26'),
    end: dyndatetime('y,12,31'),
    resource: 6,
    type: 'inspection',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 223,
    title: 'Library Automation Winter Repair',
    start: dyndatetime('y,11,16'),
    end: dyndatetime('y,12,31'),
    resource: 6,
    type: 'repair',
    clientGroup: 'Education & Municipal Services',
  },
  {
    id: 224,
    title: 'Medical Facility Power Repair',
    start: dyndatetime('y,4,26'),
    end: dyndatetime('y,6,30'),
    resource: 2,
    type: 'repair',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 225,
    title: 'Clinic Power Distribution Maintenance',
    start: dyndatetime('y,2,22'),
    end: dyndatetime('y,3,31'),
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Healthcare Network',
  },
  {
    id: 226,
    title: 'Corporate Electrical Panel Installation',
    start: dyndatetime('y,1,14'),
    end: dyndatetime('y,3,24'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 227,
    title: 'Plant Floor Power Maintenance',
    start: dyndatetime('y,2,3'),
    end: dyndatetime('y,3,28'),
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 228,
    title: 'Factory Infrastructure Electrical Upgrade',
    start: dyndatetime('y,2,19'),
    end: dyndatetime('y,3,31'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 229,
    title: 'Plant Power Infrastructure Installation',
    start: dyndatetime('y,7,10'),
    end: dyndatetime('y,9,20'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 230,
    title: 'Factory Building Electrical Maintenance',
    start: dyndatetime('y,7,23'),
    end: dyndatetime('y,9,30'),
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 231,
    title: 'Industrial Facility Power Upgrade',
    start: dyndatetime('y,8,9'),
    end: dyndatetime('y,9,30'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 232,
    title: 'Factory Climate Control Maintenance',
    start: dyndatetime('y,1,14'),
    end: dyndatetime('y,3,24'),
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 233,
    title: 'Industrial HVAC Installation',
    start: dyndatetime('y,2,3'),
    end: dyndatetime('y,3,28'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 234,
    title: 'Plant Climate System Inspection',
    start: dyndatetime('y,2,19'),
    end: dyndatetime('y,3,31'),
    resource: 6,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 235,
    title: 'Factory HVAC Spring Upgrade',
    start: dyndatetime('y,4,9'),
    end: dyndatetime('y,6,19'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 236,
    title: 'Industrial Climate Maintenance',
    start: dyndatetime('y,4,22'),
    end: dyndatetime('y,6,30'),
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 237,
    title: 'Plant Ventilation Inspection',
    start: dyndatetime('y,5,10'),
    end: dyndatetime('y,6,30'),
    resource: 6,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 238,
    title: 'Factory Summer Cooling Maintenance',
    start: dyndatetime('y,7,9'),
    end: dyndatetime('y,9,19'),
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 239,
    title: 'Industrial HVAC Summer Upgrade',
    start: dyndatetime('y,7,22'),
    end: dyndatetime('y,9,30'),
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 240,
    title: 'Plant Climate System Inspection',
    start: dyndatetime('y,8,9'),
    end: dyndatetime('y,9,30'),
    resource: 6,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 241,
    title: 'Factory Winter HVAC Maintenance',
    start: dyndatetime('y,10,9'),
    end: dyndatetime('y,12,19'),
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 242,
    title: 'Industrial Heating System Installation',
    start: dyndatetime('y,10,22'),
    end: dyndatetime('y,12,31'),
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 243,
    title: 'Plant Year-End Climate Inspection',
    start: dyndatetime('y,11,9'),
    end: dyndatetime('y,12,31'),
    resource: 6,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 244,
    title: 'Factory Electrical Infrastructure Upgrade',
    start: dyndatetime('y,4,9'),
    end: dyndatetime('y,6,19'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 245,
    title: 'Plant Power Infrastructure Maintenance',
    start: dyndatetime('y,4,22'),
    end: dyndatetime('y,6,30'),
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 246,
    title: 'Industrial Electrical Installation',
    start: dyndatetime('y,5,10'),
    end: dyndatetime('y,6,30'),
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 247,
    title: 'Factory Power Winter Upgrade',
    start: dyndatetime('y,10,9'),
    end: dyndatetime('y,12,19'),
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 248,
    title: 'Plant Electrical Winter Maintenance',
    start: dyndatetime('y,10,22'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 249,
    title: 'Industrial Power Year-End Repair',
    start: dyndatetime('y,11,9'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'repair',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 250,
    title: 'Factory Building Electrical Inspection',
    start: dyndatetime('y,11,20'),
    end: dyndatetime('y,12,31'),
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  //</hide-comment>
];

const App: FC = () => {
  const [myEvents, setMyEvents] = useState(defaultEvents);
  const [collapsedMap, setCollapsedMap] = useState<Record<string, boolean>>({});
  const [groupBy, setGroupBy] = useState('assignee');
  const [groupByClientQuarter, setGroupByClientQuarter] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<'month' | 'day' | 'week' | 'year' | 'quarter' | 'hour' | undefined>('month');
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const confirmCallbackRef = useRef<(() => void) | null>(null);
  const [editingEventId, setEditingEventId] = useState<string | number | null>(null);
  const [editEventTitle, setEditEventTitle] = useState('');
  const [editEventDateRange, setEditEventDateRange] = useState<MbscDateType[]>([]);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  const calendarRef = useRef<Eventcalendar>(null);

  const myView = useMemo(
    () => ({
      timeline: {
        type: 'year' as const,
        resolutionHorizontal: zoomLevel,
        eventHeight: 'variable' as const,
      },
    }),
    [zoomLevel],
  );

  const groupEventsByClientQuarter = useCallback(
    (events: WorkEvent[], collapsed: Record<string, boolean>): GroupedWorkEvent[] => {
      const groups: Record<string, { resource: string | number; clientGroup: string; year: number; period: number; events: WorkEvent[] }> =
        {};
      const result: GroupedWorkEvent[] = [];

      events.forEach((event) => {
        const resourceId = (groupBy === 'assignee' ? event.resource : event.type) as string | number;
        const eventStart = new Date(event.start as string | Date);
        const month = eventStart.getMonth();
        const year = eventStart.getFullYear();
        const period = Math.floor(month / 3);
        const groupKey = `${resourceId}-${event.clientGroup}-${year}-${period}`;

        if (!groups[groupKey]) {
          groups[groupKey] = { resource: resourceId, clientGroup: event.clientGroup, year, period, events: [] };
        }
        groups[groupKey].events.push(event);
      });

      Object.keys(groups).forEach((groupKey) => {
        const groupData = groups[groupKey];
        const periodEvents = [...groupData.events].sort((a, b) => (a.start! < b.start! ? -1 : a.start! > b.start! ? 1 : 0));

        const resourceList = groupBy === 'assignee' ? assigneeResources : typeResources;
        const color = resourceList.find((r) => r.id === groupData.resource)?.color;
        const eventIds = periodEvents.map((e) => e.id).join('-');
        const earliestStart = periodEvents[0].start;
        const latestEnd = periodEvents.reduce((latest, e) => (e.end! > latest! ? e.end : latest), periodEvents[0].end);
        const newId = `group-${groupKey}-${eventIds}`;
        const stateKey = `${groupData.resource}-${groupData.clientGroup}-${groupData.year}-${groupData.period}`;

        result.push({
          id: newId,
          title: groupData.clientGroup,
          resource: groupData.resource,
          clientGroup: groupData.clientGroup,
          year: groupData.year,
          period: groupData.period,
          start: earliestStart,
          end: latestEnd,
          color,
          count: periodEvents.length,
          originalEvents: periodEvents,
          collapsed: collapsed[stateKey] ?? true,
        });
      });

      return result;
    },
    [groupBy],
  );

  const groupedEvents = useMemo(
    () => (groupByClientQuarter ? groupEventsByClientQuarter(myEvents, collapsedMap) : []),
    [groupByClientQuarter, groupEventsByClientQuarter, myEvents, collapsedMap],
  );

  const prepareEventsForDisplay = useCallback(
    (events: WorkEvent[]) =>
      events.map((event) => ({
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        resource: groupBy === 'assignee' ? event.resource : event.type,
        type: event.type,
        assignee: event.resource,
        clientGroup: event.clientGroup,
        color: '#f8f9fa',
      })),
    [groupBy],
  );

  const displayEvents = useMemo(
    () => (groupByClientQuarter ? groupedEvents : prepareEventsForDisplay(myEvents)),
    [groupByClientQuarter, groupedEvents, myEvents, prepareEventsForDisplay],
  );

  const myResources = useMemo(() => (groupBy === 'assignee' ? assigneeResources : typeResources), [groupBy]);

  // --- Render helpers ---

  const getEventMarginLeft = (ev: WorkEvent, group: GroupedWorkEvent): string => {
    const groupStart = new Date(group.start as string | Date).getTime();
    const groupEnd = new Date(group.end as string | Date).getTime();
    const groupDuration = groupEnd - groupStart;
    const evStart = new Date(ev.start as string | Date).getTime();
    return groupDuration > 0 ? ((evStart - groupStart) / groupDuration) * 100 + '%' : '0%';
  };

  const getEventWidth = (ev: WorkEvent, group: GroupedWorkEvent): string => {
    const groupStart = new Date(group.start as string | Date).getTime();
    const groupEnd = new Date(group.end as string | Date).getTime();
    const groupDuration = groupEnd - groupStart;
    const evStart = new Date(ev.start as string | Date).getTime();
    const evEnd = new Date(ev.end as string | Date).getTime();
    return groupDuration > 0 ? ((evEnd - evStart) / groupDuration) * 100 + '%' : '100%';
  };

  const handleEditEvent = useCallback((ev: WorkEvent) => {
    setEditingEventId(ev.id ?? null);
    setEditEventTitle(ev.title ?? '');
    setEditEventDateRange([new Date(ev.start as string | Date), new Date(ev.end as string | Date)]);
    setDatePickerOpen(true);
  }, []);

  const renderGroupedEvent = useCallback(
    (event: MbscCalendarEventData) => {
      const origEvent = event.original as GroupedWorkEvent;
      const isExpanded = !origEvent.collapsed;
      const originalEvents = origEvent.originalEvents || [];

      const uniqueItems: Record<string | number, MbscResource | AssigneeResource> = {};
      originalEvents.forEach((ev) => {
        if (groupBy === 'assignee') {
          const typeObj = typeResources.find((r) => r.id === ev.type);
          if (typeObj) uniqueItems[typeObj.id] = typeObj;
        } else {
          const emp = assigneeResources.find((r) => r.id === ev.resource);
          if (emp) uniqueItems[emp.id] = emp;
        }
      });

      const itemCount = Object.keys(uniqueItems).length;
      const itemLabel = groupBy === 'assignee' ? 'type' : 'employee';

      return (
        <div
          className={`mbsc-flex mds-event-group-task mds-event-group-task-client${isExpanded ? ' expanded' : ''}`}
          style={{ borderLeftColor: origEvent.color }}
        >
          <div className="mbsc-flex mds-event-group-content">
            <div className="mds-event-group-title-text mds-event-group-text-truncate">{origEvent.clientGroup}</div>
            <div className="mbsc-flex mds-event-group-right">
              <div className="mbsc-flex mds-event-group-meta">
                <div className="mds-event-group-date-range">
                  {formatDate('DD MMM', new Date(origEvent.start as string | Date))} -{' '}
                  {formatDate('DD MMM', new Date(origEvent.end as string | Date))}
                </div>
                <div className="mds-event-group-count">
                  {origEvent.count} task{origEvent.count > 1 ? 's' : ''}, {itemCount} {itemLabel}
                  {itemCount > 1 ? 's' : ''}
                </div>
              </div>
              <div
                className="mbsc-flex mds-event-group-icon mbsc-icon mbsc-font-icon mbsc-icon-material-keyboard-arrow-down"
                onClick={(e) => {
                  e.stopPropagation();
                  const stateKey = `${origEvent.resource}-${origEvent.clientGroup}-${origEvent.year}-${origEvent.period}`;
                  setCollapsedMap((prev) => ({ ...prev, [stateKey]: !(prev[stateKey] ?? true) }));
                  setTimeout(() => calendarRef.current?.refresh(), 200);
                }}
              />
            </div>
          </div>
          <div className="mds-event-group-events">
            <div className="mds-event-group-events-inner">
              {isExpanded &&
                originalEvents.map((ev) => {
                  let detailText;
                  let typeDotColor;
                  let avatarUrl;

                  if (groupBy === 'assignee') {
                    const typeObj = typeResources.find((r) => r.id === ev.type);
                    if (typeObj) {
                      detailText = typeObj.name;
                      typeDotColor = typeObj.color;
                    }
                  } else {
                    const employee = assigneeResources.find((r) => r.id === ev.resource);
                    if (employee) {
                      detailText = employee.name;
                      avatarUrl = employee.img;
                    }
                  }

                  return (
                    <div
                      key={ev.id}
                      className="mds-event-group-original-event"
                      title={`${ev.title}, ${formatDate('MM/DD/YYYY', new Date(ev.start as string | Date))} - ${formatDate(
                        'MM/DD/YYYY',
                        new Date(ev.end as string | Date),
                      )}`}
                      style={{ marginLeft: getEventMarginLeft(ev, origEvent), width: getEventWidth(ev, origEvent) }}
                    >
                      <div className="mbsc-flex mds-event-group-event-content">
                        <div className="mds-event-group-event-title mds-event-group-text-truncate">{ev.title}</div>
                        <div className="mbsc-flex mds-event-group-event-right">
                          <div className="mds-event-group-event-date mds-event-group-text-truncate">
                            {formatDate('DD MMM', new Date(ev.start as string | Date))} -{' '}
                            {formatDate('DD MMM', new Date(ev.end as string | Date))}
                          </div>
                          <div className="mbsc-flex mds-event-group-event-detail">
                            {avatarUrl && <img src={avatarUrl} alt={detailText} className="mds-event-group-event-avatar" />}
                            {typeDotColor && <span className="mds-event-group-type-dot" style={{ backgroundColor: typeDotColor }} />}
                            <div className="mds-event-group-event-info mds-event-group-text-truncate">{detailText}</div>
                          </div>
                        </div>
                        <div
                          className="mds-event-group-edit-btn mbsc-flex mbsc-icon mbsc-font-icon mbsc-icon-pencil"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditEvent(ev);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      );
    },
    [groupBy, handleEditEvent],
  );

  const renderSimpleEvent = useCallback(
    (event: MbscCalendarEventData) => {
      const origEvent = event.original as DisplayEvent;
      let detailText;
      let avatarUrl;
      let typeDotColor;

      if (groupBy === 'assignee') {
        const typeObj = typeResources.find((t) => t.id === origEvent.type);
        if (typeObj) {
          detailText = typeObj.name;
          typeDotColor = typeObj.color;
        }
      } else {
        const employee = assigneeResources.find((r) => r.id === origEvent.assignee);
        if (employee) {
          detailText = employee.name;
          avatarUrl = employee.img;
        }
      }

      return (
        <div className="mbsc-flex mds-event-simple">
          <div className="mds-event-simple-title">
            <div className="mds-event-simple-title-inner mds-event-group-text-truncate">{origEvent.title}</div>
          </div>
          <div className="mbsc-flex mds-event-simple-right">
            <div className="mds-event-simple-date">
              {formatDate('DD MMM', new Date(origEvent.start as string | Date))} -{' '}
              {formatDate('DD MMM', new Date(origEvent.end as string | Date))}
            </div>
            {detailText && (
              <div className="mbsc-flex mds-event-simple-subtitle-wrapper">
                {avatarUrl && <img src={avatarUrl} alt={detailText} className="mds-event-simple-avatar" />}
                {typeDotColor && <span className="mds-event-simple-type-dot" style={{ backgroundColor: typeDotColor }} />}
                <div className="mbsc-flex mds-event-simple-subtitle" style={{ marginLeft: groupBy === 'type' ? '25px' : '' }}>
                  {detailText}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    },
    [groupBy],
  );

  const renderCustomResource = useCallback((resource: MbscResource) => {
    const assigneeResource = resource as AssigneeResource;
    if (assigneeResource.img) {
      return (
        <div className="mbsc-flex">
          <img alt={assigneeResource.name} className="mds-event-group-avatar" src={assigneeResource.img} />
          <div className="mds-event-group-cont">
            <div className="mds-event-group-name">{assigneeResource.name}</div>
            <div className="mds-event-group-title">{assigneeResource.title}</div>
          </div>
        </div>
      );
    }
    return (
      <div className="mbsc-flex mds-event-group-type-resource">
        <div className="mds-event-group-type-badge" style={{ backgroundColor: resource.color }}></div>
        <div className="mds-event-group-type-name">{resource.name}</div>
      </div>
    );
  }, []);

  const renderCustomHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end mds-event-group-header-controls">
          <Checkbox
            checked={groupByClientQuarter}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setGroupByClientQuarter(e.target.checked)}
            theme="material"
            label="Group by Client/Quarter"
          />
          <Select
            inputStyle="box"
            display="anchored"
            touchUi={false}
            data={selectData}
            value={groupBy}
            onChange={(e) => setGroupBy(e.value)}
          />
        </div>
        <SegmentedGroup value={zoomLevel} onChange={(e: ChangeEvent<HTMLInputElement>) => setZoomLevel(e.target.value as typeof zoomLevel)}>
          <Segmented value="quarter">Quarterly</Segmented>
          <Segmented value="month">Monthly</Segmented>
          <Segmented value="week">Weekly</Segmented>
        </SegmentedGroup>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [groupBy, groupByClientQuarter, zoomLevel],
  );

  // --- Event update ---

  const handleEventUpdate = useCallback(
    (args: MbscEventUpdateEvent) => {
      const updatedEvent = args.event;
      const oldEvent = args.oldEvent!;
      const newStart = new Date(updatedEvent.start as string | Date).getTime();
      const newEnd = new Date(updatedEvent.end as string | Date).getTime();

      if (groupByClientQuarter) {
        const oldStart = new Date(oldEvent.start as string | Date).getTime();
        const oldEnd = new Date(oldEvent.end as string | Date).getTime();
        const startDelta = newStart - oldStart;
        const endDelta = newEnd - oldEnd;

        if (startDelta === 0 && endDelta === 0) return;

        const movedGroupedEvent = groupedEvents.find((ge) => ge.id === oldEvent.id);
        if (!movedGroupedEvent) return;

        const { clientGroup: clientGroupName, resource: resourceId, collapsed: wasCollapsed } = movedGroupedEvent;
        const isMove = startDelta === endDelta;

        let eventsToUpdate: WorkEvent[];

        if (isMove) {
          eventsToUpdate = movedGroupedEvent.originalEvents.map((originalEvent) => ({
            ...originalEvent,
            start: new Date(new Date(originalEvent.start as string | Date).getTime() + startDelta),
            end: new Date(new Date(originalEvent.end as string | Date).getTime() + startDelta),
          }));
        } else {
          const oldGroupDuration = oldEnd - oldStart;
          const newGroupDuration = newEnd - newStart;

          eventsToUpdate = movedGroupedEvent.originalEvents.map((originalEvent) => {
            const evStart = new Date(originalEvent.start as string | Date).getTime();
            const evEnd = new Date(originalEvent.end as string | Date).getTime();
            const relativeStart = oldGroupDuration > 0 ? (evStart - oldStart) / oldGroupDuration : 0;
            const relativeEnd = oldGroupDuration > 0 ? (evEnd - oldStart) / oldGroupDuration : 1;
            const mappedStart = newStart + relativeStart * newGroupDuration;
            const mappedEnd = newStart + relativeEnd * newGroupDuration;
            const childDurationDays = (mappedEnd - mappedStart) / (1000 * 60 * 60 * 24);
            return {
              ...originalEvent,
              start: new Date(mappedStart),
              end: new Date(childDurationDays < 1 ? mappedStart + 1000 * 60 * 60 * 24 : mappedEnd),
            };
          });
        }

        const updatedMap = new Map(eventsToUpdate.map((e) => [e.id, e]));
        const newMyEvents = myEvents.map((e) => (updatedMap.has(e.id) ? updatedMap.get(e.id)! : e));
        setMyEvents(newMyEvents);

        const newYear = new Date(eventsToUpdate[0].start as string | Date).getFullYear();
        const newPeriod = Math.floor(new Date(eventsToUpdate[0].start as string | Date).getMonth() / 3);
        const newStateKey = `${resourceId}-${clientGroupName}-${newYear}-${newPeriod}`;
        setCollapsedMap((prev) => ({ ...prev, [newStateKey]: wasCollapsed }));

        const actionLabel = isMove ? 'moved' : 'resized';
        setToastMessage(`${eventsToUpdate.length} event(s) for ${clientGroupName} have been ${actionLabel}.`);
        setToastOpen(true);
      } else {
        const oldResource = oldEvent.resource;
        const newResource = updatedEvent.resource;
        const resourceChanged = oldResource !== newResource;

        setMyEvents((prev) =>
          prev.map((e) => {
            if (e.id !== updatedEvent.id) return e;
            const update: Partial<WorkEvent> = { start: updatedEvent.start, end: updatedEvent.end };
            if (resourceChanged) {
              if (groupBy === 'assignee') update.resource = newResource;
              else update.type = String(newResource);
            }
            return { ...e, ...update };
          }),
        );

        if (resourceChanged) {
          let fromName;
          let toName;
          if (groupBy === 'assignee') {
            const fromRes = assigneeResources.find((r) => r.id === oldResource);
            const toRes = assigneeResources.find((r) => r.id === newResource);
            fromName = fromRes ? fromRes.name : String(oldResource);
            toName = toRes ? toRes.name : String(newResource);
          } else {
            fromName = String(oldResource);
            toName = String(newResource);
          }
          setToastMessage(`"${updatedEvent.title}" moved from ${fromName} to ${toName}.`);
          setToastOpen(true);
        }
      }
    },
    [groupBy, groupByClientQuarter, groupedEvents, myEvents],
  );

  // --- Edit event (datepicker) ---
  const handleEditDateChange = useCallback(
    (args: MbscDatepickerChangeEvent) => {
      const dates = args.value as [MbscDateType, MbscDateType] | null;
      const startVal = dates && dates[0];
      const endVal = dates && dates[1];

      if (editingEventId === null || !startVal || !endVal) return;

      const oldEvent = myEvents.find((e) => e.id === editingEventId);
      if (!oldEvent) return;

      const oldQuarter = Math.floor(new Date(oldEvent.start as string | Date).getMonth() / 3);
      const newQuarter = Math.floor(new Date(startVal as string | Date).getMonth() / 3);
      const oldYear = new Date(oldEvent.start as string | Date).getFullYear();
      const newYear = new Date(startVal as string | Date).getFullYear();
      const quarterChanged = groupByClientQuarter && (oldQuarter !== newQuarter || oldYear !== newYear);

      const applyUpdate = () => {
        setMyEvents((prev) => prev.map((e) => (e.id === editingEventId ? { ...e, start: startVal, end: endVal } : e)));
      };

      if (quarterChanged) {
        const quarterNames = ['Q1', 'Q2', 'Q3', 'Q4'];
        const fromLabel = `${quarterNames[oldQuarter]} ${oldYear}`;
        const toLabel = `${quarterNames[newQuarter]} ${newYear}`;

        confirmCallbackRef.current = () => {
          applyUpdate();
          setToastMessage(`"${oldEvent.title}" moved to ${toLabel}.`);
          setToastOpen(true);
        };
        setConfirmMessage(`"${oldEvent.title}" will move from ${fromLabel} to ${toLabel}. Do you want to continue?`);
        setConfirmOpen(true);
      } else {
        applyUpdate();
        setToastMessage(`"${oldEvent.title}" dates updated.`);
        setToastOpen(true);
      }
    },
    [editingEventId, groupByClientQuarter, myEvents],
  );

  return (
    <>
      <Eventcalendar
        ref={calendarRef}
        className="mds-event-group-calendar"
        dragToMove={true}
        dragToResize={true}
        dragToCreate={false}
        clickToCreate={false}
        dragBetweenResources={!groupByClientQuarter}
        view={myView}
        data={displayEvents}
        resources={myResources}
        renderHeader={renderCustomHeader}
        renderResource={renderCustomResource}
        renderScheduleEvent={groupByClientQuarter ? renderGroupedEvent : renderSimpleEvent}
        onEventUpdate={handleEventUpdate}
      />
      <Datepicker
        controls={['calendar']}
        select="range"
        display="center"
        touchUi={false}
        showRangeLabels={false}
        headerText={editEventTitle}
        value={editEventDateRange}
        isOpen={isDatePickerOpen}
        onClose={() => setDatePickerOpen(false)}
        onChange={handleEditDateChange}
      />
      <Confirm
        isOpen={isConfirmOpen}
        title="Move to different group"
        message={confirmMessage}
        okText="Move"
        cancelText="Cancel"
        onClose={(result: boolean) => {
          if (result) confirmCallbackRef.current?.();
          setConfirmOpen(false);
        }}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={() => setToastOpen(false)} />
    </>
  );
};

export default App;
