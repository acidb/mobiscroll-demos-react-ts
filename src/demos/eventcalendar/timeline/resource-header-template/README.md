To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-header-template#).

## Demo description

The empty space above the resource list can be customized through the `renderResourceHeader` function. This a perfect place for filtering or headers in case of a resource grid and everything that helps the users in the context of the timeline.

## Implementation instructions

- Use `timeline: { type: 'week', startDay: 1, endDay: 5 }` — a Mon–Fri week view.
- Define 6 venue resources (Flatiron Room, The Capital City, Heroes Square, Thunderdome, King's Landing, Gathering Field), each with `id`, `name`, `color`, and a custom `seats` property (capacity count). Load events from `https://trial.mobiscroll.com/daily-weekly-events/` via `getJson` (Angular: `HttpClient.jsonp`).
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `#resource`) to render each resource row label. The renderer receives the resource object — render `resource.name` and `resource.seats + ' seats'` as two separate elements side by side.
- Use `renderResourceHeader` (Angular: `resourceHeaderTemplate`, Vue: `#resourceHeader`) to replace the empty top-left corner above the resource sidebar. This renderer receives no arguments — it renders static column labels (`'Room'` and `'Capacity'`) that visually align with the two elements rendered by `renderResource` below.
