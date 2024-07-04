/// <reference types="../@types/jquery"/>

$(function(){
    $('.loader').fadeOut(2000,function(){
          $('.load').fadeOut(1000);
          $('body').css('overflow','auto')
 
 });
 });
 



$('.openNav').on('click',function(){
    $('.sidenav').animate({width : '250' },50)
    $("#home-content").animate({marginLeft :'250px'},50)

})

$('.closebtn').on('click',function(){
    $('#leftMenu').animate({width : '0' },50)
    $("#home-content").animate({marginLeft :'0px'},50)

})
$('#leftMenu a').on('click',function(e){
    let secId=$(e.target).attr('href');
    let secOffset=$(secId).offset().top;
    $("html , body").animate({scrollTop:secOffset}, 2000);

})

$('#sliderDown .toggle').on('click',function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})



let countDownData=new Date("Dec 31, 2028 23:59:59").getTime();

let counter =setInterval(()=>{
    let dateNow=new Date().getTime();

    let dateDiff= countDownData-dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    $('.days').html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${minutes} m`);
    $('.seconds').html(`${seconds} s`);

    if (dateDiff < 0) {
        clearInterval(counter);
      }


}
,100)

var maxLength=100;
$('textarea').on('input',function(){
    var len=$(this).val().length;
    var AmountLeft=maxLength-len;
    if(len>maxLength){
        $("#chars").text("your available character finished");
    }else{
        $("#chars").text(AmountLeft);

    }

})