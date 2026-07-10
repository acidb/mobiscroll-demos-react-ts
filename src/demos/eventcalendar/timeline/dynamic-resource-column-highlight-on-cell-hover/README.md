To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/dynamic-resource-column-highlight-on-cell-hover#).

## Demo description

Highlight the resource row and date column on cell hover to improve usability by clearly showing where the user is interacting.

This is achieved using the `onCellHoverIn` and `onCellHoverOut` lifecycle events. These track the hovered cell and update the resources with a custom `cssClass`, which highlights the resource row. A popup is also shown on hover, displaying relevant information about the cell like the date and resource name.

The column highlight is applied using the `renderCell`, `renderSidebar`, `renderTimelineDay`, and `renderDayFooter` callbacks, where conditional markup is returned to highlight the vertical column.

This makes it easy to implement custom hover interactions that match your design and UX goals.

## Implementation instructions

- Use `timeline: { type: 'month', resolutionHorizontal: 'day' }` — a monthly view with one column per day.
- Define 15 resources (A–O) with `id`, `name`, and `color`.
- Add 10 events with `dyndatetime` offsets spread across the current month.
- Track the currently hovered cell in a `hoverDateTime` variable (set on hover in, cleared on hover out).
- **Row highlight** via `cssClass` on resource objects:
  - `onCellHoverIn`: iterate the resources array, set `cssClass: 'mds-highlight-row-hover'` on the resource whose `id` matches `args.resource.id`, clear `cssClass` on all others. Call `calendar.setOptions({ resources: myResources.slice() })` to push the change and trigger a re-render.
  - `onCellHoverOut`: clear all `cssClass` values. Wrap `setOptions` in a `setTimeout` (no delay) so the render callbacks reset before the DOM updates.
- **Column highlight** via render callbacks that compare each cell's date to `hoverDateTime`:
  - `renderCell`: when `args.date` matches `hoverDateTime`, return a full-cell overlay `<div class="mds-highlight-col-hover">` (positioned absolute, `inset: 0`, `pointer-events: none`); otherwise return an empty string.
  - `renderTimelineDay` and `renderDayFooter`: always render a custom day content div showing `formatDate('D DDD', args.date)`. When the date matches `hoverDateTime`, add `mds-highlight-col-hover` to the div's class.
  - `renderSidebar`: renders the resource name with a " Sidebar" suffix.
- **Tooltip popup** (`Popup`, `display: 'anchored'`, `showOverlay: false`, `scrollLock: false`, `focusOnClose: false`, `closeOnScroll: true`):
  - `onCellHoverIn`: set `anchor: args.domEvent.target`, populate the tooltip with `args.resource.name` and `formatDate('MMM DD, YYYY', args.date)`, then open.
  - `onCellHoverOut`: close the popup.
- **CSS**: `.mds-highlight-row-hover` and `.mds-highlight-col-hover` share the same background `rgba(220,220,220,0.25)` — the row class is applied via the resource `cssClass` property (Mobiscroll renders it on the row container), and the column class is applied via the overlay div in `renderCell` and the class added in `renderTimelineDay`/`renderDayFooter`.
