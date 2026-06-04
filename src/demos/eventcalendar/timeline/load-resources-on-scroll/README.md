To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-resources-on-scroll#).

## Demo description

The timeline view is virtualized which means that the markup is being generated and maintained on the fly. Navigating both vertically and horizontally through scrolling fires
the 

`onVirtualLoading`

 lifecycle event which can
be used to load the data on scroll rather than load everything on initial page rendering.

This dramatically improves performance in case of a large event and resource count since not all data is loaded in memory from start.

- **Looking to load events on scroll?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/load-events-on-scroll#)

## Related demos

- [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/load-events-on-scroll#)
