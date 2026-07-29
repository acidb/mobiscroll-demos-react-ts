To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/drag-drop-between-calendar-instances#).

## Demo description

There are certain cases when moving the events between calendars can come in handy.

Dragging and dropping events between two timeline instances can be enabled by turning on the
`externalDrag` and
`externalDrop` options.

- **Want to learn about how you can configure the horizontal and vertical resolution?** [Check out how to build a synchronized flight scheduling dashboard &#8594;](https://demo.mobiscroll.com/react/timeline/flight-scheduling-two-synchronized-timelines#)

## Related demos

- [Check out how to build a synchronized flight scheduling dashboard &#8594;](https://demo.mobiscroll.com/react/timeline/flight-scheduling-two-synchronized-timelines#)

## Implementation instructions

- Render two independent `Eventcalendar` instances on the same page, each with `timeline: { type: 'month' }` and `height: 420`.
- Each instance has its own separate dataset: 5 resources (A–E) and 10 events with `dyndatetime` offsets spread across the current month.
- Enable on both instances: `dragToMove: true`, `eventDelete: true`, `externalDrag: true`, `externalDrop: true`. Both `externalDrag` and `externalDrop` must be set on both calendars to allow bidirectional transfer — `externalDrag` permits dragging an event out, `externalDrop` permits receiving a drop from another instance.
- Handle `onEventCreated` on each instance. Inside the handler, check `args.action === 'externalDrop'` to distinguish a cross-calendar drop from a regular click-to-create or drag-to-create. When the condition is true, show a `Toast` confirming which calendar received the event.
- Scope each `Toast` to its calendar using the `context` prop (a CSS class or element selector pointing to the receiving calendar's wrapper). This positions the toast near the correct calendar rather than at the page level.

## What this demo shows

- Two separate monthly timeline instances are displayed one below the other, where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Month view** The strip below the header show days of the selected month, with the current date highlighted.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the start and end time of the event below the title.
- **External drag and drop** Events can be dragged from one timeline instance and dropped into the other to move them between the two timelines.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Multi-timeline planning** Moving events between separate team, department, or location calendars.
- **Resource reassignment** Reassigning appointments, tasks, or shifts from one timeline to another with direct drag and drop.
- **Parallel timeline review** Comparing two weekly timelines and adjusting event placement between them.
