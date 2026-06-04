To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/compare-resources-fixed-at-top#).

## Demo description

With the combination of the timeline view along with fixed `resources` and `renderResource` you can create a UI for comparison.

In this example resources are people with tasks. There is a button in the resource template which on click dynamically moves the resource to/from a comparison section, located at the top of the view.
Compare up to 3 resources at a time, but adjust this as you like in your own implementation.

## Implementation instructions

- Use `type: 'week'` with `startDay: 1`/`endDay: 5`, `startTime: '09:00'`/`endTime: '17:00'`, and `resolutionHorizontal: 'hour'` for a Mon–Fri working-hours timeline.
- Set `fixed: true` on a resource object to pin its row to the top of the timeline so it stays visible while the rest of the list scrolls.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to show the resource name alongside a Compare or Remove button.
- Show a "Compare" button (success style) for unfixed resources when fewer than 3 are already pinned; show a "Remove" button (danger style) for pinned resources; hide the button entirely once the 3-resource limit is reached.
- On Compare click, set `fixed: true` on the resource, add it to the fixed list, and rebuild the resources array with fixed resources first followed by the rest — this drives both the pin behavior and the visual order in the timeline.
- On Remove click, set `fixed: false`, remove the resource from the fixed list, and rebuild the array in the same way.
- Track the number of fixed resources in state and show a `Toast` when the user pins the third resource (the maximum allowed is 3).
- Enable `dragToMove: true` so tasks can be repositioned across resources and days.
