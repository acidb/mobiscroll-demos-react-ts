To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/event-content-customization#).

## Demo description

Above the built in look & feel, the events can be customized in two ways:

- **Full event customization** - The agenda handles the listing and ordering of the events, while the full styling falls into your hands. Explore [this example](https://demo.mobiscroll.com/react/agenda/full-event-customization#) for more details.
- **Content-only customization** *(like in this example)* - When customizing only the content, the calendar handles the event `start` and `end` times, `allDay` and `color` rendering.

You will have to place and provide styling to the `title` field and any other custom fields you are using, like `description`, `location`, `participants`. You can add custom functionality, buttons and other custom components.

Pass a rendering function to the renderAgendaEventContent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` can be used inside the function.
