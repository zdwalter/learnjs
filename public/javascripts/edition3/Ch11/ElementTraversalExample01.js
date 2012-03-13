//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/ElementTraversalExample01.htm
//Element Traversal Example
    
    
if (document.body.firstElementChild){
    var i,
        len,
        child = document.body.firstElementChild;
        
    while(child != document.body.lastElementChild){
        document.write("<p>" + child.tagName + "</p>");
        child = child.nextElementSibling;
    }
} else {
    document.write("<p>Element Traversal API not supported.</p>");
}   


    