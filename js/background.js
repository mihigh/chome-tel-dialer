function genericOnClick(info, tab) {
    var phoneNumber = info.selectionText;
    phoneNumber = phoneNumber.replace(/\s/g, '');

    chrome.tabs.create({url: "facetime://" + phoneNumber})
}

chrome.contextMenus.create({
    "title": "Call FaceTime: %s",
    "contexts": ["selection"],
    "onclick": genericOnClick
});