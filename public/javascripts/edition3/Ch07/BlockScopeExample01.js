//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/BlockScopeExample01.htm
//Block Scope Example

    function outputNumbers(count){
        for (var i=0; i < count; i++){
            print(i);
        }
    
        print(i);   //count
    }

    outputNumbers(5);
