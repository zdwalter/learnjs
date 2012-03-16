//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/TextNodeExample02.htm
//Text Node Example 2
function changeText(){
    var div = document.getElementById("myDiv");
    div.firstChild.nodeValue = "Some <strong>other</strong> message";
}

    