//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/SelectEventExample01.htm
//Select Event Example
EventUtil.addHandler(document.getElementById("comments"), "select", function(event){
    print("Text is selected!");
});               
EventUtil.addHandler(document.getElementById("select-btn"), "click", function(event){
    document.getElementById("comments").select();
});               

    