To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/country-picker#).

## Demo description

Use the select component as a country picker on mobile and desktop. You can add the dropdown to any input or use [Mobiscroll input fields](https://demo.mobiscroll.com/react/forms/inputs-text-areas-date-fields#). If you don't want to make it a dropdown, you can embed the picker inline right into a page.

Search is enabled through the filter option.

In this example the data is loaded from a remote JSON in the following format: `{ "value": "FJ", "group": "F", "text": "Fiji" }` and the flags are loaded from our server. For your implementation you should embed the list and flags into your own page.

For the image & text rendering use a [custom item template](https://demo.mobiscroll.com/react/select/item-templating#).

## Implementation instructions

- `data` takes an array of `{ value, text, group? }` objects; this demo fetches it at runtime from a remote JSON endpoint and maps each raw record to `{ text: country.text, value: country.value }` before passing it in.
- `filter: true` (Angular `[filter]="true"`) enables the built-in client-side search box in the picker header, which filters the `data` array by `text` as the user types; no `onFilter` handler is wired up in this demo since filtering stays local.
- `display="anchored"` opens the picker as a dropdown anchored below the input instead of a modal/bottom-sheet.
- The flag image per option is rendered through a custom item template, not a `data` field: the template builds each flag's URL from `item.data.value` (the ISO country code) against a fixed `https://img.mobiscroll.com/demos/flags/<value>.png` pattern, and renders `item.display` (the resolved label) next to it.
- Custom item markup differs per framework: React passes a `renderItem` function prop returning JSX for `(item: MbscSelectItemData)`; JS/jQuery pass a `renderItem` function option returning an HTML string; Angular uses `[itemTemplate]="itemTemp"` pointing at a named `<ng-template #itemTemp let-item>` with `item.data`/`item.display` available in scope; Vue uses the `#item` named slot on `<MbscSelect>` with `item.data`/`item.display` exposed as slot props.
- `itemHeight` must be set to match the custom template's rendered row height (`40` here) so the virtualized/scrollable list measures rows correctly.
- `inputStyle`/`labelStyle` (`"outline"`/`"stacked"` or similar) and `placeholder` are cosmetic input-decoration options, not select-specific behavior.
- For production use, the flags and country list should be hosted in the consuming app rather than loaded from the demo's `img.mobiscroll.com`/`trial.mobiscroll.com` endpoints.

## What this demo shows

- A searchable country dropdown built with the select component.
- **Select inputs** Focusing or clicking an input opens its picker.
- **Dropdown behavior** The picker opens below the input and closes when the user clicks outside it.
- **Filtering** A search bar in the picker header filters the country list by name.
- **Picker content** Each option in the predefined list displays a country flag and country name.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Scrolling** The dropdown supports scrolling through the full list of countries.
- **Input value** Selecting a country updates the associated input with that value.

## Best for

- **Registration and onboarding** Letting users find and select their country when creating an account or profile.
- **Address forms** Adding a searchable country field to billing, shipping, or contact details.
- **Checkout flows** Helping customers choose a destination or billing country from a long list.
- **Regional settings** Selecting a country for locale, market, or account preferences.
- **Mobile and desktop forms** Providing a consistent country selection experience across screen sizes.
