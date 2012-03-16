//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/InputFieldEmailValidationExample01.htm
//Input Field Email Example
(function(){
    var message = "Your browser does not support the email input type.",
        input = document.createElement("input");
        
    input.type = "email";
    
    if (input.type=="email"){
        message = "Your browser supports the email input type";
    }
    document.write("<p>" + message + "</p>");
    
})();
    
EventUtil.addHandler(document.getElementById("btnCheck"), "click", function(event){
    print(document.forms[0].elements[0].checkValidity());
});    
EventUtil.addHandler(document.getElementById("btnWill"), "click", function(event){
    print(document.forms[0].elements[0].willValidate);
});    
    