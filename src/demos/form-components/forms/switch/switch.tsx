import { Page, setOptions, Switch /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Switch</div>
      <Switch label="Switch Off" description="This is description for Switch" />
      <Switch label="Switch On" description="This is description for Switch 2" defaultChecked={true} />
      <Switch label="Disabled Switch Off" disabled={true} />
      <Switch label="Disabled Switch On" disabled={true} defaultChecked={true} />
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Switch colors</div>
      <Switch label="Primary" color="primary" defaultChecked={true} />
      <Switch label="Secondary" color="secondary" defaultChecked={true} />
      <Switch label="Success" color="success" defaultChecked={true} />
      <Switch label="Danger" color="danger" defaultChecked={true} />
      <Switch label="Warning" color="warning" defaultChecked={true} />
      <Switch label="Info" color="info" defaultChecked={true} />
    </div>
  </Page>
);
export default App;
