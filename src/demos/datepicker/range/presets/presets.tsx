import { Button, Datepicker, Page, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useState } from 'react';
import './presets.css';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const curr = new Date();
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const startWeek = new Date(curr.setDate(curr.getDate() - curr.getDay()));
const endWeek = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
const startMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, 1);
const endMonth = new Date(curr.getFullYear(), curr.getMonth(), 0);

const App: FC = () => {
  const [value, setValue] = useState<Array<Date> | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [toastMsg, setMsg] = useState<string>('');

  const openToast = useCallback((message: string) => {
    setMsg(message);
    setOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => {
    setOpen(false);
  }, []);

  const setToday = () => {
    setValue([now, now]);
    openToast('Today Selected');
  };

  const setYesterday = () => {
    setValue([yesterday, yesterday]);
    openToast('Yesterday Selected');
  };

  const setWeek = () => {
    setValue([startWeek, endWeek]);
    openToast('This Week Selected');
  };

  const setMonth = () => {
    setValue([startMonth, endMonth]);
    openToast('Last Mont Selected');
  };

  const clear = () => {
    setValue(null);
    openToast('Clear Value');
  };

  return (
    <Page className="md-range-filter">
      <h4 className="md-header">Filter Results by</h4>
      <div className="mbsc-padding">
        <Button onClick={setToday} className="mbsc-button-block">
          Today
        </Button>
        <Button onClick={setYesterday} className="mbsc-button-block">
          Yesterday
        </Button>
        <Button onClick={setWeek} className="mbsc-button-block">
          This Week
        </Button>
        <Button onClick={setMonth} className="mbsc-button-block">
          Last Month
        </Button>
        <Button onClick={clear} className="mbsc-button-block">
          Clear
        </Button>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Or by a custom range</div>
        <Datepicker controls={['calendar']} select="range" display="inline" showRangeLabels={false} value={value} />
      </div>
      <Toast message={toastMsg} isOpen={isOpen} onClose={handleCloseToast} />
    </Page>
  );
};

export default App;
