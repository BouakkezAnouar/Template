$(document).ready(function(){
   if ($(window).width>767)
       {
    $('.portfolio-images .row').addClass('marg-bot-20');
       } else

           {
              //
           }
    $('.a').scrollspy({ target: '.portfolio' });


    /*if ($(window).width() <=767)
    { $(".navbar-right a").on('click', function(event){

        $('.navbar-toggle').click();
    }); }*/

    // jQuery for page scrolling feature - requires jQuery Easing plugin            --------------- tayra ------------
    $('.page-scroll a').on('click', function(event) {
        $('html, body').animate({ scrollTop: ($($(this).attr('href')).offset().top -50) }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    // tayara 3ale5er mouch norlmal                                                 --------------- tayra------------
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });


    /*$(".navbar-fixed-top").autoHidingNavbar({
        // see next for specifications
    });*/


    /* tayraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    var documentElem = $(document),
        nav = $('nav'),
        lastScrollTop = 0 ;

    documentElem.on('scroll',function(){
        var currentScrollTop = $(this).scrollTop();
        //scroll down
        if(currentScrollTop > lastScrollTop){
            nav.addClass('hidden');
        }
        //scroll up
        else {
            nav.removeClass('hidden');
        }

        lastScrollTop = currentScrollTop;
       */

    var documentElem = $(document),
        nav = $('nav'),
        right = $('.right'),
        left = $('.left'),
        lastScrollTop = 0 ;
    documentElem.on('scroll',function(){
        var currentScrollTop = $(this).scrollTop();
        if  ($(window).width()>767)
            {
     if(currentScrollTop > 200){
            nav.addClass('nav-small');
            right.addClass('navRight-small');
            left.addClass('navbar-brand-small');
        }
            else {
                nav.removeClass('nav-small');
                right.removeClass('navRight-small');
                left.removeClass('navbar-brand-small');

            }
            }

    });


   // $('input, textarea').on('keyup blur focus', function (e) {
        $('label').css('display','block');
       // $('label').addClass('label');
   // })

    $('input, textarea').on('keyup blur focus', function (e) {


        label = $(this).prev('label');  //ta3ti el label eli 9bl input previous


        if (e.type === 'keyup') {
            if ($(this).val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            label.removeClass('highlight');

            if( $(this).val() === '' )  label.removeClass('active'); }



        else if (e.type === 'focus') label.addClass('highlight');


    });

});