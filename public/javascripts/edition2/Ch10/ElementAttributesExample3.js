//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/ElementAttributesExample3.htm
//Element Attributes Example 3
function outputAttributes(element){
    var pairs = new Array();
    for (var i=0, len=element.attributes.length; i < len; i++){
        var attrName = element.attributes[i].nodeName;
        var attrValue = element.attributes[i].nodeValue;
        pairs.push(attrName + "=\"" + attrValue + "\"");
    }
    return pairs.join(" ");
}

function getDivAtts(){
    print(outputAttributes(document.getElementById("myDiv")));
}

    