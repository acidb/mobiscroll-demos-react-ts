import { Button, Page, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState(false);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const actionToast = () => {
    setToastOpen(true);
  };

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Buttons</div>
        <div className="mbsc-button-group">
          <Button>Button</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mbsc-button-group">
          <Button onClick={actionToast}>Click for action</Button>
        </div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Full width buttons</div>
        <div className="mbsc-button-group-block">
          <Button>Full width button</Button>
          <Button disabled>Disabled full width</Button>
        </div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Justified buttons</div>
        <div className="mbsc-button-group-justified">
          <Button>Tag</Button>
          <Button>Favorite</Button>
          <Button>Flag</Button>
        </div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Icons</div>
        <div className="mbsc-button-group">
          <Button icon="tag"></Button>
          <Button icon="heart"></Button>
          <Button icon="flag" disabled></Button>
        </div>
        <div className="mbsc-button-group">
          <Button startIcon="tag">Tag</Button>
          <Button startIcon="heart">Favorite</Button>
          <Button startIcon="flag" disabled>
            Flag
          </Button>
        </div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Flat buttons</div>
        <div className="mbsc-button-group">
          <Button variant="flat">Flat</Button>
          <Button variant="flat" startIcon="arrow-left5">
            Flat & Icon
          </Button>
          <Button variant="flat" icon="arrow-left5"></Button>
          <Button variant="flat" icon="key2" disabled></Button>
          <Button variant="flat" disabled>
            Flat disabled
          </Button>
        </div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Outline buttons</div>
        <div className="mbsc-button-group">
          <Button variant="outline">Outline</Button>
          <Button variant="outline" startIcon="arrow-left5">
            Outline & Icon
          </Button>
          <Button variant="outline" icon="arrow-left5"></Button>
          <Button variant="outline" icon="key2" disabled></Button>
          <Button variant="outline" disabled>
            Outline disabled
          </Button>
        </div>
      </div>
      <Toast message="Button was clicked." isOpen={isToastOpen} onClose={handleCloseToast} />
    </Page>
  );
};
export default App;
