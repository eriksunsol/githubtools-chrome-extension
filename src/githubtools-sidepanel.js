function hideDeletions() {
  sendActionMessage("hideDeletions");
}

function showDeletions() {
  sendActionMessage("showDeletions");
}

function hideAdditions() {
  sendActionMessage("hideAdditions");
}

function showAdditions() {
  sendActionMessage("showAdditions");
}

function hideComments() {
  sendActionMessage("hideComments");
}

function showComments() {
  sendActionMessage("showComments");
}

function sendActionMessage(action) {
  (async () => {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { action: action });
  })();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hideDeletions').addEventListener('click', hideDeletions, false);
  document.getElementById('showDeletions').addEventListener('click', showDeletions, false);
  document.getElementById('hideAdditions').addEventListener('click', hideAdditions, false);
  document.getElementById('showAdditions').addEventListener('click', showAdditions, false);
  document.getElementById('hideComments').addEventListener('click', hideComments, false);
  document.getElementById('showComments').addEventListener('click', showComments, false);
}, false);