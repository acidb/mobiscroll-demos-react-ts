To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/month-year-picker#).

## Demo description

Customize the wheels and format the date picker for month & year. Choose a `month/year` format for the credit card expiration date.

This and even more can be done with the `dateWheels` setting.

- **Interested in changing the date format?** [Explore formatting options →](https://demo.mobiscroll.com/react/datetime/formatting-return-values#)

## Related demos

- [Explore formatting options →](https://demo.mobiscroll.com/react/datetime/formatting-return-values#)

## Implementation instructions

- A single `Datepicker` (`controls: ['date']`) is anchored to the "Expiration" input inside a plain credit-card form (`Name`, `Card`, `Expiration`, `Security` inputs); the other three inputs are plain/`mbsc-input` fields with no picker attached.
- `dateFormat: 'MM/YYYY'` controls how the confirmed value is written back into the input; `dateWheels: 'MMMM YYYY'` independently controls the format shown on the wheels themselves (full month name + year) while scrolling — the two formats are set separately and don't need to match.
- `min` is set to the current date (`now`) and `max` to ten years out, computed as `new Date(now.getFullYear() + 10, now.getMonth())` — both are dynamically calculated, not fixed dates.
- The input's initial displayed value (`12/2025`) is set as a static `value`, not derived from `min`/`max` or bound to a variable.
- The raw JS/jQuery init also sets `minWidth: 100` on the picker for layout sizing; this option is omitted from the per-framework code snippets shown to visitors but is present in the actual demo config.
- `touchUi` (true by default on touch devices) determines whether the picker renders as scroller wheels (`true`) or dropdowns/desktop rendering (`false`).

## What this demo shows

- Shows a form with fields for the cardholder name, card number, expiration date, and three-digit CVV.
- **Expiration picker** Clicking the expiration field opens a wheel-style month and year picker with separate scrollable wheels for selecting the month and year. The selected values appear in the central selection area, while neighboring values are visually subdued.
- **Scrolling behavior** Users can scroll vertically through the month and year values to change the expiration date.
- **Footer actions** `Cancel` discards the change, while `Set` confirms the selected expiration date.
- **Input value** Confirming the selection displays the expiration date in the input using a `month/year` format.

## Best for

- **Credit card forms** Collecting a card expiration date as a month and year alongside the cardholder name, card number, and CVV.
- **Month and year selection** Configuring date picker wheels when a specific day is not needed.
- **Expiration date formatting** Displaying the confirmed value in a `month/year` format.
