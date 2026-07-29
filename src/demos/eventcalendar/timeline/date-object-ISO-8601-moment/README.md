To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/date-object-ISO-8601-moment#).

## Demo description

Understanding how to work with dates inside the timeline is essential.
You can pass to the `data`, `marked`, `colors` and `labels` in four different formats.
The timeline can work with **Javascript date objects, ISO strings** and **Moment.js objects**.

## Implementation instructions

- Render three separate `Eventcalendar` instances side by side in a 3-column responsive grid (`mbsc-col-sm-12 mbsc-col-md-4`). Each column has a form group title, a button showing the date values that will be added on click, and its own calendar instance.
- Use `timeline: { type: 'day' }` for all three calendars.
- Define the same 5 resources for all three calendars — Resource A (yellow `#fdf500`), Resource B (red `#ff0101`), Resource C (blue `#01adff`), Resource D (green `#239a21`), Resource E (orange `#ff4600`).
- **Column 1 — JavaScript `Date` object**: pre-load one event "General orientation" from `new Date(2020, 4, 19, 7)` to `new Date(2020, 4, 19, 8)` on resource B. Navigate to `new Date(2020, 4, 19)` on init. The button adds a second event 10:45–11:45 on resource D using the same `new Date(...)` format, then navigates to the same date.
- **Column 2 — ISO 8601 string**: pre-load one event "Clever Conference" from `'2020-05-20T07:00:00'` to `'2020-05-20T08:00:00'` on resource B. Navigate to `'2020-05-20'` on init. The button adds a second event `'2020-05-20T12:30:00'`–`'2020-05-20T13:00:00'` on resource A, then navigates to the same ISO string.
- **Column 3 — Moment.js object**: import `moment` and pre-load one event "Product team mtg." from `moment([2020, 4, 21, 7])` to `moment([2020, 4, 21, 8])` on resource B. Navigate to `moment([2020, 4, 21])` on init. The button adds a second event `moment([2020, 4, 21, 11])`–`moment([2020, 4, 21, 14])` on resource E, then navigates to `moment([2020, 4, 21])`.
- **Navigation**: bind `selectedDate` to a state variable using the same date format as that calendar's data; for the imperative API, call `calInstance.navigate(date)` directly with the matching format.
- The key insight: `start`, `end`, `selectedDate`, and `.navigate()` all accept any of the three formats interchangeably — each calendar in this demo uses a consistent single format throughout to illustrate that each format works end-to-end.

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources arranged vertically on the left.
- **Example panel** Three code snippets are displayed to the left of the timeline, each showing a supported event date format.
- **Supported formats** The examples cover `JS date object`, `ISO date string` and `Moment.js object`.
- **Add event actions** Each code example has a button that adds a new event to the timeline using that format.
- **Button labels**: The buttons are labeled `Add event with JS date object`, `Add event with ISO string` and `Add event with moment.js object`.
- **Button interaction** Hovering a button highlights it, and clicking it inserts a new event into the timeline view.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected days, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Supported date inputs** Explaining which date formats the timeline accepts for event-related data.
