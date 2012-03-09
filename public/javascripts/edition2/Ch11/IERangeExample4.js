//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/IERangeExample4.htm
//IE Range Example
    //This example shows what happens when you try to use
    //pasteHTML() while HTML code is selected.
    function useRanges() {
        var range = document.body.createTextRange();
        var p1 = document.getElementById("p1");
        range.moveToElementText(p1);
        range.pasteHTML("<p><em>Howdy</em> World</p>");
        print(document.body.innerHTML);
    }
