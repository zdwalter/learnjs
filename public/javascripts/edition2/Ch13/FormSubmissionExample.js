//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/FormSubmissionExample.htm
//Form Submission Example
(function(){
    function handleSubmitEvent(event){
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);                
    }
    
    var btn = document.getElementById("myBtn");
    EventUtil.addHandler(btn, "click", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        var form = document.getElementById("myForm");
        if (target.value == "Block submission"){
            EventUtil.addHandler(form, "submit", handleSubmitEvent);
            target.value = "Allow submission";
        } else {
            EventUtil.removeHandler(form, "submit", handleSubmitEvent);
            target.value = "Block submission";
        }
    });
    
    var forceBtn = document.getElementById("myForceBtn");
    EventUtil.addHandler(forceBtn, "click", function(event){
        var form = document.getElementById("myForm");
        form.submit();
    });

})();

    