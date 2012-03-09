//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/ElementAttributesExample4.htm
//Element Attributes Example 4
function outputAttributes(element){
    var pairs = new Array();
    for (var i=0, len=element.attributes.length; i < len; i++){
        var attrName = element.attributes[i].nodeName;
        var attrValue = element.attributes[i].nodeValue;
        if (element.attributes[i].specified){
            pairs.push(attrName + "=\"" + attrValue + "\"");
        }
    }
    return pairs.join(" ");
}


function getDivAtts(){
    print(outputAttributes(document.getElementById("myDiv")));
}

    