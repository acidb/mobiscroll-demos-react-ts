To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/disabled-invalid-values#).

## Demo description

Enforcing validation is essential to a great UX. It supports the following: You can set an option to invalid through the disabled property: ` data: [ ... { text: 'Chicago', value: 'chi', disabled: true }] `

Having invalids set up correctly not just enhances the UX, but improves performance.

## What this demo shows

- A single-value Select with specific options disabled.
- **Inline select** Embeds the picker directly in the page without an input by using the inline display mode.
- **Picker options** Displays enabled and disabled options together, with disabled values shown in gray.
- **Hover state** Highlights an option on hover and shows an icon for disabled values to indicate that they cannot be selected.
- **Selection** Marks the current value with a checkmark and allows selection only from enabled options.

## Best for

- **Temporary unavailability** Keeping unavailable products, services, locations, or time slots visible while preventing users from selecting them.
- **Eligibility rules** Showing choices that are unavailable because of permissions, account settings, or other requirements.
- **Dependent selections** Disabling choices that conflict with a value selected in another field.
- **Inventory or capacity limits** Indicating sold-out, fully booked, or out-of-stock choices without removing them from the list.
- **Fixed option lists** Preserving the full list and its order while clearly distinguishing valid choices from disabled ones.
