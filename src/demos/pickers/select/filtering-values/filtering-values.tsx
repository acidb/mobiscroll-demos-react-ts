import { getJson, MbscSelectData, MbscSelectFilterEvent, Select, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useEffect, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const names = [
  {
    text: 'Abigail Hodges',
    value: 1,
  },
  {
    text: 'Adam Robertson',
    value: 2,
  },
  {
    text: 'Blake Nolan',
    value: 3,
  },
  {
    text: 'Dylan Manning',
    value: 4,
  },
  {
    text: 'Jane Clarkson',
    value: 5,
  },
  {
    text: 'Julian Parr',
    value: 6,
  },
  {
    text: 'Lily Blake',
    value: 7,
  },
  {
    text: 'Luke Wright',
    value: 8,
  },
  {
    text: 'Nathan Poole',
    value: 9,
  },
  {
    text: 'Olivia Vance',
    value: 10,
  },
  {
    text: 'Paul Hudson',
    value: 11,
  },
  {
    text: 'Rose Taylor',
    value: 12,
  },
  {
    text: 'Samantha Martin',
    value: 13,
  },
  {
    text: 'Steven Cameron',
    value: 14,
  },
  {
    text: 'Wanda Mills',
    value: 15,
  },
];

const App: FC = () => {
  const [remoteData, setRemoteData] = useState<(string | number | MbscSelectData)[]>([]);

  const remoteFiltering = useCallback((filterText: string) => {
    getJson(
      'https://trial.mobiscroll.com/airports/' + encodeURIComponent(filterText),
      (data) => {
        const airports = [];
        for (const item of data) {
          airports.push({ text: item.name, value: item.code });
        }
        setRemoteData(airports);
      },
      'jsonp',
    );
  }, []);

  const onFilter = useCallback(
    (args: MbscSelectFilterEvent) => {
      remoteFiltering(args.filterText);
      return false;
    },
    [remoteFiltering],
  );

  useEffect(() => {
    remoteFiltering('');
  });

  return (
    <div className="mbsc-grid mbsc-form-grid">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-12 mbsc-col-md-6">
          <Select
            data={names}
            display="anchored"
            filter={true}
            inputStyle="outline"
            label="Local data"
            labelStyle="stacked"
            placeholder="Please select..."
          />
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-6">
          <Select
            data={remoteData}
            display="anchored"
            filter={true}
            inputStyle="outline"
            label="Remote data"
            labelStyle="stacked"
            placeholder="Please select..."
            onFilter={onFilter}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
