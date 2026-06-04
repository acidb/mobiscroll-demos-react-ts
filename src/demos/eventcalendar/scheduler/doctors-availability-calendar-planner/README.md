To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/doctors-availability-calendar-planner#).

## Demo description

You can tailor the scheduler to show availability per doctor using visual indicators in each column.
Availability is marked with a green status track on the left side of each doctor's column,
making open slots easy to spot and supporting quick scheduling decisions.

To create the visual indicator, we added extra resource columns with a narrow width, styled using a custom CSS class set via the `cssClass` property in the resource data. The availability track is shown using events placed on these columns, with their content hidden via renderSchedulerEvent option and resized responsively based on the narrow resource column width. Time ranges outside each doctor's working hours are disabled to reflect their actual schedule.

## Implementation instructions

- Use `type: 'week'` with `startDay: 1`, `endDay: 5`, `startTime: '01:00'`, `endTime: '24:00'`, and `allDay: false`. Set `groupBy: 'date'` so all doctor columns appear side by side under each day heading.
- Define resources in interleaved pairs for each doctor: a narrow "bar" resource (even ID, `cssClass: 'mds-healthcare-res-col-bar'`, `eventCreation: false`) immediately followed by the doctor resource (odd ID, `name`, `img`, `description`, `color`, `cssClass: 'mds-healthcare-res-col'`). The bar column renders as a narrow green availability track to the left of the doctor's appointment column.
- Add a `type: 'availability'` event for each bar resource covering the doctor's working hours (`start`/`end`), with `recurring: { repeat: 'daily' }` and `editable: false`. The bar events serve purely as a visual availability indicator — their content is suppressed via `renderSchedulerEventContent`.
- Define `invalid` entries per doctor pair: apply two recurring `invalid` entries to both the bar and doctor resource IDs — one covering `'00:00'` to the working-hours start and one from the working-hours end to `'24:00'`, each with `recurring: { repeat: 'daily' }`. This greys out off-hours on both the bar and appointment columns simultaneously.
- Use `renderSchedulerEventContent` (Angular: `schedulerEventContentTemplate`, Vue: `schedulerEventContent`) to render event content: return a "Patient: name" label for regular appointment events (check `!event.original.type`), and `null` for availability bar events to hide their content entirely.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to differentiate the two column types: for doctor columns (`cssClass === 'mds-healthcare-res-col'`), render an avatar image alongside the doctor's name and description; for bar columns, render an empty fragment.
- Set `dragToCreate`, `dragToMove`, `dragToResize`, `eventOverlap={false}`, and `dragTimeStep={480}` on the `Eventcalendar`.
- In `onEventCreated`, `onEventUpdated`, and `onEventDeleted`, show a `Toast` with a short status message.
