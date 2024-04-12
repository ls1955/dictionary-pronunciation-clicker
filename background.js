const dictUrl = "https://www.dictionary.com/";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(dictUrl)) {
    await chrome.scripting.executeScript({
      files: ["button_clicker.js"],
      target: { tabId: tab.id },
    });
  }
});
