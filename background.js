chrome.webRequest.onBeforeRequest.addListener(d => console.log('webRequest %s tabId: %d, frameId: %d', d.type, d.tabId, d.frameId), {urls: ['<all_urls>']})

chrome.runtime.onMessage.addListener((msg, sender) => console.log('onMessage', sender));

const iframe = document.createElement('iframe');
iframe.src = 'https://example.org';
document.body.appendChild(iframe);
