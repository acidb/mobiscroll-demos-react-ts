To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/drag-drop-between-calendar-instances#).

## Demo description

There are certain cases when moving the events between calendars can come in handy.

Dragging and dropping events between two calendar instances can be enabled by turning on the
`externalDrag` and
`externalDrop` options.

## Implementation instructions

- Enable dragging events out of one calendar by turning on the `externalDrag` option on that calendar instance.
- Enable dropping events into the other calendar by turning on the `externalDrop` option on the target calendar instance.

## What this demo shows

- Two separate event calendar instances are shown side by side in desktop month view, with `Calendar 1` in the left and `Calendar 2` in the right.
- **Month layout** Each calendar displays a full month grid where events appear inside the day cells as labels.
- **Event labels** Events are rendered with label styling that can vary by event type, including a small colored line on the left, the event text, and an `end` value showing when the event finishes.
- **Event hover and selection** Hovering over or selecting an event label highlights that event.
- **External drag and drop** Events can be dragged from one calendar instance and dropped into the other calendar instance to move them between the two separate calendars.
- **Day cell hover** Hovering over a day cell highlights the day number in the top-right corner, and highlights the events in that cell when events are present.
- **Day selection** Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Month navigation** Each calendar header shows the current month and year, along with previous and next navigation arrows and a `Today` button for returning to the current date.
- **Gesture navigation** The visible month can also be changed by dragging the calendar horizontally.

## Best for

- **Multi-calendar planning** Moving events between separate team, department, or location calendars.
- **Resource reassignment** Reassigning appointments, tasks, or shifts from one schedule to another with direct drag and drop.
- **Operational scheduling** Handling workflows where work items need to be transferred between parallel calendars without opening an edit form first.
- **Comparing parallel schedules** Reviewing two month-based schedules side by side and adjusting event placement between them.
- **Administrative rescheduling** Supporting back-office tools where planners need to redistribute events quickly across distinct calendars.
