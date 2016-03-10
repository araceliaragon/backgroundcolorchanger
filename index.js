var colors= ["red", "orange", "green", "blue", "purple"];
colorIndex= 0;
            
$(document).ready(function(){
    $("#button").click(function(){
        $("body").css("background-color", colors[colorIndex]);
        colorIndex= colorIndex + 1;
        if(colorIndex==colors.length){
            colorIndex=0
        for(var i=0; i<color.length; i=i+ 1){
            console.log(color[i]);
        }
        }
        
    });
});