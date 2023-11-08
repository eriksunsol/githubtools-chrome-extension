document.addEventListener('DOMContentLoaded', function () {
  function registerButtonAction(btn) {
    var actionId = btn.id;
    btn.addEventListener('click', function () {
      (async () => {
        const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        const response = await chrome.tabs.sendMessage(tab.id, { action: actionId });
      })();
    }, false);
  }
  document.querySelectorAll('button').forEach(registerButtonAction);
}, false);