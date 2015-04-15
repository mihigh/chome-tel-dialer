function sanitizeNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\s/g, '');
    phoneNumber = phoneNumber.replace(/\-/g, '');
    phoneNumber = phoneNumber.replace(/\(/g, '');
    phoneNumber = phoneNumber.replace(/\)/g, '');

    return phoneNumber;
}

function call_newTab(protocol, info) {
    var phoneNumber = sanitizeNumber(info.selectionText);
    chrome.tabs.create({url: protocol + "://" + phoneNumber})
}

function call(protocol, meniuInfo, tabInfo) {
    console.log(meniuInfo);
    console.log(tabInfo);
    var phoneNumber = sanitizeNumber(meniuInfo.selectionText);

    chrome.tabs.executeScript(tabInfo.id, {'code': ''

        + 'var pre = document.createElement("pre");\n'
        + 'var a = document.createElement("a");\n'
        + 'var text = document.createTextNode("Call Number");\n'

        + 'pre.lang = "html4strict";\n'
        + 'a.href = "' + protocol + ':' + phoneNumber + '";\n'

        + 'a.appendChild(text)\n'
        + 'pre.appendChild(a)\n'
        + 'document.body.appendChild(pre);\n'
        + 'a.click();'
    })
}


chrome.contextMenus.create({
    "title": "Tel: %s",
    "contexts": ["selection"],
    "onclick": function (meniuInfo, tabInfo) {
        call("tel", meniuInfo, tabInfo);
    }
});

chrome.contextMenus.create({
    "title": "Sip: %s",
    "contexts": ["selection"],
    "onclick": function (meniuInfo, tabInfo) {
        call("sip", meniuInfo, tabInfo);
    }
});

chrome.contextMenus.create({
    "title": "Callto: %s",
    "contexts": ["selection"],
    "onclick": function (meniuInfo, tabInfo) {
        call("callto", meniuInfo, tabInfo);
    }
});

chrome.contextMenus.create({
    "title": "Facetime: %s",
    "contexts": ["selection"],
    "onclick": function (meniuInfo, tabInfo) {
        call("facetime", meniuInfo, tabInfo);
    }
});

chrome.contextMenus.create({
    "title": "Facetime audio: %s",
    "contexts": ["selection"],
    "onclick": function (meniuInfo, tabInfo) {
        call("facetime-audio", meniuInfo, tabInfo);
    }
});

chrome.contextMenus.create({
    "title": "Skype: %s",
    "contexts": ["selection"],
    "onclick": function (meniuInfo, tabInfo) {
        call("skype", meniuInfo, tabInfo);
    }
});

chrome.contextMenus.create({
    "title": "Cisco Jabber: %s",
    "contexts": ["selection"],
    "onclick": function (meniuInfo, tabInfo) {
        call("cisco-tel", meniuInfo, tabInfo);
    }
});