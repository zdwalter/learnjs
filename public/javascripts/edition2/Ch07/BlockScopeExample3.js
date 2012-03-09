//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/BlockScopeExample3.htm
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
