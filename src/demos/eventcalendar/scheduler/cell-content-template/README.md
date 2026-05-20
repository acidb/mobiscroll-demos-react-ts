To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/cell-content-template#).

## Demo description

Events appear over scheduler cells, which provide a great background layer for information.
They can be `disabled`, styled with `colored backgrounds`, or used to present rich content.

Cell content in the scheduler can be customized using the renderCell option. The callback receives cell data such as the date, resource, and overlapping events in the cell. This lets you add custom content like icons or badges to cells based on their data. It's useful for showing holidays, availability, or statuses.

Cells can be hourly, 30 minute long, or however it is setup using the
[timeCellStep](https://docs.mobiscroll.com/react/eventcalendar/timeline#view-timeline-timeCellStep) option.
