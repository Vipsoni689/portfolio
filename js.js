$(document).ready(function(){
    $('#menu').click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-time');
        $('header').removeClass('toggle');
        if($(window).scrollTop()>0){
            $('.top').show();
        }else{
            $('.top').show();
        }

    });
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

});


const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
    function hello(){
     let a= confirm("Are you like my web page ?");
     if(a){
     alert("Thanks you very much!");
 }else{
     alert("Sorry");
 }
 }

});


