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
