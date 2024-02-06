import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';
import './half-day-styling.css';

setOptions({
  // localeJs,
  // themeJs
});

const myColors = [
  { date: 'dyndatetime(y,m,12)', cellCssClass: 'check-in' },
  { date: 'dyndatetime(y,m,16)', cellCssClass: 'check-out' },
  { start: 'dyndatetime(y,m,13)', end: 'dyndatetime(y,m,15)', background: '#46c4f3' },
];
const App: FC = () => <Datepicker controls={['calendar']} select="range" display="inline" colors={myColors} />;
export default App;
