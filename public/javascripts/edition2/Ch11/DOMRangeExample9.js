//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/DOMRangeExample9.htm
//DOM Range Example
    function compare() {
        var range1 = document.createRange();
        var range2 = document.createRange();
        var p1 = document.getElementById("p1");
        
        range1.selectNodeContents(p1);
        range2.selectNodeContents(p1);
        range2.setEndBefore(p1.lastChild);
        
        print(range1.compareBoundaryPoints(Range.START_TO_START, range2));  //outputs 0
        print(range1.compareBoundaryPoints(Range.END_TO_END, range2));      //outputs 1
    }
