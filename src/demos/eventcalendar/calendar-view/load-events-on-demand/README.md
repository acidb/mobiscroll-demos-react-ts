To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/load-events-on-demand#).

## Demo description

The event calendar supports [remote](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-remote-api#) and [local data sources](https://demo.mobiscroll.com/react/eventcalendar/load-inline-data#). Besides that, events can be populated on initialization or loaded on demand.

Getting the events in real time as the user navigates improves load performance and always serves the most recent data.

Use the 

`onPageLoading`

 lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/eventcalendar/event-hooks#) and places where to drop logic to customize the experience.

- **Interested in loading events from Google Calendar?** [Show events from Google Calendar &#8594;](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-google-calendar#)

## Related demos

- [Show events from Google Calendar &#8594;](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-google-calendar#)

## Implementation instructions

- Use the `onPageLoading` lifecycle event to load event data at runtime for the currently requested page.
- Fetch events when the visible month changes so the calendar loads data on demand instead of loading everything up front.
- Use lifecycle hooks as the place to add custom loading logic and connect the calendar to your data source.

## What this demo shows

- A mobile month view event calendar is shown inside a smartphone frame.
- **Month view layout** Each day cell can display event labels directly in the month grid.
- **Event labels** Days with events show one or more labels representing the scheduled events.
- **Event interaction** Hovering over or selecting an event label highlights that label.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that day and highlights the day number in the top-right corner with a blue background.
- **Month navigation** The month can be changed by dragging the calendar left or right.
- **Header controls** The header shows the current month and year on the left.
- **Navigation buttons** Previous and next arrow buttons appear on the right side of the header, with a Today button between them to return to the current date.

## Best for

- **On-demand event loading** Explaining how to load calendar events as the user navigates between months.
- **Performance-sensitive calendars** Reducing the initial data load by fetching only the events needed for the currently visible date range.
- **Live data scenarios** Showing the most recent event data by requesting it when the calendar view changes.
- **Month-view event calendars** Demonstrating lazy loading in a month grid where users browse forward and backward through dates.
