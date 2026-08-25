To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/usage-on-input-or-inline#).

## Demo description

The range component generates a Mobiscroll input that inherits the theme and overall styling rules. It can however be overridden by setting the relevant options for the component.

There are four ways to use the range picker:

- Use it on an existing input by using the `inputComponent` prop. A great example is usage with an `IonInput`
- Let the component generate the Mobiscroll input. Give it the extra styling and overrides through options
- Use it with two separate inputs of any type, one for `start` and another for `end`
- Embed the picker without an input. This can be the page itself or a more complex popup

## What this demo shows

- Shows three date range picker examples for selecting a date range: using a single input, separate start and end inputs, or an inline picker.
- **Date range picker with inputs** The first example opens the range picker when the user focuses or clicks the input. The second uses two separate inputs, one for the range start and one for the range end.
- **Input behavior** In the input-based examples, the range picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it.
- **Inline date picker** The third example embeds the date range picker directly in the page without an input by using inline display mode.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date range. Until a range is selected, the `Set` button remains inactive.
- **Input value** In the input-based examples, confirming a date range with `Set` displays the selected range in the input using a month, day, and year format.

## Best for

- **Booking and reservations** Selecting start and end dates for hotels, rentals, appointments, or other reservation flows.
- **Travel planning** Choosing arrival and departure dates for trips and accommodation.
- **Date-based filtering** Filtering reports, analytics, or other data by a specific date range.
- **Separate date inputs** Forms that require dedicated inputs for the start and end dates.
- **Inline date selection** Interfaces where the date range picker needs to remain permanently visible on the page.
