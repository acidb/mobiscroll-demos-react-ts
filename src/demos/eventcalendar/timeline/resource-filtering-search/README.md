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
