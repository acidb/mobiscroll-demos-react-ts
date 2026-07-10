To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/resource-filtering-in-header#).

## Demo description

The header of the scheduler is a canvas and an opportunity for customization. You can add custom components and enable new interaction in context.

Such an example would be a custom filter block created with the help of a segmented control and placed between the standard UI components, which are:

- **Navigation component** - `&lt;CalendarNav /&gt;`. Use the `.md-header-filter-controls` CSS class for custom overrides.
- **Today button** - `&lt;CalendarToday /&gt;`. Use the `.md-header-filter-today` CSS class for custom overrides.
- **Previous month button** - `&lt;CalendarPrev /&gt;`. Use the `.md-header-filter-prev` CSS class for custom overrides.
- **Next month button** - `&lt;CalendarNext /&gt;`. Use the `.md-header-filter-next` CSS class for custom overrides.

For changing the order the controls are laid out, you only need to set up the `renderHeader`.

**Overriding the order for specific themes**

For a custom order on a theme to theme basis, you will need to use a little CSS. [Flex layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) makes reordering easy. It's just a matter of setting the order in CSS. For material use the `.mbsc-material`, for windows the `.mbsc-windows` prefix and for iOS it is `.mbsc-ios` class. Eg.:

```css
.mbsc-material .mds-header-filter-prev { order: 1; }
.mbsc-material .mds-header-filter-next { order: 2; }
.mbsc-material .mds-header-filter { order: 3; }
.mbsc-material .mds-header-filter-today { order: 4; }
```

- **Want to style and reorder the header?** [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/react/scheduler/customizing-header#)

## Related demos

- [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/react/scheduler/customizing-header#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }`. Set `clickToCreate: false`, `dragToCreate: false`, `dragToMove: true`, `dragToResize: true`. No `resources` array is passed to the calendar — the people are used only for client-side event filtering, not as resource rows.
- Define 3 people at module level: Barry (id `1`, color `#328e39`, avatar `m1.png`), Hortense (id `2`, color `#00aabb`, avatar `f1.png`), Carl (id `3`, color `#ea72c0`, avatar `m2.png`).
- Load events from `https://trial.mobiscroll.com/custom-events/` via JSONP. Each event has a `participant` field (integer id matching a person). After loading, assign `event.color` from the matching person's color. Initial selection is person `1` only — pass only the matching events as `data` (or call `inst.setEvents(filteredEvents)` for the imperative API).
- Track `selectedResources` (the set of active participant ids). On every filter change, recompute: `myEvents.filter(e => selectedResources includes e.participant)` and update `data` (imperative: `inst.setEvents(filteredEvents)`). Show a toast: "Showing [Name] events" or "Hiding [Name] events".
- **Custom header** (`renderHeader` / Angular: `headerTemplate` / Vue: `#header` slot): place `CalendarNav` (class `mds-header-filter-nav`) on the left, then a flex div (`mds-header-filter mbsc-flex-1-0`) containing a multi-select `SegmentedGroup` with one `Segmented` per person — each shows the person's avatar and name, and carries `cssClass: 'mds-header-filter-{id}'` for per-person highlight color. Then `CalendarPrev`, `CalendarToday`, `CalendarNext` on the right.
- Each person's active segment is highlighted in their color via `mds-header-filter-{id}` CSS targeting `.mbsc-segmented-selectbox-inner` (iOS) and `.mbsc-button.mbsc-selected.mbsc-material` / `.mbsc-windows` (other themes).

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header layout** The current month and year are shown on the left, a segmented resource filter is centered in the header, and blue month navigation arrows with a `Today` button between them on the right.
- **Resource filter** The segmented control contains three selectable options: `Barry`, `Hortense`, and `Carl`, each with an avatar shown before the name.
- **Resource filtering** Selecting a resource from the segmented control, updates the scheduler view to show that person's events, making it possible to show or hide events by resource from the header.
- **Color coding** `Barry`'s option and events use green, `Hortense` uses blue, and `Carl` uses pink, so the active filter and the visible events stay visually aligned.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Resource-specific planning** Viewing one person's schedule at a time without leaving the scheduler view.
- **Team calendars with simple filtering** Switching between a small set of people or resources from a compact header control.
- **Color-coded resource views** Making it easy to distinguish which events belong to which resource.
- **Operational dashboards** Internal scheduling tools where users need quick filtering.
- **Custom scheduler toolbars** Cases where the standard header needs extra controls without moving filtering outside the scheduler.
