To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/daily-weekly-monthly-yearly-timeline#).

## Demo description

Set up `day`, `week`, `month` or `year` views.

For certain views you can customize the visible days along with the scale of the timeline through the `timeline` object under the view option. You can control the days shown (eg. Weekdays), set the time scale (eg. 30 minutes) and set the labels shown (eg. every 15 minutes).

- **Specify the first and last visible weekdays** - Use the `startDay` and `endDay` properties
- **Set the visible time range** - Use the `startTime` and `endTime` properties
- **Shift the visible time window** - Use the `startTime` and `endTime` properties to include ranges that extend into the previous or next day
- **Control the granularity of the timeline** - Use the `timeCellStep` and `timeLabelStep` properties
- **Week numbers** - Controlled through the `weekNumbers` property
- **Real time positioning or event listing** - Set `eventDisplay: 'fill'` if you want to list the events on a daily basis rather than have them positioned with minute precision

Interested in the time grid?&nbsp;
[Check out how you can configure the vertical time rendering &#8594;](https://demo.mobiscroll.com/react/scheduler/show-hide-hours-days#)
