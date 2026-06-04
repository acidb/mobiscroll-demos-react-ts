To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/searching-events-in-popup#).

## Demo description

Use the available real estate in the calendar header to add event search. With the [templating capabilities of the header](https://demo.mobiscroll.com/react/eventcalendar/customizing-header#)
you can easily add a search box and use a separate [agenda](https://demo.mobiscroll.com/react/agenda/#) instance to show the search results.
This example is relying on a single API endpoint for getting the data onto the primary calendar view and also for getting the filtered data based on the search terms.

[Events can be filtered in real time](https://demo.mobiscroll.com/react/eventcalendar/resource-filtering-in-header#) so using an agenda view for the search results is an easy choice.
It provides all the necessary styling and advanced features that you might need to customize the experience.

Alternatively, search can be implemented in a sidebar next to the event calendar using a similar search box with an
[inline agenda](https://demo.mobiscroll.com/react/eventcalendar/searching-events-in-sidebar#) instead of a dropdown.

## Implementation instructions

- Use the `renderHeader` function to place a search input directly in the event calendar header.
- Show search matches in a popup below the header input by rendering the results in a separate agenda instance.
- Load the main calendar data and the filtered search results from the same API endpoint.
- Filter the returned event data based on the entered search term, then pass the matching items to the agenda view shown in the popup.

## What this demo shows

- A full month event calendar with event labels rendered directly inside the day cells.
- **Event labels** Labels use different visual styles for all-day events, multi-day events, and timed events, with different colors representing different events.
- **Event selection** Hovering over or selecting an event label highlights that event.
- **Day cells** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Date selection** Clicking the empty area of a day cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month view can be changed by clicking and dragging the calendar left or right.
- **Header layout** The header shows the current month and year on the left, a centered search input, and previous, next, and `Today` controls on the right.
- **Search input** The search field includes a search icon and the `Search events` placeholder text.
- **Search results popup** Typing into the search field opens a popup below the input with matching events in an agenda-style list.
- **Agenda results** Search results are grouped by date, and each event row shows a colored marker, the event title, and the event type, such as all-day or timed.
- **Result selection** Clicking an event in the agenda list closes the popup and navigates the month view to the date that contains the selected event.

## Best for

- **Search-heavy calendars** Interfaces where users need to quickly find events by person, keyword, event type, or absence period.
- **Admin and operations tools** Admin dashboards, employee scheduling tools, and internal planning interfaces where users review and search event-heavy calendars.
- **Enterprise planning** Multi-day planning scenarios where users need to move between calendar context and filtered event results without leaving the month view.
