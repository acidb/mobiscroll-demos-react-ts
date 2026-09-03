To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/popup/responsive#).

## Demo description

The popup component adapts fluidly to its environment. There are times however when you would like to set the component up responsively.

Use the responsive option to configure the popup and change the options based on the viewport width. There are five predefined breakpoints:

- `xsmall` - min-width: 0px
- `small` - min-width: 576px
- `medium` - min-width: 768px
- `large` - min-width: 992px
- `xlarge` - min-width: 1200px
- use `custom` for setting a custom `breakpoint`

It is a good idea to adjust the `display` to tailor the UX. This allows you to have the popup **bottom-positioned on mobile devices**, **centered on tablets**, and **anchored to input on larger screens** to enhance the user experience.

## What this demo shows

- A responsive popup that uses different display modes across touch and desktop layouts.
- **Viewport switcher** A segmented control above the popup switches between viewport presets.
- **Small screen layout** At the `375px` viewport preset, the popup opens at the bottom of the screen.
- **Medium screen layout** At the `576px` and `768px` viewport presets, the popup opens as a centered modal.
- **Large screen layout** At the `992px` and `1200px` viewport presets, the popup opens as a popover anchored to the button.
- **Popup layout** The popup uses a custom layout for its content.
- **Custom content** The popup contains a custom image or logo, a heading, and descriptive text.
- **Visual separation** A modal overlay and shadow separate the popup from the underlying content.

## Best for

- **Cross-device workflows** Presenting the same popup content in layouts suited to phones, tablets, and desktop screens.
- **Touch-friendly interactions** Positioning popups at the bottom of small screens for easier access on touch devices.
- **Focused tablet experiences** Displaying popup content in a centered modal at medium viewport widths.
- **Contextual desktop actions** Anchoring a popover to its trigger on larger screens so the popup stays visually connected to the action that opened it.
- **Responsive applications** Changing popup display options at predefined or custom breakpoints without maintaining separate implementations for each screen size.
