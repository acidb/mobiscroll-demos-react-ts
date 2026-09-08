To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/item-templating#).

## Demo description

By default the select takes the `item.text` and `item.value` of the data array items and populates the select. Besides the basic text/value interpretation you can write custom render functions for any custom markup printed as a scrollable list.

With the help of the renderItem option you can write a function that returns the custom item markup. Any `data` field can be used for the template. You'll also want to make sure that the `itemHeight` is set accordingly.

## What this demo shows

- Shows a single-value select with custom item templating.
- **Select input** Focusing or clicking the input opens the picker below it.
- **Popup behavior** Clicking outside the picker closes it.
- **Picker content** Each option displays album artwork, the album title, release year, and artist instead of text-only content.
- **Scrolling** The dropdown supports scrolling through the full list of options.
- **Hover state** Hovering over an option highlights it.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Input value** Selecting an option updates the associated input with that value.

## Best for

- **Media catalogs** Show cover artwork alongside titles, creators, release dates, or other metadata.
- **Product selectors** Pair product thumbnails with names, variants, prices, or availability details.
- **People pickers** Display avatars with names, roles, teams, or other identifying information.
- **Location selectors** Combine place names with flags, icons, addresses, or time zone details.
- **Status and category selectors** Add icons, color indicators, or supporting descriptions to make options easier to distinguish.
