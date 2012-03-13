//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/InputFieldPatternValidationExample01.htm
//Input Field Pattern Example
(function(){
    var message = "Your browser does not support the pattern attribute.";
    
    if ("pattern" in document.createElement("input")){
        message = "Your browser supports the pattern attribute";
    }
    document.write("<p>" + message + "</p>");
    
})();
    
EventUtil.addHandler(document.getElementById("btnCheck"), "click", function(event){
    print(document.forms[0].elements[0].checkValidity());
});    
EventUtil.addHandler(document.getElementById("btnWill"), "click", function(event){
    print(document.forms[0].elements[0].willValidate);
});    
    