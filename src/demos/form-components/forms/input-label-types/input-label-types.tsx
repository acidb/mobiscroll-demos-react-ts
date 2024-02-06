import { Dropdown, Input, Page, setOptions, Textarea /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <div className="mbsc-grid">
      <div className="mbsc-row mbsc-justify-content-center">
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Underline inputs with stacked labels</div>
            <Input inputStyle="underline" labelStyle="stacked" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="underline" labelStyle="stacked" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="underline" labelStyle="stacked" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="underline" labelStyle="stacked" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Underline inputs with inline labels</div>
            <Input inputStyle="underline" labelStyle="inline" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="underline"
              labelStyle="inline"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="underline"
              labelStyle="inline"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="underline" labelStyle="inline" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="underline"
              labelStyle="inline"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="underline" labelStyle="inline" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="underline" labelStyle="inline" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Underline inputs with floating labels</div>
            <Input inputStyle="underline" labelStyle="floating" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="underline"
              labelStyle="floating"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="underline"
              labelStyle="floating"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="underline" labelStyle="floating" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="underline"
              labelStyle="floating"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="underline" labelStyle="floating" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="underline" labelStyle="floating" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
      </div>
      <div className="mbsc-row mbsc-justify-content-center">
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Box inputs with stacked labels</div>
            <Input inputStyle="box" labelStyle="stacked" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="box"
              labelStyle="stacked"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="box"
              labelStyle="stacked"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="box" labelStyle="stacked" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="box"
              labelStyle="stacked"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="box" labelStyle="stacked" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="box" labelStyle="stacked" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Box inputs with inline labels</div>
            <Input inputStyle="box" labelStyle="inline" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="box"
              labelStyle="inline"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="box"
              labelStyle="inline"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="box" labelStyle="inline" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="box"
              labelStyle="inline"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="box" labelStyle="inline" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="box" labelStyle="inline" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Box inputs with floating labels</div>
            <Input inputStyle="box" labelStyle="floating" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="box"
              labelStyle="floating"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="box"
              labelStyle="floating"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="box" labelStyle="floating" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="box"
              labelStyle="floating"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="box" labelStyle="floating" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="box" labelStyle="floating" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
      </div>
      <div className="mbsc-row mbsc-justify-content-center">
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Outline inputs with stacked labels</div>
            <Input inputStyle="outline" labelStyle="stacked" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="outline" labelStyle="stacked" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="outline" labelStyle="stacked" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="outline" labelStyle="stacked" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Outline inputs with inline labels</div>
            <Input inputStyle="outline" labelStyle="inline" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="outline"
              labelStyle="inline"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="outline"
              labelStyle="inline"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="outline" labelStyle="inline" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="outline"
              labelStyle="inline"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="outline" labelStyle="inline" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="outline" labelStyle="inline" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Outline inputs with floating labels</div>
            <Input inputStyle="outline" labelStyle="floating" startIcon="user4" placeholder="Input with label" label="Name">
              Name
            </Input>
            <Input
              inputStyle="outline"
              labelStyle="floating"
              startIcon="material-email"
              placeholder="With error styling"
              error={true}
              label="Email"
            ></Input>
            <Input
              inputStyle="outline"
              labelStyle="floating"
              startIcon="lock2"
              passwordToggle={true}
              error={true}
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
            ></Input>
            <Input inputStyle="outline" labelStyle="floating" startIcon="empty" placeholder="Without label"></Input>
            <Textarea
              inputStyle="outline"
              labelStyle="floating"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></Textarea>
            <Dropdown inputStyle="outline" labelStyle="floating" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </Dropdown>
            <Input inputStyle="outline" labelStyle="floating" type="file" placeholder="Select file..." label="File upload"></Input>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
export default App;
