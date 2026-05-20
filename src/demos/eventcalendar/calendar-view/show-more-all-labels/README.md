To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/show-more-all-labels#).

## Demo description

Labels on the event calendar go hand in hand with the height of the event calendar rows (representing weeks). It is possible to render as many labels as fit and keep the row heights equal. The row height is liquid and determined by the height of the calendar.

If you would like to render all labels, then passing `labels: 'all'` will do just that. This can make the row heights variable.

Alternatively a maximum number of labels can be set by passing a number to the `labels` property of the `view.calendar` option.

If there are more events than the number of labels for a particular day, an "x more" label will help users list out all events for the day.

By default the width of the labels fill the day cells (`eventDisplay: 'fill'`) but alternatively `eventDisplay: 'exact'` can be used to display the labels with exact times.
