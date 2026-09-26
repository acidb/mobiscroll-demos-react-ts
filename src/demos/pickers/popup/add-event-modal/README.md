To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/popup/add-event-modal#).

## Demo description

Use the popup to show a modal with an add/edit form for event creation and/or update.
The popup can be easily set up to be shown right in the middle of the screen, top, bottom or anchored to the newly added event.
Check out the [different display modes](https://demo.mobiscroll.com/react/popup/mobile-desktop-display#) and play around with the different configurations.

You have full control over what is shown within the popup.
Use  [Mobiscroll form elements](https://demo.mobiscroll.com/react/forms/#) or any components that you are already using throughout your application.

- **Interested in exploring the event calendar?** [Check out these examples →](https://demo.mobiscroll.com/react/eventcalendar/#)

## Related demos

- [Check out these examples →](https://demo.mobiscroll.com/react/eventcalendar/#)

## Implementation instructions

- `Popup` renders arbitrary content as children; the demo places `mbsc-form-group` blocks containing an `Input` (Title), an `Input`/`Textarea` (Description), a `Switch` (All-day), two more `Input`s (Starts/Ends) used as `startInput`/`endInput` for the date picker, and a `SegmentedGroup` with two segments (Show as busy/free).
- `width: 400`, `contentPadding: false`, `headerText: 'Add new event'`, `display: 'center'`, and `showOverlay: false` configure a fixed-width, centered popup with a header title, no default inner padding (so the form controls its own spacing), and no dimmed backdrop.
- `buttons` combines a plain `'cancel'` string entry with a custom button object — `{ text: 'Add', keyCode: 'enter', handler, cssClass: 'mbsc-popup-button-primary' }` — so pressing Enter or clicking the button runs `handler` (builds the new event from form state, appends it to the events array/data source, closes the popup, and shows a toast) without a separate `set`/`ok` default action.
- The nested `Datepicker` uses `select: 'range'`, `display: 'anchored'`, `touchUi: true`, and `showRangeLabels: false`; its `controls` toggles between `['calendar']` (all-day) and `['calendar', 'time']` (timed) based on the `Switch`'s checked state — in React/Vue this is a derived value recomputed on render/`v-model`; in Angular/JS it's reassigned via `[controls]` binding or `.setOptions({ controls })` in the `Switch`'s change handler.
- The date picker is wired to the two `Input`s via `startInput`/`endInput` (`[startInput]`/`[endInput]` in Angular, `:startInput`/`:endInput` in Vue, refs passed as props in React, element IDs as strings in JS/jQuery) so typing or picking updates those fields instead of rendering its own text field.
- Opening the popup is imperative in JS/jQuery and Angular, declarative in React/Vue: JS captures the popup instance directly from the return value of `mobiscroll.popup(...)`; jQuery instead calls `.mobiscroll('getInst')` on the popup element to get it; either way, the trigger button's click handler then resets all the field instances' values/checked state and calls `.open()`; Angular keeps a `@ViewChild` reference (`popup: MbscPopup`), resets the component's bound fields, and calls `popup.open()`; React and Vue instead bind the popup's `isOpen`/`:isOpen` prop to state that the trigger button's click handler resets and sets to `true`, and reset that state through an `onClose`/`@close` callback (or the custom Add button's `handler`).
- The `Eventcalendar`'s `data`/event array is updated by spreading in the new event object built inside the Add button's `handler`; `selectedDate` is then set to the new event's `start` so the calendar navigates to it (JS/jQuery instead call `calendar.addEvent(newEvent)` and `calendar.navigateToEvent(newEvent)` on the `Eventcalendar` instance).

## What this demo shows

- Shows a full month calendar which displays events with a custom `Add new event` button above it.
- **Event creation** Clicking `Add new event` opens a popup containing an event form.
- **Event editing** The same popup supports updating an existing event.
- **Event form** The editor includes fields for the title, description, all-day setting, start and end dates, travel time, event color, and busy or free status.
- **Date selection** The start and end date inputs open a date picker with range selection.
- **Save and close behavior** Clicking outside the popup or selecting Cancel closes the editor without applying changes. Selecting Save applies the event changes.
- **Delete flow** The edit dialog includes a `Delete event` action that removes the event from the calendar.
- **Responsive behavior** The dialog adapts to the screen size and device type, with touch-optimized controls such as scrollers on smaller screens and touch devices.
- **Mobile presentation** On smaller screens, the dialog appears as a sheet instead of a popover.
- **Day cell states** Hovering over a day cell highlights the day number with a gray background. Clicking an empty area of the cell selects the day and highlights the day number with a blue background.

## Best for

- **Appointment scheduling** Collect event details, dates, travel time, and availability in a dedicated creation and editing form.
- **Field service calendars** Capture travel time and job details when scheduling work across different locations.
- **Team calendars** Use event colors and busy or free status to communicate event types and availability.
- **Responsive scheduling interfaces** Present the same event workflow as a popover on larger screens and a touch-friendly sheet on smaller screens.
