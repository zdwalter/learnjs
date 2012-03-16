//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch08/PluginDetectionExample01.htm
//Plugin Detection Example
    
//plugin detection - doesn't work in IE
function hasPlugin(name){
    name = name.toLowerCase();
    for (var i=0; i < navigator.mimeTypes.length; i++){
        if (navigator.mimeTypes[i].name.toLowerCase().indexOf(name) > -1){
            return true;
        }
    }

    return false;
}

//detect flash
print(hasPlugin("Flash"));

//detect quicktime
print(hasPlugin("QuickTime"));

//detect Java
print(hasPlugin("Java"));
    