//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/XMLConstructionExample.htm
//XML Construction Example
var tagName = "color";
var color = "red";
var xml = <{tagName}>{color}</{tagName}>;

print(xml.toXMLString());  //"<color>red</color>"

    