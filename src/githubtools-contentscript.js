chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === "hideDeletions") hideDeletions();
    if (request.action === "showDeletions") showDeletions();
    if (request.action === "hideAdditions") hideAdditions();
    if (request.action === "showAdditions") showAdditions();
    if (request.action === "hideComments") hideComments();
    if (request.action === "showComments") showComments();
  }
);

function hideDeletions() {
  document.querySelectorAll('td.blob-num-deletion').forEach((n) => n.parentElement.style.display = 'none')
}

function showDeletions() {
  document.querySelectorAll('td.blob-num-deletion').forEach((n) => n.parentElement.style.display = 'table-row')
}

function hideAdditions() {
  document.querySelectorAll('td.blob-num-addition').forEach((n) => n.parentElement.style.display = 'none')
}

function showAdditions() {
  document.querySelectorAll('td.blob-num-addition').forEach((n) => n.parentElement.style.display = 'table-row')
}

function hideComments() {
  document.querySelectorAll('td.line-comments').forEach((n) => n.parentElement.style.display = 'none')
}

function showComments() {
  document.querySelectorAll('td.line-comments').forEach((n) => n.parentElement.style.display = 'table-row')
}

