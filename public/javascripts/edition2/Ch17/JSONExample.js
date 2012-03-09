//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch17/JSONExample.htm
//JSON Example
    
var jsonText = "{\"name\":\"Nicholas C. Zakas\", \"age\":29, \"author\":true }";
var object = JSON.parse(jsonText);
    
print(object.name);  //"Nicholas C. Zakas"

    