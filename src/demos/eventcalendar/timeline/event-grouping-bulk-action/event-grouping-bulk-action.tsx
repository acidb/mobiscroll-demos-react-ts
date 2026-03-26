import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Checkbox,
  Eventcalendar,
  formatDate,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscEventUpdateEvent,
  MbscResource,
  MbscSelectData,
  Select,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { dyndatetime } from '../../../../dyndatetime';
import './event-grouping-bulk-action.css';

setOptions({
  // localeJs,
  // themeJs
});

const assigneeResources: MbscResource[] = [
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
  {
    id: 'installation',
    name: 'installation',
    color: '#3b5998',
  },
  {
    id: 'maintenance',
    name: 'maintenance',
    color: '#2d7a4f',
  },
  {
    id: 'repair',
    name: 'repair',
    color: '#b8621b',
  },
  {
    id: 'inspection',
    name: 'inspection',
    color: '#6b4fa3',
  },
  {
    id: 'upgrade',
    name: 'upgrade',
    color: '#a03a3a',
  },
];

const selectData: MbscSelectData[] = [
  {
    text: 'View by Assignee',
    value: 'assignee',
  },
  {
    text: 'View by Type',
    value: 'type',
  },
];

const defaultEvents: MbscCalendarEvent[] = [
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
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'year',
        resolutionHorizontal: 'month',
        eventHeight: 'variable',
      },
    }),
    [],
  );

  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>(defaultEvents);
  const [displayEvents, setDisplayEvents] = useState<MbscCalendarEvent[]>([]);
  const [myResources, setMyResources] = useState<MbscResource[]>(assigneeResources);
  const [groupedEvents, setGroupedEvents] = useState<MbscCalendarEvent[]>([]);
  const [groupBy, setGroupBy] = useState<string>('assignee');
  const [groupByClientQuarter, setGroupByClientQuarter] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const groupedEventsRef = useRef(groupedEvents);
  useEffect(() => {
    groupedEventsRef.current = groupedEvents;
  }, [groupedEvents]);

  const groupEventsByClientQuarter = useCallback(
    (events: MbscCalendarEvent[]) => {
      const groups: Record<
        string,
        {
          resource: string | number;
          clientGroup: string;
          year: number;
          period: number;
          events: MbscCalendarEvent[];
        }
      > = {};
      const result: MbscCalendarEvent[] = [];

      const oldCollapsedStates: Record<string, boolean | undefined> = {};
      groupedEventsRef.current.forEach((ge) => {
        const stateKey = `${ge.resource}-${ge.clientGroup}-${ge.year}-${ge.period}`;
        oldCollapsedStates[stateKey] = ge.collapsed;
      });

      events.forEach((event) => {
        const resourceId = groupBy === 'assignee' ? event.resource : event.type;
        const eventStart = new Date(event.start as string | number | Date);
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
          collapsed: stateKey in oldCollapsedStates ? oldCollapsedStates[stateKey] : true,
        });
      });

      return result;
    },
    [groupBy],
  );

  const prepareEventsForDisplay = useCallback(
    (events: MbscCalendarEvent[]) =>
      events.map((event: MbscCalendarEvent) => ({
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

  useEffect(() => {
    if (groupByClientQuarter) {
      const newGrouped = groupEventsByClientQuarter(myEvents);
      setGroupedEvents(newGrouped);
      setDisplayEvents(newGrouped);
      setMyResources(groupBy === 'assignee' ? assigneeResources : typeResources);
    } else {
      setGroupedEvents([]);
      setDisplayEvents(prepareEventsForDisplay(myEvents));
      setMyResources(groupBy === 'assignee' ? assigneeResources : typeResources);
    }
  }, [myEvents, groupBy, groupByClientQuarter, groupEventsByClientQuarter, prepareEventsForDisplay]);

  const renderGroupedEvent = useCallback(
    (event: MbscCalendarEventData) => {
      const origEvent = event.original as MbscCalendarEvent;
      const isExpanded = !origEvent.collapsed;
      const originalEvents: MbscCalendarEvent[] = origEvent.originalEvents ?? [];

      const uniqueItems: Record<string, MbscResource> = {};
      originalEvents.forEach((ev: MbscCalendarEvent) => {
        if (groupBy === 'assignee') {
          const typeObj = typeResources.find((r) => r.id === ev.type);
          if (typeObj) uniqueItems[typeObj.id as string] = typeObj;
        } else {
          const emp = assigneeResources.find((r) => r.id === ev.resource);
          if (emp) uniqueItems[emp.id as string] = emp;
        }
      });

      const itemCount = Object.keys(uniqueItems).length;
      const itemLabel = groupBy === 'assignee' ? 'type' : 'employee';

      return (
        <div
          className={`mbsc-flex mds-event-grouping-task mds-event-grouping-task-client${isExpanded ? ' expanded' : ''}`}
          style={{ borderLeftColor: origEvent.color }}
        >
          <div className="mbsc-flex mds-event-grouping-content">
            <div className="mds-event-grouping-title-text">{origEvent.clientGroup}</div>
            <div className="mbsc-flex mds-event-grouping-right">
              <div className="mbsc-flex mds-event-grouping-meta">
                <div className="mds-event-grouping-date-range">
                  {formatDate('DD MMM', new Date(origEvent.start as string))} - {formatDate('DD MMM', new Date(origEvent.end as string))}
                </div>
                <div className="mds-event-grouping-count">
                  {origEvent.count} task{origEvent.count > 1 ? 's' : ''}, {itemCount} {itemLabel}
                  {itemCount > 1 ? 's' : ''}
                </div>
              </div>
              <div
                className="mbsc-flex mds-event-grouping-icon mbsc-icon mbsc-font-icon mbsc-icon-material-keyboard-arrow-down"
                onClick={() =>
                  setGroupedEvents((prev) => {
                    const next = prev.map((ge) => (ge.id === origEvent.id ? { ...ge, collapsed: !ge.collapsed } : ge));
                    setDisplayEvents(next);
                    return next;
                  })
                }
              />
            </div>
          </div>
          <div className="mds-event-grouping-events">
            <div className="mds-event-grouping-events-inner">
              {originalEvents.map((ev: MbscCalendarEvent) => {
                let detailText = '';
                let typeDotColor = '';
                let avatarUrl = '';

                if (groupBy === 'assignee') {
                  const typeObj = typeResources.find((r) => r.id === ev.type);
                  if (typeObj) {
                    detailText = typeObj.name ?? '';
                    typeDotColor = typeObj.color ?? '';
                  }
                } else {
                  const employee = assigneeResources.find((r) => r.id === ev.resource);
                  if (employee) {
                    detailText = employee.name ?? '';
                    avatarUrl = employee.img ?? '';
                  }
                }

                return (
                  <div key={ev.id} className="mds-event-grouping-original-event" style={{ display: isExpanded ? '' : 'none' }}>
                    <div className="mbsc-flex mds-event-grouping-event-content">
                      <div className="mds-event-grouping-event-title">{ev.title}</div>
                      <div className="mbsc-flex mds-event-grouping-event-right">
                        <div className="mds-event-grouping-event-date">
                          {formatDate('DD MMM', new Date(ev.start as string))} - {formatDate('DD MMM', new Date(ev.end as string))}
                        </div>
                        <div className="mbsc-flex mds-event-grouping-event-detail">
                          {avatarUrl && <img src={avatarUrl} alt={detailText} className="mds-event-grouping-event-avatar" />}
                          {typeDotColor && <span className="mds-event-grouping-type-dot" style={{ backgroundColor: typeDotColor }} />}
                          <div className="mds-event-grouping-event-info">{detailText}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    },
    [groupBy],
  );

  const renderSimpleEvent = useCallback(
    (event: MbscCalendarEventData) => {
      const origEvent = event.original as MbscCalendarEvent;
      let detailText = '';
      let avatarUrl = '';
      let typeDotColor = '';

      if (groupBy === 'assignee') {
        const typeObj = typeResources.find((t) => t.id === origEvent.type);
        if (typeObj) {
          detailText = typeObj.name ?? '';
          typeDotColor = typeObj.color ?? '';
        }
      } else {
        const employee = assigneeResources.find((r) => r.id === origEvent.assignee);
        if (employee) {
          detailText = employee.name ?? '';
          avatarUrl = employee.img ?? '';
        }
      }

      return (
        <div className="mbsc-flex mds-event-simple" style={{ background: origEvent.color }}>
          <div className="mds-event-simple-title">{origEvent.title}</div>
          <div className="mbsc-flex mds-event-simple-right">
            <div className="mds-event-simple-date">
              {formatDate('DD MMM', new Date(origEvent.start as string))} - {formatDate('DD MMM', new Date(origEvent.end as string))}
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

  const changeByClientQuarter = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setGroupByClientQuarter(event.target.checked);
  }, []);

  // ✅ Mobiscroll Select fires a custom event object {value}, not a native ChangeEvent
  const changeGroupBy = useCallback((event: { value: string }) => {
    setGroupBy(event.value);
  }, []);

  const renderCustomHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end mds-event-grouping-header-controls">
          <Checkbox checked={groupByClientQuarter} onChange={changeByClientQuarter} label="Group by Client/Quarter" />
          <Select inputStyle="box" display="anchored" touchUi={false} data={selectData} value={groupBy} onChange={changeGroupBy} />
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [changeByClientQuarter, changeGroupBy, groupBy, groupByClientQuarter],
  );

  const renderCustomResource = useCallback((resource: MbscResource) => {
    if (resource.img) {
      return (
        <div className="mbsc-flex">
          <img alt={resource.name} className="mds-event-grouping-avatar" src={resource.img} />
          <div className="mds-event-grouping-cont">
            <div className="mds-event-grouping-name">{resource.name}</div>
            <div className="mds-event-grouping-title">{resource.title}</div>
          </div>
        </div>
      );
    }
    return (
      <div className="mbsc-flex mds-event-grouping-type-resource">
        <div className="mds-event-grouping-type-badge" style={{ backgroundColor: resource.color }}></div>
        <div className="mds-event-grouping-type-name">{resource.name}</div>
      </div>
    );
  }, []);

  const handleEventUpdate = useCallback(
    (args: MbscEventUpdateEvent) => {
      const updatedEvent = args.event;
      const oldEvent = args.oldEvent!;

      if (groupByClientQuarter) {
        const startDelta = new Date(updatedEvent.start as string).getTime() - new Date(oldEvent.start as string).getTime();

        if (startDelta === 0) return;

        const movedGroupedEvent = groupedEvents.find((ge) => ge.id === oldEvent.id);
        if (!movedGroupedEvent) return;

        const { clientGroup: clientGroupName, resource: resourceId, collapsed: wasCollapsed } = movedGroupedEvent;

        const updatedEventIds = new Set((movedGroupedEvent.originalEvents as MbscCalendarEvent[]).map((e) => e.id));
        let movedCount = 0;

        const newMyEvents = myEvents.map((e) => {
          if (!updatedEventIds.has(e.id)) return e;
          movedCount++;
          return {
            ...e,
            start: new Date(new Date(e.start as string).getTime() + startDelta).toISOString(),
            end: new Date(new Date(e.end as string).getTime() + startDelta).toISOString(),
          };
        });

        setMyEvents(newMyEvents);

        // ✅ Guard against undefined before accessing .start
        const firstUpdated = newMyEvents.find((e) => updatedEventIds.has(e.id));
        if (!firstUpdated) return;

        const newYear = new Date(firstUpdated.start as string).getFullYear();
        const newPeriod = Math.floor(new Date(firstUpdated.start as string).getMonth() / 3);

        const newGrouped = groupEventsByClientQuarter(newMyEvents).map((ge) =>
          ge.resource === resourceId && ge.clientGroup === clientGroupName && ge.year === newYear && ge.period === newPeriod
            ? { ...ge, collapsed: wasCollapsed }
            : ge,
        );

        setGroupedEvents(newGrouped);
        setDisplayEvents(newGrouped);

        setToastMessage(`${movedCount} event(s) for ${clientGroupName} have been moved.`);
        setToastOpen(true);
      } else {
        setMyEvents((prev) => prev.map((e) => (e.id === oldEvent.id ? { ...e, start: updatedEvent.start, end: updatedEvent.end } : e)));
      }
    },
    [groupByClientQuarter, groupedEvents, groupEventsByClientQuarter, myEvents],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        className="mds-event-grouping-calendar"
        dragToMove={true}
        dragToResize={false}
        dragToCreate={false}
        clickToCreate={false}
        dragBetweenResources={false}
        view={myView}
        data={displayEvents}
        resources={myResources}
        renderHeader={renderCustomHeader}
        renderResource={renderCustomResource}
        renderScheduleEvent={groupByClientQuarter ? renderGroupedEvent : renderSimpleEvent}
        onEventUpdate={handleEventUpdate}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};

export default App;
