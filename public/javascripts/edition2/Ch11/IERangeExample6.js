//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/IERangeExample6.htm
//IE Range Example
    function useRanges() {
        var range1 = document.body.createTextRange();
        var range2 = document.body.createTextRange();
        range1.findText("Hello World");
        range2.findText("Hello");
        print("range1.isEqual(range2): " + range1.isEqual(range2));
        print("range1.inRange(range2): " + range1.inRange(range2));
    }
