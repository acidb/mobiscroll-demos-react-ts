To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/shift-template#).

## Demo description

Use the `renderSlot` option for rendering a custom time slot header. Customize how the time slots look and what they show. Utilize properties passed in the slots array.

## Implementation instructions

- Use `timeline: { type: 'week', eventDisplay: 'fill', startDay: 1, endDay: 5 }` — a Mon–Fri week view where events fill the full height of their slot row.
- Define 3 staff resources (Ryan, Kate, John), each with `id`, `name`, `color`, `title` (job title), and `img` (avatar URL).
- Define 2 slots: `{ id: 1, name: 'Morning' }` and `{ id: 2, name: 'Afternoon' }`. Each event carries a `slot` property (1 or 2) matching one of these IDs. Morning shift covers 7:00–13:00; afternoon covers 12:00–18:00. Event `title` is the formatted time range (e.g. `'07:00 - 13:00'`).
- Use the `colors` array to apply a semi-transparent background to each slot column across all weekdays. Each entry specifies `background`, `slot` (the slot ID), and `recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' }`.
- Use `renderSlot` (Angular: `slotTemplate`, Vue: `#slot`) to render a custom slot header. The renderer receives `args` with `args.slot` — the slot object from the `slots` array (has `args.slot.id` and `args.slot.name`). Render the slot name and its time range string derived from `args.slot.id`.
- Use `extendDefaultEvent` to set correct defaults when a new event is created via click-to-create. The function receives `args` with `args.start` and `args.slot`. Compute `start` and `end` Date objects using the slot's hours (slot 1 → 7:00–13:00, slot 2 → 12:00–18:00), then return `{ title, start, end }` where `title` is formatted with `formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end)`.
- Handle `onEventUpdate`: when a drag-to-move moves an event to a different slot, update the event's `title` to match the new slot's time range.
- Set `clickToCreate: true`, `dragToMove: true`, `dragToResize: false`.

## What this demo shows

- A desktop timeline configured as a Monday-to-Friday week view where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between weeks, and the Today button returns to the current date.
- **Week view** The date strip shows the selected work week from Monday to Friday, with the current date highlighted.
- **Resources** Employees are listed as separate timeline rows on the left.
- **Shift slots** Each day is divided into Morning and Afternoon slots instead of standard hourly intervals.
- **Custom slot headers** The slot headers show business-specific shift names with their time ranges, such as Morning 7:00-13:00 and Afternoon 12:00-18:00.
- **Slot background** Morning slots have a blue background while afternoon slots have a yellow background color.
- **Event duration** Shift events fill the predefined slot duration instead of representing individual appointment lengths.
- **Event styling** Different shift types use color-coded styling.
- **Event labels** Events appear as colored labels with the start and end time shown in bold.
- **Date positioning** Events are placed by assigned employee, day, and shift slot.
- **Event interaction** Events highlight on hover.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New shift events can be created by double-clicking the timeline.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating across dates, slots, and resources.

## Best for

- **Employee shift planning** Assigning employees to predefined shifts across consecutive workdays.
- **Coverage review** Checking employee availability and shift coverage across Morning and Afternoon periods.
- **Workforce scheduling** Building scheduling interfaces for manufacturing, healthcare, retail, hospitality, field service, and similar operations.
- **Shift-based timelines** Showing scheduled work blocks where the important unit is the shift, not an individual hourly appointment.
- **Business-specific time slots** Replacing standard time intervals with custom slot labels that match the organization's scheduling model.
