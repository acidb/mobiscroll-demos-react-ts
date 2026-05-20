To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/dynamically-color-and-invalidate#).

## Demo description

The options of the timeline can be dynamically changed. That applies to both the `color` and `invalid` options which control the resource track background colors and their valid state.

Based on the type of event someone wants to add or create we can highlight resources that support that type of event and invalidate resources that don't.

In the following example we have two types of tasks/events: **HW** for Hardware and **SW** for Software tasks. We also have two teams or two groups of resources: **HW Team** and **SW Team**. What we want to do is enforce event creation for teams based on the type of event: **HW** for the hardware team and **SW** for the software team.

We'll use the `onEventDragStart` and `onEventDragEnd` lifecycle events to highlight & invalidate and then set everything back to the default state. We have access to the `event.category` through the lifecycle event's `args`.

Want to learn about lifecycle events?&nbsp;
[Learn how you can levarage the various events that are triggered &#8594;](https://demo.mobiscroll.com/react/timeline/event-hooks#)
