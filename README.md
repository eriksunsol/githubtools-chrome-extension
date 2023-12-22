# GitHub Tools Chrome Extension

This Chrome extension adds a side panel with some useful tools for GitHub:

- General
  - Hide and show "stupid" tooltips
    _(Some UI elements on GitHub pop up tooltips that annoyingly get in the way of other UI elements nearby.)_
- Diff views
  - Collapse and expand all files
  - Show only additions, only deletions, or both
  - Hide and show comments

## Running it

1. Clone this repository.
2. Load the `src` directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. Go to https://github.com.
4. Open the Chrome side panel and select "GitHub Tools", or press `Ctrl-B` (`Cmd-B` on MacOS) to open it quickly.

## Acknowledgements

This extension is loosely based on the [Site-specific side panel example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-site-specific) code.
