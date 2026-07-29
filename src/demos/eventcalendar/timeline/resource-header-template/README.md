To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-header-template#).

## Demo description

The empty space above the resource list can be customized through the `renderResourceHeader` function. This a perfect place for filtering or headers in case of a resource grid and everything that helps the users in the context of the timeline.

## Implementation instructions

- Use `timeline: { type: 'week', startDay: 1, endDay: 5 }` — a Mon–Fri week view.
- Define 6 venue resources (Flatiron Room, The Capital City, Heroes Square, Thunderdome, King's Landing, Gathering Field), each with `id`, `name`, `color`, and a custom `seats` property (capacity count). Load events from `https://trial.mobiscroll.com/daily-weekly-events/` via `getJson` (Angular: `HttpClient.jsonp`).
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `#resource`) to render each resource row label. The renderer receives the resource object — render `resource.name` and `resource.seats + ' seats'` as two separate elements side by side.
- Use `renderResourceHeader` (Angular: `resourceHeaderTemplate`, Vue: `#resourceHeader`) to replace the empty top-left corner above the resource sidebar. This renderer receives no arguments — it renders static column labels (`'Room'` and `'Capacity'`) that visually align with the two elements rendered by `renderResource` below.

## What this demo shows

- A desktop weekly timeline with days arranged horizontally and resources listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between weeks, and the Today button returns to the current date.
- **Week view** The strip below the header shows the selected work week from Monday to Friday, with the current date highlighted.
- **Time grid** The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Meeting rooms are shown as separate timeline rows, with events scheduled against each room.
- **Resource columns** Each room is displayed with its seating capacity in a dedicated column.
- **Resource alignment** The custom resource columns stay aligned with the timeline during horizontal and vertical scrolling.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a left color stripe, a bold title, and the exact start and end time.
- **Date positioning** Events are positioned by assigned resource, date, and time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Room booking** Helps users compare meeting room attributes without opening additional dialogs or detail views.
- **Resource scheduling** Useful for applications where resource metadata affects scheduling decisions, such as facility management, equipment scheduling, healthcare, education, and workforce planning.
- **Resource grids** Provides a pattern for showing custom resource columns next to a timeline while keeping the columns aligned with scheduled events.
