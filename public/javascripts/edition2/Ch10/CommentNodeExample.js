//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/CommentNodeExample.htm
//Comment Node Example
function getComment(){

    var div = document.getElementById("myDiv");
    var comment = div.firstChild;
    print(comment.data);
    
}

    