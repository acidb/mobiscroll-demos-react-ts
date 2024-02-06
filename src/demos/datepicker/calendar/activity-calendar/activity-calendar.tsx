import {
  Datepicker,
  // MbscCalendarDayData,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC } from 'react';
import './activity-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

const activities = [
  {
    date: 'dyndatetime(y,m,d-6)',
    move: 200,
    exercise: 360,
    stand: 180,
  },
  {
    date: 'dyndatetime(y,m,d-5)',
    move: 360,
    exercise: 150,
    stand: 230,
  },
  {
    date: 'dyndatetime(y,m,d-4)',
    move: 180,
    exercise: 200,
    stand: 280,
  },
  {
    date: 'dyndatetime(y,m,d-3)',
    move: 120,
    exercise: 150,
    stand: 200,
  },
  {
    date: 'dyndatetime(y,m,d-2)',
    move: 320,
    exercise: 180,
    stand: 100,
  },
  {
    date: 'dyndatetime(y,m,d-1)',
    move: 120,
    exercise: 100,
    stand: 200,
  },
  {
    date: 'dyndatetime(y,m,d)',
    move: 230,
    exercise: 170,
    stand: 330,
  },
  {
    date: 'dyndatetime(y,m,d+1)',
    move: 320,
    exercise: 260,
    stand: 80,
  },
  {
    date: 'dyndatetime(y,m,d+2)',
    move: 200,
    exercise: 140,
    stand: 180,
  },
  {
    date: 'dyndatetime(y,m,d+3)',
    move: 360,
    exercise: 300,
    stand: 160,
  },
  {
    date: 'dyndatetime(y,m,d+4)',
    move: 80,
    exercise: 360,
    stand: 360,
  },
  {
    date: 'dyndatetime(y,m,d+5)',
    move: 220,
    exercise: 170,
    stand: 290,
  },
  {
    date: 'dyndatetime(y,m,d+6)',
    move: 120,
    exercise: 40,
    stand: 100,
  },
  {
    date: 'dyndatetime(y,m,d+7)',
    move: 120,
    exercise: 200,
    stand: 80,
  },
];

const App: FC = () => {
  const getDeg = (nr: number) => ({
    rotate1: nr > 180 ? 180 : nr,
    rotate2: nr > 180 ? nr - 180 : 0,
  });

  const getTransform = (rotate: number) => 'rotateZ(' + rotate + 'deg)';

  const customDay = (args: { date: Date }) => {
    const a = activities.find((obj) => +new Date(obj.date) === +args.date);

    return (
      <div className="screen">
        <div className={a ? 'dial move' : ''}>
          <div className="dial-background" style={{ background: a ? '#752a2a' : '' }}></div>
          <div className="dial-container container1">
            <div className="wedge" style={{ transform: a ? getTransform(getDeg(a.move).rotate1) : '' }}></div>
          </div>
          <div className="dial-container container2">
            <div className="wedge" style={{ transform: a ? getTransform(getDeg(a.move).rotate2) : '' }}></div>
          </div>
          <div className="marker start"></div>
          <div className="marker end" style={{ transform: a ? getTransform(a.move) : '' }}></div>
        </div>
        <div className={a ? 'dial exercise' : ''}>
          <div className="dial-background" style={{ background: a ? '#4a6915' : '' }}></div>
          <div className="dial-container container1">
            <div className="wedge" style={{ transform: a ? getTransform(getDeg(a.exercise).rotate1) : '' }}></div>
          </div>
          <div className="dial-container container2">
            <div className="wedge" style={{ transform: a ? getTransform(getDeg(a.exercise).rotate2) : '' }}></div>
          </div>
          <div className="marker start"></div>
          <div className="marker end" style={{ transform: a ? getTransform(a.exercise) : '' }}></div>
        </div>
        <div className={a ? 'dial stand' : ''}>
          <div className="dial-background" style={{ background: a ? '#157b76' : '' }}></div>
          <div className="dial-container container1">
            <div className="wedge" style={{ transform: a ? getTransform(getDeg(a.stand).rotate1) : '' }}></div>
          </div>
          <div className="dial-container container2">
            <div className="wedge" style={{ transform: a ? getTransform(getDeg(a.stand).rotate2) : '' }}></div>
          </div>
          <div className="marker start"></div>
          <div className="marker end" style={{ transform: a ? getTransform(a.stand) : '' }}></div>
        </div>
      </div>
    );
  };

  return <Datepicker controls={['calendar']} touchUi={true} display="inline" renderDayContent={customDay} />;
};
export default App;
