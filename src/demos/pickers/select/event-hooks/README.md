To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/event-hooks#).

## Demo description

The select ships with different event hooks for deep customization. Events are triggered through the lifecycle of the component where you can tie in custom functionality and code.

While users interact with the UI events like `onChange`, `onSet`, `onInit` ... will be triggered.

- **For a complete list of events go to the documentation** See available lifecycle events →

## Related demos

- See available lifecycle events →

## Implementation instructions

- The demo wires eight lifecycle/interaction events: `onInit` (fires once when the picker instance is created), `onOpen` (fires when the picker starts opening), `onChange` (fires when the confirmed value changes, i.e. after `Set`/selection), `onTempChange` (fires on every temporary/in-progress selection before it's confirmed), `onFilter` (fires when the header search box's filter text changes), `onCancel` (fires when the picker is dismissed via the `Cancel` action), `onClose` (fires when the picker starts closing, regardless of confirm/cancel), and `onDestroy` (fires when the picker instance is destroyed).
- `filter: true` adds a search input to the popup header; typing into it narrows the visible option list and fires `onFilter` on each keystroke — this is a real Select option, not demo chrome.
- All handlers receive `(event, inst)` in JS/jQuery — `event` carries hook-specific data and `inst` is the select instance.
- Event wiring differs per framework: JS/jQuery pass `onInit`/`onOpen`/`onChange`/`onTempChange`/`onFilter`/`onCancel`/`onClose`/`onDestroy` as function options inside `.select({ ... })`; React binds them as same-named props (`onInit`, `onOpen`, `onChange`, `onTempChange`, `onFilter`, `onCancel`, `onClose`, `onDestroy`) on `<Select>`, each taking a `(event, inst)` callback; Vue binds them as `@init`/`@open`/`@change`/`@temp-change`/`@filter`/`@cancel`/`@close`/`@destroy` on `<MbscSelect>` — note `@temp-change` is kebab-cased, not `@tempChange`; Angular binds them as `(onInit)`/`(onOpen)`/`(onChange)`/`(onTempChange)`/`(onFilter)`/`(onCancel)`/`(onClose)`/`(onDestroy)` output bindings on `<mbsc-select>`.
- Opening/clearing from outside the input is imperative in every framework covered by the demo (JS/jQuery): obtain the instance via `.mobiscroll('getInst')`, then call `inst.open()` from the `Show` button's click handler and `inst.setVal(null)` from the `Clear` button's click handler to programmatically clear the current selection.
- `inputElement` binds the picker's popup trigger to a separate `<input>` element, same as in the data-sources demo.
- The demo's event log panel appends one line per fired event, naming the event and linking to its API documentation entry — this logging is demo-page instrumentation, not a Select feature.

## What this demo shows

- Shows a single-value select examples with the fired event hooks.
- **Select input** This example opens the picker when the user focuses or clicks the input. It can also be opened with the `Show` button below the input. While with the `Clear` button you can clear the selected value.
- **Input behavior** The picker opens below the input and closes when the user clicks outside it.
- **Filtering** In the header of the picker there is a serach bar where entering a text filters the available options. 
- **Picker content** Show a predefined list of options in a dropdown-style popup.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Input value** Selecting an option updates the input with that value. With the `Clear` button, below the input, you can clear the selected value.
- **Event log** An `Event log` panel is shown on the left and lists the lifecycle events fired during interactions such as click, hover, and similar actions.

## Best for

- **Lifecycle event discovery** Understanding which select lifecycle hooks fire during common user interactions.
