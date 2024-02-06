import { Button, Dropdown, Input, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';
import './desktop.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-grid mbsc-grid-fixed">
      <div className="mbsc-form-group">
        <div className="mbsc-row mbsc-justify-content-center">
          <div className="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
            <div className="mbsc-form-group-title">Multiple columns grid</div>
            <div className="mbsc-row">
              <div className="mbsc-col-md-6 mbsc-col-12">
                <Input type="text" label="Email" placeholder="Email" inputStyle="box" labelStyle="floating" />
              </div>
              <div className="mbsc-col-md-6 mbsc-col-12">
                <Input
                  type="password"
                  label="Password"
                  placeholder="Password"
                  passwordToggle={true}
                  inputStyle="box"
                  labelStyle="floating"
                />
              </div>
            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-12">
                <Input type="text" label="Address" placeholder="Address" inputStyle="box" labelStyle="floating" />
              </div>
            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-md-6 mbsc-col-12">
                <Input type="text" label="City" placeholder="City" inputStyle="box" labelStyle="floating" />
              </div>
              <div className="mbsc-col-md-4 mbsc-col-6">
                <Dropdown label="State" inputStyle="box" labelStyle="floating">
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois Indiana">Illinois Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana Nebraska">Montana Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania Rhode Island">Pennsylvania Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyomin">Wyomin</option>
                </Dropdown>
              </div>
              <div className="mbsc-col-md-2 mbsc-col-6">
                <Input type="text" label="Zip" placeholder="Zip" inputStyle="box" labelStyle="floating" />
              </div>
            </div>
            <Button>Sign in</Button>
          </div>
        </div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-row mbsc-justify-content-center">
          <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Single column grid</div>
              <Input label="First Name" placeholder="First Name" />
              <Input label="Last Name" placeholder="Last Name" />
              <Input label="User Name" placeholder="User Name" />
              <Input label="Company" placeholder="Company Name" />
              <Input label="Email" placeholder="Email Address" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
export default App;
