To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/mobile-desktop-usage#).

## Demo description

Use the calendar for both mobile and desktop or set it up responsively.

The main difference between the two rendering modes is how the picker is laid out. Set the `touchUi` option to `false` and the component shows up suitable for larger screens and pointer interaction while setting it to `true` renders it suitable for touch screens.

Use the date picker on an existing form field, custom input or use it on Mobiscroll form fields. You can also embed it directly into your page.
When linked to an input, the component will be shown on focus or when someone clicks on the field. Alternatively, you can leave the input editable and show the component only on a button click.

- **Handle different screen sizes by setting it up responsively** [Check out the responsive demo →](https://demo.mobiscroll.com/react/datetime/responsive#)

## Related demos

- [Check out the responsive demo →](https://demo.mobiscroll.com/react/datetime/responsive#)

## What this demo shows

- Shows four monthly date picker examples for selecting a single date in touch and desktop layouts.
- **Date picker with inputs** The first example opens the picker when the user focuses or clicks a standard input. The second opens it only from the Show picker button next to the input. The third uses a Mobiscroll input. 
- **Input behavior** In the three input-based examples, the picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it. 
- **Inline date picker** The fourth example embeds the date picker directly in the page without an input by using inline display mode.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month. 
- **Footer actions** In the input-based examples, the gray Cancel button discards the change, while the blue Set button confirms the selected date.
- **Input value** In the input-based examples, confirming a date with Set displays the selected value in the input using a month, day, and year format.

## Best for

- **Booking systems** Letting users choose a single date as part of a reservation flow.
- **Appointment creation** Selecting a date when scheduling an appointment.
- **Travel planning** Choosing dates for travel-related forms and workflows.
- **Event management** Assigning a calendar date when creating or updating an event.
- **Responsive forms** Supporting single-date selection across touch and desktop layouts.
