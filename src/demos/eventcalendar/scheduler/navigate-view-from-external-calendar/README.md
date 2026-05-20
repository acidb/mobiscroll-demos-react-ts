To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/navigate-view-from-external-calendar#).

## Demo description

This example demonstrates how can the Scheduler navigated externally. Here we have a two-pane layout with a Datepicker on the left and a Scheduler on the right. Changing date on the Datepicker will trigger the date change on the Scheduler.

The Datepicker updates the `selectedDate` option of the Scheduler in itsframework{only="vue"}
@change

:::

`onChange`

event, while the Scheduler updates the datepicker value from its 

`onSelectedDateChange`

 event.
:::

framework{only="vue"}
@change

:::

`onChange`

event, while the Scheduler updates the datepicker value from its 

`onSelectedDateChange`

 event.
:::
