To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/rtl-right-to-left#).

## Demo description

RTL support is built in and can be explicitly controlled through the `rtl` option. If not set, it is inherited from the `locale` settings.

- **Explore the different locales** [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/localization#)

## Related demos

- [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/localization#)

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day timeline view.
- Define 6 resources with `id`, `name`, and `color`.
- Load events from `https://trial.mobiscroll.com/timeline-events/` via JSONP using `getJson(url, callback, 'jsonp')`. Call `inst.setEvents(events)` for the imperative API.
- Pass `rtl={true}` to the `Eventcalendar`. This flips the entire layout: the resource column moves to the right, the timeline scrolls right-to-left, and the header navigation mirrors accordingly.
- No locale needs to be set — `rtl` can be applied independently of locale. When a locale with built-in RTL support is applied (e.g. Arabic, Hebrew, Farsi), the `rtl` direction is inherited automatically from the locale without needing to set the prop explicitly.
