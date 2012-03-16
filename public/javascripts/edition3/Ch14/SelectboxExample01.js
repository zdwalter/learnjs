//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/SelectboxExample01.htm
//Selectbox Example
(function(){

    var btn1 = document.getElementById("btnFirst"),
        btn2 = document.getElementById("btnSecond"),
        btn3 = document.getElementById("btnSelected"),
        selectbox = document.getElementById("selLocation");

    EventUtil.addHandler(btn1, "click", function(event){
        selectbox.selectedIndex = 0;
    });
    EventUtil.addHandler(btn2, "click", function(event){
        selectbox.selectedIndex = 1;
    });
    EventUtil.addHandler(btn3, "click", function(event){
        var selIndex = selectbox.selectedIndex;
        var selOption = selectbox.options[selIndex];
        print("Selected index: " + selectbox.selectedIndex + "\nSelected text: " + selOption.text + "\nSelected value: " + selOption.value);
    });
    
})();
    
    