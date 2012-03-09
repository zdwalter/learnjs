//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/SelectboxExample5.htm
//Selectbox Example
    (function(){
        
        var btn = document.getElementById("btnMove");
        
        EventUtil.addHandler(btn, "click", function(event){
            var selectbox1 = document.getElementById("selLocations1");
            var selectbox2 = document.getElementById("selLocations2");
            var textbox = document.getElementById("txtIndex");
            
            selectbox2.appendChild(selectbox1.options[parseInt(textbox.value, 10)]);

        });
    
    })();

