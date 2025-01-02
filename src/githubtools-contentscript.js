let flagShowStupidToolTips = false;

let processTooltip = function (tooltip, display) {
  if (tooltip.attributes["data-type"]?.value == "label") {
    tooltip.style.display = display;
  }
};

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    var actions = {
      hideStupidTooltips: function () {
        document.querySelectorAll('tool-tip').forEach(tt => processTooltip(tt, "none"));
        flagShowStupidToolTips = false;
      },
      showStupidTooltips: function () {
        document.querySelectorAll('tool-tip').forEach(tt => processTooltip(tt, "block"));
        flagShowStupidToolTips = true;
      },
      collapseFiles: function () {
        document.querySelectorAll('div.file-header').forEach(elt => { if (elt.parentElement.querySelector("div.js-file-content").checkVisibility()) elt.childNodes[1].childNodes[1].click(); });
      },
      expandFiles: function () {
        document.querySelectorAll('div.file-header').forEach(elt => { if (!elt.parentElement.querySelector("div.js-file-content").checkVisibility()) elt.childNodes[1].childNodes[1].click(); });
      },
      showAdditionsOnly: function () {
        this.showAdditions();
        this.hideDeletions();
      },
      showDeletionsOnly: function () {
        this.hideAdditions();
        this.showDeletions();
      },
      showAdditionsAndDeletions: function () {
        this.showAdditions();
        this.showDeletions();
      },
      hideDeletions: function () {
        document.querySelectorAll('td.blob-num-deletion').forEach((n) => n.parentElement.style.display = 'none');
      },
      showDeletions: function () {
        document.querySelectorAll('td.blob-num-deletion').forEach((n) => n.parentElement.style.display = 'table-row');
      },
      hideAdditions: function () {
        document.querySelectorAll('td.blob-num-addition').forEach((n) => n.parentElement.style.display = 'none');
      },
      showAdditions: function () {
        document.querySelectorAll('td.blob-num-addition').forEach((n) => n.parentElement.style.display = 'table-row');
      },
      hideComments: function () {
        document.querySelectorAll('td.line-comments').forEach((n) => n.parentElement.style.display = 'none');
      },
      showComments: function () {
        document.querySelectorAll('td.line-comments').forEach((n) => n.parentElement.style.display = 'table-row');
      },
      hideSizePanBoxes: function () {
        document.querySelectorAll('div.mermaid-viewer-control-panel').forEach((n) => n.style.display = 'none');
      },
      showSizePanBoxes: function () {
        document.querySelectorAll('div.mermaid-viewer-control-panel').forEach((n) => n.style.display = 'grid');
      },
    };
    actions[request.action]();
  }
);

document.querySelectorAll('tool-tip').forEach(tt => processTooltip(tt, "none"));

let traverseNodes = function (nodes) {
  if (typeof(nodes) === 'undefined')
    return;
  for(let node of nodes) {
    if (node.tagName === 'TOOL-TIP') {
      processTooltip(node, "none");
    } else {
      traverseNodes(node.childNodes);
    }
  }
};
let observer = new MutationObserver(mutations => {
  if (!flagShowStupidToolTips) {
    for(let mutation of mutations) {
      traverseNodes(mutation.addedNodes);
    }
  }
});
observer.observe(document, { childList: true, subtree: true });
