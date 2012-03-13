//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch08/WindowOpenExample02.htm
//Window Open Example 2
    
function openNewWindow(){
    var win = window.open('http://www.wrox.com/', 'wroxWindow', 'width=300,height=300,left=10,top=10');
    win.resizeTo(500,500);
    win.moveTo(100,100);
}

window.open("http://www.wrox.com");
    