//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/CommentNodeExample01.htm
//Comment Node Example
function getComment(){

    var div = document.getElementById("myDiv");
    var comment = div.firstChild;
    print(comment.data);
    
}

    