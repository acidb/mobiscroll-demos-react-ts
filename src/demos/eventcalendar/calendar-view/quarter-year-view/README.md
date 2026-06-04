To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/quarter-year-view#).

## Demo description

Besides the single month view, the calendar can be configured to render multiple months or a year. Controlled through the `calendar.type` and `calendar.size` properties of the `view` option.

Depending on the height of the parent container the calendar is rendered in, the header that can be used for navigation is sticky at the top while the months are vertically scrollable.

## Implementation instructions

- Configure the multi-month and year layouts through the `calendar.type` and `calendar.size` properties on the `view` option.

## What this demo shows

- An event calendar with a segmented control in the header that lets the user switch between quarter view and year view.
- **Header and segmented control** A segemnted control with `Quarter` and `Year` options is positioned in the center of the header, between the year navigation label (quick navigation picker) on the left and the prev/next arrows with a `Today` button on the right.
- **Quarter view** When the `Quarter` option is selected from the segmented control, that renders the three months of the current quarter as a compact multi-month grid.
- **Year view** When the `Year` option is selected from the segmented control, that renders all twelve months of the current year in a single scrollable layout.
- **Sticky header** The navigation bar and segmented control stay fixed at the top while the calendar months scroll vertically beneath it.
- **Event dots** Days that have at least one event show a small dot below the day number, giving a quick visual signal of activity.
- **Day popover** Clicking a day with events opens a popover above the day cell that lists the events for that date.
- **Popover event styling** Each listed event has a colored vertical marker on the left to help distinguish event categories.
- **Hover state** Hovering a date highlights the day number with a gray background.
- **Selection state** Clicking a date selects it and highlights the day number with a blue background.

## Best for

- **High-level event overviews** Giving users a bird's-eye view of activity across a quarter or full year, where the exact time of each event matters less than seeing which days are busy.
- **Aggregate and summary views** Dashboards or reports where totals, counts, or status indicators are shown per day, and users need to scan a large date range at once.
- **Planning and scheduling workflows** Letting users spot free stretches or busy periods across a quarter or year before drilling into a specific day or week.
