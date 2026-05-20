To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/control-number-of-concurrently-shown-events#).

## Demo description

The scheduler renders all concurrent (overlapping) events by default, and the available horizontal space will be divided between them.
When there are a lot of concurrent events, displaying all of them isn't always helpful.

A maximum number of concurrent events can be set by passing a number to the `maxEventStack`
property of the `view.scheduler` option.

Alternatively `maxEventStack: 'auto'` can also be set, in this case the value will be determined automatically,
based on the available horizontal space.
It's poosible to also set a minimum event width, using the `minEvenWidth` property of the `view.scheduler` option.
If not specified, it defaults to 50px;
