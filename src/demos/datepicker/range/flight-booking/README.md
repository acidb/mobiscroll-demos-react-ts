To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/flight-booking#).

## Demo description

For a great booking experience a good date picker is essential. The best implementations are contextual and take the intent *(what people want to do)* and context *(where and how are they doing it)* into account. Learn how to use and customize the range picker and see how you can add your flavor that matches with the overall experience of your application.

## Implementation instructions

- Set `select: 'range'` and `controls: ['calendar']` on `Datepicker`; `min`/`max` bound the selectable window (e.g. `min: <today>`, `max: <today + 6 months>`) to prevent picking past dates.
- `pages: 2` shows two months side by side across all five examples.
- `showRangeLabels: true` together with `rangeStartLabel`/`rangeEndLabel` (e.g. `'Outbound'`/`'Return'`) renames the built-in Start/End range labels shown above the calendar.
- Single-input mode needs no extra wiring beyond `select: 'range'`; two-input mode binds `startInput`/`endInput` to separate Outbound/Return inputs — string selectors in JS/jQuery (`startInput: '#start', endInput: '#end'`), refs in React/Vue, template reference variables in Angular.
- Unavailable flight dates are disabled via `invalid`, which accepts both single dates and recurring rules (e.g. `{ recurring: { repeat: 'weekly', weekDays: 'TU,TH' } }` alongside an exact `Date`).
- `inRangeInvalid: true` allows a selected range to pass through invalid dates in the middle while still keeping the range's start/end endpoints on valid days; when `inRangeInvalid` is `false` (or omitted), no invalid date may fall anywhere inside the selected range — useful when a booking must be fully contiguous (e.g. hotel stays).
- Toggling one-way vs. round-trip is done by changing the `select` option at runtime between `'range'` and `'date'` (e.g. via `.setOptions({ select: 'date' })` in JS/jQuery, or updating a bound `select` prop/binding in React/Vue/Angular) based on a radio control's value; the paired Return input can be disabled in step with it (e.g. `.setOptions({ disabled: true })` on that input's instance).
- The footer buttons can be customized through the `buttons` option, including a custom action button object (`{ text, disabled, handler }`); an `onTempChange` handler (React: `onTempChange`; Angular: `(onTempChange)`; Vue: `@temp-change`; JS/jQuery: `onTempChange`) fires while the user is still choosing dates and can re-evaluate the custom button's `disabled` state via `inst.getTempVal()` (returns the in-progress `[start, end]` selection) and rebuild the `buttons` array through `setOptions`.
- The custom button's handler reads the in-progress start date with `getTempVal()`, commits it as a one-way selection via `setVal([start, null])`, and closes the picker with `close()`.

## What this demo shows

- Shows five flight booking examples for selecting a date range with differently customized range pickers.
- **Single input** The first example uses a single input for selecting the outbound and return dates.
- **Two inputs** The second example uses two separate inputs, one for the Outbound date and another for the Return date.
- **Invalid days** The third example uses two inputs and displays invalid dates for days when no flights are available. These dates are disabled and cannot be selected.
- **One way or round trip** The fourth example uses separate Outbound and Return inputs together with Round trip and One way options. Round trip is selected by default. Switching to One way disables the Return input and allows selecting only the outbound date.
- **Custom button** The fifth example uses a single input and adds a custom `One way only` button to the footer of the range picker, next to the `Set` button. This provides an alternative way to book a one-way flight directly from the picker.
- **Input behavior** The range picker opens below the input over a darkened backdrop. Clicking outside the picker closes it.
- **Outbound and Return inputs** In the examples with two inputs, clickable Outbound and Return inputs appear above the calendar. The active input has a white background, while the inactive input has a gray background. A clear button appears after a date range is selected.
- **Month view** Every example displays two months at the same time, with past dates disabled. A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to navigate between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start and the second becomes the range end. Selected dates and the dates between them are visually highlighted. The current date is highlighted by default.
- **Footer actions** The gray `Cancel` button discards the changes, while the blue `Set` button confirms the selected date range. Until a valid range is selected, the `Set` button remains inactive.
- **Input value** Confirming the selection with `Set` displays the selected date or date range in the corresponding input using a month, day, and year format.

## Best for

- **Airline booking forms** where travelers need to select outbound and return dates for round-trip flights.
- **One-way flight booking** where only a departure date is required and the return date can be disabled or skipped.
- **Flight availability calendars** where dates without available flights need to be disabled and clearly distinguished from selectable dates.
- **Travel search interfaces** that need separate Outbound and Return inputs while keeping the date selection inside a single range picker.
- **Flexible booking experiences** where users can switch between round-trip and one-way travel directly from the date picker.
