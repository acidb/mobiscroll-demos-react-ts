To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/mobile-desktop-display#).

## Demo description

The date picker has five built-in display modes that can be controlled through the display option:

- `top` - modal that slides down from the top
- `bottom` - modal that slides up from the bottom
- `center` - modal that shows up in the middle with a pop animation
- `anchored` - modal that shows up anchored to an input or any dom element
- `inline` - embeddable picker that is rendered into the markup without its own modal

Use the touchUi option to switch between touch optimized mobile rendering and pointer optimized desktop rendering. It can be dynamically switched with the help of the `responsive` option.

The defaults change on a theme to theme basis. The `ios` theme comes with `bottom` on mobile and `anchored` on desktop while the `material` and `windows` themes have `center` on mobile and `anchored` on desktop.

- **Want to see how to set up responsiveness?** [Check out the previous example →](https://demo.mobiscroll.com/react/datetime/responsive#)

## Related demos

- [Check out the previous example →](https://demo.mobiscroll.com/react/datetime/responsive#)

## What this demo shows

- Shows five wheel-style date pickers demonstrate single-date selection with the supported display modes.
- **Inline date picker** The inline example embeds the date picker directly in the page without an input or modal.
- **Anchored date picker** The anchored example opens from an input and positions the picker next to that input or another DOM element.
- **Top date picker** The top example opens in a modal that slides down from the top.
- **Bottom date picker** The bottom example opens in a modal that slides up from the bottom.
- **Center date picker** The center example opens in the middle of the viewport with a pop animation.
- **Modal behavior** Focusing or clicking an input opens its picker, while clicking outside the picker closes it.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date.
- **Input value** In the input-based examples, confirming a date with `Set` displays the selected value in the input using a month, day, and year format.

## Best for

- **Inline layouts** Keep the date picker visible in booking flows, forms, dashboards, or side panels where users need direct access to date selection.
- **Anchored desktop forms** Open the picker next to an input or another page element when the surrounding form should remain visible.
- **Top-aligned mobile flows** Use a modal that enters from the top when the date picker should follow a top-oriented mobile layout.
- **Bottom-aligned mobile flows** Use a modal that enters from the bottom for touch-oriented interfaces and bottom-sheet interaction patterns.
- **Focused modal tasks** Center the picker when date selection should appear as a distinct task in the middle of the viewport.
