import { getJson, MbscSelectData, MbscSelectItemData, Select, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useEffect, useState } from 'react';
import './country-picker.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myData, setMyData] = useState<(string | number | MbscSelectData)[]>([]);

  const renderCustomItem = useCallback(
    (item: MbscSelectItemData) => (
      <div className="md-country-picker-item">
        <img className="md-country-picker-flag" src={'https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png'} alt="Flag" />
        {item.display}
      </div>
    ),
    [],
  );

  useEffect(() => {
    getJson('https://trial.mobiscroll.com/content/countries.json', (resp) => {
      setMyData(resp.map((country: { text: string; value: string }) => ({ text: country.text, value: country.value })));
    });
  }, []);

  return (
    <Select
      data={myData}
      display="anchored"
      inputStyle="outline"
      itemHeight={40}
      label="Countries"
      labelStyle="stacked"
      placeholder="Please select..."
      renderItem={renderCustomItem}
    />
  );
};
export default App;
