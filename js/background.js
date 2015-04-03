function genericOnClick(info, tab) {
    var phoneNumber = info.selectionText;
    phoneNumber = phoneNumber.replace(/\s/g, '');

    chrome.tabs.create({url: "tel://" + phoneNumber + "?audio=yes"}, function (tab) {
//        chrome.tabs.remove(tab.id);
    })
}

chrome.contextMenus.create({
    "title": "Dial: %s",
    "contexts": ["selection"],
    "onclick": genericOnClick
});