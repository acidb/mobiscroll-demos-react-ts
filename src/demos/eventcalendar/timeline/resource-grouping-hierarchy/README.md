To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-grouping-hierarchy#).

## Demo description

Resources can be fixed to the top through the `fixed` property of the resource object. The fixed resources
have to be placed before any other resource in the order of resources.

Resources can be placed into collapsible groups that can be collapsed or expanded on load through the `collapsed` property of the resource object.
Parents have a slightly different styling compared to child elements that spans across the entire timeline.
While the height of the rows are the same for all resources, these can be
[customized with CSS](https://demo.mobiscroll.com/react/timeline/setting-row-height#), the same way as seen in this example.

The hierarchy can be of multiple levels. Event creation, drag & drop is enabled for parent and child resources alike, that can be turned off through the
`eventCreation` property of the `resource` object.

The width of the resource column adjusts dynamically as resources are expanded or collapsed to fit their content.
The default increment step can be modified with a CSS rule, without affecting the algorithm's behavior:

```css
.md-resource-grouping-hierarchy .mbsc-timeline-resource-depth-step {
width: 20px;
}
```

If the step adjustment is not needed and you want to keep the width of the resources column unchanged, you can disable it by setting the value to `width: 0;`.
