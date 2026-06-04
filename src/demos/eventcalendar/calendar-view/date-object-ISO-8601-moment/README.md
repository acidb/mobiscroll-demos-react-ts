To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/date-object-ISO-8601-moment#).

## Demo description

Understanding how to work with dates inside the event calendar is essential.
You can pass to the `data`, `marked`, `colors` and `labels` in four different formats.
The event calendar can work with **Javascript date objects, ISO strings** and **Moment.js objects**.

## Implementation instructions

- Apply the same supported date format handling consistently when working with `data`, `marked`, `colors` and `labels`.

## What this demo shows

- A desktop month-view event calendar is shown with an empty month grid by default, so no events appear until one is added from the examples.
- **Example panel**: Three code snippets are displayed to the left of the calendar, each showing a supported event date format.
- **Supported formats**: The examples cover JavaScript `Date` objects, ISO date strings and Moment.js objects.
- **Add event actions**: Each code example has a button below it that adds a new event to the calendar using that format.
- **Button labels**: The buttons are labeled `Add event with JS date object`, `Add event with ISO string` and `Add event with moment.js object`.
- **Button interaction**: Hovering a button highlights it, and clicking it inserts a new event into the month view.
- **Day hover state**: Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection**: Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Month navigation**: The calendar supports swipe or drag navigation between months by dragging the calendar left or right.
- **Header**: The top-left side of the header shows the currently visible month and year.
- **Header controls**: The top-right side includes previous and next arrow buttons, with a `Today` button between them to jump back to the current date.

## Best for

- **Supported date inputs**: Explaining which date formats the Eventcalendar accepts for event-related data.
- **Developer onboarding**: Helping developers understand how to pass event data when working with JavaScript `Date`, ISO string or Moment.js values.
- **Data format comparison**: Showing the same calendar behavior with multiple supported date input formats side by side.
