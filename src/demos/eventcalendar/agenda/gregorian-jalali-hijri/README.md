To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/gregorian-jalali-hijri#).

## Demo description

The agenda supports multiple calendar systems. You can control it with the `calendarSystem` setting, and it supports the following options:

- **Gregorian** - it is included by default
- **Jalali** - it is the default system of the Persian calendar and is included within the Farsi language pack
- **Hijri** - it is included in the Arabic language pack

- **Interested in localization?** [Explore this example →](https://demo.mobiscroll.com/react/agenda/localization#)

## Related demos

- [Explore this example →](https://demo.mobiscroll.com/react/agenda/localization#)

## Implementation instructions

- Use a `Page` component with a `mbsc-grid` / `mbsc-row` / three `mbsc-col-sm-12 mbsc-col-md-4` columns to show three `Eventcalendar` instances side by side. Each uses `view: { calendar: { type: 'week' }, agenda: { type: 'day' } }`.
- Configure each instance with its calendar system and locale:
  - **Gregorian**: default (no `calendarSystem` needed), `locale: localeEn`
  - **Jalali**: `calendarSystem: jalaliCalendar`, `locale: localeFa`
  - **Hijri**: `calendarSystem: hijriCalendar`, `locale: localeAr`
  - Import `jalaliCalendar`, `hijriCalendar`, `localeEn`, `localeFa`, `localeAr` from the Mobiscroll package.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP once using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. Pass the same events array to all three instances. For the imperative API, call `inst.setEvents(events)` on all three instances in the callback.

## What this demo shows

- Shows a weekly agenda view with events listed and grouped by date.
- **Calendar system picker** The left side of the agenda shows a "Pick a calendar system" label with three options, where Gregorian is selected by default and choosing another option (Jalali or Hijri) updates the calendar system.
- **Header navigation** The date range label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Regional user experiences** Products that need to present dates in the calendar system users already rely on, such as Gregorian for international audiences, Jalali for Persian-speaking users, or Hijri for Arabic-speaking users.
- **Localized scheduling flows** Booking, planning, and event management interfaces where users need to browse months, review events, and select dates in a familiar calendar system.
