To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/customize-marked-day-shapes#).

## Demo description

The default shape of day marks are dots. If you want to mark a day for something you can add one or more colored dots through the marked option. There are cases when you might want to change the shape of the marks or use different marks that carry specific meaning.

When you want to update the shape you can simply use CSS and override the styling: `.mbsc-calendar-marks .mbsc-calendar-mark { // you custom override }`.

If you need to show different shapes, you can pass a custom CSS class in the `markCssClass` property of the marked option. Use it to show triangles, squares and dots for different marks.

## Related demos

- **What else can you use to add extra information to the day cells?** [Learn how to add labels and color days →](https://demo.mobiscroll.com/react/range/dots-colors-labels#)
