To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/customizing-events#).

## Demo description

Above the built in rendering mode you can either customize the full event or just the content of the event. If we break up the event into pieces there are six fields that we are interested in:

- The event `start` and `end` time
- Whether it is an `allDay` event or not
- The event `color`
- The event `title`
- `bufferBefore`
- `bufferAfter`

The scheduler takes care of positioning the event container and everything else is your responsibility. You will have to place and provide styling to all event fields. Beside the ones mentioned above you'll be able to render other custom fields, like `description`, `location`, `participants` ... and add buttons, custom interactions.

Pass a custom rendering function to the renderSchedulerEvent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` can be reached inside the function.

The before/after buffers can help you visualise delays or added minutes for tasks. For example travel time for meetings/appointments, check in/check out for flights.

The buffers can be customized through the `renderBufferBefore` and `renderBufferAfter` options.

## Implementation instructions

- Use a `responsive` config: `xsmall: { view: { scheduler: { type: 'day' } } }`, `medium: { view: { scheduler: { type: 'week' } } }`. Load events from a JSONP endpoint on mount. React/Vue: call `getJson(url, callback, 'jsonp')`; JS: call `mobiscroll.getJson(url, callback, 'jsonp')`; jQuery: call `$.getJSON(url + '&callback=?', callback)`; Angular: `HttpClient.jsonp()`. Imperative API (JS/jQuery): call `inst.setEvents(events)` in the callback.
- Events carry two custom properties: `category` (integer 1–5, maps to a name and color via a local lookup) and `participants` (array of integer IDs, each mapping to a person's avatar image URL). Some events also have `bufferBefore` (travel time in minutes).
- Pass a custom event renderer to `renderSchedulerEvent` (Vue: `#schedulerEvent` slot; Angular: `[schedulerEventTemplate]`). The renderer receives a `data` object — branch on `data.allDay`:
  - **All-day**: render a single colored div with `data.title`.
  - **Timed**: render a card with a colored left accent, a category badge (lookup name and color from `data.original.category`), `data.title`, the pre-formatted `data.start`–`data.end` time range, an "Edit" button, and participant avatar images mapped from `data.original.participants`.
- Pass a buffer renderer to `renderBufferBefore` (Vue: `#bufferBefore` slot; Angular: `[bufferBeforeTemplate]`). Render a diagonal stripe background using the category color, a "Travel time" label, and `args.original.bufferBefore` minutes.
- The Edit button click shows a `Toast` with "Edit clicked". Attach a click handler directly to the button element; JS/jQuery instead register `onEventClick` and check `args.domEvent.target` to identify whether the Edit button was clicked.

## What this demo shows

- A desktop daily scheduler layout with a fixed week strip at the top, a fixed all-day event row below it, and a scrollable time grid for the selected day.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between dates and jump back to the current day.
- **Week view** The fixed week strip below the header shows the surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler below the all-day row scrolls vertically through the hours of the selected day.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Custom event rendering** Timed events are rendered as colored cards with a colored left stripe, a project label above the title, a bold event title, the exact start and end time, an Edit button, and participant avatars in the bottom-left corner.
- **Edit interaction** Clicking the Edit button shows a toast at the bottom center of the scheduler with the text "Edit clicked".
- **Buffer rendering** The custom buffer area appears with event color and white diagonal stripe background and a centered travel-time label showing "Travel time" and "60 minutes", with the duration emphasized in bold.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Event interactions** Hovering an event highlights it and shows resize and drag handles, indicating that events can be resized or repositioned.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Current time** A blue line across the scheduler indicates the current time.

## Best for

- **Custom scheduler event cards** Scheduler views that need event cards to match a product-specific visual style instead of using the default event rendering.
- **Project or category-based scheduling** Schedulers where color, labels, and visual accents help users distinguish projects, categories, teams, or statuses.
- **Detailed event summaries** Scheduling interfaces that need to show additional context inside each event, such as time ranges, custom fields, actions, and participants.
- **Travel or preparation buffers** Workflows where time before an event needs to be visualized separately, such as travel time, setup time, or check-in time.
