To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/localization#).

## Demo description

The components are fully localized.
In case of the timeline this covers date and time format, button copy, rtl and more.
You can see how each example shows up by clicking on the small flag icon or checking the examples below.

- **All settings can be manually overridden** See what options the localization impacts &#8594;

## Related demos

- See what options the localization impacts &#8594;

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day timeline view.
- Define 6 resources with `id`, `name`, and `color`.
- Load events from `https://trial.mobiscroll.com/timeline-events/` via JSONP using `getJson(url, callback, 'jsonp')`. Call `inst.setEvents(events)` for the imperative API.
- **Locale switcher** — render a single `Dropdown` (Mobiscroll's `Dropdown` component) above the calendar. Populate it with ~35 language options (Arabic, Bulgarian, Catala, Cestina, Dansk, Deutsch, Greek, English, English-UK, Espanol, Farsi, Suomi, Français, Hebrew, Hindi, Croatian, Magyar, Italiano, Japanese, Korean, Lietuvių, Nederlands, Norsk, Polski, Português Brasileiro, Português Europeu, Română, Russian UA, Russian, Slovencina, Serbian, Svenska, Thai, Türkçe, Ukrainian, Vietnamese, Chinese). Default to `'en'`.
- Pass `locale={locale[localeStr]}` to the `Eventcalendar`, where `locale` is the map object imported from Mobiscroll and `localeStr` is the currently selected language code. Changing the dropdown immediately re-renders the calendar in the new language including date formats, button labels, and RTL layout.
- For the imperative API, attach a `change` listener to the select element and call `calendar.setOptions({ locale: mobiscroll.locale[value] })` on each change.
- Wrap the page in a Mobiscroll `Page` component. Use a Mobiscroll grid with a single `mbsc-col-sm-8` column (centered with `margin: 0 auto`) for the dropdown, and a `mbsc-flex-1-1` container for the calendar to fill the remaining height.
- Add `.mds-full-height { height: 100%; }` and `.mds-locale-cont .mbsc-col-sm-8 { margin: 0 auto; }` CSS rules.
