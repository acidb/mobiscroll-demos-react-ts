To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/setting-the-picker-timezone#).

## Demo description

The range works with local times by default, but ships with support for changing the timezone. The conversions and correct output relies on either of these three external libraries: [luxon](https://moment.github.io/luxon/), [moment-timezone](https://momentjs.com/timezone/) and [day.js](https://day.js.org/). For installing and using these libraries check out this guide.

There are two angles regarding timezones:

- `dataTimezone` - the range expects this format and returns this format. It is `'local'` by default if the date-times don't contain any timezone information
- `displayTimezone` - the calendar displays everything in this timezone. The date-times will be converted from the `dataTimezone` and displayed accordingly. It is `'local'` by default

[Invalids](https://demo.mobiscroll.com/react/range/disabled-invalid-values#) as well as [marked, colored and labels](https://demo.mobiscroll.com/react/range/dots-colors-labels#) date-times will all be interpreted in `dataTimezone` when they contain no timezone info and will be shown in `displayTimezone` on the calendar.
