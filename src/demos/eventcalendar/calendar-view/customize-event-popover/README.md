To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/customize-event-popover#).

## Demo description

The events listed in the popover can be customized in two ways:

- **Full event customization** *(like in this example)* - The calendar handles the rendering of events in the correct order. Styling the content, colors and everything else is your responsibility.
- **Content customization** - The calendar prints the `start` and `end` times, `allDay` and sets the appropriate `color`. Content like title and other fields can be shown.

You can provide styling to the `title` field and any other custom fields like `description`, `location`, `participants` ...

Pass a rendering function to the renderPopoverEventContent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` are passed to the function. For a fully custom event rendering use the renderPopoverEvent option.

If you add custom markup you will want to add styling too. Use the `popoverClass` under the `view` option to tell the calendar what CSS class it should append to the popover container so that you can write specific CSS rules.
