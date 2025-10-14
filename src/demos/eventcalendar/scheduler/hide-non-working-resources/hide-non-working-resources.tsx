import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo } from 'react';
import './hide-non-working-resources.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      // Dr. Alice Johnson – Neurology
      { start: 'dyndatetime(y,m,d-3,14)', end: 'dyndatetime(y,m,d-3,15)', title: 'Migraine Consultation', resource: 1 },
      { start: 'dyndatetime(y,m,d-3,16)', end: 'dyndatetime(y,m,d-3,17)', title: 'Epilepsy Follow-up', resource: 1 },
      { start: 'dyndatetime(y,m,d-2,11)', end: 'dyndatetime(y,m,d-2,12)', title: 'Stroke Recovery Check', resource: 1 },
      { start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,11)', title: 'Multiple Sclerosis Review', resource: 1 },
      { start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,16)', title: 'Parkinson’s Management', resource: 1 },
      { start: 'dyndatetime(y,m,d,9)', end: 'dyndatetime(y,m,d,11)', title: 'Cognitive Decline Exam', resource: 1 },
      { start: 'dyndatetime(y,m,d,11,30)', end: 'dyndatetime(y,m,d,13)', title: 'Seizure Evaluation', resource: 1 },
      { start: 'dyndatetime(y,m,d,15)', end: 'dyndatetime(y,m,d,17)', title: 'Headache Treatment', resource: 1 },
      { start: 'dyndatetime(y,m,d+1,15)', end: 'dyndatetime(y,m,d+1,16)', title: 'Dementia Consultation', resource: 1 },
      { start: 'dyndatetime(y,m,d+1,17)', end: 'dyndatetime(y,m,d+1,19)', title: 'Sleep Disorder Exam', resource: 1 },
      { start: 'dyndatetime(y,m,d+2,11)', end: 'dyndatetime(y,m,d+2,12)', title: 'Balance Disorder Check', resource: 1 },
      { start: 'dyndatetime(y,m,d+2,13)', end: 'dyndatetime(y,m,d+2,16)', title: 'Nerve Pain Therapy', resource: 1 },
      { start: 'dyndatetime(y,m,d+3,9)', end: 'dyndatetime(y,m,d+3,10)', title: 'Follow-up Consultation', resource: 1 },
      { start: 'dyndatetime(y,m,d+3,13)', end: 'dyndatetime(y,m,d+3,14)', title: 'Brain MRI Review', resource: 1 },
      { start: 'dyndatetime(y,m,d+4,15)', end: 'dyndatetime(y,m,d+4,17)', title: 'Neuropathy Assessment', resource: 1 },

      // Dr. Brian Smith – Pediatrics
      { start: 'dyndatetime(y,m,d-4,9)', end: 'dyndatetime(y,m,d-4,10)', title: 'Well-Child Checkup', resource: 2 },
      { start: 'dyndatetime(y,m,d-4,12)', end: 'dyndatetime(y,m,d-4,13)', title: 'Vaccination Visit', resource: 2 },
      { start: 'dyndatetime(y,m,d-3,11)', end: 'dyndatetime(y,m,d-3,12)', title: 'Asthma Follow-up', resource: 2 },
      { start: 'dyndatetime(y,m,d-2,12)', end: 'dyndatetime(y,m,d-2,13)', title: 'Ear Infection Exam', resource: 2 },
      { start: 'dyndatetime(y,m,d-2,15)', end: 'dyndatetime(y,m,d-2,16)', title: 'Growth & Nutrition Review', resource: 2 },
      { start: 'dyndatetime(y,m,d-1,9)', end: 'dyndatetime(y,m,d-1,10)', title: 'School Physical', resource: 2 },
      { start: 'dyndatetime(y,m,d-1,13)', end: 'dyndatetime(y,m,d-1,14)', title: 'Cough & Cold Symptoms', resource: 2 },
      { start: 'dyndatetime(y,m,d,11)', end: 'dyndatetime(y,m,d,12)', title: 'Developmental Check', resource: 2 },
      { start: 'dyndatetime(y,m,d,13)', end: 'dyndatetime(y,m,d,14)', title: 'Fever Consultation', resource: 2 },
      { start: 'dyndatetime(y,m,d+1,11)', end: 'dyndatetime(y,m,d+1,12)', title: 'Allergy Testing', resource: 2 },
      { start: 'dyndatetime(y,m,d+1,9)', end: 'dyndatetime(y,m,d+1,10)', title: 'Adolescent Counseling', resource: 2 },
      { start: 'dyndatetime(y,m,d+2,12)', end: 'dyndatetime(y,m,d+2,14)', title: 'Behavioral Concerns', resource: 2 },
      { start: 'dyndatetime(y,m,d+2,10)', end: 'dyndatetime(y,m,d+2,11)', title: 'Routine Checkup', resource: 2 },
      { start: 'dyndatetime(y,m,d+3,15)', end: 'dyndatetime(y,m,d+3,17)', title: 'Nutrition Counseling', resource: 2 },
      { start: 'dyndatetime(y,m,d+3,18)', end: 'dyndatetime(y,m,d+3,20)', title: 'Sports Physical', resource: 2 },

      // Dr. Catherine Lee – Dermatology
      { start: 'dyndatetime(y,m,d-6,10)', end: 'dyndatetime(y,m,d-6,11)', title: 'Acne Treatment', resource: 3 },
      { start: 'dyndatetime(y,m,d-5,15)', end: 'dyndatetime(y,m,d-5,16)', title: 'Eczema Follow-up', resource: 3 },
      { start: 'dyndatetime(y,m,d-4,18)', end: 'dyndatetime(y,m,d-4,19)', title: 'Psoriasis Checkup', resource: 3 },
      { start: 'dyndatetime(y,m,d-3,9)', end: 'dyndatetime(y,m,d-3,10)', title: 'Skin Cancer Screening', resource: 3 },
      { start: 'dyndatetime(y,m,d-3,13)', end: 'dyndatetime(y,m,d-3,14)', title: 'Rosacea Consultation', resource: 3 },
      { start: 'dyndatetime(y,m,d-2,10)', end: 'dyndatetime(y,m,d-2,11,30)', title: 'Mole Removal', resource: 3 },
      { start: 'dyndatetime(y,m,d-1,11)', end: 'dyndatetime(y,m,d-1,12)', title: 'Wart Removal', resource: 3 },
      { start: 'dyndatetime(y,m,d,15,30)', end: 'dyndatetime(y,m,d,16,30)', title: 'Hair Loss Evaluation', resource: 3 },
      { start: 'dyndatetime(y,m,d,18)', end: 'dyndatetime(y,m,d,20)', title: 'Scar Treatment', resource: 3 },
      { start: 'dyndatetime(y,m,d+1,14)', end: 'dyndatetime(y,m,d+1,15)', title: 'Skin Allergy Test', resource: 3 },
      { start: 'dyndatetime(y,m,d+1,16)', end: 'dyndatetime(y,m,d+1,17)', title: 'Rash Examination', resource: 3 },
      { start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,15)', title: 'Cosmetic Consultation', resource: 3 },
      { start: 'dyndatetime(y,m,d+3,16)', end: 'dyndatetime(y,m,d+3,17)', title: 'Pigmentation Check', resource: 3 },
      { start: 'dyndatetime(y,m,d+4,9)', end: 'dyndatetime(y,m,d+4,10)', title: 'Routine Skin Exam', resource: 3 },
      { start: 'dyndatetime(y,m,d+4,12)', end: 'dyndatetime(y,m,d+4,15)', title: 'Laser Therapy', resource: 3 },

      // Dr. Daniel Kim – Cardiology
      { start: 'dyndatetime(y,m,d-4,9)', end: 'dyndatetime(y,m,d-4,11)', title: 'Heart Disease Screening', resource: 4 },
      { start: 'dyndatetime(y,m,d-3,16)', end: 'dyndatetime(y,m,d-3,17)', title: 'Blood Pressure Check', resource: 4 },
      { start: 'dyndatetime(y,m,d-3,18)', end: 'dyndatetime(y,m,d-3,19)', title: 'Arrhythmia Consultation', resource: 4 },
      { start: 'dyndatetime(y,m,d-2,14)', end: 'dyndatetime(y,m,d-2,17)', title: 'Cardiac Rehab Session', resource: 4 },
      { start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,11)', title: 'Cholesterol Review', resource: 4 },
      { start: 'dyndatetime(y,m,d-1,12)', end: 'dyndatetime(y,m,d-1,14)', title: 'Heart Failure Management', resource: 4 },
      { start: 'dyndatetime(y,m,d,15)', end: 'dyndatetime(y,m,d,16)', title: 'Palpitation Assessment', resource: 4 },
      { start: 'dyndatetime(y,m,d,17)', end: 'dyndatetime(y,m,d,18)', title: 'Post-Stent Checkup', resource: 4 },
      { start: 'dyndatetime(y,m,d+1,11)', end: 'dyndatetime(y,m,d+1,12)', title: 'Cardiac Risk Counseling', resource: 4 },
      { start: 'dyndatetime(y,m,d+1,13)', end: 'dyndatetime(y,m,d+1,15)', title: 'ECG Review', resource: 4 },
      { start: 'dyndatetime(y,m,d+2,14)', end: 'dyndatetime(y,m,d+2,15)', title: 'Heart Surgery Follow-up', resource: 4 },
      { start: 'dyndatetime(y,m,d+3,8,30)', end: 'dyndatetime(y,m,d+3,10)', title: 'Angina Consultation', resource: 4 },
      { start: 'dyndatetime(y,m,d+3,12)', end: 'dyndatetime(y,m,d+3,13)', title: 'Cholesterol Counseling', resource: 4 },
      { start: 'dyndatetime(y,m,d+4,15)', end: 'dyndatetime(y,m,d+4,16)', title: 'Cardio Exercise Planning', resource: 4 },
      { start: 'dyndatetime(y,m,d+5,9)', end: 'dyndatetime(y,m,d+5,10)', title: 'Routine Heart Check', resource: 4 },

      // Dr. Eva Martinez – Orthopedics
      { start: 'dyndatetime(y,m,d-5,9)', end: 'dyndatetime(y,m,d-5,11)', title: 'Knee Pain Evaluation', resource: 5 },
      { start: 'dyndatetime(y,m,d-3,11)', end: 'dyndatetime(y,m,d-3,12)', title: 'Fracture Checkup', resource: 5 },
      { start: 'dyndatetime(y,m,d-3,13)', end: 'dyndatetime(y,m,d-3,14)', title: 'Hip Replacement Follow-up', resource: 5 },
      { start: 'dyndatetime(y,m,d-2,10)', end: 'dyndatetime(y,m,d-2,12)', title: 'Back Pain Management', resource: 5 },
      { start: 'dyndatetime(y,m,d-2,13)', end: 'dyndatetime(y,m,d-2,15)', title: 'Sports Injury Consultation', resource: 5 },
      { start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,15)', title: 'Shoulder Injury Exam', resource: 5 },
      { start: 'dyndatetime(y,m,d-1,16)', end: 'dyndatetime(y,m,d-1,18)', title: 'Arthritis Treatment', resource: 5 },
      { start: 'dyndatetime(y,m,d,11)', end: 'dyndatetime(y,m,d,12,30)', title: 'Joint Pain Assessment', resource: 5 },
      { start: 'dyndatetime(y,m,d,13)', end: 'dyndatetime(y,m,d,14)', title: 'Spinal Checkup', resource: 5 },
      { start: 'dyndatetime(y,m,d+2,8)', end: 'dyndatetime(y,m,d+2,10)', title: 'Physical Therapy Session', resource: 5 },
      { start: 'dyndatetime(y,m,d+2,11)', end: 'dyndatetime(y,m,d+2,12,30)', title: 'Post-Surgery Review', resource: 5 },
      { start: 'dyndatetime(y,m,d+3,11)', end: 'dyndatetime(y,m,d+3,12)', title: 'Hip Pain Consultation', resource: 5 },
      { start: 'dyndatetime(y,m,d+3,13)', end: 'dyndatetime(y,m,d+3,14)', title: 'Hand Injury Check', resource: 5 },
      { start: 'dyndatetime(y,m,d+4,13)', end: 'dyndatetime(y,m,d+4,14)', title: 'Orthopedic Follow-up', resource: 5 },
      { start: 'dyndatetime(y,m,d+4,15)', end: 'dyndatetime(y,m,d+4,18)', title: 'Sports Rehab Therapy', resource: 5 },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Dr. Alice Johnson',
        specialty: 'Neurology',
        bgColor: '#d392e780',
        textColor: '#1b012280',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
      {
        id: 2,
        name: 'Dr. Brian Smith',
        specialty: 'Pediatrics',
        bgColor: '#69a9ff80',
        textColor: '#01285c80',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 3,
        name: 'Dr. Catherine Lee',
        specialty: 'Dermatology',
        bgColor: '#71c17680',
        textColor: '#02250580',
        img: 'https://img.mobiscroll.com/demos/f2.png',
      },
      {
        id: 4,
        name: 'Dr. Daniel Kim',
        specialty: 'Cardiology',
        bgColor: '#bf4d4d80',
        textColor: '#15010180',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
      {
        id: 5,
        name: 'Dr. Eva Martinez',
        specialty: 'Orthopedics',
        bgColor: '#f0eb8980',
        textColor: '#1c1b0180',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
    ],
    [],
  );

  const myColors = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        resource: 1,
        start: '08:00',
        end: '20:00',
        recurring: {
          repeat: 'daily',
        },
        background: '#fadaff4d',
      },
      {
        resource: 2,
        start: '08:00',
        end: '20:00',
        recurring: {
          repeat: 'daily',
        },
        background: '#bfdeff4d',
      },
      {
        resource: 3,
        start: '08:00',
        end: '20:00',
        recurring: {
          repeat: 'daily',
        },
        background: '#e1ffd64d',
      },
      {
        resource: 4,
        start: '08:00',
        end: '20:00',
        recurring: {
          repeat: 'daily',
        },
        background: '#fac4c44d',
      },
      {
        resource: 5,
        start: '08:00',
        end: '20:00',
        recurring: {
          repeat: 'daily',
        },
        background: '#ffffd04d',
      },
    ],
    [],
  );

  const myInvalids = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        recurring: { repeat: 'weekly', weekDays: 'MO,WE,FR' },
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
        recurring: { repeat: 'weekly', weekDays: 'MO,WE' },
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

  const myResourceHeader = useCallback(
    (resource: MbscResource) => (
      <div className="mbsc-flex mds-hide-non-working-resources-bg" style={{ backgroundColor: resource.bgColor }}>
        <img className="mds-hide-non-working-resources-img mbsc-flex-none" alt={resource.name} src={resource.img} />
        <div className="mds-hide-non-working-resources-cont mbsc-flex-1-1">
          <div className="mds-hide-non-working-resources-name">{resource.name}</div>
          <div className="mds-hide-non-working-resources-spec" style={{ color: resource.textColor }}>
            {resource.specialty}
          </div>
        </div>
      </div>
    ),
    [],
  );

  return (
    <Eventcalendar
      view={myView}
      data={myEvents}
      resources={myResources}
      colors={myColors}
      invalid={myInvalids}
      renderResource={myResourceHeader}
      groupBy="date"
      cssClass="mds-hide-non-working-resources"
    />
  );
};
export default App;
