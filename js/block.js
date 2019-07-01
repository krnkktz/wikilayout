function logURL(details) {
    if (details.type=="stylesheet") {
        return ({cancel: true});
    }
}

browser.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: ["*://*.wikipedia.org/*"]},
    ["blocking"]
);
