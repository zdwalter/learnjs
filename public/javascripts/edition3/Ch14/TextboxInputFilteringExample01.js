//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/TextboxInputFilteringExample01.htm
//Textbox Input Filtering Example
(function(){

    var textbox = document.getElementById("txtPhone");
    EventUtil.addHandler(textbox, "keypress", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        var charCode = EventUtil.getCharCode(event);
        
        if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey){
            EventUtil.preventDefault(event);
        }
        
    });
    
})();
    
    