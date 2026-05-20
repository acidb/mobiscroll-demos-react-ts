To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/display-multiple-days-weeks#).

## Demo description

The scheduler has three types: `day`, `week` and `month`. Use the `size` property of the configuration object to set the length of the range.

Multiples of days, weeks and months are supported. The reference date, controlled through the `refDate` option, is today by default, but it can be set to any date, like the first day of the month, or the first day of the year. The `refDate` serves as the start of the reference range. From that point on you can navigate forward and backward.

A couple of examples:

- **Rolling two weeks** - use `type: 'day'` and `size: 14`
- **Rolling ten days** - use `type: 'day'` and `size: 10`
- **Two weeks (starting with Sun/Mon)** - use `type: 'week'` and `size: 2`
- **Quarter view, starting from January** - use `type: 'month'` and `size: 3` with `refDate: '2021-01-01'`
- **Rolling three months** - use `type: 'month'` and `size: 3`
- **Year view** - use `type: 'month'` and `size: 12` with `refDate: '2021-01-01'`
