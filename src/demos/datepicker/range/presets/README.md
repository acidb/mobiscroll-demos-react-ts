To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/presets#).

## Demo description

The selected range can be adjusted by the user or you can programmatically set the `start` and `end`.

This is especially useful and effective when using the range for filtering and you'd like to offer predefined ranges like *Yesterday*, *Today*, *Last week* and so on. Setting the values can be done from something as simple as a button click.

## Implementation instructions

- With `select: 'range'`, the picker's value is a `[start, end]` pair of `Date` objects (or `null` to clear it).
- A preset button computes the `[start, end]` pair for the target period and applies it to the picker: `[now, now]` for today, `[yesterday, yesterday]` for yesterday, `[firstDayOfWeek, lastDayOfWeek]` for this week (derived from `now.getDate() - now.getDay()`), and `[firstDayOfLastMonth, lastDayOfLastMonth]` for last month (`new Date(y, m - 1, 1)` to `new Date(y, m, 0)`).
- Clearing the selection is done by applying `null` as the value in place of a `[start, end]` pair.
- Framework-specific ways to apply a preset: JS/jQuery call `.setVal([start, end])` (or `.setVal(null)` to clear) on the stored picker instance; React updates the controlled `value` state passed to the `value` prop; Angular updates the bound `range` property (two-way `[(ngModel)]` or a plain property re-render); Vue updates the `v-model`-bound ref.
- The picker itself needs no special option beyond `controls: ['calendar']` and `select: 'range'` — presets only change the bound/set value, not the picker configuration.

## What this demo shows

- Demonstrates five preset actions for programmatically updating an inline date range picker.
- **Example panel** Five code examples appear to the left of the calendar, each paired with a button that applies the corresponding preset action.
- **Presets** The examples provide `Today`, `Yesterday`, `This week`, and `Last month` buttons for selecting predefined date ranges, plus a `Clear` button for removing the selection.
- **Button interaction** Hovering over a preset button highlights it. Clicking the button applies its date range or clears the current selection.
- **Inline date range picker** The date range picker is embedded directly in the page without an input by using inline display mode.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.

## Best for

- **Reporting dashboards** Let users filter charts and metrics by familiar periods such as today, this week, or last month.
- **Activity and audit logs** Help users narrow long record lists to common recent date ranges without selecting each boundary manually.
- **Orders and transactions** Provide quick filters for reviewing records from standard daily, weekly, or monthly periods.
- **Repeat filtering workflows** Combine one-click presets with an adjustable date range when users frequently switch between standard and custom periods.
