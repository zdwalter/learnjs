//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/FormFieldsExample2.htm
//Form Fields Example
(function(){
    var form = document.forms[0];
    
    //Code to prevent multiple form submissions
    EventUtil.addHandler(form, "submit", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
    
        //get the submit button
        var btn = target.elements["submit-btn"];
    
        //disable it
        btn.disabled = true;
        
    });

})();

    