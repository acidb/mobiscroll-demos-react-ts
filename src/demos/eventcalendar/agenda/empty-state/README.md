To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/empty-state#).

## Demo description

Customize the look of the empty state through templating or custom render functions. Give a more purposeful feedback to the user and optionally add further actions
to it. The template can be totally custom or dynamic based on any criteria.

Use the `renderAgendaEmpty` function for putting your custom content together.

## Implementation instructions

- Use `view: { calendar: { type: 'week' }, agenda: { type: 'week' } }`. Define a static event array with events placed 7 days before and 7 days after the current date using relative date helpers — this ensures the current week in the agenda is always empty and consistently triggers the empty state.
- Pass a custom empty state template via `renderAgendaEmpty` (Angular: `agendaEmptyTemplate`, Vue: `agendaEmpty` slot). The template contains a centered illustration image, a short italic message, and an "Add something to it" Button. On button click, show a Toast.
