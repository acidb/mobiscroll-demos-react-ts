To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/customizing-header#).

## Demo description

You can customize how the header of calendar looks and how the components are arranged. Besides that you can also add custom functionality, like a segmented control that lets people switch between week and month view.

Use the `renderCalendarHeader` option for passing a custom header layout. There are predefined components - shorthands if you will - that can be used to assemble the header:

- **Navigation component** - `&lt;CalendarNav /&gt;`
- **Today button** - `&lt;CalendarToday /&gt;`
- **Previous month button** - `&lt;CalendarPrev /&gt;`
- **Next month button** - `&lt;CalendarNext /&gt;`

## What this demo shows

- The header can be fully hidden, or left at its default — which shows the month, year label, and navigation arrows.
- Clicking the month/year label opens a picker for navigating to a specific month or year.
- The navigation arrows page the view: one full month in calendar view, one week in week view.
- **Default header** — the out-of-the-box header with month, year label, and arrow navigation.
- **Custom header arrangement** — CalendarNav centered, with CalendarPrev and CalendarNext placed on opposite sides, using predefined components.
- **Add today button** — a CalendarToday control inserted between the default-positioned navigation arrows.
- **Switch between week and month view** — a segmented control with week and month icons added to the header, letting the user dynamically toggle the calendar between week and month view.
- **Preview section** — a header that displays the currently selected date.
