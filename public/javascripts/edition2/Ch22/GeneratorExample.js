//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/GeneratorExample.htm
//Generator Example
function myNumbers(){
    for (var i=0; i < 10; i++){
        yield i * 2;
    }        
}

var generator = myNumbers();

try {
    while(true){
        document.write(generator.next() + "<br />");
    }
} catch(ex){
    
}

generator.close();


    