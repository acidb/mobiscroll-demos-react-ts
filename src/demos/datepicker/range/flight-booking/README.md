To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/flight-booking#).

## Demo description

For a great booking experience a good date picker is essential. The best implementations are contextual and take the intent *(what people want to do)* and context *(where and how are they doing it)* into account. Learn how to use and customize the range picker and see how you can add your flavor that matches with the overall experience of your application.

## What this demo shows

- Shows five flight booking examples for selecting a date range with differently customized range pickers.
- **Single input** The first example uses a single input for selecting the outbound and return dates.
- **Two inputs** The second example uses two separate inputs, one for the Outbound date and another for the Return date.
- **Invalid days** The third example uses two inputs and displays invalid dates for days when no flights are available. These dates are disabled and cannot be selected.
- **One way or round trip** The fourth example uses separate Outbound and Return inputs together with Round trip and One way options. Round trip is selected by default. Switching to One way disables the Return input and allows selecting only the outbound date.
- **Custom button** The fifth example uses a single input and adds a custom `One way only` button to the footer of the range picker, next to the `Set` button. This provides an alternative way to book a one-way flight directly from the picker.
- **Input behavior** The range picker opens below the input over a darkened backdrop. Clicking outside the picker closes it.
- **Outbound and Return inputs** In the examples with two inputs, clickable Outbound and Return inputs appear above the calendar. The active input has a white background, while the inactive input has a gray background. A clear button appears after a date range is selected.
- **Month view** Every example displays two months at the same time, with past dates disabled. A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to navigate between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start and the second becomes the range end. Selected dates and the dates between them are visually highlighted. The current date is highlighted by default.
- **Footer actions** The gray `Cancel` button discards the changes, while the blue `Set` button confirms the selected date range. Until a valid range is selected, the `Set` button remains inactive.
- **Input value** Confirming the selection with `Set` displays the selected date or date range in the corresponding input using a month, day, and year format.

## Best for

- **Airline booking forms** where travelers need to select outbound and return dates for round-trip flights.
- **One-way flight booking** where only a departure date is required and the return date can be disabled or skipped.
- **Flight availability calendars** where dates without available flights need to be disabled and clearly distinguished from selectable dates.
- **Travel search interfaces** that need separate Outbound and Return inputs while keeping the date selection inside a single range picker.
- **Flexible booking experiences** where users can switch between round-trip and one-way travel directly from the date picker.
