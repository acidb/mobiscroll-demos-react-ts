To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/dynamic-resource-column-highlight-on-cell-hover#).

## Demo description

Highlight the resource row and date column on cell hover to improve usability by clearly showing where the user is interacting.

This is achieved using the `onCellHoverIn` and `onCellHoverOut` lifecycle events. These track the hovered cell and update the resources with a custom `cssClass`, which highlights the resource row. A popup is also shown on hover, displaying relevant information about the cell like the date and resource name.

The column highlight is applied using the `renderCell`, `renderSidebar`, `renderTimelineDay`, and `renderDayFooter` callbacks, where conditional markup is returned to highlight the vertical column.

This makes it easy to implement custom hover interactions that match your design and UX goals.
