//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/XMLConstructionExample01.htm
//XML Construction Example
var tagName = "color";
var color = "red";
var xml = <{tagName}>{color}</{tagName}>;

print(xml.toXMLString());  //"<color>red</color>"

    