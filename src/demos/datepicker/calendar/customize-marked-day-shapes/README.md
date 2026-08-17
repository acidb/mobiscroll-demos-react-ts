To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/customize-marked-day-shapes#).

## Demo description

The default shape of day marks are dots. If you want to mark a day for something you can add one or more colored dots through the marked option. There are cases when you might want to change the shape of the marks or use different marks that carry specific meaning.

When you want to update the shape you can simply use CSS and override the styling: `.mbsc-calendar-marks .mbsc-calendar-mark { // you custom override }`.

If you need to show different shapes, you can pass a custom CSS class in the `markCssClass` property of the marked option. Use it to show triangles, squares and dots for different marks.

- **What else can you use to add extra information to the day cells?** [Learn how to add labels and color days →](https://demo.mobiscroll.com/react/calendar/dots-colors-labels#)

## Related demos

- [Learn how to add labels and color days →](https://demo.mobiscroll.com/react/calendar/dots-colors-labels#)

## What this demo shows

- This demo shows an inline date picker calendar month view with custom-shaped marked dots.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Marked days** The default shape of day marks is a dot. You can add one or more colored dots to a date through the `marked` option. In cases where different marks need to carry specific meanings, you can customize their shape using CSS and override the default styling.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month.

## Best for

- **Event calendars** Use different shapes to distinguish meetings, deadlines, holidays, and other event types.
- **Availability calendars** Mark available, unavailable, or partially available dates with visually distinct indicators.
- **Booking and reservation calendars** Show dates with reservations, special rates, promotions, or limited availability.
- **Task and deadline tracking** Use custom marks to differentiate tasks, milestones, reminders, and due dates.
- **Status-based calendars** Represent different statuses or categories with shapes in addition to colors, making calendar information easier to scan and distinguish.
