$(document).ready(function(){
    $.ajax({
        type:'GET',
        url:'togeojson.js',
        dataType:'json',
        beforeSend: function(xhr){
            if(xhr.overrideMimeType)
            {
                xhr.overrideMimeType("application/json");
            }
        },
    })
})