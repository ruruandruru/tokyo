$(document).ready(function(){
    $.ajax({
        type:'GET',
        url:'script.json',
        dataType:'json',
        beforeSend: function(xhr){
            if(xhr.overrideMimeType)
            {
                xhr.overrideMimeType("application/json");
            }
        },
    })
})