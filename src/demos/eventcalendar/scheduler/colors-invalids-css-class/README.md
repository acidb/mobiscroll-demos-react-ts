To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/colors-invalids-css-class#).

## Demo description

Besides [customizing the background color](https://demo.mobiscroll.com/react/scheduler/colored-cell-background#)
of cells and
[setting up invalid/blocked out times](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#)
you can customize how these blocks and disabled times look by passing a `cssClass` to the
`colors` and
`invalid` array elements.

The output could be a custom pattern, custom styling for the labels or anything that you'd like to render as the background.
This a great way for adding special meaning to certain days and time ranges.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', startDay: 1, endDay: 5, allDay: false } }` — a Mon–Fri work week with no all-day row.
- Load events from `https://trial.mobiscroll.com/workday-events/` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.
- **Invalid block** — pass one entry to the `invalid` array: 12:00–13:00 recurring on weekdays (`weekDays: 'MO,TU,WE,TH,FR'`), with `title: 'Lunch break'` and a `cssClass` for custom styling. This blocks the lunch slot with a custom visual pattern.
- **Color overlays** — pass entries to the `colors` array, each targeting a specific time range recurring on a weekday. Assign a `cssClass` to each entry to apply a custom CSS pattern (stripes, dots, checkerboard). The `cssClass` on a `colors` entry works the same way as on `invalid` entries — Mobiscroll applies it to the colored block element so the class can define any background pattern via CSS.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week strip**: The fixed strip below the header displays days from Monday to Friday in the selected week, with the current date highlighted by a blue circle.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Colored time ranges** Predefined customized backgrounds mark specific time grid cells without blocking event labels where the colors option is customized with css. 
- **Lunch marker** Weekdays from Monday to Friday show a grey and white background from 12 PM to 1 PM, with a Lunch break title in the center of the marked cell and these time periods are disabled so the invalid option is customized with css.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Recurring marked hours** Highlighting repeated time ranges such as lunch breaks, maintenance windows, or blocked working hours in a weekly scheduler.
- **Special dates and observances** Marking public holidays, company observances, or other notable dates directly in the scheduler background.
- **Scheduler overview screens** Adding background cues that help people scan important hours while keeping event cards visible and readable.
- **Availability context** Showing non-event time markers alongside scheduled events without turning those markers into regular event cards.
