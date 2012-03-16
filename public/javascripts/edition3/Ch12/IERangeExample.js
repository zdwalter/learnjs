//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/IERangeExample.htm
//IE Range Example
    function useRanges() {
        var range = document.body.createTextRange();
        var p1 = document.getElementById("p1");
        range.moveToElementText(p1);
        print(range.htmlText);
    }
