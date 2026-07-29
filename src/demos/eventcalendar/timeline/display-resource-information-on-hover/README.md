To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/display-resource-information-on-hover#).

## Demo description

Displaying information in a tooltip can come in handy when space is tight but information matters.
When hovering over a resource cell, the 

`onResourceHoverIn`

and 

`onResourceHoverOut`

[lifecycle events](https://demo.mobiscroll.com/react/timeline/event-hooks#) are triggered, which can be used to show/hide rich tooltips.
Information and actions shown here won't clutter the main view, keep the timeline clean while still giving quick access to content that helps.

- **Do you want to learn more about customizing the resource header?** [Take a look at this example &#8594;](https://demo.mobiscroll.com/react/scheduler/custom-resource-header-template#)

## Related demos

- [Take a look at this example &#8594;](https://demo.mobiscroll.com/react/scheduler/custom-resource-header-template#)

## Implementation instructions

- Use `timeline: { type: 'day', startTime: '07:00', endTime: '22:00' }` — a single-day view showing 7am–10pm.
- Define 8 worker resources, each with `id`, `name`, `color`, `profession`, `avatar` (image URL), and `cost` ($/hour).
- Add ~24 task events across yesterday/today/tomorrow with `dyndatetime` offsets and hourly start/end times.
- **Custom resource row** (`renderResource` / `resourceTemplate` / `resource` slot): renders the worker's avatar image alongside their name and profession.
- **Hover tooltip** — implemented with debounced open/close timers to avoid flickering and to allow the cursor to travel from the resource row into the popup without dismissal:
  - `onResourceHoverIn`: cancel both timers, start a 100ms open timer. When it fires: compute total scheduled hours for the resource (see below), add a CSS highlight class (`mds-resource-info-hover`) to `args.target`, populate tooltip state (avatar, name, hourly rate, formatted date, total hours + total cost), call `popupRef.position()`, then open the popup.
  - `onResourceHoverOut`: remove the highlight class from `args.target`, cancel the open timer, start a 200ms close timer.
  - On the popup's wrapping element: `onMouseEnter` cancels the close timer (keeps popup open); `onMouseLeave` starts the close timer again.
- **Popup**: `display: 'anchored'`, `showOverlay: false`, `touchUi: false`, `width: 280`. Content: avatar + name + a "Pay" button (outline/success) in the header row; below that, hourly rate and a line showing the current day's total hours and total cost (`hours * rate`).
- **Custom popup positioning** (`onPosition`): read the hovered resource element's `getBoundingClientRect()`, set the popup 10px to the right of the element (`rect.right + 10`) and aligned to its top (`rect.top - 10`). For RTL, use `window.innerWidth - rect.left + 10` for the right offset. Return `false` to suppress Mobiscroll's default positioning.
- **Total hours**: use `calRef.getEvents()`, filter by resource id, sum `(end - start) / (1000 * 60 * 60)` across all events visible on the current day.
- **Date display**: track the visible date via `onPageChange` (`args.firstDay`); format it with `formatDate('D DDD MMM YYYY', date)` for the tooltip.
- **"Pay" button**: closes the tooltip and shows a `Toast` with `"<name> paid"`.

## What this demo shows

- A desktop resource timeline with hours arranged horizontally and worker resources listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between days, and the Today button returns to the current date.
- **Day view** The day strip shows the selected day, with the current date highlighted. The timeline displays hourly columns from 7 AM to 10 PM.
- **Resources** Each worker appears as a separate resource row with an avatar, name, and profession in the resource column.
- **Resource hover** Hovering over a resource row opens a custom popup with additional worker details.
- **Resource popup** The popup shows the worker avatar, name, hourly rate, scheduled hours for the selected day, estimated earnings, and a Pay action button.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the exact start and end time below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Workforce management** Showing employee schedules together with role, cost, and daily workload details.
- **Field service scheduling** Reviewing technician assignments while keeping profile details and pay-related actions close to the schedule.
- **Construction and maintenance planning** Coordinating resource-based work across a day timeline with quick access to worker information.
- **Healthcare staffing** Comparing staff assignments by time and resource while showing contextual staff details only when needed.
- **Payroll-aware scheduling** Displaying scheduled hours, hourly rates, estimated earnings, and payment actions alongside planned work.
- **Resource-heavy operations** Keeping the timeline readable while making worker metadata available from the resource column.
