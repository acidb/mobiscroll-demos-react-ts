import { Button, Page, Popup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useRef, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const buttonRef = useRef<Button>(null);

  const openPopup = useCallback(() => {
    setAnchor(buttonRef.current!.nativeElement);
    setPopupOpen(true);
  }, []);

  return (
    <Page>
      <div className="mbsc-button-group-block">
        <Button ref={buttonRef} onClick={openPopup}>
          Open popup
        </Button>
      </div>

      <Popup
        theme="material" // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
        themeVariant="dark" // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
        display="anchored"
        anchor={myAnchor}
        buttons={['ok', 'cancel']}
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
      >
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>
    </Page>
  );
}

export default App;
