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
