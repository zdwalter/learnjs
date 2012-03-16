//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/FormFieldsExample01.htm
//Form Fields Example
(function(){
    var form = document.getElementById("myForm");
    
    var colorFields = form.elements["color"];
    print(colorFields.length);  //3
    
    var firstColorField = colorFields[0];
    var firstFormField = form.elements[0];
    print(firstColorField === firstFormField);   //true

})();

    