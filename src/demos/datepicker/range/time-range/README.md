To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/time-range#).

## Demo description

Set up the range picker for time pair selection. Regardless if you are interested in the start/end date or the actual range, you have several possibilities of rendering a time range picker. The `controls` option supports different values:

- `time` - will render a time picker or dropdown for range selection
- `timegrid` - will render a time grid for range selection
- `calendar` - will render a calendar view for date range selection ([explore date ranges](https://demo.mobiscroll.com/react/range/date-range#))
- `date` - will render a date scroller or dropdown for date range selection ([explore date ranges](https://demo.mobiscroll.com/react/range/date-range#))
- `datetime` - will render a compact date scroller or dropdown with time picker for date & time range selection ([explore date & time ranges](https://demo.mobiscroll.com/react/range/date-time-range#))

## Implementation instructions

- Set `select: 'range'` together with `controls` to pick the time-range rendering: `['time']` renders a scroller/dropdown time picker, `['timegrid']` renders a tappable time grid (30-minute slots in this demo), `['date']`/`['calendar']` render date-only range pickers, and `['datetime']` renders a combined date & time range picker.
- Set `display: 'inline'` to embed the picker directly in the page instead of anchoring it to an input.
- For a single-input range, initialize the `Datepicker` on one input element (or bind `value`/`v-model`/`[(ngModel)]` in the component frameworks) — the same input shows both the selected start and end time.
- For two separate inputs, pass `startInput` and `endInput` pointing at the start/end fields: JS/jQuery take CSS selector strings (`startInput: '#start', endInput: '#end'`); React takes state/ref values (`startInput={start} endInput={end}`) set via input `ref` callbacks; Vue takes `ref()` values bound with `:startInput="startInput" :endInput="endInput"`; Angular takes template reference variables bound with `[startInput]="start" [endInput]="end"` where `start`/`end` are declared with `#start`/`#end` on the corresponding `mbsc-input` elements.
- `touchUi` controls whether the time picker renders as a touch-friendly scroller (`true`) or a compact dropdown (`false`); it can be set directly in the options/props or updated at runtime via `.setOptions({ touchUi })` (JS/jQuery) or by updating the bound prop.

## What this demo shows

- Four inline examples of time-only range selection, each using a different control configuration.
- **Inline time scroller** A compact scroller for picking start and end times directly on the page, without any date component.
- **Inline time grid** A time grid displayed at 30-minute increments, letting users select a start and end slot by tapping directly on the grid.
- **Single input with popover** One input field that opens a time range scroller as a popover on mobile and as a dropdown on desktop.
- **Separate start and end inputs** Dedicated input fields for start and end time, each opening its own popover/dropdown scroller. In all examples the selected start and end times are displayed above the picker component.

## Best for

- **Time-only scheduling** Use cases where only the time range matters and no date needs to be selected, such as setting working hours, defining shift windows, or configuring opening times.
- **Slot-based selection** The time grid variant is well-suited for appointment booking or resource scheduling where time is divided into fixed increments.
- **Flexible form layouts** The four examples cover the main form patterns (inline, single input, split inputs), making it straightforward to match the control to the surrounding form design.
