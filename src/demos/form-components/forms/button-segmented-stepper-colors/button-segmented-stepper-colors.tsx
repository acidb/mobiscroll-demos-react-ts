import { Button, Page, Segmented, SegmentedGroup, setOptions, Stepper /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Button colors</div>
      <div className="mbsc-button-group">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
        <Button color="info">Info</Button>
        <Button color="light">Light</Button>
        <Button color="dark">Dark</Button>
      </div>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Segmented colors</div>
      <SegmentedGroup name="groupPrimary" color="primary">
        <Segmented value="desktop" icon="home" defaultChecked={true}>
          Desktop
        </Segmented>
        <Segmented value="mobile" icon="mobile">
          Mobile
        </Segmented>
        <Segmented value="cloud" icon="cloud-upload">
          Cloud
        </Segmented>
      </SegmentedGroup>
      <SegmentedGroup name="groupSecondary" color="secondary">
        <Segmented value="desktop" icon="home" defaultChecked={true}>
          Desktop
        </Segmented>
        <Segmented value="mobile" icon="mobile">
          Mobile
        </Segmented>
        <Segmented value="cloud" icon="cloud-upload">
          Cloud
        </Segmented>
      </SegmentedGroup>
      <SegmentedGroup name="groupSuccess" color="success">
        <Segmented value="desktop" icon="home" defaultChecked={true}>
          Desktop
        </Segmented>
        <Segmented value="mobile" icon="mobile">
          Mobile
        </Segmented>
        <Segmented value="cloud" icon="cloud-upload">
          Cloud
        </Segmented>
      </SegmentedGroup>
      <SegmentedGroup name="groupDanger" color="danger">
        <Segmented value="desktop" icon="home" defaultChecked={true}>
          Desktop
        </Segmented>
        <Segmented value="mobile" icon="mobile">
          Mobile
        </Segmented>
        <Segmented value="cloud" icon="cloud-upload">
          Cloud
        </Segmented>
      </SegmentedGroup>
      <SegmentedGroup name="groupWarning" color="warning">
        <Segmented value="desktop" icon="home" defaultChecked={true}>
          Desktop
        </Segmented>
        <Segmented value="mobile" icon="mobile">
          Mobile
        </Segmented>
        <Segmented value="cloud" icon="cloud-upload">
          Cloud
        </Segmented>
      </SegmentedGroup>
      <SegmentedGroup name="groupInfo" color="info">
        <Segmented value="desktop" icon="home" defaultChecked={true}>
          Desktop
        </Segmented>
        <Segmented value="mobile" icon="mobile">
          Mobile
        </Segmented>
        <Segmented value="cloud" icon="cloud-upload">
          Cloud
        </Segmented>
      </SegmentedGroup>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Stepper colors</div>
      <Stepper label="Primary" color="primary" defaultValue={100} min={-500} max={500} step={100} />
      <Stepper label="Secondary" color="secondary" defaultValue={100} min={-500} max={500} step={100} />
      <Stepper label="Success" color="success" defaultValue={100} min={-500} max={500} step={100} />
      <Stepper label="Danger" color="danger" defaultValue={100} min={-500} max={500} step={100} />
      <Stepper label="Warning" color="warning" defaultValue={100} min={-500} max={500} step={100} />
      <Stepper label="Info" color="info" defaultValue={100} min={-500} max={500} step={100} />
    </div>
  </Page>
);
export default App;
