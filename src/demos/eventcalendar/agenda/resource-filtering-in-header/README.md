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

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. A segmented resource filter is centered in the header. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Resource filter** The segmented control contains three selectable options: `Barry`, `Hortense`, and `Carl`, each with an avatar shown before the name.
- **Resource filtering** Selecting a resource from the segmented control, updates the month view to show that person's events, making it possible to show or hide events by resource from the header.
- **Color coding** `Barry`'s option and events use green, `Hortense` uses blue, and `Carl` uses pink, so the active filter and the visible events stay visually aligned.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Resource-specific month planning** Viewing one person's month schedule at a time without leaving the agenda view.
- **Team agendas with simple filtering** Switching between a small set of people or resources from a compact header control.
- **Color-coded resource views** Making it easy to distinguish which events belong to which resource.
- **Operational dashboards** Internal scheduling tools where users need quick filtering and fast month-to-month navigation.
- **Custom agenda toolbars** Cases where the standard header needs extra controls without moving filtering outside the agenda.
