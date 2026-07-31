To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/custom-event-sort#).

## Demo description

When rendering events, the default logic determines the order:

- All-day events are placed at the top
- Non-all-day events follow, sorted by their start times
- Events with the same start time are ordered alphabetically by their title

The `order` property of the event data can be used to override the default ordering. The `order` property takes precedence over the default rules. If two events have the same order value, the default rules apply. For a more advanced order logic, the eventOrder option can be used which expects a function that compares two events and returns an order (-1 or 1).

- **Do you want to learn about the event ordering?** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/agenda#event-order)

## Implementation instructions

- Use `view: { agenda: { type: 'week' } }`.
- Define a static inline event array — all events are all-day (`allDay: true`). Assign an `order` property to each event to control display sequence: `order: 1` for pending/proposed items (yellow, `#e7b300`), `order: 2` for approved items (green, `#00ca10`). Events with equal `order` fall back to default rules (all-day first, then by start time, then alphabetically by title). Use relative dates so events always land on the current week.

## What this demo shows

- A weekly agenda view where events are grouped by date and displayed with a custom event order.
- **Header navigation:** The week range label opens date navigation, while the previous and next arrows move between weeks. The Today button returns the agenda to the current date.
- **Agenda list:** The area below the header lists the events for the selected week, grouped under their dates.
- **Sticky day headers:** As the agenda scrolls vertically, each date header remains visible while its events appear underneath.
- **Default event ordering:** Agenda events are normally ordered with all-day events first, followed by non-all-day events sorted by start time, then alphabetically by title when start times match.
- **Custom event order:** This demo overrides the default ordering with a custom order value on the event data.
- **Event states:** Events use different visual styles to distinguish states such as `PROPOSED` and `APPROVED`.
- **Event cards:** Events appear as agenda cards with a colored strip on the left and the event title next to it. All-day events show an all-day label on the right.
- **Event interaction:** Hovering an event highlights it.
- **Event selection:** Clicking an event selects and highlights it.

## Best for

- **Approval workflows:** Listing proposed items before approved items, even when the default date or title ordering would place them differently.
- **Priority-based agendas:** Showing higher-priority events first within each day of the agenda view.
- **Status-driven planning:** Grouping agenda items by workflow state, such as pending, proposed, approved, or confirmed.
- **Operational review lists:** Presenting events in the order a team needs to process them instead of relying only on start time or alphabetical sorting.
