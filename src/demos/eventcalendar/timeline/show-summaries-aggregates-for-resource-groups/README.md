To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/show-summaries-aggregates-for-resource-groups#).

## Demo description

When scheduling across multiple groups of resources it sometimes is helpful to provide summaries and aggregate calculations on a group level. These dynamically calculated values can be presented as custom templated events in resource parent rows.
Whenever new bookings are made, updated or deleted, use the 

`onEventCreated`

,

`onEventUpdated`

 and

`onEventDeleted`

 lifecycle events to update the aggregates for their parent resource.

As we are working with variable event heights, make sure to set `eventHeight: 'variable'`
which can be configured under the `view`. This is necessary if the actual booked events have a different height than the summary events (for parent resources).

- **Variable event height is an experimental feature.** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/timeline#variable-event-height)
