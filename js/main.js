$(function(){
var carouselList = $("#carousel ul");
    carouselList.each(function(){
        var t = setInterval(function(){
        carouselList.animate({marginLeft:-600},500,function(){

        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem)
        carouselList.css({marginLeft:0});
                })
            },2000);
    });
});