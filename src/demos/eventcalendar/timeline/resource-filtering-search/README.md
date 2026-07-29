To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-filtering-search#).

## Demo description

When dealing with numerous resources, filtering and search are essential tools. Using the [renderResourceHeader](https://docs.mobiscroll.com/react/eventcalendar/timeline#renderer-renderResourceHeader)
function you can customize the resource header and fit a search input and filter button. Having full control over what you render in the resource header, you can implement live search and filering with a flyout, allowing users to quickly locate specific resources based on selected filters.

To handle cases where no search results are found, use the `renderResourceEmpty`
function to craft a custom placeholder with specific call-to-action buttons eg. clearing all search terms and resetting filters. The placeholder appears when an empty resource array is passed to the calendar.

## Implementation instructions

- Use `type: 'week'` with `startDay: 1`/`endDay: 5`, `timeCellStep: 60`, `timeLabelStep: 60`, and `weekNumbers: true` for a Mon–Fri hourly view with week numbers in the header.
- Define resources as a two-level tree of job site groups (`eventCreation: false`) and equipment leaf nodes, each with a custom `status` property (`'on site'` or `'in maintenance'`) and a `color`.
- Keep a `filteredResources` state and pass it to the `resources` prop. Write a `filterResources(currentFilters, currentQuery)` function that maps each site, filters its children by status and name match, and removes sites whose children are all filtered out or whose site checkbox is unchecked.
- Use `renderResourceHeader` (Angular: `resourceHeaderTemplate`, Vue: `resourceHeader`) to render a search `Input` (with a search start icon) and a Filter `Button` side by side in the resource column header.
- Debounce the search input by 300ms using a `searchTimeout` ref: on each keystroke, clear the previous timeout and schedule a new call to `filterResources` with the current filters and query.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to show the equipment name and, for leaf nodes, a status line with a small colored dot (green for `'on site'`, orange for `'in maintenance'`).
- Use `renderResourceEmpty` (Angular: `resourceEmptyTemplate`, Vue: `resourceEmpty`) to render a no-results placeholder with an image, a descriptive message, and a "Reset Filters" button that calls the reset handler. This appears automatically when the `resources` prop receives an empty array.
- Open the filter `Popup` anchored to the Filter button's DOM element (obtained via a `ref` on the `Button`). On open, copy the current filters into a `tempFilters` state so changes can be discarded on cancel.
- Inside the popup, render two `Checkbox` groups: one for operational status (on site / in maintenance) and one with a checkbox per job site. Wire each checkbox to toggle its key in `tempFilters`.
- On Apply, commit `tempFilters` to the active `filters` state, call `filterResources` with the new values, and show a `Toast`. On reset, restore all filter keys to `true`, clear the search query, re-run `filterResources`, and show a `Toast`.
- Enable `clickToCreate`, `dragToCreate`, `dragToMove`, and `dragToResize` for full event management on the filtered timeline.

## What this demo shows

- A desktop resource timeline for scheduling construction equipment, with Monday to Friday working days arranged horizontally and a hierarchical resource tree arranged vertically on the left.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week numbers** A fixed strip below the header shows the week number for the visible work week.
- **Week view** The timeline displays the selected work week from Monday to Friday using the `DD DDD MMM YYYY` date format, with the current date highlighted.
- **Time grid** Each day shows working hours from 5 AM to 9 PM with hourly columns.
- **Resources** The left resource column shows expandable and collapsible job site groups, with equipment resources nested under each site.
- **Resource rendering** Custom resource content displays the equipment name, identifier, operational status, and a color-coded status indicator.
- **Resource search** A search field in the resource header lets users locate resources by name or keyword.
- **Filter panel** A filter popup provides selectable categories for operational status and job sites.
- **Multi-select filtering** Users can enable multiple statuses and job sites at the same time.
- **Filter actions** Apply updates the visible resources, while Cancel closes the popup without applying the temporary filter selections.
- **Filtered results** The timeline updates to show only resources that match the active search query and selected filters.
- **Empty state** When no resources match, the resource area shows an illustration, a guidance message, and a Reset Filters action.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a left color stripe, job name, and exact start and end time.
- **Event positioning** Events are placed by assigned resource, date, start time, and end time.
- **Event interaction** Events highlight on hover and expose drag and resize handles for moving or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Vertical scrolling** The resource area scrolls vertically so many resources can be shown in the same timeline.
- **Horizontal scrolling** The timeline supports horizontal scrolling for navigating the visible date and time range.

## Best for

- **Construction equipment scheduling** Plan equipment assignments across job sites in a work-week timeline.
- **Fleet management** Search and filter vehicle or equipment resources before assigning scheduled work.
- **Asset planning** Keep many grouped resources visible while scheduling jobs by date, time, and duration.
- **Maintenance coordination** Separate resources by operational status, such as on-site equipment and equipment in maintenance.
- **Field operations** Manage schedules where dispatchers need resource search, job site filtering, and a dense desktop timeline.
- **Large resource lists** Support planning workflows where users need search, multi-select filters, vertical scrolling, and an empty state for no matching resources.
