To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/dynamic-calculation-resource-sort#).

## Demo description

For advanced resource sorting and ordering calculations, sorting just by resource properties might not be enough.
In those situations you can provide a modal or popup that is invoked either from outside of the calendar
or from within the calendar header itself and you can get as sophisticated as you have to.

In this example trucks are listed as resources along with the scheduled tours as events. The sort popup that can be invoked from the header through templating allows you to perform calculations based on truck parameters and tour events. Once the calculation options are selected, the resulting metrics are displayed in the resources column, dynamically updating to reflect the results using the @if (pagemode == PageMode.Angular) { `resourceTemplate` } else if (pagemode == PageMode.Vue) { `resource` } else { `renderResource` } templating option.

Since the tours affect the resource order, on new event creation or reassignment a
[snackbar](https://demo.mobiscroll.com/react/forms/notifications#)
is shown with a 3 second timer and a "Sort now" button for an instant order update.
