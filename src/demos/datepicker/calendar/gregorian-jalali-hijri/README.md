To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/gregorian-jalali-hijri#).

## Demo description

The date picker supports multiple calendar systems. You can control it with the `calendarSystem` setting, and it supports the following options:

- **Gregorian** - it is included by default
- **Jalali** - it is the default system of the Persian calendar and is included within the Farsi language pack
- **Hijri** - it is included in the Arabic language pack

- **Interested in localization?** [Explore this example →](https://demo.mobiscroll.com/react/calendar/localization#)

## Related demos

- [Explore this example →](https://demo.mobiscroll.com/react/calendar/localization#)

## What this demo shows

- Shows date picker examples for selecting a single date.
- **Calendar system picker** The left side of the calendar shows a "Pick a calendar system" label with three options, where Gregorian is selected by default and choosing another option (Jalali or Hijri) updates the calendar system.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month.

## Best for

- **Regional user experiences** Products that need to present dates in the calendar system users already rely on, such as Gregorian for international audiences, Jalali for Persian-speaking users, or Hijri for Arabic-speaking users.
