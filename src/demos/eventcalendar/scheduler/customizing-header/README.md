To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/customizing-header#).

## Demo description

You can customize how the header of the scheduler looks and how the components are arranged. Besides that you can also add custom functionality, like a segmented control that lets people switch between scheduler and calendar.

Use the `renderHeader` option for passing a custom header layout. There are predefined components - shorthands if you will - that can be used to assemble the header:

- **Navigation component** - `&lt;CalendarNav /&gt;`. Use the `.md-header-filter-controls` CSS class for custom overrides.
- **Today button** - `&lt;CalendarToday /&gt;`. Use the `.md-header-filter-today` CSS class for custom overrides.
- **Previous month button** - `&lt;CalendarPrev /&gt;`. Use the `.md-header-filter-prev` CSS class for custom overrides.
- **Next month button** - `&lt;CalendarNext /&gt;`. Use the `.md-header-filter-next` CSS class for custom overrides.

For changing the order the controls are laid out, you only need to set up the `renderHeader`. This example sets a consistent order and layout across all themes and shows a custom control at the far right end.

**Overriding the order for specific themes**

For a custom order on a theme to theme basis, you will need to use a little CSS. [Flex layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) makes reordering easy. It's just a matter of setting the order in CSS. For material use the `.mbsc-material`, for windows the `.mbsc-windows` prefix and for iOS it is `.mbsc-ios` class. Eg.:

```css
.mbsc-material .md-header-filter-prev { order: 1; }
.mbsc-material .md-header-filter-next { order: 2; }
.mbsc-material .md-header-filter-controls { order: 3; }
.mbsc-material .md-header-filter-today { order: 4; }
```

- **Want to add a filter to the header?** [Check out the next example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/resource-filtering-in-header#)

## Related demos

- [Check out the next example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/resource-filtering-in-header#)

## Implementation instructions

- Start with `view: { scheduler: { type: 'week' } }`. Load events via `getJson` from a JSONP endpoint on mount.
- Track the current date via `onSelectedDateChange` so the custom navigation buttons know where the view is.
- Pass a custom header renderer to `renderHeader` (Angular: `headerTemplate`, Vue: `#header` slot). The header contains three sections:
  - **Left**: `CalendarNav` — displays the current period label.
  - **Center**: back arrow `Button`, `CalendarToday`, forward arrow `Button`.
  - **Right**: `SegmentedGroup` with two `Segmented` options — schedule (list icon) and calendar (calendar icon).
- **View switching**: on `SegmentedGroup` change, update the active view config between `{ scheduler: { type: 'week' } }` and `{ calendar: { labels: true } }`; for the imperative API, call `inst.setOptions({ view: newViewConfig })`.
- **Custom navigation**: the prev/next arrow buttons call a `navigatePage(prev)` function. In calendar view, jump to the first day of the prev/next month; in scheduler view, compute the first day of the prev/next week. Update `selectedDate` to the new date; for the imperative API, call `inst.navigate(date)`.

## What this demo shows

- A desktop weekly scheduler layout with a custom header and a view switcher that toggles between calendar and scheduler-style layouts.
- **Header** The left side shows the currently displayed month and year. The center contains previous and next month navigation arrows with a blue `Today` button between them for jumping back to the current date. The right side contains a segmented control with a list icon selected by default and a calendar icon for switching views.
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
- **Event calendar view** Selecting the calendar option from the segmented control switches the layout to a monthly calendar view.
- **Event labels** Days with events display labels directly inside the month cells. Labels use different styles and colors to distinguish all-day events, multi-day, and timed events.
- **Overflow handling** The number of visible event labels depends on the available vertical space in the day cell. Additional events are moved into a popover and indicated by an `X more` label, where `X` represents the number of hidden events. Clicking it opens a popover that lists the remaining events for that day.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label. This is tru in both views, event calendar month view and the scheduler week view.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.

## Best for

- **Calendar and schedule switching** Interfaces where users need to move between a month overview and a more detailed weekly schedule from the same header control.
- **Desktop planning tools** Scheduling and planning screens designed for desktop use, where a full month grid and richer header controls fit naturally.
- **Operational scheduling** Team, resource, booking, or internal planning tools where users switch between high-level monthly planning and time-precise weekly scheduling.
