To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/day-cell-aggregate-information#).

## Demo description

This demo showcases an advanced event calendar implementation with extensive day cell customization using the `renderCalendarDay` option , which completely overrides the default cell rendering.

The calendar provides a comprehensive visual overview of scheduling density and workload management through custom
aggregate data visualization with stress-level indicators, weather information, and color-coded backgrounds.
This approach prevents the calendar from rendering individual event labels, allowing full control over the cell content.
Each day cell displays aggregate information calculated from the actual events, received by the custom template.

Users can navigate smoothly from the monthly or weekly overview to a detailed daily schedule by clicking on a day cell,
which highlights the selected day and loads all events. A convenient back button allows a quick return to the previous view.
Each cell also includes an add button for creating new appointments, and events can be added by dragging or clicking in the week or day view.
