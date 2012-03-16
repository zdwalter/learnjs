//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/ClassListExample01.htm
//classList Example
function addClass(){
    var myDiv = document.getElementById("myDiv");
    myDiv.classList.add("highlight");
}
    
function removeClass(){
    var myDiv = document.getElementById("myDiv");
    myDiv.classList.remove("highlight");
}
    
function toggleClass(){
    var myDiv = document.getElementById("myDiv");
    myDiv.classList.toggle("highlight");
}
    
function containsClass(){
    var myDiv = document.getElementById("myDiv");
    print(myDiv.classList.contains("highlight"));
}
    
    