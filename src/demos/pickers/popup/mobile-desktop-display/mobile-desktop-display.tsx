import { Button, Page, Popup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useRef, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isAnchoredOpen, setAnchoredOpen] = useState<boolean>(false);
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const [isTopOpen, setTopOpen] = useState<boolean>(false);
  const [isCenterOpen, setCenterOpen] = useState<boolean>(false);
  const [isBottomOpen, setBottomOpen] = useState<boolean>(false);
  const buttonRef = useRef<Button>(null);

  const openAnchored = useCallback(() => {
    setAnchor(buttonRef.current!.nativeElement);
    setAnchoredOpen(true);
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Try different display modes</div>
        <div className="mbsc-form-group mbsc-button-group-block">
          <Button ref={buttonRef} onClick={openAnchored}>
            Try anhored display mode
          </Button>
          <Button onClick={() => setTopOpen(true)}>Try top display mode</Button>
          <Button onClick={() => setCenterOpen(true)}>Try center display mode</Button>
          <Button onClick={() => setBottomOpen(true)}>Try bottom display mode</Button>
        </div>
      </div>

      <Popup display="anchored" anchor={myAnchor} isOpen={isAnchoredOpen} onClose={() => setAnchoredOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>

      <Popup display="top" isOpen={isTopOpen} onClose={() => setTopOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>

      <Popup display="center" isOpen={isCenterOpen} onClose={() => setCenterOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>

      <Popup display="bottom" isOpen={isBottomOpen} onClose={() => setBottomOpen(false)}>
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
