//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/BlockScopeExample2.htm
//Block Scope Example

    function outputNumbers(count){
        for (var i=0; i < count; i++){
            print(i);
        }
    
        var i;    //variable re-declared
        print(i);   //count
    }

    outputNumbers(5);
