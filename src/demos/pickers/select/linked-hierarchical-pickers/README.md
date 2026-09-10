To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/linked-hierarchical-pickers#).

## Demo description

Multiple selects can be linked together as a hierarchy. A region > division > subdivision is a great example of such a hierarchy where each level is dynamically populated based on the selection of the previous level.

## What this demo shows

- Three linked select inputs create a region, division, and subdivision hierarchy.
- **Inputs** The Region, Division, and Subdivision inputs are displayed vertically in hierarchical order.
- **Initial state** The Region input is enabled by default, while the Division and Subdivision inputs remain disabled until the preceding level has a value.
- **Dependent options** Each selection populates the options available at the next level of the hierarchy.
- **Picker interaction** Focusing or clicking an enabled input opens its picker below the input; clicking outside closes it.
- **Picker content** Each picker displays a predefined list of options in a dropdown-style popup.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark and updates the associated input value.

## Best for

- **Geographic selection** Guide users through related location levels, such as region, division, and subdivision.
- **Organizational structures** Select a department, team, and role from dependent options.
- **Product catalogs** Narrow a selection by category, subcategory, and product.
- **Vehicle selection** Choose a maker, model, and trim in sequence.
