To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/activity-calendar#).

## Demo description

Add custom content to the day cells of the calendar. This can be dynamic content based on the date like an activity tracker that uses daily move data from an array of records.

Use the `renderDayContent` function to return custom markup that will be used when the day cells are being rendered.

## What this demo shows

- Shows an inline monthly date picker example with custom day cell for selecting a single date.
- **Inline date picker** Embeds a monthly date picker directly in the page without an input by using the inline display mode.
- **Header navigation** Opens the month and year picker from the label in the upper-left corner. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** Displays a fixed weekday header with abbreviated day names from Sunday through Saturday and arranges the dates in a grid below it.
- **Month navigation** Changes the displayed month when the user clicks and drags the calendar left or right.
- **Day cell states** Highlights a day number with a gray background on hover and a blue background on selection. The current date is highlighted by default and remains blue when another date is selected.
- **Custom day content** Displays an activity indicator below each date using daily move data from an array of records, demonstrating how day cells can render dynamic content based on the date.
- **Adjacent months** Shows dates from the previous and next months in a muted style. Selecting one navigates the calendar to the corresponding month.

## Best for

- **Activity tracking** Showing daily progress, exercise totals, completed habits, or other date-based metrics directly in the calendar.
- **Availability calendars** Indicating available, limited, or unavailable dates before the user makes a selection.
- **Booking and pricing** Displaying daily prices, promotions, capacity, or booking status alongside each date.
- **Deadlines and milestones** Marking due dates, project milestones, or days with scheduled work in a compact monthly view.
- **Operational monitoring** Surfacing daily counts, status indicators, or exceptions so users can identify dates that need attention.
