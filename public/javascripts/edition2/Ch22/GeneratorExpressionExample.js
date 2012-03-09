//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/GeneratorExpressionExample.htm
//Generator Example

var generator = (i*2 for (i in [0,1,2,3,4,5,6,7,8,9]));

try {
    while(true){
        document.write(generator.next() + "<br />");
    }
} catch(ex){
    
}

generator.close();


    