To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/create-read-update-delete-CRUD#).

## Demo description

**Create new events**

Drag to create and click to create is enabled. Events can be created by dragging or with double clicks. As soon as the initial position is confirmed, a temporary event is created and a custom edit dialog is shown for refinement. On cancel the temporary event will be removed and on confirmation the event will stay in the calendar.

**Edit existing events**

Drag to resize and drag to move is enabled. Events can be reordered and resized. In addition to that, clicking on the event will open a custom dialog that enables editing the various properties.

**Delete events**

Delete can be implemented inside the edit dialog with a button. It's just a matter of removing it from the data object. If a dialog is not shown on click, focused events can be deleted with the *backspace* and *delete* keys.

- **Interested in adding recurrence configuration?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/recurring-event-add-edit-dialog#)
