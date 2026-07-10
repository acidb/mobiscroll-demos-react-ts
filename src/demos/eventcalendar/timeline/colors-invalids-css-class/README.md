To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/colors-invalids-css-class#).

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

- Use `timeline: { allDay: false, type: 'week', startDay: 1, endDay: 5, startTime: '09:00', endTime: '18:00' }` — a Mon–Fri work week view with the 9am–6pm time range and no all-day row.
- Define 5 resources (A–E), each with `id`, `name`, and `color`.
- Load events from `https://trial.mobiscroll.com/timeline-events/` via JSONP using `getJson(url, callback, 'jsonp')`. In the callback, call `inst.setEvents(events)` for the imperative API.
- **Invalid block** — pass one entry to the `invalid` array: 12:00–13:00 recurring on weekdays (`weekDays: 'MO,TU,WE,TH,FR'`), with `title: 'Lunch break'` and `cssClass: 'md-lunch-break-class mbsc-flex'`. This blocks the lunch slot across all resources and renders it with a custom diagonal grey-stripe pattern, centered bold text.
- **Color overlays** — pass 12 entries to the `colors` array, each targeting a specific resource and time range recurring on one weekday. Assign one of three CSS classes per entry:
  - `md-rect-bg`: a pink checkerboard pattern (4 entries across different resources and weekdays)
  - `md-stripes-bg`: a subtle diagonal green-white stripe pattern (4 entries)
  - `md-dots-bg`: a dot/radial-gradient pattern on a light grey background (4 entries)
- **CSS classes** — implement the four visual patterns:
  - `.md-lunch-break-class.mbsc-schedule-invalid`: `text-align: center; align-items: center; font-weight: bold;` with a diagonal grey `repeating-linear-gradient` background
  - `.md-stripes-bg`: diagonal green-tinted `repeating-linear-gradient`
  - `.md-dots-bg`: `radial-gradient` dot pattern with 20×20px `background-size`
  - `.md-rect-bg`: double `repeating-linear-gradient` at 45° creating a pink checkerboard, `opacity: 0.8`
