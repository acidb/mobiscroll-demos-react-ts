import { Page, Radio, RadioGroup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Radio buttons</div>
      <RadioGroup name="group">
        <Radio label="Radio Option 1" description="This is description for radio 1" defaultChecked={true} />
        <Radio label="Radio Option 2" description="This is description for radio 2" />
        <Radio label="Radio Option 3" />
        <Radio label="Disabled" disabled={true} />
      </RadioGroup>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Radio button colors</div>
      <RadioGroup name="colors">
        <Radio label="Primary" color="primary" />
        <Radio label="Secondary" color="secondary" />
        <Radio label="Success" color="success" defaultChecked={true} />
        <Radio label="Danger" color="danger" />
        <Radio label="Warning" color="warning" />
        <Radio label="Info" color="info" />
      </RadioGroup>
    </div>
  </Page>
);
export default App;
