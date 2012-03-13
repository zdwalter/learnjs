//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/DragAndDropExample01.htm
//Drag and Drop Example
    
EventUtil.addHandler(document, "mousemove", function(event){
    var myDiv = document.getElementById("myDiv");
    myDiv.style.left = event.clientX + "px";
    myDiv.style.top = event.clientY + "px";
});

    