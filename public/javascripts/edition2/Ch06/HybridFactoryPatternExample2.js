//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/HybridFactoryPatternExample2.htm
//Hybrid Factory Pattern Example 2
            
function SpecialArray(){       
 
    //create the array
    var values = new Array();
    
    //add the values
    values.push.apply(values, arguments);
    
    //assign the method
    values.toPipedString = function(){
        return this.join("|");
    };
    
    //return it
    return values;        
}

var colors = new SpecialArray("red", "blue", "green");
print(colors.toPipedString()); //"red|blue|green"

print(colors instanceof SpecialArray);


    