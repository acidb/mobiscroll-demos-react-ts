To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/loading-big-data-sets#).

## Demo description

The timeline supports virtual horizontal and vertical scrolling. The view virtualization makes it possible to work with many resources across long date ranges.

The following examples shows that navigating 200 resources across a whole year with 10000 events won't pose any problems for the browser neither on mobile or desktop.

View virtualization is always enabled and doesn't need to be turned on explicitly.

## Implementation instructions

- Use `timeline: { type: 'year', eventDisplay: 'fill' }` — a full-year view where events fill the width of their date cell.
- Programmatically generate 200 resources at module level (outside the component): loop `i = 1..200`, push `{ id: i, name: 'Resource i' }`.
- View virtualization is always enabled — no explicit configuration needed.
- **`onPageLoading` handler**: regenerates 10,000 random events for the currently visible year on every page navigation.
  1. Extract the current year from `args.firstDay.getFullYear()`.
  2. Wrap the entire event-generation loop in `setTimeout` (no delay) to defer heavy computation off the current render cycle and avoid UI blocking.
  3. Generate 10,000 events. For each, pick random values for `month` (0–11), `day` (1–31), `length` (2–5 days, used to compute `end`), `resource` (1–200), `color` (from a fixed palette), and `title` (`'Event ' + i`).
  4. After the loop, update the calendar's events.
- Update the events inside the `setTimeout` callback; for the imperative API, call `inst.setEvents(myEvents)`.
