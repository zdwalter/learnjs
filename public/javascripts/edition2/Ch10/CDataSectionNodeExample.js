//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/CDataSectionNodeExample.htm
//CDataSection Node Example
function getCDataSection(){

    var div = document.getElementById("myDiv");
    var cdata = div.firstChild;
    print(cdata.nodeType);
    print(cdata.nodeValue);
    
}

    