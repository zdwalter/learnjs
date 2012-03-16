//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/CreateElementExample01.htm
//Create Element Example
function createNewElement(element){
    var div = document.createElement("div");
    div.id = "myNewDiv";
    div.className = "box";
    document.body.appendChild(div);
    
}

    