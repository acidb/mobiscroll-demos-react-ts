To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/dots-colors-labels#).

## Demo description

You can highlight days, mark them with colored dots, add labels or completely color the background of the days using the `marked`, `colors` and `labels` options.
This offers means to add more information to the calendar that could be valuable to users. While you can use the `colors` along with `marked` and `labels`, the latter two are mutually exclusive because they get rendered in the same place on the UI.

You can add them as `exact dates`, `ranges` or specify `recurring rules`. The `recurring` object supports [different ways to describe the rules](https://demo.mobiscroll.com/react/range/recurring-values#).

The passed date-times can also contain timezone data which requires a `timezonePlugin` to be interpreted correctly.
[Check out how timezones work](https://demo.mobiscroll.com/react/range/setting-the-picker-timezone#) in the range.

Use the `onPageLoading` lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/range/event-hooks#) and places where to drop logic to customize the experience.

## What this demo shows

- This inline examples demonstrate different ways how to hilight or mark dates on the date range picker. 
- **Background and highlight settings** The `Set the background & highlight specific or recurring dates` panel contains two switches, both disabled by default. `Show cell backgrounds` adds rectangular background colors to configured dates, while `Show highlighted days` adds circular background colors.
- **Marked days and label settings** The `Marked days & labels are mutually exclusive` panel provides three options. `Show marked days` is selected by default and displays one or more colored dots below configured dates. `Show labels` displays colored labels below configured dates. `Don't show marked days and labels` hides both dots and labels.
- **Inline date range picker** Display the date range picker directly on the page without an input by using inline display mode.
- **Start and end inputs** Use the clickable inputs above the calendar header to choose which range boundary to set. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** Open the month and year picker from the label in the upper-left corner, or use the previous and next arrow buttons to navigate between months.
- **Month view** View dates in a grid below a fixed weekday header with abbreviated day names from Sunday through Saturday.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hover over a day to highlight its number with a gray background. The first selected day sets the range start, and the second sets the range end. Selected days are highlighted in blue.
- **Current date** The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.

## Best for

- **Availability calendars** Highlight available, unavailable, or limited-availability dates in booking and reservation flows.
- **Deadlines and milestones** Mark due dates, release dates, or other important dates while users choose a date.
- **Status indicators** Use colored dots to show one or more compact statuses without replacing the date number.
- **Date-specific context** Use labels when short text provides more useful context than a marker alone.
- **Recurring schedules** Apply consistent visual cues to repeating dates, such as weekly service days or recurring availability.
