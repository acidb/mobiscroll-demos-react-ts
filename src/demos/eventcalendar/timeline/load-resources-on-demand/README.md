To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-resources-on-demand#).

## Demo description

The resources can be populated on initialization or in case of a bigger hierarchy, the more efficient way is to load the child resources and their events on demand.

Getting the resources and the events in real time as the user navigates improves load performance.

Use the 

`onResourceExpand`

 lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/timeline/event-hooks#) and places where to drop logic to customize the experience.
