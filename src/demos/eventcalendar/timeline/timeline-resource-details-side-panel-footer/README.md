To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/timeline-resource-details-side-panel-footer#).

## Demo description

The resources can be rendered vertically either as plain text or based on a custom grid template. This example utilizes the properties of the resource objects, which are conference rooms with capacities and pricing. Along with the resource template defined using `renderResource` , an additional sidebar is rendered on the opposite side of the row using @if (pagemode == PageMode.Angular) { `sidebarTemplate` } else if (pagemode == PageMode.Vue) { `sidebar`  template } else { `renderSidebar` }, displaying the calculated revenue.

Both the resource and sidebar columns have customizable headers and footers, which are set using the renderResourceHeader,
renderResourceFooter,
renderSidebarHeader,
`renderSidebarFooter`
functions.

The occupancy percentages that can be seen for each day are set through the `renderDayFooter` in a similar way to the [day header templates](https://demo.mobiscroll.com/react/scheduler/custom-resource-header-template#).

The headers are equipped with sorting functionality, allowing data to be sorted on click.
Event listeners are attached to the resource, day, and sidebar headers, making them clickable.
Each header has a custom icon indicating the current sorting state (ascending, descending, or unordered).
Clicking a header cycles through these sorting states, with the corresponding icon reflecting the current state.
The <!-- UNPARSED_RAZOR_START -->
initial order
<!-- UNPARSED_RAZOR_END -->
in which the resources appear follows the order of the array passed to the component.

The resources column has a default width that may not be sufficient to fit its content. This can be adjusted by overriding it with a CSS rule:

.md-resource-details .mbsc-timeline-resource-col {
width: 280px;
}
