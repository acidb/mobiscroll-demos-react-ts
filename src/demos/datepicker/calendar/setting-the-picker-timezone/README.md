To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/setting-the-picker-timezone#).

## Demo description

The calendar works with local times by default, but ships with support for changing the timezone. The conversions and correct output relies on either of these three external libraries: [luxon](https://moment.github.io/luxon/), [moment-timezone](https://momentjs.com/timezone/) and [day.js](https://day.js.org/). For installing and using these libraries check out this guide.

There are two angles regarding timezones:

- `dataTimezone` - the calendar expects this format and returns this format. It is `'local'` by default if the date-times don't contain any timezone information
- `displayTimezone` - the calendar displays everything in this timezone. The date-times will be converted from the `dataTimezone` and displayed accordingly. It is `'local'` by default

[Invalids](https://demo.mobiscroll.com/react/calendar/disabled-invalid-values#) as well as [marked, colored and labels](https://demo.mobiscroll.com/react/calendar/dots-colors-labels#) date-times will all be interpreted in `dataTimezone` when they contain no timezone info and will be shown in `displayTimezone` on the calendar.

## What this demo shows

- **Timezone configuration** Configure the timezone used for date and time selection and display.
- **Header navigation** Open the month and year picker from the label in the upper-left corner, or use the previous and next arrow buttons on the right to navigate between months.
- **Month view** View abbreviated weekday names from Sunday through Saturday in a fixed header, with dates arranged in a grid below.
- **Month navigation** Click and drag the calendar left or right to move between months.
- **Day cell states** Hover over a date to highlight its day number with a gray background, or select a date to highlight it in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** View dates from the previous and next months in a muted style. Selecting one navigates to the corresponding month.
- **Scroller time picker** Select an exact time from the scroller next to the single-month calendar. Its three columns contain hours from 1 to 12, minutes from 0 to 59, and AM/PM options.
- **Data timezone** View the calendar's data timezone, shown as UTC in a non-editable field labeled `Date timezone is:` above the calendar on the left.
- **Display timezone** Use the selectable field labeled `Display timezone is:` below the data timezone field to open a timezone picker.
- **Timezone conversion** Select a different display timezone to update the date and time shown by the picker.

## Best for

- **Travel booking** Let users choose dates and times in the timezone of a flight, hotel, rental, or destination.
- **Remote appointments** Display appointment times in each participant's local timezone while keeping the underlying date-time values in a consistent data timezone.
- **International scheduling** Support date and time selection for meetings, interviews, or services involving users in different regions.
- **Location-based services** Show reservation, pickup, delivery, or check-in times in the timezone of the selected location.
- **UTC-based systems** Store and return date-time values in UTC while presenting them in a user-selected display timezone.
