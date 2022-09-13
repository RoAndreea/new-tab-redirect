chrome.tabs.onCreated.addListener(function () {
  try {
    chrome.tabs.query(
      { active: true, lastFocusedWindow: true, url: "chrome://newtab/" },
      (tabs) => {
        const id = tabs[0].id;
        chrome.tabs.update(id, { url: "http://www.google.com" });
      }
    );
  } catch (error) {
    console.log(error);
  }
});
