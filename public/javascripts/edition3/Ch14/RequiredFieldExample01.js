//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/RequiredFieldExample01.htm
//Required Field Example
(function(){
    var message = "Your browser does not support required form fields.";
    if ("required" in document.createElement("input")){
        message = "Your browser supports required form fields!";
    }
    document.write("<p>" + message + "</p>");
    
})();
    
EventUtil.addHandler(document.getElementById("btnCheck"), "click", function(event){
    print(document.forms[0].elements[0].checkValidity());
});    
EventUtil.addHandler(document.getElementById("btnWill"), "click", function(event){
    print(document.forms[0].elements[0].willValidate);
});    
    