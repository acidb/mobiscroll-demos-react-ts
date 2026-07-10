To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/gregorian-jalali-hijri#).

## Demo description

The timeline supports multiple calendar systems. You can control it with the `calendarSystem` setting, and it supports the following options:

- **Gregorian** - it is included by default
- **Jalali** - it is the default system of the Persian calendar and is included within the Farsi language pack
- **Hijri** - it is included in the Arabic language pack

- **Interested in localization?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/timeline/localization#)

## Related demos

- [Explore this example &#8594;](https://demo.mobiscroll.com/react/timeline/localization#)

## Implementation instructions

- Render three separate `Eventcalendar` instances on one page, each using `timeline: { type: 'day' }` and the same 6 resources (`id`, `name`, `color`).
- Load events once from `https://trial.mobiscroll.com/timeline-events/` via JSONP using `getJson(url, callback, 'jsonp')`. In the callback, pass the same event array to all three instances — call `inst.setEvents(events)` on each for the imperative API.
- **Gregorian instance** — no `calendarSystem` needed (Gregorian is the default). Pass `locale: localeEn` (or omit for the default).
- **Jalali instance** — pass `calendarSystem: jalaliCalendar` and `locale: localeFa`. `jalaliCalendar` and `localeFa` are imported from the Mobiscroll package.
- **Hijri instance** — pass `calendarSystem: hijriCalendar` and `locale: localeAr`. `hijriCalendar` and `localeAr` are imported from the Mobiscroll package.
- Wrap the page in a Mobiscroll `Page` component. Use a Mobiscroll grid (`mbsc-grid` / `mbsc-row`) with three equal columns (`mbsc-col-sm-12 mbsc-col-md-4`). Each column contains a `mbsc-form-group` with a `mbsc-form-group-title` label ("Gregorian calendar", "Jalali calendar", "Hijri calendar") above its `Eventcalendar` instance.
