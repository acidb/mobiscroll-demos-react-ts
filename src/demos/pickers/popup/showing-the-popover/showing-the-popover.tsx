import { Button, Page, Popup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-button-group-block">
          <Button onClick={() => setPopupOpen(true)}>Open popup</Button>
        </div>
      </div>

      <Popup display="center" isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
        <div className="mbsc-button-group-block">
          <Button onClick={() => setPopupOpen(false)}>Close</Button>
        </div>
      </Popup>
    </Page>
  );
}

export default App;
