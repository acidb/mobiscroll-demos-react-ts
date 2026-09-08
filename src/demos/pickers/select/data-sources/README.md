To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/data-sources#).

## Demo description

The select component takes care of rendering data in a scrollable and consumable way for the user. The date can be passed a couple of different ways:

- **Inline HTML**, embedded in the markup - This is good if you only have a couple of static options.
- With the **`data` option** - If you want to load model data this is the way to do it. This is the way to populate the select if you want to create a [custom item template](https://demo.mobiscroll.com/react/select/item-templating#).
- **Remote data** - Load it through the `data` option from a remote api/data source.

## What this demo shows

- Three single-value select examples using different data population methods.
- **Inline HTML** Embeds the select and its options directly in the markup.
- **Data object** Passes model data to the `data` option, which also supports custom item templates.
- **Remote data** Passes data loaded from a remote API or data source to the `data` option.
- **Select inputs** Opens the picker when the user focuses or clicks the associated input.
- **Input behavior** Displays the picker below the input and closes it when the user clicks outside.
- **Picker content** Presents a predefined list of options in a dropdown-style popup.
- **Hover state** Highlights an option when the user hovers over it.
- **Selection** Marks the selected option with a checkmark to indicate the current value.
- **Input value** Updates the associated input with the selected value.

## Best for

- **Small static lists** Embed a few fixed options directly in the markup with inline HTML.
- **Model-driven options** Populate the select through the `data` option when values come from application data.
- **Custom item layouts** Use the `data` option when select items need custom templates.
- **Remote datasets** Load options from a remote API or data source and pass the results to the `data` option.
