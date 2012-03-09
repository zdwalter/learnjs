//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/DragAndDropExample1.htm
//Drag and Drop Example
    
EventUtil.addHandler(document, "mousemove", function(event){
    var myDiv = document.getElementById("myDiv");
    myDiv.style.left = event.clientX + "px";
    myDiv.style.top = event.clientY + "px";
});

    