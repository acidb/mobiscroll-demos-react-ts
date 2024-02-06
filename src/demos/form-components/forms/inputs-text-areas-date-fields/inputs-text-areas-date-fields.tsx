import { Datepicker, Dropdown, Input, Page, setOptions, Textarea /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const props1 = { placeholder: 'Please Select...', label: 'Calendar' };
  const props2 = { placeholder: 'Please Select...', label: 'Date scroller' };
  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Single-line text</div>
        <Input label="Label" placeholder="Text field label" />
        <Input label="Password" type="password" placeholder="Password field with icon" startIcon="lock2" />
        <Input label="Password Toggle" type="password" placeholder="Password field with icon" startIcon="lock2" passwordToggle={true} />
        <Input placeholder="Text field with right icon" endIcon="pencil" />
        <Input placeholder="Text field disabled" disabled={true} />
        <Input placeholder="Text field with error style" error={true} />
        <Input placeholder="Text field with error style and message" error={true} errorMessage="Error message!" />
        <Input label="File upload" type="file" placeholder="Select file..." />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Multi-line text</div>
        <Textarea label="Label" />
        <Textarea endIcon="pencil" />
        <Textarea label="Label" startIcon="bubble" />
        <Textarea placeholder="disabled" disabled={true} />
        <Textarea error={true} errorMessage="Error message!" />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Input fields for date entry</div>
        <Input type="date" label="Date field" placeholder="Please Select..." />
        <Datepicker controls={['calendar']} inputProps={props1} />
        <Datepicker controls={['date']} inputProps={props2} />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Input fields for number entry</div>
        <Input label="Number field" type="number" placeholder="Please Select..." />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Select</div>
        <Dropdown label="Label">
          <option>Select</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Dropdown>
        <Dropdown endIcon="plus">
          <option>Select with right icon</option>
          <option value="opel">Opel</option>
          <option value="renault">Renault</option>
          <option value="Citroen">Citroen</option>
          <option value="Lotus">Lotus</option>
        </Dropdown>
        <Dropdown startIcon="plus">
          <option>Select with left icon</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Porsche">Porsche</option>
          <option value="Fiat">Fiat</option>
          <option value="Volkswagen">Volkswagen</option>
        </Dropdown>
        <Dropdown error={true}>
          <option>Select error</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Honda">Honda</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Lamborghini">Lamborghini</option>
        </Dropdown>
        <Dropdown disabled={true}>
          <option>Select disabled</option>
          <option value="Bentley">Bentley</option>
          <option value="Morgan">Morgan</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Dodge">Dodge</option>
        </Dropdown>
      </div>
    </Page>
  );
};
export default App;
