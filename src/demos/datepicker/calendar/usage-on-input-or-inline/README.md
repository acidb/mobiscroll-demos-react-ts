To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/usage-on-input-or-inline#).

## Demo description

The calendar component generates a Mobiscroll input that inherits the theme and overall styling rules. It can however be overridden by setting the relevant options for the component.

There are three ways to use the calendar:

- Use it on an existing input by using the `inputComponent` prop. A great example is usage with an `IonInput`
- Let the component generate the Mobiscroll input. Give it the extra styling and overrides through options
- Embed the picker without an input. This can be the page itself or a more complex popup

## What this demo shows

- Three monthly date picker examples for selecting a single date or multiple dates using input-based pickers or an inline display.
- **Date picker with inputs** The first and second examples open the picker when the user focuses or clicks the input.
- **Input behavior** The input-based pickers open below the input with a darkened backdrop. Clicking outside the picker closes it.
- **Inline date picker** The third example embeds the date picker directly in the page without an input by using inline display mode.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month. 
- **Footer actions** In the input-based examples, the gray Cancel button discards the change, while the blue Set button confirms the selected date.
- **Input value** After the user confirms a single date with Set, the input displays it in month, day, and year format.
- **Multiple date selection** The second example supports selecting multiple dates. Selected days have a blue background, and confirming with Set displays them as removable date chips in the input. Clicking a chip's remove button removes that date from the selection.

## Best for

- **Single-date form fields** Choosing one date for an appointment, reservation, delivery, or deadline from an input-based picker.
- **Multiple nonconsecutive dates** Selecting several dates for attendance, availability, recurring visits, or planned workdays and reviewing them as removable chips in an input.
- **Compact forms** Keeping the date picker hidden until the user focuses or clicks a date field.
- **Always-visible date selection** Embedding a monthly picker directly in a page when users need immediate access to calendar navigation and date selection.
