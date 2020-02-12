$(document).ready(function(){

    console.log("hello This is {slider.js}");

    $('.bottom-box-content-box ul').slick({
        autoplay:true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.bottom-box-content .left-arrow'),
        nextArrow: $('.bottom-box-content .right-arrow')
    
    });

    $('.image-box-content').slick({
        autoplay:true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 300,
        prevArrow: $('.box-group .left-arrow'),
        nextArrow: $('.box-group .right-arrow')
    });

    // let slideCount = $('.bottom-box-content-box ul li').length;
    // console.log("length = "+slideCount);

    // let slideWidth = $('.bottom-box-content-box ul li').width();
    // console.log("The width? = "+slideWidth);

    // let slideHeight = $('.bottom-box-content-box ul li').height();
    // console.log("The height? = "+slideHeight);

    // let sliderULWidth = slideCount * slideWidth;
    // console.log("slideCount * slideWidth = "+sliderULWidth);

    // // $('.bottom-box-content-box ul').css({width:sliderULWidth, height:slideHeight});
    // let allwidth = $('.bottom-box-content-box').width();
    // console.log("bottom-box-content-box = {"+allwidth+"}");
    // let partwidth = allwidth/5;
    // let justifywidth = partwidth - 10;
    // console.log("partwidth = {"+partwidth+"}");
    // console.log("justifywidth = {"+justifywidth+"}");

    // // $('.bottom-box-content-box ul li:last-child').prependTo('.bottom-box-content-box ul');


    // function moveRight() {
        
    //     $('.bottom-box-content-box ul').animate({
    //         left: - justifywidth
    //     },100, function(){
    //         $('.bottom-box-content-box ul li:first-child').appendTo('.bottom-box-content-box ul');
    //         $('.bottom-box-content-box ul').css('left','');
    //         console.log("right now");
            
    //     });
    // };//moveright

    // function moveLeft() {
    //     $('.bottom-box-content-box ul').animate({
    //         left: + justifywidth
    //     },100, function(){
    //         $('.bottom-box-content-box ul li:last-child').prependTo('.bottom-box-content-box ul');
    //         $('.bottom-box-content-box ul').css('left','');
    //         console.log("left now");
    //     });
    // };//moveleft

    // $('.bottom-box-content .left-arrow').click(function(){
    //     moveLeft();
    // });

    // $('.bottom-box-content .right-arrow').click(function(){
    //     moveRight();
        
    // });

});