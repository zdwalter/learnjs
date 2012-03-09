//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/SelectboxExample6.htm
//Listbox Shift Example
(function(){
       
    var btnUp = document.getElementById("btnUp");
    var btnDown = document.getElementById("btnDown");
    
    EventUtil.addHandler(btnUp, "click", function(event){
        var selectbox = document.getElementById("selLocations");
        var textbox = document.getElementById("txtIndex");
        var optionToMove = selectbox.options[parseInt(textbox.value, 10)];
        
        if (optionToMove.index > 0){
            selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index-1]);
        }
    });        
       
    EventUtil.addHandler(btnDown, "click", function(event){
        var selectbox = document.getElementById("selLocations");
        var textbox = document.getElementById("txtIndex");
        var optionToMove = selectbox.options[parseInt(textbox.value, 10)];
        
        selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index+2]);

    });        
       
})();
