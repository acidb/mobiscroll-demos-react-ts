To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/rtl-right-to-left#).

## Demo description

RTL support is built in and can be explicitly controlled through the `rtl` option. If not set, it is inherited from the `locale` settings.

- **Explore the different locales** [Check out this example →](https://demo.mobiscroll.com/react/range/localization#)

## Related demos

- [Check out this example →](https://demo.mobiscroll.com/react/range/localization#)

## What this demo shows

- Shows a date range picker example for selecting a start and end date from a monthly calendar.
- **RTL control** A side panel next to the date range picker calendar includes an `Enable Right-To-Left rendering` switch, which is enabled by default.
- **Inline date range picker** This example embeds the date range picker directly in the page without an input by using inline display mode.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-right corner opens the month and year picker. The previous and next arrow buttons on the left navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.

## Best for

- **RTL interfaces** Building date range picker calendars for products used in right-to-left languages such as Arabic, Hebrew, or Farsi.
- **Multilingual applications** Supporting users who need the same date range picker workflow in both LTR and RTL rendering modes.
