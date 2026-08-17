To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/event-hooks#).

## Demo description

The date picker ships with different event hooks for deep customization. Events are triggered through the lifecycle of the component where you can tie in custom functionality and code.

While users interact with the UI events like `onChange`, `onSet`, `onInit` ... will be triggered.

- **For a complete list of events go to the documentation** See available lifecycle events →

## Related demos

- See available lifecycle events →

## What this demo shows

- Shows date picker examples for selecting a single date.
- **Date picker with inputs** This example opens the picker when the user focuses or clicks the input. It can also be opened with the Show button below the input.
- **Input behavior** The picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month.
- **Footer actions** In the input-based examples, the gray Cancel button discards the change, while the blue Set button confirms the selected date.
- **Input value** In the input-based examples, confirming a date with Set displays the selected value in the input using a month, day, and year format.
- **Event log** An Event log panel is shown on the left and lists the lifecycle events fired during interactions such as event creation, hover, drag, and similar actions.

## Best for

- **Lifecycle event discovery** Understanding which date picker lifecycle hooks fire during common user interactions.
