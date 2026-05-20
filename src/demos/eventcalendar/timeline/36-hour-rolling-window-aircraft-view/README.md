To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/36-hour-rolling-window-aircraft-view#).

## Demo description

The timeline component is ideal for highly dynamic resource management scenarios, such as tracking a global aircraft fleet, offering a powerful visualization solution. 
The primary technical focus is on creating a 36-hour continuous, forward-looking window that automatically updates to start from the current hour, providing an adaptive "rolling" schedule view.

To implement the dynamic 36-hour window, a single-day timeline view is configured. The `startTime` and `endTime` properties are calculated in JavaScript based on the 
current system time prior to initialization. This calculation ensures the view always spans exactly 36 hours ahead, which is achieved by setting the `endTime` with a calculated date offset (e.g., +1 or +2 days) to leverage the shifted days feature for continuous rendering. 
The time axis resolution is hourly, which is optimal for monitoring time-sensitive flights and maintenance events.

The `resources`, representing individual aircraft (tail numbers), are organized in a hierarchical structure (e.g., Airbus A350-900/Base: LAX → N351AD). This grouping allows managers to quickly drill down from a fleet level to an individual aircraft's current status. 
`Events`, which represent flights, are labeled concisely with common IATA airport codes (e.g., "JFK → LHR") for immediate route identification.
