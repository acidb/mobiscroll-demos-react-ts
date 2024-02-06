import { Input, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">User Data</div>
      <Input label="First name" placeholder="First Name" />
      <Input label="Last name" placeholder="Last Name" />
      <Input label="User name" placeholder="User Name" />
      <Input label="Company" placeholder="Company Name" />
      <Input label="Email" placeholder="Email Address" />
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Phone Number</div>
      <Input label="Home" placeholder="Home" />
      <Input label="Business" placeholder="Business" />
      <Input label="Fax" placeholder="Fax" />
    </div>
  </Page>
);
export default App;
