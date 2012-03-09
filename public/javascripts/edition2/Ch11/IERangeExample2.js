//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/IERangeExample2.htm
//IE Range Example
    function useRanges() {
        var range = document.body.createTextRange();
        var p1 = document.getElementById("p1");
        range.findText("Hello");
        range.text = "Howdy";
    }
