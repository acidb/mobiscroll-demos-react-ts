To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/week-view#).

## Demo description

Show a week calendar instead of a monthly calendar view to save space. By setting the `calendarType` to `'week'` and passing the count in the `calendarSize` option you can simply enable a week view.

You can dynamically change the number of weeks or switch between month and week view without the need for recycling the whole component.

- **Interested in switching week and month view?** [Learn how to set up switch inside the calendar →](https://demo.mobiscroll.com/react/calendar/week-to-month#)

## Related demos

- [Learn how to set up switch inside the calendar →](https://demo.mobiscroll.com/react/calendar/week-to-month#)

## What this demo shows

- This example demonstrate different ways to display one/two or three weeks of calendar for date selection.
- **Week count switcher** A segmented control above the date picker switches between one-, two-, and three-week layouts and updates the calendar view dynamically.
- **Dynamic view updates** The number of displayed weeks can change without recreating the date picker component.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between weeks.
- **Week view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Week navigation** The week can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.

## Best for

- **Compact date selection** Forms, dialogs, and side panels where a full month calendar would use more space than needed.
- **Near-term booking** Appointment, reservation, and service-booking flows focused on availability over the next one to three weeks.
- **Short-range scheduling** Shift planning, task assignment, and resource scheduling where users work within a limited weekly window.
- **Adjustable planning horizons** Interfaces that let users switch between a focused single-week view and a broader two- or three-week overview.
