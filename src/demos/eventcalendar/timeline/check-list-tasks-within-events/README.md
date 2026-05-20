To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/check-list-tasks-within-events#).

## Demo description

When there are subtasks related to work orders, it may be necessary to display them in the context of work order (or event).
Subtasks can be rendered as a list with the possibility of adding new items using the [<code>Prompt</code>](https://demo.mobiscroll.com/react/forms/alert-confirm-prompt#) or more sophisticated modals even. The height of resources will dynamically
increase depending on the height of the events/length of lists.

To allow dynamic changes in heights according to the length of subtask lists, `eventHeight: 'variable'` is used, along with custom event content rendering to maintain the appropriate theme styles.
