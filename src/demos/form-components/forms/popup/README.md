To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/popup#).

## Demo description

When working with the [event calendar](https://demo.mobiscroll.com/react/eventcalendar/#) you will usually want to show an add/edit form in a popup rather than render it directly into the page markup. Simply configure the popup and add your form fields to it.

- **Interested in add/edit screens for events?** [Check out this example of a fully functional event form →](https://demo.mobiscroll.com/react/eventcalendar/create-read-update-delete-CRUD#)

## Related demos

- [Check out this example of a fully functional event form →](https://demo.mobiscroll.com/react/eventcalendar/create-read-update-delete-CRUD#)

## Implementation instructions

- `Popup` renders arbitrary content as children; the demo places two `mbsc-form-group` blocks inside it containing an `Input` (Title), a `Textarea` (Description), a `Switch` (All-day), two more `Input`s (Starts/Ends), and a `SegmentedGroup` with two segments (Show as busy/free).
- `buttons: ['set', 'cancel']` renders Set/Cancel action buttons in the popup's footer.
- `display: 'anchored'` anchors the popup to a trigger element rather than centering it; `anchor` is the DOM element it positions against. In JS/jQuery, `anchor` is applied via `.setOptions({ anchor: event.target })` right before calling `.open()`; React/Vue bind it as an `anchor`/`:anchor` prop driven by state set to `event.target` on click.
- `contentPadding: false` removes the popup's default inner padding so the form fields control their own spacing.
- `fullScreen: true` makes the popup fill the screen; `responsive: { medium: { display: 'anchored', width: 400, fullScreen: false, touchUi: false } }` overrides `display`, `width`, `fullScreen`, and `touchUi` at the `medium` breakpoint so larger screens get a fixed-width anchored panel with desktop (non-touch) styling instead of the full-screen mobile layout.
- Opening the popup is imperative in JS/jQuery and Angular, declarative in React/Vue: JS captures the popup instance directly from the return value of `mobiscroll.popup(...)`; jQuery instead calls `.mobiscroll('getInst')` once on the popup element to get it; either way, the button's click handler then calls `.setOptions({ anchor: event.target })` followed by `.open()`; Angular keeps a `@ViewChild` reference (`inst: MbscPopup`), sets `popupSettings.anchor = event.target`, and calls `inst.open()`; React and Vue instead bind the popup's `isOpen`/`:isOpen` prop to state that the button's click handler sets to `true` (along with an `anchor`/`:anchor` state update), and reset that state through an `onClose`/`@close` callback.
- Inside the popup, the `Switch`'s checked state marks the entry as all-day; the two `Segmented` controls share a `name` so they behave as a mutually exclusive pair (`checked`/`defaultChecked` marks the default selection) recording busy/free availability.

## What this demo shows

- This demo shows a modal form which opens a responsive popup form from a button.
- **Form fields** Includes fields for the title, description, start date, and end date.
- **All-day setting** Uses a toggle to switch between timed and all-day entries.
- **Availability** Uses a segmented control to mark the entry as busy or free.
- **Form actions** Provides Cancel and Set actions for dismissing or confirming the form.
- **Responsive layout** Combines multiple form controls within a modal interface that adapts to the available screen size.

## Best for

- **Calendar event forms** Create or edit event details without navigating away from the calendar.
- **Appointment scheduling** Collect a title, notes, timing, and availability in a focused popup workflow.
- **Availability management** Let users define timed or all-day availability and mark it as busy or free.
- **Compact data entry** Keep short forms accessible from the current page while preserving the surrounding context.
- **Responsive workflows** Present the same modal form across desktop and mobile layouts.
