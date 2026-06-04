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
