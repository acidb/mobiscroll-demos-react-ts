To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/dynamic-cell-content-template#).

## Demo description

Dynamically customize the cell content of the timeline by showing event-related icons, visual indicators, and a quick add button directly in each cell.

This is achieved using the [renderCell](https://docs.mobiscroll.com/react/eventcalendar/timeline#renderer-renderCell)
function, where event data in each cell is used to display icons based on the event, a badge showing total event hours, and a button to quickly add new events. The add event icon is dynamically added during [onCellHoverIn](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-onCellHoverIn). An event cap per cell is implemented by reading the event count from [onCellHoverIn](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-onCellHoverIn) args and enforcing it in [onEventCreate](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-onEventCreate), blocking event creation by returning `false`. This approach helps visualize workload per day and enables quick actions, making scheduling more efficient and user-friendly.

In this demo, cells represent a day. Depending on the resolution, they can also stand for a week, month, or more, while remaining fully customizable.
See this
[configuration demo](https://demo.mobiscroll.com/react/timeline/multiple-days-weeks-months-quarters-years-variable-resolution#)
to try out different timeline resolution settings.
