//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/DOMRangeExample7.htm
//DOM Range Example
    function insertContent() {
        var p1 = document.getElementById("p1"),
            helloNode = p1.firstChild.firstChild,
            worldNode = p1.lastChild,
            range = document.createRange(),
            span = document.createElement("span");
            
        span.style.color = "red";
        span.appendChild(document.createTextNode("Inserted text"));
        
        range.setStart(helloNode, 2);
        range.setEnd(worldNode, 3);
        range.insertNode(span);
                        
    }
