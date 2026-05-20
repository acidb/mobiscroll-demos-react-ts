To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/calendar-zoom#).

## Demo description

The timeline provides a continuous rendering of events across short and long periods of time.
To simplify working with many different types of events that are rendered through various stretches of time, being able to zoom in and out is essential.

Through the `zoomLevel`
option it is possible to switch between different predefined levels of granularity.
Depending on what you are trying to accomplish, any number of levels can be specified in the
[zoomLevels](https://docs.mobiscroll.com/react/eventcalendar/timeline#view-timeline-zoomLevels)
property, controlling settings ranging from horizontal resolution, page type and size to column widths.

Combined with the flexibility of templating capabilities of the event calendar header , you can add buttons, sliders to the calendar or manage everything from external controls.
Dynamically zooming in and out will always keep a virtual reference point in the middle of the timeline for a smooth visual experience.
