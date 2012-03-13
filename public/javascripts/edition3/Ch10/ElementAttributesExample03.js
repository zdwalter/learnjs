//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/ElementAttributesExample03.htm
//Element Attributes Example 3
function outputAttributes(element){
    var pairs = new Array(),
        attrName,
        attrValue,
        i,
        len;

    for (i=0, len=element.attributes.length; i < len; i++){
        attrName = element.attributes[i].nodeName;
        attrValue = element.attributes[i].nodeValue;
        pairs.push(attrName + "=\"" + attrValue + "\"");
    }
    return pairs.join(" ");
}


function getDivAtts(){
    print(outputAttributes(document.getElementById("myDiv")));
}

    