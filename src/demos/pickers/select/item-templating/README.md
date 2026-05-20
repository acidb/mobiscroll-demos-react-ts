To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/item-templating#).

## Demo description

By default the select takes the `item.text` and `item.value` of the data array items and populates the select. Besides the basic text/value interpretation you can write custom render functions for any custom markup printed as a scrollable list.

With the help of the renderItem option you can write a function that returns the custom item markup. Any `data` field can be used for the template. You'll also want to make sure that the `itemHeight` is set accordingly.
