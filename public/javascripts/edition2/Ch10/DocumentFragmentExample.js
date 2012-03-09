//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/DocumentFragmentExample.htm
//Document Fragment Example
function addItems(){

    var fragment = document.createDocumentFragment();
    var ul = document.getElementById("myList");
    var li = null;
    
    for (var i=0; i < 3; i++){
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Item " + (i+1)));
        fragment.appendChild(li);
    }
    
    ul.appendChild(fragment);    

    
}

    