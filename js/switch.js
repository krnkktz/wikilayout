var toggle = false;

browser.browserAction.onClicked.addListener(e => {
    if (toggle) {
        // somehow enable all the other scripts and css??
        chrome.browserAction.setIcon({path: "icons/wikilayout-48-on.png"});
        toggle = false;
    } else {
        // somehow disable all the other scripts and css??
        chrome.browserAction.setIcon({path: "icons/wikilayout-48-off.png"});
        toggle = true;
    }
});
