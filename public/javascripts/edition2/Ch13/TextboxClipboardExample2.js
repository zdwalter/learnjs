//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/TextboxClipboardExample2.htm
//Textbox Clipboard Example
(function(){

    var textbox = document.getElementById("txtFirst");

    EventUtil.addHandler(textbox, "copy", function(event){
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);
        EventUtil.setClipboardText(event, "Hello world!");                 
    });
    
})();
    
    