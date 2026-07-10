To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/responsive-day-week-schedule#).

## Demo description

The scheduler is fully responsive, it adapts to the available space and fills the screen to look good everywhere.

Use the `responsive` option to configure how the scheduler behaves on different sized screens. You can set it up as a daily schedule view on small screens and a weekly schedule on bigger screens.

The `responsive` option is equipped with five breakpoints - `xsmall`, `small`, `medium`, `large`, `xlarge` - and custom values can be added for a perfect fine-tune.

## Implementation instructions

- Use the `responsive` option instead of `view` to define breakpoint-specific view configurations:
  - `xsmall`: `scheduler: { type: 'day' }` — day scheduler on the smallest screens
  - `custom` with `breakpoint: 600`: `scheduler: { type: 'week' }` — week scheduler at 600px and above
- The five built-in breakpoint keys are `xsmall`, `small`, `medium`, `large`, `xlarge`. Custom numeric breakpoints can be added under any key using the `breakpoint` property.
- Since `xsmall` starts at 0px, every container width is covered and no top-level `view` is needed. Each breakpoint entry can override any `Eventcalendar` option, not just `view`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A responsive scheduler setup that changes layout based on the selected viewport size.
- **Viewport switcher** A segmented control above the scheduler lets you switch between viewport presets in the demo.
- **Small screen layout** On `375px` and `576px` viewports, a daily scheduler is displayed.
- **Week view on small screen layout** The fixed week strip below the header shows the surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **Larger screen layout** On `768px`, `992px`, and `1200px` viewports, the layout switches to a weekly scheduler. 
- **Week view on larger screen layout** The fixed week strip below the header shows the days of the week, with the current date highlighted by a blue circle.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between dates and jump back to the current day.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler below the all-day row scrolls vertically through the hours of the selected day/ week depending on the selected viewport.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Event rendering** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Event interactions** Hovering an event highlights it and shows resize and drag handles, indicating that events can be resized or repositioned.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Event selection** Clicking an event highlights it.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date in case of week view.

## Best for

- **Responsive event planning UIs** Interfaces that need to present scheduler data clearly across mobile, tablet, and desktop screen sizes.
- **Adaptive embedded views** Product areas where the scheduler needs to work well inside containers, panels, or sections of a larger page.
- **Breakpoint-based calendar setups** Use cases where different scheduler views should be shown at different viewports.
