To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/customize-label-look-and-feel#).

## Demo description

You can customize the look of the labels and show additional content besides the `event.title`. There are two approaches you can take:

- **Only customize the content of the labels** - For this you will want to use the renderCalendarEventContent option. The `color` and positioning of the label will be handled by the calendar. The `title` and any other custom fields you want to show inside the label is your responsibility.
- **Fully customize how the labels look** *(like in this example)* - Use the renderCalendarEvent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` can be leveraged for constructing the render function. With the `renderCalendarEvent` you will have full control over how the labels are styled including things like `color`, `title` and any custom fields.

## Implementation instructions

- For light customization, use the calendar's event content render hook:
  - In React and JavaScript/jQuery, use `renderCalendarEventContent`.
  - In Angular, use `calendarEventContentTemplate`.
  - In Vue, use the `calendarEventContent` template.
- For full control over label appearance, use the calendar's full event render hook:
  - In React and JavaScript/jQuery, use `renderCalendarEvent`.
  - In Angular, use `calendarEventTemplate`.
  - In Vue, use the `calendarEvent` template.

## What this demo shows

- A desktop month view event calendar with a full month grid layout.
- **Event labels** Days with events display labels directly inside the month cells.
- **Custom label rendering** The demo shows labels with a fully customized visual appearance: all day or multiple all day event labels have stron colors and the event title at the beggining of the event and timed events are marked with a small colored dot at the left and the event title next to it.
- **Overflow handling** The number of visible event labels depends on the available vertical space in the day cell. Additional events are moved into a popover and indicated by an `X more` label, where `X` represents the number of hidden events. Clicking it opens a popover that lists the remaining events for that day.
- **Event selection** Clicking an event label shows a toast with the event title at the bottom center part of the calendar.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month view can be changed by clicking and dragging the calendar left or right.
- **Header controls** The header shows the current month and year on the left, with blue previous and next navigation arrows plus a `Today` button on the right.

## Best for

- **Branded calendar experiences** Products that need event labels to match a custom visual style instead of the default calendar appearance.
- **Category-based event display** Use cases where color and custom label design help users quickly distinguish event types, statuses, or teams.
- **Richer event summaries** Calendars that need to show more than the event title, such as custom fields or additional context inside the label.
