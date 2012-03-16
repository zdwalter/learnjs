//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/DOMRangeExample4.htm
//DOM Range Example
    function deleteContent() {
           
        var p1 = document.getElementById("p1"),
            helloNode = p1.firstChild.firstChild,
            worldNode = p1.lastChild,
            range = document.createRange();
        
        
        range.setStart(helloNode, 2);
        range.setEnd(worldNode, 3);
        range.deleteContents();
                        
    }
