To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/customizing-calendar-header#).

## Demo description

You can customize how the header of the agenda looks and how the components are arranged. Besides that you can also add custom functionality, like a segmented control that lets people switch between agenda and calendar.

Use the `renderHeader` option for passing a custom header layout. There are predefined components - shorthands if you will - that can be used to assemble the header:

- **Navigation component** - `&lt;CalendarNav /&gt;`. Use the `.md-header-filter-controls` CSS class for custom overrides.
- **Today button** - `&lt;CalendarToday /&gt;`. Use the `.md-header-filter-today` CSS class for custom overrides.
- **Previous month button** - `&lt;CalendarPrev /&gt;`. Use the `.md-header-filter-prev` CSS class for custom overrides.
- **Next month button** - `&lt;CalendarNext /&gt;`. Use the `.md-header-filter-next` CSS class for custom overrides.

For changing the order the controls are laid out, you only need to set up the `renderHeader`. This example sets a consistent order and layout across all themes and shows a custom control at the far right end.

**Overriding the order for specific themes**

For a custom order on a theme to theme basis, you will need to use a little CSS. [Flex layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) makes reordering easy. It's just a matter of setting the order in CSS. For material use the `.mbsc-material`, for windows the `.mbsc-windows` prefix and for iOS it is `.mbsc-ios` class. Eg.:

```css
.mbsc-material .md-header-filter-prev { order: 1; }
.mbsc-material .md-header-filter-next { order: 2; }
.mbsc-material .md-header-filter-controls { order: 3; }
.mbsc-material .md-header-filter-today { order: 4; }
```

- **Want to add a filter to the header?** [Check out the next example →](https://demo.mobiscroll.com/react/agenda/resource-filtering-in-header#)

## Related demos

- [Check out the next example →](https://demo.mobiscroll.com/react/agenda/resource-filtering-in-header#)

## Implementation instructions

- Use `renderHeader` (React/JS/jQuery) / `headerTemplate` (Angular) / `header` slot (Vue) to replace the default header. Assemble it from the built-in nav components: `CalendarNav` (navigation label), `CalendarToday` (today button), and custom prev/next `Button`s that shift `currentDate` by ±1 month. Place a `SegmentedGroup` at the far right with "agenda" and "calendar" segments to switch views.
- Keep `selectedDate` and `onSelectedDateChange` wired so that the custom prev/next buttons and the nav label stay in sync. On segment change, swap `view` between `{ agenda: { type: 'month' } }` and `{ calendar: { type: 'month' } }`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `inst.setEvents(events)` in the callback.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The center contains previous and next month navigation arrows with a blue `Today` button between them for jumping back to the current date. The right side contains a segmented control with a list icon selected by default and a calendar icon for switching views.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events:** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.
- **Event calendar view** Selecting the calendar option from the segmented control switches the layout to a monthly calendar view.
- **Event labels** Days with events display labels directly inside the month cells. Labels use different styles and colors to distinguish all-day events, multi-day, and timed events.
- **Overflow handling** The number of visible event labels depends on the available vertical space in the day cell. Additional events are moved into a popover and indicated by an `X more` label, where `X` represents the number of hidden events. Clicking it opens a popover that lists the remaining events for that day.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label. This is tru in both views, event calendar month view and the scheduler week view.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.

## Best for

- **Calendar and agenda switching** Interfaces where users need to move between a month overview for agenda and event calendar from the same header control.
- **Desktop planning tools** Scheduling and planning screens designed for desktop use, where a full month grid and richer header controls fit naturally.
