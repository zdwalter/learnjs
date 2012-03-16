//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/IERangeExample3.htm
//IE Range Example
    function useRanges() {
        var range = document.body.createTextRange();
        var p1 = document.getElementById("p1");
        range.findText("Hello");
        range.pasteHTML("<em>Howdy</em>");
    }
