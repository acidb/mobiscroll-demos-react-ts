To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/date-picker#).

## Demo description

The date picker ships with five built-in variations for rendering the UI. The controls option supports the following:

- `date` - renders a date-only scroller or dropdown control
- `time` - renders a time-only scroller or dropdown control
- `timegrid` - renders a time grid for time selection
- `datetime` - renders a date & time scroller or dropdown
- `calendar` - renders a calendar view for date picking

When passing `controls: ['calendar']`, the date picker will render a monthly calendar for selecting a date.

- **Interested in dynamically switching between modes?** [Learn how to set up responsive behavior →](https://demo.mobiscroll.com/react/calendar/responsive#)

## Related demos

- [Learn how to set up responsive behavior →](https://demo.mobiscroll.com/react/calendar/responsive#)

## What this demo shows

- A monthly date picker for selecting a single date.
- **Inline date picker** The date picker is embedded directly in the page without an input by using inline display mode.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month.

## Best for

- **Single-date selection** Choosing one date from a monthly calendar while keeping surrounding dates and the day-of-week layout visible.
