To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/full-event-customization#).

## Demo description

Above the built in rendering mode you can either customize the full event or just the content of the event. If we break up the event into pieces there are four fields that we are interested in:

- The event `start` and `end` time
- Whether it is an `allDay` event or not
- The event `color`
- The event `title`

If you would like to keep the styling of the `start/end` times, `allDay` and `color` you will want to [customize the content only](https://demo.mobiscroll.com/react/agenda/event-content-customization#), not the full event. In case of the full event customization the agenda takes care of positioning the event container and everything else is your responsibility.

You will have to place and provide styling to all event fields. Beside the ones mentioned above you'll be able to render other custom fields, like `description`, `location`, `participants` ...

Pass a rendering function to the renderAgendaEvent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` are available in the function.
