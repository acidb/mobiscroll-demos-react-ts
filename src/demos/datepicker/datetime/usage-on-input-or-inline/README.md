To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/usage-on-input-or-inline#).

## Demo description

The date picker component generates a Mobiscroll input that inherits the theme and overall styling rules. It can however be overridden by setting the relevant options for the component.

There are three ways to use the date picker:

- Use it on an existing input by using the `inputComponent` prop. A great example is usage with an `IonInput`
- Let the component generate the Mobiscroll input. Give it the extra styling and overrides through options
- Embed the picker without an input. This can be the page itself or a more complex popup

## Implementation instructions

- All examples use `controls: ['date']` — this demo only varies how the picker attaches to the page, not which controls it renders; there is no multiple-date/chip variant here.
- **On an existing/custom input**: React/Vue bind the picker to a plain `<input>` (or a custom input component) via the `inputComponent` option, with `inputProps` for attributes like `placeholder`. Angular applies the picker as a directive directly on an existing input element (e.g. `<input mbsc-datepicker>`, including third-party inputs like `ion-input`) instead of using the standalone component. JS/jQuery initialize the picker on a plain existing `<input>` element the same way they would on a generated one, since their datepicker call always targets an existing DOM element by selector.
- **On a generated Mobiscroll input**: for React and Angular, omitting `inputComponent`/the directive form and just rendering `<Datepicker controls={['date']} />` / `<mbsc-datepicker [controls]="['date']">` lets the component generate its own styled Mobiscroll input.
- **Inline, no input**: use `controls: ['date']` with `display: 'inline'` on a plain container instead of an input. JS/jQuery initialize on a `<div>` (or a hidden `<input type="hidden">`) rather than a visible text input, since there is no input to render when the picker is embedded directly in the page.
- `display: 'anchored'` (the default) is used for the input-bound variants; it is not set explicitly in the framework snippets since it's the default.

## What this demo shows

- Shows two wheel-style date picker for selecting a single date using input-based pickers or an inline display.
- **Date picker with inputs** The first example open the picker when the user focuses or clicks the input.
- **Input behavior** The input-based pickers open below the input with a darkened backdrop. Clicking outside the picker closes it.
- **Inline date picker** The second example embeds the date picker directly in the page without an input by using inline display mode.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll or click and drag separate columns vertically through neighboring values to move between dates, including dates in other months or years.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date.
- **Input value** In the input-based examples, confirming a date with `Set` displays the selected value in the input using a month, day, and year format.

## Best for

- **Single-date form fields** Choosing one date for an appointment, reservation, delivery, or deadline from an input-based picker.
- **Compact forms** Keeping the date picker hidden until the user focuses or clicks a date field.
- **Always-visible date selection** Embedding a wheel-style picker directly in a page when users need immediate access to date selection.
