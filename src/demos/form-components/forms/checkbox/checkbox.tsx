import { Checkbox, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Checkbox</div>
      <Checkbox label="Option 1" description="Checked checkbox" defaultChecked={true} />
      <Checkbox label="Option 2" description="Empty checkbox" />
      <Checkbox label="Option 3" description="Disabled checkbox" disabled={true} />
      <Checkbox label="Option 4" description="Disabled and checked checkbox" disabled={true} defaultChecked={true} />
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Checkbox colors</div>
      <Checkbox label="Primary" color="primary" defaultChecked={true} />
      <Checkbox label="Secondary" color="secondary" defaultChecked={true} />
      <Checkbox label="Success" color="success" defaultChecked={true} />
      <Checkbox label="Danger" color="danger" defaultChecked={true} />
      <Checkbox label="Warning" color="warning" defaultChecked={true} />
      <Checkbox label="Info" color="info" defaultChecked={true} />
    </div>
  </Page>
);
export default App;
