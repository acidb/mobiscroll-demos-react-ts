To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/month-week-view#).

## Demo description

The calendar view supports variable weeks. Save space by only displaying one or two weeks or go for a full month where it makes sense.
Use the `type` and `size` properties of the  `view`
option to set the size of the month or week view.

You can also set the first day of the week using the `firstDay` option, where Sunday is 0, Monday is 1, etc.

## Implementation instructions

- Use the `type` and `size` properties of the `view` option to set the size of the month or week view.
- Use the `firstDay` option to define the first day of the week. Sunday is `0`, Monday is `1`, and other days follow the same numeric pattern.

## What this demo shows

- This demo shows an Event Calendar that can switch between a full month view and variable week views.
- **Calendar layout** In week mode, the calendar can display one, two, or three weeks at a time. In month mode, it shows the full month grid.
- **Event labels** Days with events display labels inside the day cell. Label styling changes based on the event type, including all-day, multi-day, and timed events. Event labels use different colors to distinguish between events.
- **Overflow handling** The number of visible event labels depends on the available vertical space in the day cell. Additional events are moved into a popover and indicated by an `X more` label where `X` represents the number of events inside the popover.
- **Popover interaction** Clicking the `X more` indicator opens a popover that lists the hidden events for that day.
- **Event selection** Hovering over or selecting an event label highlights that event.
- **Cell hover and selection** Hovering over a day cell highlights the day number in the top-right corner with a gray background. Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Navigation** The calendar can be navigated by clicking and dragging left or right.
- **Header controls** The header shows the current month and year on the left, with blue previous and next arrows plus a `Today` button on the right.
- **View configuration panel** A side panel lets the user switch between `Month view` and `Week view`. In week view, a segmented control lets the user choose `One`, `Two`, or `Three` weeks.
- **Week start panel** A second side panel lets the user set the first day of the week to `Auto (set by locale)`, `Sunday`, or `Monday`.

## Best for

- **Space-sensitive calendar layouts** Interfaces that need to show one, two, or three weeks instead of a full month to save space.
- **Switchable overview depth** Experiences where users need to move between a compact weekly overview and a full month view.
- **Locale-aware calendars** Setups where the first day of the week should follow locale defaults or be switched explicitly to Sunday or Monday.
- **Event-dense month and week grids** Calendars that need to show event labels in day cells while still handling overflow through a more popup.
