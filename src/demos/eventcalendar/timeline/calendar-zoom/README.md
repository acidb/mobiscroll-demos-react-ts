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

## Implementation instructions

- Define a `zoomLevels` map inside the `timeline` view config: integer keys (1–18) each map to an object with `type`, `size`, `resolutionHorizontal`, `columnWidth`, and optionally `timeCellStep`/`timeLabelStep`. The active key is controlled by the `zoomLevel` prop on `Eventcalendar`. Levels should progress from coarsest (yearly columns, small width) to finest (sub-hour columns).
- The demo uses three resolution bands across 18 levels: levels 1–10 keep `type: 'year', size: 25` and vary `resolutionHorizontal` through `'year'`, `'quarter'`, `'month'`, `'week'`, `'day'` with alternating narrow/wide `columnWidth`; levels 11–14 switch to `type: 'year', size: 3` with `resolutionHorizontal: 'hour'` and `timeCellStep`/`timeLabelStep` stepping from 720 down to 60 min; levels 15–18 use `type: 'month', size: 3` with 30-, 15-, and 5-minute steps.
- Track the active zoom as a state variable (default: 9). Pass it to the `zoomLevel` prop. Provide zoom-in and zoom-out callbacks that increment/decrement the state by 1; clamp to the defined range.
- Adjust `refDate` whenever `zoomLevel` changes so the timeline stays anchored around the currently visible date. Read the current view date from the calendar instance via `calRef.current.getViewDate()`. For levels 1–10 (25-year span) offset 12 years back; for levels 11–14 (3-year span) offset 1 year back; for levels 15–18 (3-month span) offset 1 month back. Pass the computed date as the `refDate` prop.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `header`) to render: `CalendarNav` on the left; a zoom control group on the right containing a flat minus `Button` (disabled at level 1), a native `<input type="range" min="1" max="18">` bound to the zoom state, and a flat plus `Button` (disabled at the maximum level); then the standard `CalendarPrev`, `CalendarToday`, `CalendarNext` controls.
- Define 6 resources with `id`, `name`, and `color`. Load events from a remote endpoint using `getJson` and pass them to `data`.
