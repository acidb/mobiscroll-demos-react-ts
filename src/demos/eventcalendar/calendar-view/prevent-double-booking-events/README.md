To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/prevent-double-booking-events#).

## Demo description

Sometimes it is necessary to guarantee that events don't overlap - eg. when scheduling workorders, interacting with a work calendar.
You can reject the updates or additions and let the user know about it.

The event overlap can be turned on/off on an event basis or globally on the instance.

- On an [event](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#) basis - by setting the `overlap` property to `false` the specified event cannot overlap.
- Globally on the instance - by setting `eventOverlap` option to `false` overlap is disbled globally.

If set to `false`, the [event](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#) settings have precedence over the global calendar  `eventOverlap` option.

Give feedback to the user - optionally, a toast can be displayed to explain why an event cannot be dropped, moved or created. For this we can use the `onEventCreateFailed` and `onEventUpdateFailed` lifecycle events.

Looking to implement time off or block out ranges?&nbsp;
[Learn how to add lunch breaks, working hours and disable weekends &#8594;](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#)
