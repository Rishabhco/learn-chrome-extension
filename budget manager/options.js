$(function(){
    chrome.storage.sync.get("limit",function(budget){
        $("#limit").text(budget.limit);
    });
    $("#saveLimit").click(function(){
        var limit=$("#limit").val();
        if(limit){
            chrome.storage.sync.set({'limit':limit},function(){
                close();
            });
        }
    })
    $("#Reset").click(function(){
        chrome.storage.sync.set({'total':0},function(){
            var notifOptions={
                type:"basic",
                iconUrl:"icon48.png",
                title:"Total Reset",
                message:"Total has been reset"
            };
            chrome.notifications.create("resetNotif",notifOptions);
        });
    })
})