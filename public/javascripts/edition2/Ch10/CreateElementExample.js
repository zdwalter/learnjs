//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/CreateElementExample.htm
//Create Element Example
function createNewElement(element){
    var div = document.createElement("div");
    div.id = "myNewDiv";
    div.className = "box";
    document.body.appendChild(div);
    
}

    