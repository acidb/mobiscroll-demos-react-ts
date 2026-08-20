To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/setting-the-picker-timezone#).

## Demo description

The date picker works with local times by default, but ships with support for changing the timezone. The conversions and correct output relies on either of these three external libraries: [luxon](https://moment.github.io/luxon/), [moment-timezone](https://momentjs.com/timezone/) and [day.js](https://day.js.org/). For installing and using these libraries check out this guide.

There are two angles regarding timezones:

- `dataTimezone` - the datepicker expects this format and returns this format. It is `'local'` by default if the date-times don't contain any timezone information
- `displayTimezone` - the datepicker displays everything in this timezone. The date-times will be converted from the `dataTimezone` and displayed accordingly. It is `'local'` by default

[Invalid date-times](https://demo.mobiscroll.com/react/datetime/disabled-invalid-values#) will be interpreted in `dataTimezone` when they contain no timezone info and will be shown in `displayTimezone` on the wheels.

## What this demo shows

- Configure the timezone used for date and time selection and display.
- **Date and time picker** The example opens the picker when the user focuses or clicks the input.
- **Input behavior** The picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it.
- **Date and time selection** Separate scrollable wheels for the date, hour, minute, and AM/PM. The current date is labeled `Today`, while other dates use an abbreviated day, month, and date format.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date.
- **Input value** In the input-based examples, confirming a date with `Set` displays the selected value in the input using a month, day, and year format.
- **Data timezone** View the calendar's data timezone, shown as UTC in a non-editable field labeled `Date timezone is:` next to the calendar on the left.
- **Display timezone** Use the selectable field labeled `Display timezone is:` below the data timezone field to open a timezone picker.
- **Timezone conversion** Select a different display timezone to update the date and time shown by the picker.

## Best for

- **Travel booking** Let users choose dates and times in the timezone of a flight, hotel, rental, or destination.
- **Remote appointments** Display appointment times in each participant's local timezone while keeping the underlying date-time values in a consistent data timezone.
- **International scheduling** Support date and time selection for meetings, interviews, or services involving users in different regions.
- **Location-based services** Show reservation, pickup, delivery, or check-in times in the timezone of the selected location.
- **UTC-based systems** Store and return date-time values in UTC while presenting them in a user-selected display timezone.
