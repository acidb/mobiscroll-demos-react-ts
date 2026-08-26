To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/responsive#).

## Demo description

The range picker has a liquid layout, which means it nicely adapts to its surroundings. There are times however when you would like to set up the component responsively.

Use the responsive option to configure the picker and change the options based on the viewport width. There are five predefined breakpoints:

- `xsmall` - min-width: 0px
- `small` - min-width: 576px
- `medium` - min-width: 768px
- `large` - min-width: 992px
- `xlarge` - min-width: 1200px
- use `custom` for setting a custom `breakpoint`

It is a good idea to change the `display` or `controls` option to tailor the UX. This way you can have a **single month calendar on mobile** and a **two month view on bigger screens**.

## What this demo shows

- Shows a date range picker example for selecting a date range across touch and desktop layouts.
- **Viewport switcher** A segmented control above the range picker switches between the demo's viewport presets.
- **Small screen layout** At the `375px` viewport preset, the range picker opens at the center of the screen and shows one month.
- **Medium screen layout** At the `576px` and `768px` viewport presets, the range picker opens at the center of the screen and shows two months.
- **Large screen layout** At the `992px` and `1200px` viewport presets, the range picker opens at the center of the screen, shows two months and the `touchUi` option is disabled.
- **Range picker input** Focusing or clicking the input opens the picker.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date range. Until a range is selected, the `Set` button remains inactive.
- **Input value** In the input-based examples, confirming a date with `Set` displays the selected range in the input using a month, day, and year format.

## Best for

- **Appointment booking** Letting users choose an appointment date range from phones, tablets, or desktop computers.
- **Travel and accommodation forms** Providing a date range picker that adapts to the available screen size when selecting departure, arrival, or check-in dates.
