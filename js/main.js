$(function(){
var carouselList = $("#carousel ul");
    carouselList.each(function(){
        var t = setInterval(function(){
        carouselList.animate({marginLeft:-600},500,function(){

        $(this).find("li:last").after($(this).find("li:first"));  
        $(this).css({marginLeft:0});
                })
            },2000);
    });
});