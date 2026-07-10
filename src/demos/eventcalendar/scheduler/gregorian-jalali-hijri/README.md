To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/gregorian-jalali-hijri#).

## Demo description

The scheduler supports multiple calendar systems. You can control it with the `calendarSystem` setting, and it supports the following options:

- **Gregorian** - it is included by default
- **Jalali** - it is the default system of the Persian calendar and is included within the Farsi language pack
- **Hijri** - it is included in the Arabic language pack

- **Interested in localization?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/localization#)

## Related demos

- [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/localization#)

## Implementation instructions

- Render three separate `Eventcalendar` instances on one page in a responsive 3-column grid (`mbsc-col-sm-12 mbsc-col-md-4`), each inside an `mbsc-form-group` with an `mbsc-form-group-title`. Use `view: { scheduler: { type: 'day' } }` for all three. Wrap the page in a `Page` component.
- **Gregorian instance** — no `calendarSystem` needed (Gregorian is the default). Angular and JS/jQuery also pass `locale: localeEn` explicitly; React and Vue omit it.
- **Jalali instance** — pass `calendarSystem: jalaliCalendar` and `locale: localeFa`, both imported from the Mobiscroll package. JS/jQuery: access as `mobiscroll.jalaliCalendar` and `mobiscroll.locale.fa`.
- **Hijri instance** — pass `calendarSystem: hijriCalendar` and `locale: localeAr`, both imported from the Mobiscroll package. JS/jQuery: access as `mobiscroll.hijriCalendar` and `mobiscroll.locale.ar`.
- Load events once from `https://trial.mobiscroll.com/events/?vers=5` via JSONP. For state-based frameworks (React/Vue/Angular), share one reactive events array bound to all three instances. For the imperative API (JS/jQuery), call `inst.setEvents(events)` on each of the three instances inside the callback.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Calendar system picker** The left side of the scheduler shows a "Pick a calendar system" label with three options, where Gregorian is selected by default and choosing another option (Jalali or Hijri) updates the calendar system.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Regional user experiences** Products that need to present dates in the calendar system users already rely on, such as Gregorian for international audiences, Jalali for Persian-speaking users, or Hijri for Arabic-speaking users.
- **Localized scheduling flows** Booking, planning, and event management interfaces where users need to browse months, review events, and select dates in a familiar calendar system.
