To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/show-cell-summary-on-hover#).

## Demo description

This demo demonstrates how to surface detailed cell summaries through tooltips when hovering over schedule cells.

Using 

`onCellHoverIn`

and 

`onCellHoverOut`

events, each tooltip dynamically displays the total number of events, invalid and colors in the hovered cell.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', startTime: '08:00', endTime: '18:00', timeCellStep: 30 } }`. No resources — this is a single-column scheduler. No create or drag interactions.
- Define 17 events inline using `dyndatetime` offsets spread across the current week (day−3 through day+4). Define 5 `invalid` ranges (mix of specific date/time ranges and a recurring weekly rule for `TU,TH,SA,SU` at `10:00–11:00`). Define 8 `colors` entries (mix of specific ranges and recurring weekly rules), all using `cssClass: 'mds-cell-summary-color'` to render a striped pattern.
- **`onCellHoverIn`**: compute the cell's end time by creating a copy of `args.date` and calling `setHours(getHours() + 1)`. Format the date label as `formatDate('DDDD MMM D, YYYY, HA - ', args.date) + formatDate('HA', endDate)`. Read counts: `args.events?.length ?? 0`, `args.invalids?.length ?? 0`, `args.colors?.length ?? 0`. Open the tooltip anchored to `args.target`.
- **`onCellHoverOut`**: close the tooltip.
- **Tooltip popup**: `display: 'anchored'`, `showOverlay: false`, `touchUi: false`, `scrollLock: false`. Content: a title div showing the formatted date/time range, then a three-column flex row showing "Events", "Invalid", and "Colors" counts.
- **Anchor wiring**: bind `anchor` and `isOpen` as props, setting them from state in the hover callbacks; Angular: use `@ViewChild` to get the popup instance and call `.open()` / `.close()` directly; for the imperative API, instantiate the popup separately, then call `popup.setOptions({ anchor: args.target })` + `popup.open()` in `onCellHoverIn` and `popup.close()` in `onCellHoverOut`.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Invalid cells** Disabled time grid cells are shown with a gray background.
- **Colored cells** Colored time grid ranges are shown with a light green striped background.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Cell summary tooltip** Hovering over scheduler cells opens a tooltip with the total number of events, invalids, and colors in the hovered cell.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Healthcare scheduling** Display appointments, unavailable periods, room availability, and staff availability in one weekly scheduler view.
- **Workforce and shift planning** Manage employee schedules, vacations, maintenance windows, and overlapping assignments while showing unavailable time slots.
- **Facility and resource booking** Show meeting rooms, equipment, or shared resources with blocked periods, special availability, and simultaneous reservations.
- **Field service and maintenance planning** Coordinate technician visits, travel time, and service appointments while making restricted time periods visible.
- **Education and training schedules** Organize classes, instructors, classrooms, and recurring weekly sessions alongside holidays or unavailable periods.
- **Manufacturing and production planning** Schedule jobs across workstations while highlighting maintenance windows, downtime, and capacity constraints.
