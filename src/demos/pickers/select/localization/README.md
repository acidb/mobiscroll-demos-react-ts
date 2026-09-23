To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/localization#).

## Demo description

All components are fully localized. In case of the select this covers button copy, rtl and more.
You can see how each example shows up by clicking on the small flag icon or checking the examples below.

- **All settings can be manually overridden** See what options the localization impacts →

## Related demos

- See what options the localization impacts →

## Implementation instructions

- The `locale` option accepts a locale object that translates the picker's built-in UI text (e.g. `Set`/`Cancel` button labels, other chrome strings) and applies RTL layout for right-to-left locales (Arabic, Hebrew, Persian). It does not translate the app-supplied option `text`/`data` — those stay whatever the app passes in.
- Locale objects are named per-language exports, not raw strings: JS/jQuery reference them off the global as `mobiscroll.locale.<code>` (e.g. `mobiscroll.locale.es`); React, Angular, and Vue import a named export per locale from their respective package, e.g. `import { localeEs } from '@mobiscroll/angular'` / `'@mobiscroll/react'` / `'@mobiscroll/vue'`.
- Per-framework binding: JS/jQuery pass `locale: mobiscroll.locale.es` inside `.select({...})`; React binds `locale={localeEs}` as a prop on `<Select>`; Angular binds `[locale]="localeEs"` on `<mbsc-select>` after importing/assigning `localeEs` on the component; Vue binds `:locale="localeEs"` on `<MbscSelect>` after importing `localeEs`.
- Switching locale at runtime (as the demo's language dropdown does) is imperative even outside JS/jQuery when driven by a control external to the component: JS/jQuery call `inst.setOptions({ locale: mobiscroll.locale[code] })` on the instance obtained via `.mobiscroll('getInst')`; in a component-driven app the equivalent is updating the bound `locale` value/prop and letting the framework re-render.
- "All settings can be manually overridden" means any individual option (e.g. custom button text) set explicitly on the picker takes precedence over the string that locale would otherwise supply — locale sets defaults, not overrides.

## What this demo shows

- Shows a single-value select examples with different localization options.
- **Locale selector** The left side of the select shows a `Set localization to` label with a dropdown. That opens a list of available locales that updates the select component localization.
- **Localization behavior** The localized setup affects button labels, RTL layout support, and other built-in UI text and behaviors.
- **Select input** This example opens the picker when the user focuses or clicks the input.
- **Input behavior** The picker opens below the input and closes when the user clicks outside it.
- **Picker content** Show a predefined list of options in a dropdown-style popup.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Input value** Selecting an option updates the associated input with that value.

## Best for

- **Multi-language select UIs** Apps that need the same select experience in multiple languages and regional formats.
- **Region-specific experiences** Products that need translated interface copy without rebuilding the select component UI.
