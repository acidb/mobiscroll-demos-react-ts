To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/flight-scheduling-two-synchronized-timelines#).

## Demo description

For creating complex dashboards like for managing jet bookings sometimes two separate timeline instances are necessary.

Sticking two instances together with synchronized horizontal scrolling allows for a setup where the top timeline is a list of bookings with one flight per rows and the bottom timeline holds available aircrafts.

Only moving events from the top timeline is allowed and events are fixed in time, meaning the start and end cannot be changed. Things like `eventOverlap` is set to `false` to avoid overlapping events.
