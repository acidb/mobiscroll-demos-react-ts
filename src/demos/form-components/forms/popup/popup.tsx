import { Button, Input, Page, Popup, Segmented, SegmentedGroup, setOptions, Switch, Textarea /* localeImport */ } from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const popupButtons = ['set', 'cancel'];

const responsivePopup = {
  medium: {
    display: 'anchored',
    width: 400,
    fullScreen: false,
    touchUi: false,
  },
};

const App: FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleBtnClick = useCallback((args: ChangeEvent<HTMLInputElement>) => {
    setAnchor(args.target);
    setOpen(true);
  }, []);

  const handlePopupClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Page>
      <Button onClick={handleBtnClick}>Show modal</Button>
      <Popup
        display="anchored"
        contentPadding={false}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isOpen}
        responsive={responsivePopup}
        onClose={handlePopupClose}
      >
        <div className="mbsc-form-group">
          <Input label="Title" />
          <Textarea label="Description" />
        </div>
        <div className="mbsc-form-group">
          <Switch label="All-day" />
          <Input label="Starts" />
          <Input label="Ends" />
          <SegmentedGroup>
            <Segmented value="busy" defaultChecked={true}>
              Show as busy
            </Segmented>
            <Segmented value="free">Show as free</Segmented>
          </SegmentedGroup>
        </div>
      </Popup>
    </Page>
  );
};
export default App;
