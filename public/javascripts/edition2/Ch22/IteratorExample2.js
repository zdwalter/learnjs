//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/IteratorExample2.htm
//Iterator Example

var colors = ["red", "green", "blue"];
var iterator = new Iterator(colors);

try {
    while(true){
        let value = iterator.next();
        document.write(value.join(":") + "<br />");
    }
} catch(ex){
    
}



    