//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/TextboxGetSelectedTextExample.htm
//Textbox Get Selected Text Example
(function(){

    function getSelectedText(textbox){
        if (document.selection){
            return document.selection.createRange().text;
        } else {
            return textbox.value.substring(textbox.selectionStart, 
                                           textbox.selectionEnd);
        }
    }
                  
    EventUtil.addHandler(window, "load", function(event){
        var textbox = document.forms[0].elements[0];
    
        EventUtil.addHandler(textbox, "select", function(event){
            print(getSelectedText(textbox));
        });
    
        textbox.focus();
    });               
})();
    
    