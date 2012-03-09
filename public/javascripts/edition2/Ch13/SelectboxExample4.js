//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/SelectboxExample4.htm
//Selectbox Example
(function(){

    function getSelectedOptions(selectbox){
        var result = new Array();
        var option = null;
        
        for (var i=0, len=selectbox.options.length; i < len; i++){
            option = selectbox.options[i];
            if (option.selected){
                result.push(option);
            }
        }
        
        return result;            
    }
    
    var btn1 = document.getElementById("btnAdd1");
    var btn2 = document.getElementById("btnAdd2");
    var btn3 = document.getElementById("btnSelected");
    var btn4 = document.getElementById("btnRemove1");
    var btn5 = document.getElementById("btnRemove2");
    var btn6 = document.getElementById("btnRemove3");
    
    EventUtil.addHandler(btn1, "click", function(event){
        var selectbox = document.getElementById("selLocation");
        var textTextbox = document.getElementById("txtText");
        var valueTextbox = document.getElementById("txtValue");
        
        var newOption = document.createElement("option");
        newOption.appendChild(document.createTextNode(textTextbox.value));
        newOption.setAttribute("value", valueTextbox.value);
        
        selectbox.appendChild(newOption);
    
    });

    EventUtil.addHandler(btn2, "click", function(event){
        var selectbox = document.getElementById("selLocation");
        var textTextbox = document.getElementById("txtText");
        var valueTextbox = document.getElementById("txtValue");
        var newOption = new Option(textTextbox.value, valueTextbox.value);

        selectbox.appendChild(newOption);
        //selectbox.add(newOption, undefined);
    });

    EventUtil.addHandler(btn3, "click", function(event){
        var selectbox = document.getElementById("selLocation");
        var selectedOptions = getSelectedOptions(selectbox);
        var message = "";
        
        for (var i=0, len=selectedOptions.length; i < len; i++){
            message += "Selected index: " + selectedOptions[i].index + "\nSelected text: " + selectedOptions[i].text + "\nSelected value: " + selectedOptions[i].value + "\n\n";
        }
        
        print(message);
        
    });
    
    EventUtil.addHandler(btn4, "click", function(event){
        var selectbox = document.getElementById("selLocation");
        selectbox.removeChild(selectbox.options[0]);
    });
    
    EventUtil.addHandler(btn5, "click", function(event){
        var selectbox = document.getElementById("selLocation");
        selectbox.remove(0);
    });
    
    EventUtil.addHandler(btn6, "click", function(event){
        var selectbox = document.getElementById("selLocation");
        selectbox.options[0] = null;
    });
    
})();
    
    