To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/timeline-time-grid#).

## Demo description

The scheduler can be laid out in two different ways - as a timegrid or a timeline.

**Time grid**

The times rendered vertically, with one or more resources rendered horizontally as a time grid. Day views are great on small screens which can be dynamically switched to work week or full week views and even timeline views on bigger screens. [Play around with the responsive API.](https://demo.mobiscroll.com/react/scheduler/responsive-day-week-schedule#)

**Timeline**

Alternatively you can render the times/days horizontally and the resources vertically as a timeline view. The timeline can easily accommodate a large number of resources thanks to the vertical scroll that is easy to understand for users. This plays well on larger screens and in landscape containers.

You can switch between the two modes by dynamically setting the event calendar options or you can set it up responsively using the `responsive` option. Eg. show a day grid on mobile and a timeline on desktop.

- **Interested in the timeline view?** [Learn how to configure and customize the timeline &#8594;](https://demo.mobiscroll.com/react/timeline/#)

## Implementation instructions

- Use `timeline: { type: 'week' }` under the `view` option to render a weekly horizontal timeline with one column per day and one row per resource.
- Define a `resources` array where each entry has an `id`, a `name`, and a `color`. The color tints all event blocks for that resource row.
- Load events asynchronously using `getJson` from the Mobiscroll utility (or any equivalent fetch helper) and pass the result to the `data` prop. Each event needs a `resource` id, a `start`, an `end`, and a `title`.
- To switch to a time-grid layout, replace `timeline: { type: 'week' }` with `schedule: { type: 'week' }` in the view config — resources switch from vertical rows to horizontal columns and time flows vertically. This can be toggled at runtime by updating the `view` prop, for example from an external segmented control bound to a state variable.

## What this demo shows

- A side-by-side comparison of two scheduler layout modes — timeline and time grid — switchable via an external segmented control that dynamically updates the event calendar instance.
- **Timeline view** — five resources listed vertically on the left, with time running horizontally. The view is horizontally scrollable, making it easy to scan across a wide time range for many resources at once.
- **Time grid view** — the same five resources listed horizontally as columns across the top, with time running vertically on the left in hourly steps. Events are positioned within each resource column following their scheduled time.
- Switching between the two modes is done outside the component via a segmented control/tab, demonstrating how to change the `view` option dynamically at runtime.

## Best for

- **Time grid** — providing a familiar vertical calendar layout (similar to Google Calendar) for one or more resources, where events are stacked by time of day. Works well when the number of resources is small and time precision matters.
- **Timeline** — providing a horizontal overview across a large number of resources, where the focus is on seeing resource utilization and event distribution across time rather than precise time-of-day positioning.
- **Responsive or toggled layouts** — applications that need to offer both views and let users or the app switch between them depending on screen size, user preference, or context.
