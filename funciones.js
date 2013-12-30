//Primeras Mejoras

jQuery.fn.downBarra = function(height,top,hide){
                   
    $(this).animate({"height": "+=60px"}, height).animate({'top':'-400px'},top);        
    $('#barrita').hide(hide);
}
jQuery.fn.UpBarra = function(height,top,hide){

     $('#nav').animate({'top':'30px'},height).animate({"height": "-=60px"}, top);
            $('#barrita').show(hide);

}
