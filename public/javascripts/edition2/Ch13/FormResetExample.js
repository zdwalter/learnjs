//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/FormResetExample.htm
//Form Reset Example
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
        if (target.value == "Block reset"){
            EventUtil.addHandler(form, "reset", handleSubmitEvent);
            target.value = "Allow reset";
        } else {
            EventUtil.removeHandler(form, "reset", handleSubmitEvent);
            target.value = "Block reset";
        }
    });
    
    var forceBtn = document.getElementById("myForceBtn");
    EventUtil.addHandler(forceBtn, "click", function(event){
        var form = document.getElementById("myForm");
        form.reset();
    });

})();

    