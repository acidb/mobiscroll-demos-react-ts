To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/show-more-all-labels#).

## Demo description

Labels on the event calendar go hand in hand with the height of the event calendar rows (representing weeks). It is possible to render as many labels as fit and keep the row heights equal. The row height is liquid and determined by the height of the calendar.

If you would like to render all labels, then passing `labels: 'all'` will do just that. This can make the row heights variable.

Alternatively a maximum number of labels can be set by passing a number to the `labels` property of the `view.calendar` option.

If there are more events than the number of labels for a particular day, an "x more" label will help users list out all events for the day.

By default the width of the labels fill the day cells (`eventDisplay: 'fill'`) but alternatively `eventDisplay: 'exact'` can be used to display the labels with exact times.

## Implementation instructions

- Use the `labels` option on `view.calendar` to control how many event labels appear in each day cell.
- Set `labels: 'all'` to render every label for the day. This allows the week row heights to grow dynamically based on content.
- Use `eventDisplay: 'fill'` to make event labels fill the available width of the day cell.
- Use `eventDisplay: 'exact'` to render labels with exact times instead of full-width labels.

## What this demo shows

- A desktop month-view event calendar that shows event labels inside day cells and demonstrates how label count and row height settings affect event visibility.
- **Event labels** Day cells with events show one or more labels, with different colors and styles used to distinguish all-day, multi-day, and timed events.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label.
- **Row height behavior** In the default setup, the month view uses dynamic row heights so all labels remain visible within each week row.
- **Label rendering controls** A configuration panel next to the calendar lets users switch between `Fill` and `Exact` label rendering. `Fill` is selected by default and stretches labels across the available width.
- **Exact label rendering** Selecting `Exact` displays labels with exact times. In this mode, the label count display mode is not configurable, and the calendar shows as many labels as fit in each day cell with equal week row heights.
- **View switching** A second segmented control lets users switch between `Month view` and `Week view`, with month view selected by default.
- **Label count options** Below the segmented controls, an option list is shown from which users can choose between: `Show all labels` (the row height will be dynamic so every label can remain visible), `Show up to (a specified maximum number of) labels`, or `Labels depending on calendar height` (showing as many labels as fit based on the calendar height with equal row heights).
- **More events popover** When the visible label count is limited, extra events are hidden behind an `X more` label on the day cell, where `X` represents the number of hidden events. Clicking it opens a popover that lists the remaining events for that day.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.

## Best for

- **Monthly planning views** Showing multiple events directly in month cells when users need a compact overview of busy days.
- **Dense event calendars** Comparing how different label display strategies work when days can contain many all-day or timed events.
- **Configurable calendar experiences** Giving users or teams control over month and week views and how event labels are rendered.
