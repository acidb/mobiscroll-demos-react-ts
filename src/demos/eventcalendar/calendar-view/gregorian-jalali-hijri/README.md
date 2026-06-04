To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/gregorian-jalali-hijri#).

## Demo description

The event calendar supports multiple calendar systems. You can control it with the `calendarSystem` setting, and it supports the following options:

- **Gregorian** - it is included by default
- **Jalali** - it is the default system of the Persian calendar and is included within the Farsi language pack
- **Hijri** - it is included in the Arabic language pack

- **Interested in localization?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/localization#)

## Related demos

- [Explore this example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/localization#)

## Implementation instructions

- Use the `calendarSystem` option to switch the event calendar between supported calendar systems.
- `Gregorian` is available by default.
- `Jalali` is the default calendar system in the Farsi language pack.
- `Hijri` is included in the Arabic language pack.

## What this demo shows

- A desktop month-view event calendar with a segmented control for switching between Gregorian, Jalali, and Hijri calendar systems.
- **Calendar system picker** The left side of the calendar shows a "Pick a calendar system" label with three options, where Gregorian is selected by default and choosing another option updates the calendar system.
- **Month header** The top left displays the current month and year, while the top right includes previous and next navigation arrows with a `Today` button between them for jumping back to the current date.
- **Event labels** Day cells render events as labels with different colors and styles to distinguish all-day, multi-day, and timed events.
- **Overflow handling** The number of visible event labels in a day cell depends on the available height. Extra events are collapsed behind an `X more` label.
- **Popover details** Clicking the `X more` label opens a popover that shows the hidden events for that day.
- **Event selection** Clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Month navigation** The month can be changed either with the header arrows or by dragging the calendar left or right.

## Best for

- **Regional user experiences** Products that need to present dates in the calendar system users already rely on, such as Gregorian for international audiences, Jalali for Persian-speaking users, or Hijri for Arabic-speaking users.
- **Localized scheduling flows** Booking, planning, and event management interfaces where users need to browse months, review events, and select dates in a familiar calendar system.
- **Multi-market applications** SaaS products and internal tools used across regions where the same calendar UI needs to adapt to different localization requirements without changing the overall workflow.
- **Culture-specific date handling** Use cases where aligning the calendar view with local conventions improves clarity and reduces date interpretation errors.
- **Configurable enterprise products** Platforms that need to support different customer preferences or deployment regions by letting teams switch calendar systems from the interface.
