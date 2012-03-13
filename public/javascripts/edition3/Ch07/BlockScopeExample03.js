//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/BlockScopeExample03.htm
//Block Scope Example

    function outputNumbers(count){
    
        (function () {
            for (var i=0; i < count; i++){
                print(i);
            }
        })();
        
        print(i);   //causes an error
    }

    outputNumbers(5);
