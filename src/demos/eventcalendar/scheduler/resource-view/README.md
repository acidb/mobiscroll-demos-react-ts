To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/resource-view#).

## Demo description

The scheduler can handle multiple resources inside a single instance. Pass the resource list to the `resources` option with an `id`, `name`, `color` and `eventCreation`.

- `id` - This is an id that can be referenced in the event `data`
- `name` - The name of the resource that will be printed at the top of the respective column
- `color` - The color controls the default event color of the resource. Event colors can be specific above this. If the color is omitted the underlying events will inherit the default calendar color
- `eventCreation` - This controls if events can be created or dropped onto this resource

The `resources`
in which the resources appear follows the order of the array passed to the component.

Events can be [shared](https://demo.mobiscroll.com/react/scheduler/shared-events-across-resources#) between resources and it is possible to move events between resources. The move is handled automatically however you can block it if moving an event from one resource to the other is prohibited. Learn about [lifecycle event hooks](https://demo.mobiscroll.com/react/scheduler/event-hooks#).
