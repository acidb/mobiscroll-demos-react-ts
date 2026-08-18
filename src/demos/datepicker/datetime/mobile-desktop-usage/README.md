To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/mobile-desktop-usage#).

## Demo description

Use the date & time for both mobile and desktop or set it up responsively.

The main difference between the two rendering modes is how the picker is laid out. Set the `touchUi` option to `false` and the component shows up suitable for larger screens and pointer interaction while setting it to `true` renders it suitable for touch screens.

Use the date picker on an existing form field, custom input or use it on Mobiscroll form fields. You can also embed it directly into your page.
When linked to an input, the component will be shown on focus or when someone clicks on the field. Alternatively, you can leave the input editable and show the component only on a button click.

- **Handle different screen sizes by setting it up responsively** [Check out the responsive demo →](https://demo.mobiscroll.com/react/datetime/responsive#)

## Related demos

- [Check out the responsive demo →](https://demo.mobiscroll.com/react/datetime/responsive#)

## What this demo shows

- Shows four wheel-style date picker configurations for selecting a single date in touch and desktop layouts.
- **Date picker with inputs** The first example opens the picker when the user focuses or clicks a standard input. The second opens it only from the `Show picker` button next to the input. The third uses a Mobiscroll input.
- **Input behavior** In the three input-based examples, the picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it.
- **Inline date picker** The fourth example embeds the picker directly in the page without an input by using inline display mode.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date.
- **Input value** In the input-based examples, confirming a date with `Set` displays the selected value in the input using a month, day, and year format.
- **Selection pattern** The wheel interface provides an alternative to selecting a date from a calendar grid.

## Best for

- **Personal details** Birth dates and profile forms that require a specific date.
- **Appointments and reservations** Booking flows where users choose an appointment or reservation date.
- **Planning and deadlines** Forms for selecting due dates, deadlines, and other single dates.
- **Touch and desktop forms** Date entry workflows that need layouts suited to both touch and pointer interaction.
