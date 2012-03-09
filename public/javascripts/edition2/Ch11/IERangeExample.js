//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/IERangeExample.htm
//IE Range Example
    function useRanges() {
        var range = document.body.createTextRange();
        var p1 = document.getElementById("p1");
        range.moveToElementText(p1);
        print(range.htmlText);
    }
