blocked = [];

// block all css
browser.webRequest.onBeforeRequest.addListener(
    (d => {return ({cancel: true});}),
    {
        types: ["stylesheet"],
        urls: ["*://*.wikipedia.org/*"]
    },
    ["blocking"]
);

// block wikimedia as long as we didn't replace the img src's
function blockall(d) {
    if (blocked.includes(d.tabId)) {
        return ({cancel: true});
    }
}

browser.webRequest.onBeforeRequest.addListener(
    blockall,
    {
        urls: ["*://upload.wikimedia.org/*"],
        types: ["image", "imageset"]
    },
    ["blocking"]
);

// communicate with content script to know when to stop blocking wikimedia
function listen(message, sender) {
    if (message == "block") {
        blocked.push(sender.tab.id);
    } else if (message == "unblock") {
        blocked = blocked.filter(e => e != sender.tab.id);
    }
}

browser.runtime.onMessage.addListener(listen);
