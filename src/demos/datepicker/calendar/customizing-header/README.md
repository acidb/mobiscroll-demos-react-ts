To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/customizing-header#).

## Demo description

You can customize how the header of calendar looks and how the components are arranged. Besides that you can also add custom functionality, like a segmented control that lets people switch between week and month view.

Use the `renderCalendarHeader` option for passing a custom header layout. There are predefined components - shorthands if you will - that can be used to assemble the header:

- **Navigation component** - `&lt;CalendarNav /&gt;`
- **Today button** - `&lt;CalendarToday /&gt;`
- **Previous month button** - `&lt;CalendarPrev /&gt;`
- **Next month button** - `&lt;CalendarNext /&gt;`

## What this demo shows

- The Datepicker calendar header can use the default layout, a custom arrangement, or be hidden completely.
- **Default header**: Displays the current month and year with previous and next navigation controls.
- **Month and year navigation**: Clicking the month and year label opens a picker for navigating directly to a specific month or year.
- **Previous and next controls**: Pages the calendar by one month in month view and one week in week view.
- **Custom header arrangement**: Centers `CalendarNav` and places `CalendarPrev` and `CalendarNext` on opposite sides using predefined calendar components.
- **Today button**: Adds a `CalendarToday` control between the navigation buttons in their default positions.
- **Week and month views**: Adds a segmented control with week and month icons for switching the calendar dynamically between the two views.
- **Selected date preview**: Displays the currently selected date in the header.

## Best for

- **Compact date pickers**: Hide the header when month and year navigation is unnecessary or space is limited.
- **Long-range date selection**: Open the month and year picker to reach dates that would require many previous or next navigation steps.
- **Current-date workflows**: Add a Today button when users frequently need to return to the current date.
- **Flexible date browsing**: Let users switch between week and month views when they need both a focused and a broader calendar view.
- **Selection confirmation**: Show the selected date in the header when users need a clear preview of their current choice.
- **Custom header layouts**: Rearrange the built-in navigation controls to fit the date picker's available space and surrounding interface.
