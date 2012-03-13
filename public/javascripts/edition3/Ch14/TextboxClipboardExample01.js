//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/TextboxClipboardExample01.htm
//Textbox Clipboard Example
(function(){

    var textbox = document.getElementById("txtPhone");
    EventUtil.addHandler(textbox, "paste", function(event){
        event = EventUtil.getEvent(event);
        var text = EventUtil.getClipboardText(event);

        if (!/^\d*$/.test(text)){
            EventUtil.preventDefault(event);
        }

    });
    
})();
    
    