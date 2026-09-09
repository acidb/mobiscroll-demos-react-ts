To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/country-picker#).

## Demo description

Use the select component as a country picker on mobile and desktop. You can add the dropdown to any input or use [Mobiscroll input fields](https://demo.mobiscroll.com/react/forms/inputs-text-areas-date-fields#). If you don't want to make it a dropdown, you can embed the picker inline right into a page.

Search is enabled through the filter option.

In this example the data is loaded from a remote JSON in the following format: `{ "value": "FJ", "group": "F", "text": "Fiji" }` and the flags are loaded from our server. For your implementation you should embed the list and flags into your own page.

For the image & text rendering use a [custom item template](https://demo.mobiscroll.com/react/select/item-templating#).

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
