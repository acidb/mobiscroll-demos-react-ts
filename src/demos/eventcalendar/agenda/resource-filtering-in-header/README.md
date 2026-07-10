To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/resource-filtering-in-header#).

## Demo description

The agenda doesn't have built in resource listing, however we can easily solve that inside the header using the segmented component.
The header of the agenda is a canvas and an opportunity for customization. You can add custom components and enable new interaction in context.

Such an example would be a custom filter block created with the help of a segmented control and placed between the standard UI components, which are:

- **Navigation component** - `&lt;CalendarNav /&gt;`. Use the `.md-header-filter-controls` CSS class for custom overrides.
- **Today button** - `&lt;CalendarToday /&gt;`. Use the `.md-header-filter-today` CSS class for custom overrides.
- **Previous month button** - `&lt;CalendarPrev /&gt;`. Use the `.md-header-filter-prev` CSS class for custom overrides.
- **Next month button** - `&lt;CalendarNext /&gt;`. Use the `.md-header-filter-next` CSS class for custom overrides.

For changing the order the controls are laid out, you only need to set up the `renderHeader`.

**Overriding the order for specific themes**

For a custom order on a theme to theme basis, you will need to use a little CSS. [Flex layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) makes reordering easy. It's just a matter of setting the order in CSS. For material use the `.mbsc-material`, for windows the `.mbsc-windows` prefix and for iOS it is `.mbsc-ios` class. Eg.:

```css
.mbsc-material .mds-header-filter-prev { order: 1; }
.mbsc-material .mds-header-filter-next { order: 2; }
.mbsc-material .mds-header-filter { order: 3; }
.mbsc-material .mds-header-filter-today { order: 4; }
```

- **Want to style and reorder the header?** [Take a look at the previous example →](https://demo.mobiscroll.com/react/agenda/customizing-calendar-header#)

## Related demos

- [Take a look at the previous example →](https://demo.mobiscroll.com/react/agenda/customizing-calendar-header#)

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Define a `resources` array with 3 entries — each has `id`, `name`, `color`, and `img` (avatar URL). Pass it to the `resources` option. Load events from `https://trial.mobiscroll.com/filter-resource-events/` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. Each event has a `resource` field (integer ID) that links it to a resource.
- Implement client-side filtering: maintain a `selectedResources` set (initially resource 1 only). After loading, compute `filteredEvents = myEvents.filter(e => selectedResources[e.resource])` and pass `filteredEvents` to the Eventcalendar's `data` option. Recompute and update `filteredEvents` whenever the selection changes.
- Build a custom header via `renderHeader` (Angular: `headerTemplate`, Vue: `header` slot) containing: `CalendarNav` on the left, a `SegmentedGroup` with `select="multiple"` in the center (each `Segmented` shows the resource's avatar image + name), and `CalendarPrev`, `CalendarToday`, `CalendarNext` on the right. On segment change, update the `selectedResources` map and refresh `filteredEvents`. Show a Toast with "Showing/Hiding {name} events".
