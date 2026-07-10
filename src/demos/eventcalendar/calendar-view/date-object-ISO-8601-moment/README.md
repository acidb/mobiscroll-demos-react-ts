To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/date-object-ISO-8601-moment#).

## Demo description

Understanding how to work with dates inside the event calendar is essential.
You can pass to the `data`, `marked`, `colors` and `labels` in four different formats.
The event calendar can work with **Javascript date objects, ISO strings** and **Moment.js objects**.

## Implementation instructions

- Set `view: { calendar: { type: 'month', popover: true, count: true } }`. `count: true` collapses overflow events into a count badge; `popover: true` opens a popover when that badge is clicked. Render three separate `Eventcalendar` instances side by side, one for each supported date format.
- The three formats Mobiscroll accepts for `start`, `end`, and any date-valued field (including `marked`, `colors`, and `labels`) are: a JavaScript `Date` object (e.g. `new Date(2020, 4, 19, 7)`), an ISO 8601 string (e.g. `'2020-05-20T07:00:00'`), and a Moment.js object (e.g. `moment([2020, 4, 21, 7])`). Initialize each calendar's `data` with one event using the format that calendar demonstrates.
- Set `selectedDate` on each calendar to the initial event's date (in the same format) so the calendar opens on the correct month. When the "Add event" button is clicked, append a new event in the same format and update `selectedDate` to navigate to it. JS/jQuery: call `calendar.addEvent(newEvent)` then `calendar.navigate(date)` imperatively.

## What this demo shows

- A desktop month-view event calendar is shown with an empty month grid by default, so no events appear until one is added from the examples.
- **Example panel** Three code snippets are displayed to the left of the calendar, each showing a supported event date format.
- **Supported formats** The examples cover `JS date object`, `ISO date string` and `Moment.js object`.
- **Add event actions** Each code example has a button that adds a new event to the calendar using that format.
- **Button labels**: The buttons are labeled `Add event with JS date object`, `Add event with ISO string` and `Add event with moment.js object`.
- **Button interaction** Hovering a button highlights it, and clicking it inserts a new event into the month view.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** The calendar supports swipe or drag navigation between months by clicking and dragging the calendar left or right.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.

## Best for

- **Supported date inputs** Explaining which date formats the Eventcalendar accepts for event-related data.
