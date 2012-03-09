//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/DOMRangeExample6.htm
//DOM Range Example
    function cloneContent() {
        var p1 = document.getElementById("p1");
        var helloNode = p1.firstChild.firstChild;
        var worldNode = p1.lastChild;
        var range = document.createRange();
        
        range.setStart(helloNode, 2);
        range.setEnd(worldNode, 3);
        var fragment = range.cloneContents();
        p1.parentNode.appendChild(fragment);
                        
    }
