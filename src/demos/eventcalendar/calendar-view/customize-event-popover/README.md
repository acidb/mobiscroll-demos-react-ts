To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/customize-event-popover#).

## Demo description

The events listed in the popover can be customized in two ways:

- **Full event customization** *(like in this example)* - The calendar handles the rendering of events in the correct order. Styling the content, colors and everything else is your responsibility.
- **Content customization** - The calendar prints the `start` and `end` times, `allDay` and sets the appropriate `color`. Content like title and other fields can be shown.

You can provide styling to the `title` field and any other custom fields like `description`, `location`, `participants` ...

Pass a rendering function to the renderPopoverEventContent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` are passed to the function. For a fully custom event rendering use the renderPopoverEvent option.

If you add custom markup you will want to add styling too. Use the `popoverClass` under the `view` option to tell the calendar what CSS class it should append to the popover container so that you can write specific CSS rules.

## Implementation instructions

- Use the `renderPopoverEventContent` option to pass a custom rendering function for the event content shown inside the popover.
- If you need full control over how each popover event is rendered, use `renderPopoverEvent` instead.
- Use `popoverClass` under the `view` option to append a custom CSS class to the popover container and target it with specific styling rules.

## What this demo shows

- A mobile-style month event calendar with fully customized events shown in the popover.
- **Month grid** Days with scheduled events show a small marker below the day number.
- **Day hover state** Hovering over a day cell highlights the day number with a gray background.
- **Day selection** Clicking a day selects it and highlights the day number with a blue background.
- **Popover trigger** Clicking a day with an event marker opens a popover below the day cell.
- **Popover content** The popover lists the events scheduled for the selected day.
- **Custom event layout** Each customized event includes a colored leading line, event title, assignee image, assignee name, and time information.
- **All-day events** All-day events display an `All-day` label instead of a time range.
- **Timed events** Time-specific events display the start and end time.
- **Event action** Each event includes a blue `Add participant` button that highlights on hover and can be wired to a custom action.
- **Calendar navigation** The calendar supports horizontal drag navigation for moving between months.
- **Header controls** The header shows the current month and year on the left side, while the right side includes blue previous and next navigation arrows, and a `Today` button for returning to the current date.

## Best for

- **Assigned work and people-based scheduling** Displaying assignees, avatars, and event ownership directly in the popover list.
- **Actionable event lists** Adding buttons or other controls to day-level event previews so users can trigger follow-up actions from the popover.
- **Compact month browsing** Letting users scan a month quickly, spot days with events, and open a lightweight detail view only when needed.
