To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/customizing-events#).

## Demo description

Above the built in rendering mode you can either customize the full event or just the content of the event. If we break up the event into pieces there are six fields that we are interested in:

- The event `start` and `end` time
- Whether it is an `allDay` event or not
- The event `color`
- The event `title`
- `bufferBefore`
- `bufferAfter`

The scheduler takes care of positioning the event container and everything else is your responsibility. You will have to place and provide styling to all event fields. Beside the ones mentioned above you'll be able to render other custom fields, like `description`, `location`, `participants` ... and add buttons, custom interactions.

Pass a custom rendering function to the renderSchedulerEvent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` can be reached inside the function.

The before/after buffers can help you visualise delays or added minutes for tasks. For example travel time for meetings/appointments, check in/check out for flights.

The buffers can be customized through the `renderBufferBefore` and `renderBufferAfter` options.
