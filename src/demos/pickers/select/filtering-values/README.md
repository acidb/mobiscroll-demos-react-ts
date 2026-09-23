To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/filtering-values#).

## Demo description

Enable filtering by setting the filter option to `true`. Filtering happens on the client side by default, however remote filtering can be implemented using the onFilter event.

## Implementation instructions

- `filter: true` turns on the search box in the picker header for both `Select` instances shown in this demo.
- **Local filtering** (left picker): `data` is a static in-memory array of `{ text, value }` objects; with only `filter: true` set and no filter handler, the component filters that array client-side by matching `text` against the typed query — no extra wiring is needed.
- **Remote filtering** (right picker): an `onFilter` handler intercepts the built-in filtering and returns `false` to suppress it, then issues its own request — `getJson('https://trial.mobiscroll.com/airports/' + encodeURIComponent(filterText), callback, 'jsonp')` in JS/React/Vue, or `HttpClient.jsonp(...)` in Angular — and repopulates the bound `data` array/ref from the response (`{ text: item.name, value: item.code }` per record) once results arrive.
- `onFilter`'s handler receives an event object exposing `filterText` (the current search-box value); returning `false` from the handler is what stops the component from also running its own client-side match against `data`.
- The remote example also calls the same fetch-and-populate function once on mount/init with an empty `filterText` so the picker has an initial option list before the user types anything.
- Event wiring differs per framework: React passes `onFilter` as a prop callback on `<Select>`; JS/jQuery pass `onFilter` as a function option inside `.select({ ... })`; Vue binds it as `@filter` on `<MbscSelect>`; Angular cannot bind `(onFilter)` as a template output — it must be set inside an `options` object (e.g. `remoteOptions: MbscSelectOptions = { onFilter: (ev) => {...; return false;} }`) passed via the `[options]="remoteOptions"` input.
- `display="center"` (local example) vs `display="anchored"` (remote example) are independent of filtering — they only control whether the picker opens as a centered modal or an anchored dropdown.

## What this demo shows

- Two select examples displayed side by side demonstrate filtering with local and remote data.
- **Select inputs** Focusing or clicking either input opens its picker below the input.
- **Input behavior** Clicking outside an open picker closes it.
- **Filtering** Entering a name in the search field filters the available options. The left example filters local data, while the right example filters remote data.
- **Picker content** Each picker displays a predefined list of options in a dropdown-style popup.
- **Hover state** Hovering over an option highlights it.
- **Selection** The selected option is marked with a checkmark.
- **Scrolling** Users can scroll through the available options.
- **Input value** Selecting an option updates the input with the selected value.

## Best for

- **Local reference lists** Filter a fixed list of countries, languages, departments, or categories stored in the application.
- **Product and service selection** Help users find an item quickly in a predefined catalog or service list.
- **Remote directories** Search customer, employee, or location records loaded from a remote data source.
- **Large or frequently updated datasets** Retrieve matching options remotely when loading and filtering the complete dataset in the browser is impractical.
