//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/IteratorExample.htm
//Iterator Example

var person = {
    name: "Nicholas",
    age: 29
};

var iterator = new Iterator(person);


try {
    while(true){
        let value = iterator.next();
        document.write(value.join(":") + "<br />");
    }
} catch(ex){
    
}



    