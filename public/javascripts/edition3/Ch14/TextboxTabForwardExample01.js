//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/TextboxTabForwardExample01.htm
//Textbox Tab Forward Example
(function(){
       
    function tabForward(event){            
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        if (target.value.length == target.maxLength){
            var form = target.form;
            
            for (var i=0, len=form.elements.length; i < len; i++) {
                if (form.elements[i] == target) {
                    if (form.elements[i+1]){
                        form.elements[i+1].focus();
                    }
                    return;
                }
            }
        }
    }
                
    var textbox1 = document.getElementById("txtTel1"),
        textbox2 = document.getElementById("txtTel2"),
        textbox3 = document.getElementById("txtTel3");
    
    EventUtil.addHandler(textbox1, "keyup", tabForward);        
    EventUtil.addHandler(textbox2, "keyup", tabForward);        
    EventUtil.addHandler(textbox3, "keyup", tabForward);        
        
})();
