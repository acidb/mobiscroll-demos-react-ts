To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/switch#).

## Demo description

Use the switch for turning options and setting fields on/off. Different color presets are available.

## Implementation instructions

- The on/off state is controlled by `checked`/`defaultChecked` (React `defaultChecked={true}`; JS/jQuery `checked` attribute on `<input type="checkbox" mbsc-switch>`; Angular/Vue bind it through two-way binding — see below).
- `label` sets the switch's title text (JS/jQuery: `data-label` attribute).
- `description` sets secondary helper text shown under the label (JS/jQuery: `data-description` attribute).
- `disabled` renders the switch non-interactive in either the on or off state; combine with `checked`/`defaultChecked` to show a disabled-on switch.
- `color` applies a preset accent color to the track/thumb when on: `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, or `'info'`.
- Framework state binding differs: JS/jQuery reads/writes state imperatively via `mobiscroll.getInst(element).checked` or `$(element).mobiscroll('setVal', ...)`; React uses `defaultChecked`/`checked` + `onChange`; Angular binds via `[(ngModel)]="value"` for two-way sync; Vue binds via `v-model="value"`.
- Framework markup differences: JS/jQuery wraps a plain `<input type="checkbox" mbsc-switch>` in a `<label>` with `data-*` attributes for `label`/`description`/`color`; React uses `<Switch label="..." description="..." color="primary" disabled={true} defaultChecked={true} />`; Angular uses `<mbsc-switch label="..." color="primary" [(ngModel)]="value" [disabled]="true">`; Vue uses `<MbscSwitch v-model="value" label="..." color="primary" />` (with `disabled` set separately per switch since it isn't part of the `v-model` binding).
- Grouping switches under a shared `mbsc-form-group` with an `mbsc-form-group-title` is a layout convention for the demo, not a switch option — each switch instance is independently configured.

## What this demo shows

- This demo shows examples for the switch component.
- **Switch states** Switch controls displayed in both on and off states.
- **Labels and descriptions** Switches paired with titles and descriptive text.
- **Disabled states** Disabled switches displayed in both on and off states.
- **Color presets** Switches using the primary, secondary, success, danger, warning, and info color presets.

## Best for

- **Settings and preferences** Let users enable or disable configurable options.
- **Feature controls** Turn individual features or modes on and off.
- **Notification preferences** Manage binary choices for notification categories such as email, push, or reminders.
- **Privacy and permissions** Present clear on/off choices for consent, visibility, or access settings.
