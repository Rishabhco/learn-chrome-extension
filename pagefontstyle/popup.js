$(function(){
    var color=$("#font_color").val();
    $("#font_color").on("change paste keyup",function(){
        color=$(this).val();
    });
    $("#submit").click(function(){
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{todo:"ChangeColor",clickedColor:color});
        });
    });
});