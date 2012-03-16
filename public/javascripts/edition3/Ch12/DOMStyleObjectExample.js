//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/DOMStyleObjectExample.htm
//DOM Style Object Example
function changeStyles(){
    var myDiv = document.getElementById("myDiv");
    
    //set the background color
    myDiv.style.setProperty("background-color", "red", "");;
    
    //change the dimensions
    myDiv.style.setProperty("width", "100px", "");
    myDiv.style.setProperty("height", "200px", "");
    
    //assign a border
    myDiv.style.setProperty("border", "1px solid black", "");
}

function getStyles(){
    var myDiv = document.getElementById("myDiv");
    print(myDiv.style.getPropertyValue("background-color"));
    print(myDiv.style.getPropertyValue("width"));
    print(myDiv.style.getPropertyValue("height"));
}

function getCSS(){
    var myDiv = document.getElementById("myDiv");
    print(myDiv.style.cssText);
}

function changeCSS(){
    var myDiv = document.getElementById("myDiv");
    myDiv.style.cssText ="width: 25px; height: 100px; background-color: green";
}

function enumerateCSS(){
    var myDiv = document.getElementById("myDiv");
    var props = new Array();
    for (var i=0, len=myDiv.style.length; i < len; i++){
        var prop = myDiv.style[i];     //or myDiv.style.item(i)
        var value = myDiv.style.getPropertyValue(prop);
        props.push(prop + " : " + value); 
    }
    print(props.join("\n"));

}

function enumerateCSSValues(){
    var myDiv = document.getElementById("myDiv");
    var props = new Array();
    for (var i=0, len=myDiv.style.length; i < len; i++){
        var prop = myDiv.style[i];     //or myDiv.style.item(i)
        var value = myDiv.style.getPropertyCSSValue(prop);
        props.push(prop + " : " + value.cssText + " (" + value.cssValueType + ")"); 
    }
    print(props.join("\n"));

}

function removeBorder(){
    var myDiv = document.getElementById("myDiv");
    myDiv.style.removeProperty("border");
}
    