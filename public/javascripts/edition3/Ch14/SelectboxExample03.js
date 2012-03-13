//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/SelectboxExample03.htm
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

    var btn1 = document.getElementById("btnFirst");
    var btn2 = document.getElementById("btnSecond");
    var btn3 = document.getElementById("btnSelected");
    var selectbox = document.getElementById("selLocation");

    EventUtil.addHandler(btn1, "click", function(event){
        selectbox.options[0].selected = true;
    });
    EventUtil.addHandler(btn2, "click", function(event){
        selectbox.options[1].selected = true;
    });
    EventUtil.addHandler(btn3, "click", function(event){
        var selectedOptions = getSelectedOptions(selectbox);
        var message = "";
        
        for (var i=0, len=selectedOptions.length; i < len; i++){
            message += "Selected index: " + selectedOptions[i].index + "\nSelected text: " + selectedOptions[i].text + "\nSelected value: " + selectedOptions[i].value + "\n\n";
        }
        
        print(message);
        
    });
    
})();
    
    