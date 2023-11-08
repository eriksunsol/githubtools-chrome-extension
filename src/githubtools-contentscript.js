chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    var actions = {
      collapseFiles: function () {
        document.querySelectorAll('div.file-header').forEach(elt => { if (elt.nextElementSibling.checkVisibility()) elt.childNodes[1].childNodes[1].click(); });
      },
      expandFiles: function () {
        document.querySelectorAll('div.file-header').forEach(elt => { if (!elt.nextElementSibling.checkVisibility()) elt.childNodes[1].childNodes[1].click(); });
      },
      hideDeletions: function () {
        document.querySelectorAll('td.blob-num-deletion').forEach((n) => n.parentElement.style.display = 'none')
      },
      showDeletions: function () {
        document.querySelectorAll('td.blob-num-deletion').forEach((n) => n.parentElement.style.display = 'table-row')
      },
      hideAdditions: function () {
        document.querySelectorAll('td.blob-num-addition').forEach((n) => n.parentElement.style.display = 'none')
      },
      showAdditions: function () {
        document.querySelectorAll('td.blob-num-addition').forEach((n) => n.parentElement.style.display = 'table-row')
      },
      hideComments: function () {
        document.querySelectorAll('td.line-comments').forEach((n) => n.parentElement.style.display = 'none')
      },
      showComments: function () {
        document.querySelectorAll('td.line-comments').forEach((n) => n.parentElement.style.display = 'table-row')
      },
    };
    actions[request.action]();
  }
);

