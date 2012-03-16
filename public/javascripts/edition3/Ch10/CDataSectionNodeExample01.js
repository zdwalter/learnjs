//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/CDataSectionNodeExample01.htm
//CDataSection Node Example
function getCDataSection(){

    var div = document.getElementById("myDiv");
    var cdata = div.firstChild;
    print(cdata.nodeType);
    print(cdata.nodeValue);
    
}

    