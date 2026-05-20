To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/timezone-meeting-planner#).

## Demo description

Setting up meetings across multiple timezones is messy and hard task. In this example, built with the Mobiscroll scheduler we've laid out a timeline with multiple resources that represent the teammates. Each team member can be in separate timezones which means we need to account for the various offsets.

First we need to set a base timezone, which for the sake of simplicity is `UTC` and it is the timezone of the first resource, the meeting organizer. This also means that the scheduler operates in this timezone set through the `dataTimezone` and `displayTimezone` options. To learn more about timezone management [take a look at this example](https://demo.mobiscroll.com/react/timeline/setting-the-timezone#).

Because all resources are part of the same calendar they operate in the same timezone. That's why we need to somehow communicate the work hours with the correct offsets so that the person doing the scheduling can easily find the best times for the meeting. For that we are setting colored backgrounds with time labels that show the "working hours", "flex hours" and "time off". Besides the colored backgrounds we've also set "time off" to `invalid` for validation purposes. On how to work with disabled times and how to override them [take a look at this example](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#).

The last thing that needed to be done is to override the event rendering with a custom template. In the custom template/render function we can account for the offsets and print the times in the team members timezone instead of the base timezone (UTC in this example). [Learn how to create a custom event template.](https://demo.mobiscroll.com/react/timeline/timeline-custom-event-rendering#)
