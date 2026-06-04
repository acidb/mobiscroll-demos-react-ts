To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/responsive-month-view#).

## Demo description

The event calendar is fully responsive. It adapts to the available space and fills the screen to look good everywhere. While you don't have to worry about the width the height can be manually adjusted with the `height` option.

Use the `responsive` option to configure how the calendar behaves on different sized screens.
The `responsive` option is equipped with five breakpoints -
`xsmall` **(up to 575px)**,
`small` **(up to 767px)**,
`medium` **(up to 991px)**,
`large` **(up to 1199px)**,
`xlarge` **(from 1200px)**.
Custom breakpoints can be added if necessary: `my-custom-breakpoint: { breakpoint: 600 }` **(from 600px up to the next breakpoint)**.

## Implementation instructions

- Use the `responsive` option to configure different calendar setups for different screen sizes.
- Start from the built-in breakpoint system (`xsmall`, `small`, `medium`, `large`, `xlarge`) and override the calendar configuration for the breakpoints that need a different layout.
- Add custom breakpoints when the default set does not match the exact container or viewport widths your application needs.

## What this demo shows

- A responsive event calendar setup that changes layout based on the selected viewport size.
- **Viewport switcher** A segmented control above the calendar lets you switch between viewport presets in the demo.
- **Small screen layout** On `375px` and `576px` viewports, a week view calendar is shown at the top.
- **Day markers** Days that contain events display a small marker below the day in the week view.
- **Agenda below the calendar** A daily event list is shown under the week view and displays the events for the currently selected date.
- **Synchronized selection** Selecting a different date in the week view updates the agenda automatically to show that day's events.
- **Larger screen layout** On `768px`, `992px`, and `1200px` viewports, the layout switches to a desktop-style month view with event labels shown directly in the calendar cells.
- **Header controls** The view includes the standard header controls for month and year navigation, previous and next arrows, and a `Today` button.

## Best for

- **Responsive event planning UIs** Interfaces that need to present calendar data clearly across mobile, tablet, and desktop screen sizes.
- **Adaptive embedded views** Product areas where the calendar needs to work well inside containers, panels, or sections of a larger page.
- **Breakpoint-based calendar setups** Use cases where different calendar views should be shown at different viewports.
