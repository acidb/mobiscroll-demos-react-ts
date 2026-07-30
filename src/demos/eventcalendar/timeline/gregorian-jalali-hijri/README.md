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

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and a hierarchical resource tree arranged vertically on the left.
- **Calendar system picker** The left side of the timeline shows a `Pick a calendar system` label with three options, where Gregorian is selected by default and choosing another option (Jalali or Hijri) updates the calendar system.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected days, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, a description, and a bold time range.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Regional user experiences** Products that need to present dates in the calendar system users already rely on, such as Gregorian for international audiences, Jalali for Persian-speaking users, or Hijri for Arabic-speaking users.
- **Localized scheduling flows** Booking, planning, and event management interfaces where users need to browse months, review events, and select dates in a familiar calendar system.
