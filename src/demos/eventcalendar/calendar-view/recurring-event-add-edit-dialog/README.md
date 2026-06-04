To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/recurring-event-add-edit-dialog#).

## Demo description

As seen in the [previous example](https://demo.mobiscroll.com/react/eventcalendar/create-read-update-delete-CRUD#), an add/edit form can be created with custom and base event fields. While the CRUD example features delete with undo, this example shows off how to build a fully customizable recurrence editor right in the add/edit screen.

Above some common presets, like **Daily**, **Weekly on X day**, **Monthly on Xth**, **Annually on the same day**, **Every Weekday** a fully custom recurrence editor is implemented.

Copy & paste or delve into the code and understand how to generate recurrence objects or RRULES as seen in this [live rule builder](https://demo.mobiscroll.com/react/eventcalendar/recurring-events#).

## Implementation instructions

- Store recurrence on events with the `recurring` property. The recurrence can be defined either as an object or as an `RRULE` string.
- Use `recurringException` to exclude specific dates from a recurring series.
- Use `recurringExceptionRule` when the exceptions themselves need to be defined as a recurring rule.

## What this demo shows

- A desktop month view event calendar with recurring events already rendered across the month.
- **Header**: The top bar shows the current month and year, along with previous and next navigation arrows and a Today button for jumping back to the current date.
- **Event creation**: Users can create a new event by dragging across calendar cells or by double-clicking a day cell.
- **Create dialog**: Creating an event opens an event editor with fields for title, description, all-day, start date, end date, and recurrence.
- **Date selection**: The start and end fields open a date picker with range selection.
- **Recurring presets**: The Repeats field opens a dropdown with preset options including Does not repeat, Daily, Weekly, Monthly, Yearly, and Custom.
- **Custom recurrence**: Choosing Custom expands the editor with additional controls for defining a custom recurring rule.
- **Event editing**: Clicking an existing event opens the same dialog in edit mode with the current event values prefilled.
- **Save and cancel flow**: Clicking outside the dialog or pressing Cancel closes the editor without applying changes, while Save applies the changes to the event.
- **Delete flow**: In edit mode, the dialog includes a Delete event action for removing the selected event.
- **Recurring delete options**: When deleting a recurring event, a confirmation popup appears with options for This event only, This and following events, and All events, plus Cancel and Ok actions.
- **Responsive editor**: The event editor adapts to screen size and device type, using touch-friendly controls such as scrollers on smaller or touch devices.
- **Cell hover and selection**: Hovering a day cell highlights the day number with a gray background, while clicking an empty part of a day cell selects that day and highlights the day number with a blue background.

## Best for

- **Recurring event management**: Apps that need users to create, edit, and delete repeating events directly from a calendar view.
- **Month-based planning**: Use cases where a full-month overview is the main way users review and manage scheduled items.
- **Calendar CRUD workflows**: Products that need a practical add, edit, save, cancel, and delete flow for calendar events.
- **Exception handling**: Scenarios where users may need to delete a single occurrence, all following occurrences, or the entire recurring series.
- **Responsive scheduling interfaces**: Teams building calendar experiences that need to work across desktop and touch devices with the same editing flow.
- **Business and operational scheduling**: Internal tools or customer-facing products for planning appointments, classes, shifts, programs, or other repeating activities.
