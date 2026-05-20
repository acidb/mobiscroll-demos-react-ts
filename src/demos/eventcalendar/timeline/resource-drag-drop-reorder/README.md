To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-drag-drop-reorder#).

## Demo description

Resources can be reordered directly through the UI by enabling `resourceReorder: true` under the `timeline` settings of the `view` option.
When enabled, a drag handle icon will appear next to each resource, allowing users to drag and reorder resources.

When a resource is dropped into a new position, the 

`onResourceOrderUpdate`

 lifecycle event is triggered.
To prevent the resource order from being updated, return `false` in the handler function of this event.

Use the `immutableData` option to ensure the original data remains unchanged when validating resource positions after a drop.
