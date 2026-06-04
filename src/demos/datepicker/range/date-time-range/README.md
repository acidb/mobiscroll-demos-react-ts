To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/date-time-range#).

## Demo description

Set up the range picker for date & time pair selection. Regardless if you are interested in the start/end date or the actual range, you have several possibilities of rendering a date and time range picker. The `controls` option supports different values:

- `datetime` - will render a compact date scroller or dropdown with time picker for date & time range selection
- `calendar` - will render a calendar view for date range selection ([explore date ranges](https://demo.mobiscroll.com/react/range/date-range#))
- `date` - will render a date scroller or dropdown for date range selection  ([explore date ranges](https://demo.mobiscroll.com/react/range/date-range#))
- `time` - will render a time picker for range selection ([explore time ranges](https://demo.mobiscroll.com/react/range/time-range#))
- `timegrid` - will render a time grid for range selection ([explore time range selection](https://demo.mobiscroll.com/react/range/time-range#))

## What this demo shows

- Five inline examples of date-and-time range selection, each using a different control configuration.
- **Calendar + time picker** — a month calendar for date selection combined with a time picker, giving a familiar two-panel layout for picking start and end date-times.
- **Calendar + time grid** — a month calendar paired with a time grid at 30-minute increments, suited for slot-based selection.
- **Date-time scroller** — a compact inline scroller combining date and time in a single control for both the start and end values.
- **Single input with popover/dropdown** — one input field that opens a date-time range scroller as a popover on mobile and as a dropdown on desktop.
- **Separate start and end inputs** — same responsive behavior as the single-input example, but with dedicated input fields for the start and end date-time.
- In all examples the selected start and end date-times are displayed above the picker component.

## Best for

- **Flexible form configurations** — the five examples cover the most common form layouts: fully inline, single-input, and split start/end inputs, making it easy to pick the right pattern for a given form design.
- **Use-cases that need both date and time precision** — booking systems, scheduling tools, or any workflow where selecting just a date is not enough and the time component is required for both ends of the range.
- **Responsive UIs** — the popover/dropdown examples demonstrate how the same control adapts between mobile and desktop without additional configuration.
