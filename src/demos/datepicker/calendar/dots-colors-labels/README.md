To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/dots-colors-labels#).

## Demo description

You can highlight days, mark them with colored dots, add labels or completely color the background of the days using the `marked`, `colors` and `labels` options.
This offers means to add more information to the calendar that could be valuable to users. While you can use the `colors` along with `marked` and `labels`, the latter two are mutually exclusive because they get rendered in the same place on the UI.

You can add them as `exact dates`, `ranges` or specify `recurring rules`. The `recurring` object supports [different ways to describe the rules](https://demo.mobiscroll.com/react/calendar/recurring-values#).

The passed date-times can also contain timezone data which requires a `timezonePlugin` to be interpreted correctly.
[Check out how timezones work](https://demo.mobiscroll.com/react/calendar/setting-the-picker-timezone#) in the calendar.

Use the `onPageLoading` lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/calendar/event-hooks#) and places where to drop logic to customize the experience.

- **Looking to show event data and use multiple labels?** [Check out the event calendar →](https://demo.mobiscroll.com/react/eventcalendar/event-labels#)

## Related demos

- [Check out the event calendar →](https://demo.mobiscroll.com/react/eventcalendar/event-labels#)

## What this demo shows

- This inline examples demonstrate different ways how to hilight or mark dates on the date picker calendar. 
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month. 
- **Background and highlight settings** The `Set the background & highlight specific or recurring dates` panel contains two switches, both disabled by default. `Show cell backgrounds` adds rectangular background colors to configured dates, while `Show highlighted days` adds circular background colors.
- **Marked days and label settings** The `Marked days & labels are mutually exclusive` panel provides three options. `Show marked days` is selected by default and displays one or more colored dots below configured dates. `Show labels` displays colored labels below configured dates. `Don't show marked days and labels` hides both dots and labels.

## Best for

- **Availability calendars** Highlight available, unavailable, or limited-availability dates in booking and reservation flows.
- **Deadlines and milestones** Mark due dates, release dates, or other important dates while users choose a date.
- **Status indicators** Use colored dots to show one or more compact statuses without replacing the date number.
- **Date-specific context** Use labels when short text provides more useful context than a marker alone.
- **Recurring schedules** Apply consistent visual cues to repeating dates, such as weekly service days or recurring availability.
