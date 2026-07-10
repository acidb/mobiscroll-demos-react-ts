To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/basic-usage#).

## Demo description

Use the `&lt;mobiscroll.Eventcalendar /&gt;` component and pass all the necessary options as props, like `theme="ios"`.

The events can be [passed in a couple of different ways](https://demo.mobiscroll.com/react/agenda/load-inline-data#). In this example we are loading them through an external API.

- **Interested to learn about the calendar view?** [Learn how to set up the range the agenda covers →](https://demo.mobiscroll.com/react/agenda/daily-weekly-monthly-annual-agenda#)

## Related demos

- [Learn how to set up the range the agenda covers →](https://demo.mobiscroll.com/react/agenda/daily-weekly-monthly-annual-agenda#)

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `inst.setEvents(events)` in the callback.
- On `onEventClick`: show a Mobiscroll `Toast` with `args.event.title` as the message.
