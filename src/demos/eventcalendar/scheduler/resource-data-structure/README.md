To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/resource-data-structure#).

## Demo description

The resource data structure for the scheduler is straightforward with a couple of base properties that the component understands and uses to render the UI. Besides the base properties you can add any custom property, like title, job ...

- `id` - This is an id that can be referenced in the event `data`
- `name` - The name of the resource that will be printed at the top of the respective column
- `color` - The color controls the default event color of the resource. Event colors can be specific above this. If the color is omitted the underlying events will inherit the default calendar color
- `eventCreation` - This controls if events can be created or dropped onto this resource
- `eventDragBetweenResources` - Specifies whether the events in the specified resource are movable across resources. If set to `false` has precedence over `dragBetweenResources` option of the calendar.
- `eventDragInTime` - Specifies whether the events in the specified resource are movable in time. If set to `false` has precedence over `dragInTime` option of the calendar.
- `eventResize` - Specifies whether the events in the specified resource are resizable. If set to `false` has precedence over `dragToResize` option of the calendar.
- `eventOverlap` - Specifies whether the events in the specified resource are allowed to overlap. If set to `false` has precedence over `eventOverlap` option of the calendar.
