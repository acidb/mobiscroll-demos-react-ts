To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/single-select#).

## Demo description

Single value selection is the default behavior of the date picker. You can explicitly enable it by setting the `selectMultiple` to `false`.

You can dynamically switch between single and multiple select or range select which helps with building a system for one-way and two-way bookings.

## Implementation instructions

- Four separate inline picker instances render side by side, each using `display: 'inline'` — none is bound to an input.
- **Date only**: `controls: ['date']` — a single wheel/dropdown control for the month, day, and year.
- **Time only (list)**: `controls: ['time']` — separate wheels for hour, minute, and AM/PM.
- **Time only (grid)**: `controls: ['timegrid']` — a fixed-interval time grid instead of scrollable wheels.
- **Date and time**: `controls: ['datetime']` — combines the date and time wheels into a single scroller.
- `selectMultiple: false` is passed explicitly in the framework code snippets for clarity even though single-date selection is the default; the live demo script omits it since it's a no-op.
- `touchUi: false` is set in the fullscreen variant to force the dropdown rendering instead of the touch-scroller wheels; the main (non-fullscreen) demo page relies on the default touch-detected behavior.

## What this demo shows

- Four inline wheel-style picker configurations for selecting a single date, time, or date and time.
- **Date picker** Separate scrollable wheels for the month, day, and year.
- **Time list picker** Separate scrollable wheels for the hour, minute, and AM/PM.
- **Timegrid picker** Time slots arranged in a grid at 30-minute intervals.
- **Date and time picker** Separate scrollable wheels for the date, hour, minute, and AM/PM. The current date is labeled `Today`; other dates display an abbreviated weekday, month, and day.
- **Scrolling behavior** The selected values appear in a central selection area while neighboring values are visually subdued. Users scroll vertically through each wheel to change the selection.

## Best for

- **Date-only selection** Choosing a birthday, travel date, due date, or other single calendar date.
- **Time-only wheel selection** Setting an appointment time, reminder time, opening time, or daily schedule time when compact scrolling controls are preferred.
- **Timegrid selection** Choosing an available appointment, reservation, or service time from clearly separated 30-minute slots.
- **Date and time selection** Scheduling an appointment, pickup, delivery, or other activity that requires one specific date and time.
- **Inline forms** Keeping the picker visible within booking, scheduling, or settings interfaces instead of opening it in an overlay.
