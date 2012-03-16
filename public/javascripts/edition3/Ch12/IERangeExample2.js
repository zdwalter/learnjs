//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/IERangeExample2.htm
//IE Range Example
    function useRanges() {
        var range = document.body.createTextRange(),
            p1 = document.getElementById("p1");
            
        range.moveToElementText(p1);
        print(range.htmlText);
    }
