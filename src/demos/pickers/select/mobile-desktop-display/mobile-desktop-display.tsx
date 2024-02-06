import { Select, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const myData = [
  {
    text: 'Atlanta',
    value: 'atl',
  },
  {
    text: 'Berlin',
    value: 'ber',
  },
  {
    text: 'Boston',
    value: 'bos',
  },
  {
    text: 'Chicago',
    value: 'chi',
  },
  {
    text: 'London',
    value: 'lon',
  },
  {
    text: 'Los Angeles',
    value: 'la',
  },
  {
    text: 'New York',
    value: 'ny',
  },
  {
    text: 'Paris',
    value: 'par',
  },
  {
    text: 'San Francisco',
    value: 'sf',
  },
];

function App() {
  return (
    <>
      <Select data={myData} display="inline" />
      <Select data={myData} display="anchored" label="Anchored" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
      <Select data={myData} display="top" label="Top" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
      <Select data={myData} display="bottom" label="Bottom" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
      <Select data={myData} display="center" label="Center" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
    </>
  );
}

export default App;
