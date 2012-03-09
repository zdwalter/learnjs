//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/ClosureExample2.htm
//Closure Example 2

    function createFunctions(){
        var result = new Array();
        
        for (var i=0; i < 10; i++){
            result[i] = function(num){
                return function(){
                    return num;
                };
            }(i);
        }
        
        return result;
    }
    
    var funcs = createFunctions();
    
    //every function outputs 10
    for (var i=0; i < funcs.length; i++){
        document.write(funcs[i]() + "<br />");
    }

