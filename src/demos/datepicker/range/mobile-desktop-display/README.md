To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/mobile-desktop-display#).

## Demo description

The range has five built-in display modes that can be controlled through the display option:

- `top` - modal that slides down from the top
- `bottom` - modal that slides up from the bottom
- `center` - modal that shows up in the middle with a pop animation
- `anchored` - modal that shows up anchored to an input or any dom element
- `inline` - embeddable picker that is rendered into the markup without its own modal

Use the touchUi option to switch between touch optimized mobile rendering and pointer optimized desktop rendering. It can be dynamically switched with the help of the `responsive` option.

The defaults change on a theme to theme basis. The `ios` theme comes with `bottom` on mobile and `anchored` on desktop while the `material` and `windows` themes have `center` on mobile and `anchored` on desktop.

- **Want to see how to set up responsiveness?** [Check out the previous example →](https://demo.mobiscroll.com/react/range/responsive#)

## Related demos

- [Check out the previous example →](https://demo.mobiscroll.com/react/range/responsive#)

## What this demo shows

- Shows five range picker examples for selecting a start and end date, time or date and time with the supported display modes.
- **Control selection** A segmented control above the range pickker allows the user to change the range picker control, by default the calendar is selected, but they can pick from a date with scroller a date and time or a simple date controls.
- **Inline date picker** The inline example embeds the range picker directly in the page without an input or modal.
- **Anchored date picker** The anchored example opens from an input and positions the picker next to that input or another DOM element.
- **Top date picker** The top example opens in a modal that slides down from the top.
- **Bottom date picker** The bottom example opens in a modal that slides up from the bottom.
- **Center date picker** The center example opens in the middle of the viewport with a pop animation.
- **Start and end inputs** Clickable inputs appear above the header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Footer actions** The gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date range. Until a range is selected, the `Set` button remains inactive.
- **Input value** Confirming a date with `Set` displays the selected range in the input using a month, day, and year format.

## Best for

- **Inline layouts** Keep the range picker visible in booking flows, forms, dashboards, or side panels where users need direct access to range selection.
- **Anchored desktop forms** Open the picker next to an input or another page element when the surrounding form should remain visible.
- **Top-aligned mobile flows** Use a modal that enters from the top when the range picker should follow a top-oriented mobile layout.
- **Bottom-aligned mobile flows** Use a modal that enters from the bottom for touch-oriented interfaces and bottom-sheet interaction patterns.
- **Focused modal tasks** Center the picker when range selection should appear as a distinct task in the middle of the viewport.
