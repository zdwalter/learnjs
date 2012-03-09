//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/FormSerializationExample.htm
//Form Serialization Example
function serialize(form){        
    var parts = new Array();
    var field = null;
    
    for (var i=0, len=form.elements.length; i < len; i++){
        field = form.elements[i];
    
        switch(field.type){
            case "select-one":
            case "select-multiple":
                for (var j=0, optLen = field.options.length; j < optLen; j++){
                    var option = field.options[j];
                    if (option.selected){
                        var optValue = "";
                        if (option.hasAttribute){
                            optValue = (option.hasAttribute("value") ? option.value : option.text);
                        } else {
                            optValue = (option.attributes["value"].specified ? option.value : option.text);
                        }
                        parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                    }
                }
                break;
                
            case undefined:     //fieldset
            case "file":        //file input
            case "submit":      //submit button
            case "reset":       //reset button
            case "button":      //custom button
                break;
                
            case "radio":       //radio button
            case "checkbox":    //checkbox
                if (!field.checked){
                    break;
                }
                /* falls through */
                            
            default:
                parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
        }
    }        
    return parts.join("&");
}

var btn = document.getElementById("serialize-btn");
EventUtil.addHandler(btn, "click", function(event){
    var form = document.forms[0];
    print(serialize(form));
});

    