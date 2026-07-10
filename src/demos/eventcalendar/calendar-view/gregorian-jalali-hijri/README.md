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

- Render three separate `Eventcalendar` instances on one page in a responsive 3-column grid (`mbsc-col-sm-12 mbsc-col-md-4`), each inside an `mbsc-form-group` with an `mbsc-form-group-title`. Use `view: { calendar: { labels: true } }` for all three. Wrap the page in a `Page` component.
- **Gregorian instance** — no `calendarSystem` needed (Gregorian is the default). Angular and JS/jQuery also pass `locale: localeEn` explicitly; React and Vue omit it.
- **Jalali instance** — pass `calendarSystem: jalaliCalendar` and `locale: localeFa`, both imported from the Mobiscroll package. JS/jQuery: access as `mobiscroll.jalaliCalendar` and `mobiscroll.locale.fa`.
- **Hijri instance** — pass `calendarSystem: hijriCalendar` and `locale: localeAr`, both imported from the Mobiscroll package. JS/jQuery: access as `mobiscroll.hijriCalendar` and `mobiscroll.locale.ar`.
- Load events once from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. For state-based frameworks, share one reactive events array bound to all three instances. For the imperative API (JS/jQuery), call `inst.setEvents(events)` on each of the three instances inside the callback.

## What this demo shows

- A desktop month-view event calendar with a segmented control for switching between Gregorian, Jalali, and Hijri calendar systems.
- **Calendar system picker** The left side of the calendar shows a "Pick a calendar system" label with three options, where Gregorian is selected by default and choosing another option (Jalali or Hijri) updates the calendar system.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right. 
- **Event labels** Day cells render events as labels with different colors and styles to distinguish all-day, multi-day, and timed events.
- **Overflow handling** The number of visible event labels depends on the available height in each day cell. Additional events are collapsed behind an `X more` link.
- **Popover** Clicking the `X more` link opens a popover that shows the hidden events for that day.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label.
- **Day cell states for future days** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month can be changed either with the header arrows or by clicking and dragging the calendar left or right.

## Best for

- **Regional user experiences** Products that need to present dates in the calendar system users already rely on, such as Gregorian for international audiences, Jalali for Persian-speaking users, or Hijri for Arabic-speaking users.
- **Localized scheduling flows** Booking, planning, and event management interfaces where users need to browse months, review events, and select dates in a familiar calendar system.
