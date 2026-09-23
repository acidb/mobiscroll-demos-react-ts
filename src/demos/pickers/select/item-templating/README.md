To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/item-templating#).

## Demo description

By default the select takes the `item.text` and `item.value` of the data array items and populates the select. Besides the basic text/value interpretation you can write custom render functions for any custom markup printed as a scrollable list.

With the help of the renderItem option you can write a function that returns the custom item markup. Any `data` field can be used for the template. You'll also want to make sure that the `itemHeight` is set accordingly.

## Implementation instructions

- By default the select renders each `data` item using only its `text`/`value` fields; any additional field on a `data` item (here `year`, `artist`, `img`) is ignored unless a custom item template is supplied.
- `data` items in this demo carry `text`, `value`, plus custom `year`, `artist`, and `img` fields — all of which the custom template reads off `item.data`.
- Custom templating is the mechanism, and its name and shape differ per framework:
  - **React**: a `renderItem` prop takes a function `(item: MbscSelectItemData) => JSX.Element`; the function reads `item.data.text`/`.year`/`.artist`/`.img` and returns markup built from those fields (e.g. an `<img>` sourced from `'https://img.mobiscroll.com/demos/' + data.img + '.png'`).
  - **Angular**: an `[itemTemplate]="itemTemp"` input points at a named `<ng-template #itemTemp let-item>`, with `item.data.*` interpolated directly in the template (`{{item.data.text}}`, `[src]="'...' + item.data.img + '.png'"`).
  - **Vue**: the `#item` named slot on `<MbscSelect>` receives `item` as the slot prop, with `item.data.*` used inside `{{ }}` interpolations and `:src` bindings.
  - **JS/jQuery**: a `renderItem` function option (inside `.select({ ... })`) takes `(item)` and returns an HTML string built via concatenation of `item.data.*` fields.
- `itemHeight` (here `64`) must be set to the actual pixel height the custom row renders at — this component does not auto-measure custom template content, so a mismatch causes clipped or overlapping rows during scrolling.
- The album artwork itself is not a select feature — it's a plain `<img>` inside the custom template, sourced from a fixed `https://img.mobiscroll.com/demos/<img>.png` naming convention.
- `display="anchored"` opens the picker as a dropdown anchored to the input; `inputStyle`/`labelStyle`/`placeholder` are cosmetic input-decoration options independent of templating.

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
