let flagShowSizePanBoxes = false;

let processTooltip = function (tooltip, display) {
  if (tooltip.attributes["data-type"]?.value == "label") {
    tooltip.style.display = display;
  }
};

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    var actions = {
      hideSizePanBoxes: function () {
        document.querySelectorAll('div.mermaid-viewer-control-panel').forEach((n) => n.style.display = 'none');
      },
      showSizePanBoxes: function () {
        document.querySelectorAll('div.mermaid-viewer-control-panel').forEach((n) => n.style.display = 'grid');
      },
    };
    if (request.action in actions) {
      actions[request.action]();
    }
  }
);

document.querySelectorAll('div.mermaid-viewer-control-panel').forEach((n) => n.style.display = 'none');
