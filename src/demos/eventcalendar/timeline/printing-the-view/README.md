To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/printing-the-view#).

## Demo description

The timeline includes print optimized styling through the print add-on. This needs to be added to the download package or installed separately from a dedicated NPM package.

Print styling is applied when someone prints the page that contains the timeline. In addition to that, you can call the `print` method on the instance which grabs only the markup of the timeline, places it onto a temporary page and calls the browsers printing function. This is especially useful when you want to add a button to only print the timeline rather than the whole page.

Besides printing, PDF export is possible through the print dialog of the browser.

> **⚠️ Note:** The **print module** is not available in the trial. You can try the live demo to see how it looks.
