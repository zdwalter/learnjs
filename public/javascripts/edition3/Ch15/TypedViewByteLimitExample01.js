//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/TypedViewByteLimitExample01.htm
//Typed Arrays Exampledocument.write("Your browser " + (typeof ArrayBuffer != "undefined" ? "supports" : "doesn't support") + " typed arrays.");
window.onload = function(){
    var uint16s = new Uint16Array(10);
    uint16s[0] = 65537;
    print(uint16s[0]);  //1

};

    