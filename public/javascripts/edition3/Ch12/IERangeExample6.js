//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/IERangeExample6.htm
//IE Range Example
    function useRanges() {
        var range1 = document.body.createTextRange();
        var range2 = document.body.createTextRange();
        range1.findText("Hello world!");
        range2.findText("Hello");
        print("range1.isEqual(range2): " + range1.isEqual(range2));
        print("range1.inRange(range2): " + range1.inRange(range2));
    }
