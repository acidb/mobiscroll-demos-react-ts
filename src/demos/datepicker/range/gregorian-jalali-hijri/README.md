To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/gregorian-jalali-hijri#).

## Demo description

The date picker supports multiple calendar systems. You can control it with the `calendarSystem` setting, and it supports the following options:

- **Gregorian** - it is included by default
- **Jalali** - it is the default system of the Persian calendar and is included within the Farsi language pack
- **Hijri** - it is included in the Arabic language pack

- **Interested in localization?** [Explore this example →](https://demo.mobiscroll.com/react/range/localization#)

## Related demos

- [Explore this example →](https://demo.mobiscroll.com/react/range/localization#)

## What this demo shows

- Shows a date range picker example for selecting a start and end date from a monthly calendar.
- **Calendar system picker** The left side of the calendar shows a "Pick a calendar system" label with three options, where Gregorian is selected by default and choosing another option (Jalali or Hijri) updates the calendar system.
- **Inline date range picker** This example embeds the date range picker directly in the page without an input by using inline display mode.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.

## Best for

- **Regional user experiences** Products that need to present dates in the calendar system users already rely on, such as Gregorian for international audiences, Jalali for Persian-speaking users, or Hijri for Arabic-speaking users.
