//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/IteratorExample3.htm
//Iterator Example

var colors = ["red", "green", "blue"];
var iterator = new Iterator(colors, true);

try {
    while(true){
        let value = iterator.next();
        document.write(value + "<br />");
    }
} catch(ex){
    
}



    