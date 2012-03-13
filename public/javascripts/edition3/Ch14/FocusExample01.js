//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/FocusExample01.htm
//Focus Example
EventUtil.addHandler(window, "load", function(event){
    var element = document.forms[0].elements[0];
    
    if (element.autofocus !== true){
        element.focus(); console.log("JS focus");
    }
});               

    