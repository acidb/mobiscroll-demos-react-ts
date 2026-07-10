To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/cell-template-on-hover#).

## Demo description

Hover-based interactions can be simple yet elegant. Using the :::framework{only="vue"} `cell-hover-in` ::: :::framework{only="angular"} `onCellHoverIn` ::: :::framework{only="react"} `onCellHoverIn` ::: :::framework{only="javascript"} `onCellHoverIn` ::: :::framework{only="jquery"} `onCellHoverIn` ::: and :::framework{only="vue"} `cell-hover-out` ::: :::framework{only="angular"} `onCellHoverOut` ::: :::framework{only="react"} `onCellHoverOut` ::: :::framework{only="javascript"} `onCellHoverOut` ::: :::framework{only="jquery"} `onCellHoverOut` ::: events, the calendar dynamically displays an "Add event" button when users hover over day cells, providing an intuitive way to create new events with minimal interface clutter.

For customizing the cell content appearance, the `renderCalendarDayContent` is the perfect candidate, as it holds the basic structure of the day cell.

## Implementation instructions

- Set `view: { calendar: { labels: 2 } }` for a month grid that shows up to 2 event labels per day cell; extra events collapse into an "X more" indicator.
- Track the hovered day in a `hoveredDate` state variable: `onCellHoverIn` (Vue: `@cell-hover-in`) sets it to `args.date`; `onCellHoverOut` (Vue: `@cell-hover-out`) clears it.
- Use `renderCalendarDayContent` (Angular: `calendarDayContentTemplate`, Vue: `calendarDayContent` slot) to inject content into each day cell. In the renderer, compare `args.date` with `hoveredDate` by timestamp and render an "Add event" button only for the matching cell; return nothing for all other cells.
- `addEvent()` appends `{ start: hoveredDate, title: 'New Event' }` to the events array and shows a `Toast` with `'Event added on ' + formatDate('YYYY-MM-DD', hoveredDate)` as the message.
- JS/jQuery: since `renderCalendarDayContent` is not reactive, call `setOptions({ renderCalendarDayContent: ... })` inside both hover handlers to force a re-render when the hovered cell changes. Handle button clicks via event delegation on the calendar container. Use `calendar.addEvent()` to add the new event instead of mutating a data array.

## What this demo shows

- A desktop month view Event Calendar with a full month grid, event labels inside day cells, and a header with month navigation controls.
- **Event labels** Day cells with events display label-style event entries with a colored marker on the left, the event title, and the event time.
- **Event selection** Clicking an event label highlights it to show the selected state.
- **Cell hover state** Hovering a day cell highlights the day number in the top-right corner with a gray background.
- **Add event action** When a day cell is hovered, an `Add event` button appears inside the cell so event creation is available only where the user is interacting.
- **Add event button state** Hovering the `Add event` button highlights the button before creation.
- **Event creation** Clicking the `Add event` button creates a new event in that day cell with the title `New event`.
- **Creation feedback** After a new event is created, a toast appears at the bottom of the calendar showing the exact date of the new event.
- **Day selection** Clicking a day cell selects that date and highlights the day number with a blue background.
- **Header** The top-left side of the header shows the currently displayed month and year.
- **Navigation** The top-right side of the header includes previous and next month arrows with a `Today` button between them for returning to the current date.

## Best for

- **Desktop month planning** Reviewing and managing events in a full month grid where users need a broad overview of the schedule.
- **Lightweight event creation** Adding events directly from day cells without opening persistent controls in every cell.
- **Dense calendar layouts** Showing multiple event labels with clear visual separation using colored markers, titles, and times.
- **Interactive calendar workflows** Desktop experiences where hover states can reveal contextual actions without adding interface clutter.
- **Click-first scheduling flows** Use cases where users need to select a day, inspect existing events, and create a new event from the same month view.
