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

## What this demo shows

- A desktop day timeline with hours arranged horizontally and resources arranged vertically on the right when RTL rendering is enabled.
- **RTL control** A side panel next to the timeline includes an `Enable Right-To-Left rendering` switch, which is enabled by default.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between days, and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected day, with the current date highlighted.
- **Timeline** The time grid displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a left color stripe, a bold title, a description, and a bold time range.
- **Event positioning** Events are placed by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **RTL scheduling interfaces** Building timeline views for products used in right-to-left languages such as Arabic, Hebrew, or Farsi.
- **Regional workforce planning** Managing shifts, assignments, or availability for teams working in RTL locales.
- **Resource scheduling systems** Displaying rooms, staff, equipment, or service teams in a mirrored timeline layout.
- **Multilingual applications** Supporting users who need the same scheduling workflow in both LTR and RTL rendering modes.
- **Localization testing** Verifying how timeline navigation, resources, event cards, scrolling, and drag interactions behave when RTL is enabled.
