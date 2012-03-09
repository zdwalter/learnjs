//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/BlockScopeExample.htm
//Block Scope Example

    function outputNumbers(count){
        for (var i=0; i < count; i++){
            print(i);
        }
    
        print(i);   //count
    }

    outputNumbers(5);
