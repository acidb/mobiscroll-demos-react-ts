import { Select, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const myData = [
  {
    value: 1,
    text: 'Books',
  },
  {
    value: 2,
    text: 'Movies, Music & Games',
  },
  {
    value: 3,
    text: 'Electronics & Computers',
  },
  {
    value: 4,
    text: 'Home, Garden & Tools',
  },
  {
    value: 5,
    text: 'Health & Beauty',
  },
  {
    value: 6,
    text: 'Toys, Kids & Baby',
  },
  {
    value: 7,
    text: 'Clothing & Jewelry',
  },
  {
    value: 8,
    text: 'Sports & Outdoors',
  },
  {
    value: 9,
    text: 'Automotive & Industrial',
  },
];

function App() {
  return (
    <Select
      data={myData}
      selectMultiple={true}
      label="Multi-select"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please select..."
    />
  );
}

export default App;
