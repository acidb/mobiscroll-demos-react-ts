To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/show-hide-hours-days#).

## Demo description

Customize the visible days and hours along with the scale of the time grid through the `scheduler` object under the view option. You can control the days to display (eg. Weekdays), the visible time range (eg. 8AM to 6PM), set the time scale (eg. 30 minutes) and set the labels shown (eg. every 15 minutes).

- **Specify the first and last day** - Use the `startDay` and `endDay` properties
- **Set the visible time range** - Use the `startTime` and `endTime` properties
- **Shift the visible time window** - Use the `startTime` and `endTime` properties to include ranges that extend into the previous or next day
- **Control the visibility of empty columns** - Use the `hideEmptyColumns` property
- **Control the visibility of fully invalid columns** - Use the `hideInvalidColumns` property
- **Control the granularity of the time grid** - Use the `timeCellStep` and `timeLabelStep` properties

Building a work calendar?&nbsp;
[Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/work-week-hours#)
