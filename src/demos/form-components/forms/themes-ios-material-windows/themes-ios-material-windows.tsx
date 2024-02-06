import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Page,
  Radio,
  RadioGroup,
  Segmented,
  SegmentedGroup,
  setOptions,
  Stepper,
  Switch,
  Textarea /* localeImport */,
} from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-form-group">
      <Input label="Input field" placeholder="Input with label" />
      <Textarea label="Textarea" placeholder="Textarea with label" />
      <Dropdown label="Select">
        <option value="Opel">Opel</option>
        <option value="Renault">Renault</option>
        <option value="Citroen">Citroen</option>
        <option value="Lotus">Lotus</option>
      </Dropdown>
      <Switch label="Switch" defaultChecked={true} />
      <Checkbox label="Checkbox" defaultChecked={true} />
      <RadioGroup name="rad">
        <Radio value="1" label="Radio 1" defaultChecked={true} />
        <Radio value="2" label="Radio 2" />
      </RadioGroup>
      <Stepper label="Stepper" />
      <div className="mbsc-button-group-block">
        <Button>Button</Button>
      </div>
      <SegmentedGroup name="segmented-group">
        <Segmented>Segmented 1</Segmented>
        <Segmented>Segmented 2</Segmented>
      </SegmentedGroup>
    </div>
  </Page>
);
export default App;
