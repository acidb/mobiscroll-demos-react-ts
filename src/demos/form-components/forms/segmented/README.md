To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/segmented#).

## Demo description

Use the segmented control to render multiple-choice lists with single or multiple select. Use it as tabs, as a compact multi-choice UI instead of a checklist and even as an alternative to a radio buttons or a select.

Break the monotony of event add/edit forms by mixing it in with other inline fields.

- **Interested in add/edit screens for events?** [Check out how the segmented can be used in an event form →](https://demo.mobiscroll.com/react/eventcalendar/create-read-update-delete-CRUD#)

## Related demos

- [Check out how the segmented can be used in an event form →](https://demo.mobiscroll.com/react/eventcalendar/create-read-update-delete-CRUD#)

## Implementation instructions

- Segments are grouped with `SegmentedGroup`/`mbsc-segmented-group`; JS/jQuery has no explicit group wrapper and instead relies on a shared `name` attribute across sibling `input[mbsc-segmented]` elements.
- `select="multiple"` on the group (React/Vue prop, Angular attribute) switches it from single-select (radio behavior) to multi-select (checkbox behavior); JS/jQuery achieves the same by giving each segment `type="checkbox"` instead of `type="radio"`.
- Individual segments carry a `value` in React/Angular/Vue to identify the selection; JS/jQuery segments have no `value` attribute and are read by their checked state directly.
- Initial selection is set per segment: React `defaultChecked={true}`, Angular `[checked]="true"`, Vue `:defaultChecked="true"`, JS/jQuery the plain `checked` attribute. Multiple segments can be checked at once only when the group is in `select="multiple"` mode.
- `icon` (`data-icon` in JS/jQuery) renders an icon inside a segment, either alongside label text or, when the segment has no text content, as an icon-only segment.
- `disabled` set on the group (React/Vue prop, Angular `disabled="true"` attribute, JS/jQuery a `disabled` attribute on every input in the group) disables all of its segments at once; the demo does not show disabling a single segment within an otherwise enabled group.
- The same `Segmented`/`SegmentedGroup` option set applies whether the control is used standalone, as tabs, or mixed inline with other form fields — usage context does not change the available options.

## What this demo shows

- This demo shows segmented controls configured for single and multiple selection from predefined options.
- **Segment content** Segments containing text, icons, or a combination of both.
- **Compact controls** Icon-only segments for space-efficient actions and selections.
- **Control states** Clear visual feedback for selected and unselected segments, along with a disabled segmented control.
- **Alternative input patterns** Segmented controls used as tabs and as compact alternatives to checklists, radio button groups, and select controls.

## Best for

- **Short option sets** Letting users choose one item from a small group, such as a display mode, status, or preference.
- **Compact multiple choice** Letting users select several options without the vertical space required by a checklist.
- **View switching** Presenting a small set of tab-like views or modes in a single inline control.
- **Icon-based actions** Providing recognizable actions or choices where horizontal space is limited.
- **Inline forms** Mixing concise choices with other fields in add and edit forms, including event forms.
