import {
  Datepicker,
  Input,
  MbscDatepickerChangeEvent,
  MbscDateType,
  MbscPopupButton,
  Page,
  Radio,
  RadioGroup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const min = now;
const max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());

function nrOfValues(instance: Datepicker | null) {
  const tempVal = ((instance && instance.getTempVal()) as MbscDateType[]) || [];
  return tempVal.filter((v) => v).length;
}

const App: FC = () => {
  const [start, setStart] = useState<Input | null>(null);
  const [end, setEnd] = useState<Input | null>(null);
  const [startInv, setStartInv] = useState<Input | null>(null);
  const [endInv, setEndInv] = useState<Input | null>(null);
  const [startBooking, setStartBooking] = useState<Input | null>(null);
  const [endBooking, setEndBooking] = useState<Input | null>(null);
  const [bookingType, setBookingType] = useState<string>('round');
  const [inst, setInst] = useState<Datepicker | null>(null);
  const [val, setVal] = useState<(MbscDateType | null)[]>();
  const [disabled, setDisabled] = useState(nrOfValues(inst) === 0);

  const invalid = useMemo(
    () => [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'TU,TH',
        },
      },
      new Date(now.getFullYear(), now.getMonth(), 25),
    ],
    [],
  );

  const selectType = useMemo(() => (bookingType === 'oneway' ? 'date' : 'range'), [bookingType]);

  const bookingTypeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setBookingType(ev.target.value);
  };

  const valChange = useCallback((ev: MbscDatepickerChangeEvent) => {
    setVal(ev.value as MbscDateType[]);
  }, []);

  const changeTripType = useCallback(() => {
    setDisabled(nrOfValues(inst) < 1);
  }, [inst]);

  const buttons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      'cancel',
      {
        disabled,
        handler: () => {
          const start = inst!.getTempVal() as MbscDateType[];
          setVal([start[0], null]);
          inst!.close();
        },
        text: 'One way only',
      },
      'set',
    ],
    [disabled, inst],
  );

  return (
    <Page>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12">
            <Datepicker
              select="range"
              min={min}
              max={max}
              pages={2}
              label="Pick your flight"
              inputStyle="outline"
              labelStyle="stacked"
              placeholder="Please select..."
            />
          </div>
        </div>

        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Datepicker controls={['calendar']} select="range" startInput={start} endInput={end} min={min} max={max} pages={2} />
            <Input ref={setStart} label="Outbound" inputStyle="outline" labelStyle="stacked" placeholder="Please Select..." />
          </div>
          <div className="mbsc-col-6">
            <Input ref={setEnd} label="Return" inputStyle="outline" labelStyle="stacked" placeholder="Please Select..." />
          </div>
        </div>

        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Datepicker
              select="range"
              startInput={startInv}
              endInput={endInv}
              min={min}
              max={max}
              pages={2}
              invalid={invalid}
              inRangeInvalid={true}
            />
            <Input ref={setStartInv} label="Outbound" inputStyle="outline" labelStyle="stacked" placeholder="Please Select..." />
          </div>
          <div className="mbsc-col-6">
            <Input ref={setEndInv} label="Return" inputStyle="outline" labelStyle="stacked" placeholder="Please Select..." />
          </div>
        </div>

        <div className="mbsc-row">
          <RadioGroup name="flight-booking-type" theme="material" themeVariant="light">
            <Radio
              value="round"
              checked={bookingType === 'round'}
              onChange={bookingTypeChange}
              label="Round trip"
              theme="material"
              themeVariant="light"
            />
            <Radio
              value="oneway"
              checked={bookingType === 'oneway'}
              onChange={bookingTypeChange}
              label="One way"
              theme="material"
              themeVariant="light"
            />
          </RadioGroup>
        </div>
        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Datepicker
              select={selectType}
              startInput={startBooking}
              endInput={endBooking}
              min={min}
              max={max}
              pages={2}
              label="Outbound"
              inputStyle="outline"
              labelStyle="stacked"
              placeholder="Please Select..."
            />
            {selectType === 'range' && (
              <Input ref={setStartBooking} label="Outbound" inputStyle="outline" labelStyle="stacked" placeholder="Please Select..." />
            )}
          </div>
          <div className="mbsc-col-6">
            <Input
              ref={setEndBooking}
              label="Return"
              inputStyle="outline"
              labelStyle="stacked"
              placeholder="Please Select..."
              disabled={bookingType === 'oneway'}
            />
          </div>
        </div>

        <div className="mbsc-row">
          <div className="mbsc-col-12">
            <Datepicker
              select="range"
              min={min}
              max={max}
              pages={2}
              ref={setInst}
              buttons={buttons}
              value={val}
              onChange={valChange}
              onTempChange={changeTripType}
              label="Pick your flight"
              inputStyle="outline"
              labelStyle="stacked"
              placeholder="Please select..."
            />
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
