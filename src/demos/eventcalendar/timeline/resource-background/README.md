To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-background#).

## Demo description

Easily highlight rows by adding a simple `background` color or craft a more specific look with the `cssClass` property of the resources data.

The output could be a custom background to individual rows and it can be used for multiple purposes. For example:

- Changing the background color for parent and child resources, like different color for different levels.
- Different styling for certain rows, like thicker border acting as separator.
- Resource selection, where the selected resource has a different background.
- Setting different backgrounds for the resource titles/grid rows/sidebar

- **Interested in highlighting date ranges only?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/timeline/colors-invalids-css-class#)

## Related demos

- [Explore this example &#8594;](https://demo.mobiscroll.com/react/timeline/colors-invalids-css-class#)

## Implementation instructions

- Use `timeline: { type: 'month' }` — a full-month view with one column per day.
- Define 7 resources, each demonstrating a different row-styling technique. Include a mix of resources with `background`, `cssClass`, and no extra styling to show the contrast.
- Add 6 events with `dyndatetime` offsets spread across the current month, each assigned to a different resource.
- Use `renderSidebar` to render the resource name with a " Sidebar" suffix for each row, so all three row zones (resource label, grid, sidebar) are visible and their background styling is apparent.
- **Two resource-level styling mechanisms:**
  - **`background` property**: set a CSS color value (e.g. `rgba(108, 166, 166, 0.37)`) directly on the resource object. Mobiscroll applies it as a background color spanning the full row — resource label column, grid area, and sidebar column.
  - **`cssClass` property**: Mobiscroll applies the class to each of the three row zone elements. To target only one zone, use a compound CSS selector combining the custom class with the relevant Mobiscroll internal class: `.mbsc-timeline-resource` (resource label column), `.mbsc-timeline-row` (grid area), or `.mbsc-timeline-sidebar-resource` (sidebar column). Without a zone sub-selector, the rule applies to the whole row container.

## What this demo shows

- A desktop monthly timeline where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between months and the Today button returns to the current date.
- **Month view** The strip below the header shows the days of the selected month, with the current date highlighted.
- **Resource strip** Seven resources are displayed across the timeline. Resources C and F use the default appearance, while all other resources have customized backgrounds.
- **Resource background styles** Resource A uses a green background across the entire row. Resource B uses thicker borders to visually separate it from adjacent resources. Resource D customizes only the resource header background with an orange color. Resource E applies different background styles to the resource header, the all-day section, and the timeline grid independently. Resource G customizes only the timeline grid background.
- **Sidebar** Resource names are also rendered in a right-side sidebar.
- **Event cards** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Highlighting resource states**: Indicate availability, maintenance, occupancy, priority, or other statuses using customized resource backgrounds.
- **Differentiating resources**: Visually separate teams, departments, meeting rooms, equipment, vehicles, or staff with resource-specific styling while preserving the standard scheduling experience.
- **Custom resource branding**: Apply independent styling to the resource header, all-day section, and timlne grid to match branding or emphasize contextual information.
- **Improving schedule readability**: Use background colors and custom CSS to make resource-heavy timelines easier to scan without modifying event data or scheduling behavior.
