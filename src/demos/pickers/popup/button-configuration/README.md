To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/popup/button-configuration#).

## Demo description

You can display the popup without any buttons for a clean, minimal interface, use predefined buttons for standard actions,
or customize it by adding your own buttons with tailored text, style, and functionality to meet your specific needs.

By default, the popup is displayed without any buttons for a clean, minimal look.
If you want some standard actions you can use the following predefined `buttons`:

- `ok` for confirmation
- `cancel` to dismiss the popup
- `close` for closing the popup without action
- `set` for saving or applying changes

You can add custom buttons with tailored text, style, and functionality if you have more specific needs.

## Implementation instructions

- `buttons: []` (or the option omitted) renders the popup with no footer buttons — the default, minimal configuration.
- `buttons: ['ok', 'cancel']` renders the two predefined buttons by name; `ok` renders as the primary (blue) action, `cancel` as the secondary (gray) action. Both predefined buttons close the popup when clicked — no handler is required.
- Other predefined button keywords are `'close'` (closes the popup without a confirm action) and `'set'` (applies/confirms changes, typically paired with a form).
- A custom button is an object entry in `buttons`: `{ text: 'Custom', handler: function () { ... } }`. `text` sets the button label; `handler` runs on click and is responsible for any action, including closing the popup (a custom button does not auto-close unless the handler calls `.close()` or the popup instance's close logic).
- In this demo the custom button's `handler` calls `mobiscroll.toast({ message: 'Custom button clicked' })` rather than closing the popup.
- `buttons` accepts a mixed array of predefined string keywords and custom button objects in any combination, e.g. `buttons: [{ text: 'Ok', handler: 'set' }, 'cancel']` — a custom object's `handler` can also be one of the predefined action keywords (`'set'`, `'cancel'`, `'close'`) instead of a function.
- Across frameworks the option is passed the same way: React/Vue bind it as a `buttons`/`:buttons` prop with the same array shape, Angular binds `[buttons]="[...]"`, and JS/jQuery pass it in the options object at `.popup({ buttons: [...] })`.

## What this demo shows

- Three popup examples demonstrate no buttons, predefined buttons, and a custom button.
- **No buttons** The first example opens a popup without buttons, which is the default configuration.
- **Predefined buttons** The second example opens a popup with a blue `Ok` button and a gray `Cancel` button. Both buttons closes the popup.
- **Custom button** The third example opens a popup with a custom button. Clicking it displays the message `Custom button clicked`.
- **Modal layout** Each popup uses the default modal layout.
- **Popup content** Each popup contains a heading and descriptive text.
- **Visual separation** A modal overlay and shadow separate each popup from the underlying content.

## Best for

- **Informational popups** Use a buttonless popup when the content does not require an action in the popup footer.
- **Confirmation prompts** Use predefined `Ok` and `Cancel` buttons when users need to confirm or dismiss an action.
- **Custom workflows** Use a custom button when an action needs tailored text, styling, or behavior.
- **Configuration comparison** Compare the available button patterns before choosing one for a popup workflow.
