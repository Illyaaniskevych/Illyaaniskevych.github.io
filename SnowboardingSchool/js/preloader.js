document.body.onload = function (){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done') )
        {
            preloader.classList.add('done');
        }
    }, 1000);
}

// Button Up
$(function(){
    $('.btn-up').click(function(){
        $('body').animate({'scrollTop': 0}), 50;
        $('html').animate({'scrollTop': 0}, 50);
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.btn-up').addClass('active');
        }
        else{
            $('.btn-up').removeClass('active');
        }
    });
});