//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/SelectboxExample05.htm
//Selectbox Example
    (function(){
        
        var btn = document.getElementById("btnMove");
        
        EventUtil.addHandler(btn, "click", function(event){
            var selectbox1 = document.getElementById("selLocations1"),
                selectbox2 = document.getElementById("selLocations2"),
                textbox = document.getElementById("txtIndex");
            
            selectbox2.appendChild(selectbox1.options[parseInt(textbox.value, 10)]);

        });
    
    })();

