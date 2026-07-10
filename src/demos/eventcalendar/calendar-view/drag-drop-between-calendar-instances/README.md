To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/drag-drop-between-calendar-instances#).

## Demo description

There are certain cases when moving the events between calendars can come in handy.

Dragging and dropping events between two calendar instances can be enabled by turning on the
`externalDrag` and
`externalDrop` options.

## Implementation instructions

- Set `view: { calendar: { type: 'month' } }`. Render two separate `Eventcalendar` instances side by side, each with its own independent events array.
- On both instances, set `externalDrag: true` to allow events to be dragged out and `externalDrop: true` to allow events to be dropped in. Also set `dragToMove: true` to enable dragging within each calendar, and `eventDelete: true` to allow keyboard deletion.
- Handle `onEventCreated` (Vue: `@event-created`) on each instance. Inside the handler, check `args.action === 'externalDrop'` to identify cross-calendar drops and show a `Toast` targeting the receiving calendar's container as `context`.

## What this demo shows

- Two separate event calendar instances are shown side by side in desktop month view, with `Calendar 1` in the left and `Calendar 2` in the right.
- **Month grid** Day cells display events, each label has a colored line on the left, the event title, and an `end` value that shows the event end time.
- **Event interaction** Hovering over or selecting an event label highlights it.
- **External drag and drop** Events can be dragged from one calendar instance and dropped into the other calendar instance to move them between the two separate calendars.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.
- **Gesture navigation** The visible month can also be changed by clicking and dragging the calendar horizontally.

## Best for

- **Multi-calendar planning** Moving events between separate team, department, or location calendars.
- **Resource reassignment** Reassigning appointments, tasks, or shifts from one schedule to another with direct drag and drop.
- **Comparing parallel schedules** Reviewing two month-based schedules side by side and adjusting event placement between them.
