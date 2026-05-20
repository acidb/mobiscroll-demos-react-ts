To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/variable-event-height#).

## Demo description

By default, events are equal in height and content is truncated by default where necessary. There are cases however where event height should match the content so that everything fits. To render events with variable height, use the `eventHeight: 'variable'` property under the `view` option's timeline configuration and the custom event templates: `renderTimelineEvent` or @if (pagemode == PageMode.Angular) { `timelineEventContentTemplate` } else if (pagemode == PageMode.Vue) { `timelineEventContent` } else { `renderTimelineEventContent` } . When the latter is used, to let the event container grow, the height of the inner content must be set to auto: `.mbsc-schedule-event-inner { height: auto }`. The height of the timeline events grow with the internal content, and the height of the resource rows adjust themselves to the events.

In the following example the height of the resource rows change dynamically based on the height of their events. Resources are the rooms where events are held and events have varying descriptions.

Variable event height is an experimental feature.&nbsp;
[Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/timeline#variable-event-height)
