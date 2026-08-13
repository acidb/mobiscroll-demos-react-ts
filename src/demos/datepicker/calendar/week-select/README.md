To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/week-select#).

## Demo description

Week selection can be configured by setting the `select` to `'preset-range'`.

Control the parameters of the selection:

- **Define the first day of the selection** - Set it in the `firstSelectDay` option. It can be different than the `firstDay` of the week set in localization
- **Define the number of days** - The `selectSize` option can be any number, where `3` means three days, `7` means a week and `14` means two weeks

- **Looking to select a range with custom start/end dates?** [See how start/end selection works →](https://demo.mobiscroll.com/react/calendar/range-select#)

## Related demos

- [See how start/end selection works →](https://demo.mobiscroll.com/react/calendar/range-select#)

## What this demo shows

- This demo shows an inline date picker calendar from which one ore multiple weeks.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Week selection:** Hovering over a week previews the full selection range based on the configured first day and number of weeks.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month. 
- **First day of the selection:** The panel to the left of the calendar provides a segmented control with every weekday. Monday is selected by default, and choosing another day changes the first day of the selection range.
- **Number of weeks:** The panel below provides a segmented control for selecting one, two, or three weeks. One week is selected by default.

## Best for

- **Work schedules:** Select complete weekly or multiweek periods for shift planning, timesheets, or rota management.
- **Bookings and reservations:** Choose fixed week-long stays, rentals, or recurring booking periods.
- **Courses and programs:** Select one or more complete weeks for training sessions, camps, or cohort-based activities.
- **Reporting periods:** Pick consistent weekly ranges for reviewing activity, capacity, or operational data.
