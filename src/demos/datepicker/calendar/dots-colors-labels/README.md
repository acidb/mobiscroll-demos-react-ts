To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/dots-colors-labels#).

## Demo description

You can highlight days, mark them with colored dots, add labels or completely color the background of the days using the `marked`, `colors` and `labels` options.
This offers means to add more information to the calendar that could be valuable to users. While you can use the `colors` along with `marked` and `labels`, the latter two are mutually exclusive because they get rendered in the same place on the UI.

You can add them as `exact dates`, `ranges` or specify `recurring rules`. The `recurring` object supports [different ways to describe the rules](https://demo.mobiscroll.com/react/calendar/recurring-values#).

The passed date-times can also contain timezone data which requires a `timezonePlugin` to be interpreted correctly.
[Check out how timezones work](https://demo.mobiscroll.com/react/calendar/setting-the-picker-timezone#) in the calendar.

Use the `onPageLoading` lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/calendar/event-hooks#) and places where to drop logic to customize the experience.

## Related demos

- **Looking to show event data and use multiple labels?** [Check out the event calendar →](https://demo.mobiscroll.com/react/eventcalendar/event-labels#)
