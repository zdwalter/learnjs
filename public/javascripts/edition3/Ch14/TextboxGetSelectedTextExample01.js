//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/TextboxGetSelectedTextExample01.htm
//Textbox Get Selected Text Example
(function(){

    function getSelectedText(textbox){
        if (typeof textbox.selectionStart == "number"){
            return textbox.value.substring(textbox.selectionStart, 
                    textbox.selectionEnd);                
        } else if (document.selection){
            return document.selection.createRange().text;
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
    
    