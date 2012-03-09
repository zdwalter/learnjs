//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch17/JSONExample2.htm
//JSON Example
    
var jsonText = "{\"name\":\"Nicholas C. Zakas\", \"age\":29, \"author\":true }";
var object = JSON.parse(jsonText, function(key, value){
    switch(key){
        case "age":     return value + 1;
        case "author":  return undefined;
        default:        return value;
    }    
});
    
print(object.age);      //30
print(object.author);   //undefined

    