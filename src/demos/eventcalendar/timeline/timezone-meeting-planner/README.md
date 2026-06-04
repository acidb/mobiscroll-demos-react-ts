To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/timezone-meeting-planner#).

## Demo description

Setting up meetings across multiple timezones is messy and hard task. In this example, built with the Mobiscroll scheduler we've laid out a timeline with multiple resources that represent the teammates. Each team member can be in separate timezones which means we need to account for the various offsets.

First we need to set a base timezone, which for the sake of simplicity is `UTC` and it is the timezone of the first resource, the meeting organizer. This also means that the scheduler operates in this timezone set through the `dataTimezone` and `displayTimezone` options. To learn more about timezone management [take a look at this example](https://demo.mobiscroll.com/react/timeline/setting-the-timezone#).

Because all resources are part of the same calendar they operate in the same timezone. That's why we need to somehow communicate the work hours with the correct offsets so that the person doing the scheduling can easily find the best times for the meeting. For that we are setting colored backgrounds with time labels that show the "working hours", "flex hours" and "time off". Besides the colored backgrounds we've also set "time off" to `invalid` for validation purposes. On how to work with disabled times and how to override them [take a look at this example](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#).

The last thing that needed to be done is to override the event rendering with a custom template. In the custom template/render function we can account for the offsets and print the times in the team members timezone instead of the base timezone (UTC in this example). [Learn how to create a custom event template.](https://demo.mobiscroll.com/react/timeline/timeline-custom-event-rendering#)

## Implementation instructions

- Use the Mobiscroll `dayjsTimezone` plugin together with `dayjs`, `dayjs/plugin/timezone`, and `dayjs/plugin/utc`, and pass `timezonePlugin` to the Eventcalendar.
- Set `dataTimezone` and `displayTimezone` to `utc` to anchor all event data and display in the organizer's base timezone.
- Use `type: 'week'` with `timeLabelStep: 1440` so the time axis shows one date label per day rather than per-hour labels.
- Give each resource a custom `timezone` property (IANA string) and a display `utcOffset` string, and mark the meeting organizer with a custom flag.
- Write a helper that converts a UTC hour and a resource timezone to the corresponding local hour and returns a background color and an `invalid` flag: 22:00–6:00 local is time off (red, invalid), 6:00–8:00 and 18:00–22:00 are flex hours (blue), 8:00–18:00 are working hours (yellow).
- Derive the `invalid` array from the resource list by iterating over all 24 hours per resource and collecting the time-off slots, each marked with `recurring: { repeat: 'daily' }`.
- Use `renderCell` (Angular: `cellTemplate`, Vue: `cell`) to render each timeline cell with the local hour label and the background color from the hour classification helper.
- Use `extendDefaultEvent` to pre-assign all resource IDs to every new event so meetings span all team members by default.
- Use `renderTimelineEvent` (Angular: `timelineEventTemplate`, Vue: `timelineEvent`) to show localized times per row: call `setTimezone` on the start and end dates with `data.currentResource.timezone` and format the result.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to display the participant's name, UTC offset, and an organizer label.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `header`) to render the navigation controls alongside a color legend for working hours, flex hours, and time off.
- Enable `clickToCreate`, `dragToCreate`, `dragToMove`, and `dragToResize` with `dragTimeStep: 60` for one-hour snapping.
- Use `onEventCreateFailed` and `onEventUpdateFailed` to open a `Confirm` dialog when a meeting lands in a time-off slot, and proceed with the create or update if the user confirms.
