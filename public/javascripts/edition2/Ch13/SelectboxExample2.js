//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/SelectboxExample2.htm
//Selectbox Example
(function(){

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
        var selIndex = selectbox.selectedIndex;
        var selOption = selectbox.options[selIndex];
        print("Selected index: " + selectbox.selectedIndex + "\nSelected text: " + selOption.text + "\nSelected value: " + selOption.value);
    });
    
})();
    
    