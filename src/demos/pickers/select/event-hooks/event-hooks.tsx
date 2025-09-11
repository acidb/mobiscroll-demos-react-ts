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
    <Select
      data={myData}
      filter={true}
      label="Select"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
      onCancel={() => {
        // Logic for cancel button click
      }}
      onChange={() => {
        // Logic for value change
      }}
      onClose={() => {
        // Your custom event handler goes here
      }}
      onDestroy={() => {
        // Your custom event handler goes here
      }}
      onFilter={() => {
        // Your custom event handler goes here
      }}
      onInit={() => {
        // Logic running on component init
      }}
      onOpen={() => {
        // Your custom event handler goes here
      }}
      onPosition={() => {
        // Logic for component positioning
      }}
      onTempChange={() => {
        // Logic for temporary value change
      }}
    />
  );
}

export default App;
