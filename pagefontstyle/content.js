chrome.runtime.sendMessage({todo:"ShowPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "ChangeColor"){
        $("#usage").css('color',request.clickedColor);
    };
});
