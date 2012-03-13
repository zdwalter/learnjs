//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/TextboxPartialSelectionExample01.htm
//Textbox Partial Selection Example
(function(){

    function selectText(textbox, startIndex, stopIndex){
        if (textbox.setSelectionRange){
            textbox.setSelectionRange(startIndex, stopIndex);
        } else if (textbox.createTextRange){
            var range = textbox.createTextRange();
            range.collapse(true);
            range.moveStart("character", startIndex);
            range.moveEnd("character", stopIndex - startIndex);
            range.select();                    
        }
        textbox.focus();
    }
                  
    var btn = document.getElementById("select-btn");
    EventUtil.addHandler(btn, "click", function(event){
        var textbox = document.forms[0].elements[0];
        selectText(textbox, 4, 7);
    });
    
    
})();
    
    