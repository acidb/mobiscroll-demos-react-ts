To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/control-number-of-concurrently-shown-events#).

## Demo description

The timeline renders all concurrent (overlapping) events by default, and the height of the resource row will increase to fit those events.
If equal row height is used, the available vertical space will be divided between them.
When there are a lot of concurrent events, displaying all of them isn't always helpful.

A maximum number of concurrent events can be set by passing a number to the `maxEventStack`
property of the `view.timeline` option.
