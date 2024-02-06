import { Button, Page, setOptions, Snackbar, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [isBottomToastOpen, setBottomToastOpen] = useState(false);
  const [isTopToastOpen, setTopToastOpen] = useState(false);
  const [isPrimaryToastOpen, setPrimaryToastOpen] = useState(false);
  const [isSecondaryToastOpen, setSecondaryToastOpen] = useState(false);
  const [isSuccessToastOpen, setSuccessToastOpen] = useState(false);
  const [isDangerToastOpen, setDangerToastOpen] = useState(false);
  const [isWarningToastOpen, setWarningToastOpen] = useState(false);
  const [isInfoToastOpen, setInfoToastOpen] = useState(false);
  const [isRetryToastOpen, setRetryToastOpen] = useState(false);

  const [isBottomSnackbarOpen, setBottomSnackbarOpen] = useState(false);
  const [isTopSnackbarOpen, setTopSnackbarOpen] = useState(false);
  const [isActionSnackbarOpen, setActionSnackbarOpen] = useState(false);
  const [isPrimarySnackbarOpen, setPrimarySnackbarOpen] = useState(false);
  const [isSecondarySnackbarOpen, setSecondarySnackbarOpen] = useState(false);
  const [isSuccessSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [isDangerSnackbarOpen, setDangerSnackbarOpen] = useState(false);
  const [isWarningSnackbarOpen, setWarningSnackbarOpen] = useState(false);
  const [isInfoSnackbarOpen, setInfoSnackbarOpen] = useState(false);

  const showBottomToast = useCallback(() => {
    setBottomToastOpen(true);
  }, []);

  const showTopToast = useCallback(() => {
    setTopToastOpen(true);
  }, []);

  const showPrimaryToast = useCallback(() => {
    setPrimaryToastOpen(true);
  }, []);

  const showSecondaryToast = useCallback(() => {
    setSecondaryToastOpen(true);
  }, []);

  const showSuccessToast = useCallback(() => {
    setSuccessToastOpen(true);
  }, []);

  const showDangerToast = useCallback(() => {
    setDangerToastOpen(true);
  }, []);

  const showWarningToast = useCallback(() => {
    setWarningToastOpen(true);
  }, []);

  const showInfoToast = useCallback(() => {
    setInfoToastOpen(true);
  }, []);

  const showBottomSnackbar = useCallback(() => {
    setBottomSnackbarOpen(true);
  }, []);

  const showTopSnackbar = useCallback(() => {
    setTopSnackbarOpen(true);
  }, []);

  const showActionSnackbar = useCallback(() => {
    setActionSnackbarOpen(true);
  }, []);

  const showPrimarySnackbar = useCallback(() => {
    setPrimarySnackbarOpen(true);
  }, []);

  const showSecondarySnackbar = useCallback(() => {
    setSecondarySnackbarOpen(true);
  }, []);

  const showSuccessSnackbar = useCallback(() => {
    setSuccessSnackbarOpen(true);
  }, []);

  const showDangerSnackbar = useCallback(() => {
    setDangerSnackbarOpen(true);
  }, []);

  const showWarningSnackbar = useCallback(() => {
    setWarningSnackbarOpen(true);
  }, []);

  const showInfoSnackbar = useCallback(() => {
    setInfoSnackbarOpen(true);
  }, []);

  const handleBottomToastClose = useCallback(() => {
    setBottomToastOpen(false);
  }, []);

  const handleTopToastClose = useCallback(() => {
    setTopToastOpen(false);
  }, []);

  const handlePrimaryToastClose = useCallback(() => {
    setPrimaryToastOpen(false);
  }, []);

  const handleSecondaryToastClose = useCallback(() => {
    setSecondaryToastOpen(false);
  }, []);

  const handleSuccessToastClose = useCallback(() => {
    setSuccessToastOpen(false);
  }, []);

  const handleDangerToastClose = useCallback(() => {
    setDangerToastOpen(false);
  }, []);

  const handleWarningToastClose = useCallback(() => {
    setWarningToastOpen(false);
  }, []);

  const handleInfoToastClose = useCallback(() => {
    setInfoToastOpen(false);
  }, []);

  const handleRetryToastClose = useCallback(() => {
    setRetryToastOpen(false);
  }, []);

  const handleBottomSnackbarClose = useCallback(() => {
    setBottomSnackbarOpen(false);
  }, []);

  const handleTopSnackbarClose = useCallback(() => {
    setTopSnackbarOpen(false);
  }, []);

  const handleActionSnackbarClose = useCallback(() => {
    setActionSnackbarOpen(false);
  }, []);

  const handlePrimarySnackbarClose = useCallback(() => {
    setPrimarySnackbarOpen(false);
  }, []);

  const handleSecondarySnackbarClose = useCallback(() => {
    setSecondarySnackbarOpen(false);
  }, []);

  const handleSuccessSnackbarClose = useCallback(() => {
    setSuccessSnackbarOpen(false);
  }, []);

  const handleDangerSnackbarClose = useCallback(() => {
    setDangerSnackbarOpen(false);
  }, []);

  const handleWarningSnackbarClose = useCallback(() => {
    setWarningSnackbarOpen(false);
  }, []);

  const handleInfoSnackbarClose = useCallback(() => {
    setInfoSnackbarOpen(false);
  }, []);

  const snackbarButton = useMemo(
    () => ({
      text: 'Retry',
      action: () => {
        setRetryToastOpen(true);
      },
    }),
    [],
  );

  return (
    <Page>
      <div className="mbsc-block">
        <div className="mbsc-block-title">Toast</div>
        <div className="mbsc-button-group-block">
          <Button onClick={showBottomToast}>Bottom toast</Button>
          <Button onClick={showTopToast}>Top toast</Button>
          <Button onClick={showPrimaryToast}>Primary toast</Button>
          <Button onClick={showSecondaryToast}>Secondary toast</Button>
          <Button onClick={showSuccessToast}>Success toast</Button>
          <Button onClick={showDangerToast}>Danger toast</Button>
          <Button onClick={showWarningToast}>Warning toast</Button>
          <Button onClick={showInfoToast}>Info toast</Button>
        </div>
        <Toast isOpen={isBottomToastOpen} message="Message sent" onClose={handleBottomToastClose} />
        <Toast isOpen={isTopToastOpen} display="top" message="Message sent" onClose={handleTopToastClose} />
        <Toast isOpen={isPrimaryToastOpen} color="primary" message="Message sent" onClose={handlePrimaryToastClose} />
        <Toast isOpen={isSecondaryToastOpen} color="secondary" message="Message sent" onClose={handleSecondaryToastClose} />
        <Toast isOpen={isSuccessToastOpen} color="success" message="Message sent" onClose={handleSuccessToastClose} />
        <Toast isOpen={isDangerToastOpen} color="danger" message="Message sent" onClose={handleDangerToastClose} />
        <Toast isOpen={isWarningToastOpen} color="warning" message="Message sent" onClose={handleWarningToastClose} />
        <Toast isOpen={isInfoToastOpen} color="info" message="Message sent" onClose={handleInfoToastClose} />
        <Toast isOpen={isRetryToastOpen} message="Retrying..." onClose={handleRetryToastClose} />
      </div>
      <div className="mbsc-block">
        <div className="mbsc-block-title">Snackbar</div>
        <div className="mbsc-button-group-block">
          <Button onClick={showBottomSnackbar}>Bottom snackbar</Button>
          <Button onClick={showTopSnackbar}>Top snackbar</Button>
          <Button onClick={showActionSnackbar}>Snackbar with action</Button>
          <Button onClick={showPrimarySnackbar}>Primary snackbar</Button>
          <Button onClick={showSecondarySnackbar}>Secondary snackbar</Button>
          <Button onClick={showSuccessSnackbar}>Success snackbar</Button>
          <Button onClick={showDangerSnackbar}>Danger snackbar</Button>
          <Button onClick={showWarningSnackbar}>Warning snackbar</Button>
          <Button onClick={showInfoSnackbar}>Info snackbar</Button>
        </div>
        <Snackbar isOpen={isBottomSnackbarOpen} message="Your draft has been discarded" onClose={handleBottomSnackbarClose} />
        <Snackbar isOpen={isTopSnackbarOpen} display="top" message="Your draft has been discarded" onClose={handleTopSnackbarClose} />
        <Snackbar
          isOpen={isActionSnackbarOpen}
          button={snackbarButton}
          message="Connection timed out. Showing limited messages."
          onClose={handleActionSnackbarClose}
        />
        <Snackbar
          isOpen={isPrimarySnackbarOpen}
          color="primary"
          message="Your draft has been discarded"
          onClose={handlePrimarySnackbarClose}
        />
        <Snackbar
          isOpen={isSecondarySnackbarOpen}
          color="secondary"
          message="Your draft has been discarded"
          onClose={handleSecondarySnackbarClose}
        />
        <Snackbar
          isOpen={isSuccessSnackbarOpen}
          color="success"
          message="Your draft has been discarded"
          onClose={handleSuccessSnackbarClose}
        />
        <Snackbar
          isOpen={isDangerSnackbarOpen}
          color="danger"
          message="Your draft has been discarded"
          onClose={handleDangerSnackbarClose}
        />
        <Snackbar
          isOpen={isWarningSnackbarOpen}
          color="warning"
          message="Your draft has been discarded"
          onClose={handleWarningSnackbarClose}
        />
        <Snackbar isOpen={isInfoSnackbarOpen} color="info" message="Your draft has been discarded" onClose={handleInfoSnackbarClose} />
      </div>
    </Page>
  );
};
export default App;
