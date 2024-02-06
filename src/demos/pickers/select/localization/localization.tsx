import { localeEs, Select, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
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
    <Select
      data={myData}
      label="Select"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
      display="bottom"
      locale={localeEs} // sets the language of the component
    />
  );
}

export default App;
