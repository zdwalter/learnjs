//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/BlockScopeExample02.htm
//Block Scope Example

    function outputNumbers(count){
        for (var i=0; i < count; i++){
            print(i);
        }
    
        var i;    //variable re-declared
        print(i);   //count
    }

    outputNumbers(5);
