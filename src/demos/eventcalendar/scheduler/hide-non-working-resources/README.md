To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/hide-non-working-resources#).

## Demo description

The scheduler can automatically hide non-working resource columns using the `hideInvalidColumns` property of
view option.

The calendar is set to a weekly view (Monday to Friday, 8:00–20:00) and displays multiple doctors as resources, each with unique working days.
Recurring invalids are used to mark specific weekdays when a doctor is unavailable, while static invalids indicate individual days off.
As a result, only the columns for resources who are working on a given day are shown, making the schedule cleaner and easier to read.
This approach is ideal for managing staff with varying shifts and availability.
