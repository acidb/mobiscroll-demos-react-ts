To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/colored-cell-background#).

## Demo description

Color the background of entire days or time ranges with the `colors` option.
You can specify backgrounds as `exact dates`, `ranges` or set up `recurring rules`.
The `recurring` object works the [same way as for the events](https://demo.mobiscroll.com/react/scheduler/recurring-events#).
Optionally, you can specify a `title` as well, which will be displayed on the colored block.

Use the 

`onPageLoading`

 lifecycle event to color backgrounds runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/scheduler/event-hooks#) and places where to drop logic to customize the experience.

- **Want to use patterns as backgrounds and customize how the invalid cells look?** [Learn how to do it &#8594;](https://demo.mobiscroll.com/react/scheduler/colors-invalids-css-class#)

## Related demos

- [Learn how to do it &#8594;](https://demo.mobiscroll.com/react/scheduler/colors-invalids-css-class#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }` and pass a `colors` array to the Eventcalendar. Each entry defines a background highlight for a date, time range, or recurring pattern.
- Color object fields: `date` (exact date — highlights the full column for that day), `start`/`end` (time range — use a time string like `'12:00'` for a recurring time-of-day slot, or a full datetime for a one-off range), `allDay: true` (targets the all-day row column rather than the time grid), `background` (color value, e.g., an RGBA hex string with opacity), `title` (optional label displayed on the colored block), `recurring` (same structure as event recurrence rules, e.g., `{ repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' }`).
- Use `dyndatetime('y,m,d±N,hour')` offsets to anchor color ranges relative to today for demo data.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, a scrollable scheduler time grid for the selected week where predefined cells on the time grid have pale colored backgrounds behind the events.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Colored time ranges** Predefined background colors mark specific time grid cells without blocking event labels.
- **Lunch marker** Weekdays from Monday to Friday show a pale red background from 12 PM to 1 PM, with a Lunch title in the top-left corner of the marked cell.
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
