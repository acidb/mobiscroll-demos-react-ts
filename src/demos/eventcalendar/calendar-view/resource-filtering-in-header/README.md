To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/resource-filtering-in-header#).

## Demo description

The calendar view doesn't have built in resource listing, however we can easily solve that inside the header using the segmented component.
The header of the agenda is a canvas and an opportunity for customization. You can add custom components and enable new interaction in context.

Such an example would be a custom filter block created with the help of a segmented control and placed between the standard UI components, which are:

- **Navigation component** - `&lt;CalendarNav /&gt;`. Use the `.md-header-filter-controls` CSS class for custom overrides.
- **Today button** - `&lt;CalendarToday /&gt;`. Use the `.md-header-filter-today` CSS class for custom overrides.
- **Previous month button** - `&lt;CalendarPrev /&gt;`. Use the `.md-header-filter-prev` CSS class for custom overrides.
- **Next month button** - `&lt;CalendarNext /&gt;`. Use the `.md-header-filter-next` CSS class for custom overrides.

For changing the order the controls are laid out, you only need to set up the `renderHeader`.

**Overriding the order for specific themes**

For a custom order on a theme to theme basis, you will need to use a little CSS. [Flex layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) makes reordering easy. It's just a matter of setting the order in CSS. For material use the `.mbsc-material`, for windows the `.mbsc-windows` prefix and for iOS it is `.mbsc-ios` class. Eg.:

```
.mbsc-material .mds-header-filter-prev { order: 1; }
.mbsc-material .mds-header-filter-next { order: 2; }
.mbsc-material .mds-header-filter { order: 3; }
.mbsc-material .mds-header-filter-today { order: 4; }
```

- **Want to style and reorder the header?** [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/customizing-header#)

## Related demos

- [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/customizing-header#)

## Implementation instructions

- Set `view: { calendar: { labels: true } }`. Enable `dragToMove: true` and `dragToResize: true` to allow moving and resizing events.
- Define a `resources` array where each entry has `id`, `name`, `color`, and `img` fields. Pass the array to the calendar via the `resources` option.
- Build the custom header with a `SegmentedGroup` set to `select="multiple"`. Render one `Segmented` per resource, each containing the resource's avatar image and name. Initialize the selected state to the first resource's id. Use `renderHeader` to inject the custom header (Angular: `headerTemplate`; Vue: use the `header` slot). Arrange the header elements as: navigation nav → segmented filter block → prev button → today button → next button.
- On `SegmentedGroup` change, filter the full events array to only those whose `resource` property matches a selected id, update the calendar's `data`, and show a `Toast` with `'Showing [name] events'` or `'Hiding [name] events'`. JS/jQuery: call `calendar.setEvents(filteredEvents)` instead of updating reactive data. Angular: use the `Notifications` service to show the toast.
- Load events from a remote endpoint using `getJson` and initialize the calendar with the subset filtered to the initially selected resource. JS/jQuery: call `calendar.setEvents(filteredEvents)` in the callback.

## What this demo shows

- A desktop month view event calendar with resource-based event filtering shown in the custom header.
- **Header layout** The current month and year are shown on the left, a segmented resource filter is centered in the header, and blue month navigation arrows with a `Today` button between them on the right.
- **Resource filter** The segmented control contains three selectable options: `Barry`, `Hortense`, and `Carl`, each with an avatar shown before the name.
- **Resource filtering** Selecting a resource from the segmented control, updates the month view to show that person's events, making it possible to show or hide events by resource from the header.
- **Color coding** `Barry`'s option and events use green, `Hortense` uses blue, and `Carl` uses pink, so the active filter and the visible events stay visually aligned.
- **Event labels** Days with events display event labels directly in the month cells, with label colors reflecting the associated resource.
- **Overflow handling** The number of visible event labels depends on the available height in each day cell. Additional events are collapsed behind an `X more` link.
- **Popover** Clicking the `X more` link opens a popover that shows the hidden events for that day.
- **Event interaction** Hovering over or selecting an event label highlights it and shows resize handles on both sides, indicating that the event can be resized by clicking and dragging.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Gesture navigation** The month view can also be changed by clicking and dragging the calendar left or right.

## Best for

- **Resource-specific month planning** Viewing one person's month schedule at a time without leaving the calendar view.
- **Team calendars with simple filtering** Switching between a small set of people or resources from a compact header control.
- **Color-coded resource views** Making it easy to distinguish which events belong to which resource.
- **Operational dashboards** Internal scheduling tools where users need quick filtering and fast month-to-month navigation.
- **Custom calendar toolbars** Cases where the standard header needs extra controls without moving filtering outside the calendar.
