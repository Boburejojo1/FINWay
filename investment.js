$(document).ready(function () {
    $('.logoFoot').click(function (e) { 
        alert('БУ')
    });
    let headerClass = document.getElementsByClassName('header')
    window.addEventListener("scroll", function () {
        const scrollPos = this.window.scrollY
        if(scrollPos >= 140){
            $('.header').addClass('headerFix');
            $('.menu').css('top', '90px')
            
        } else{
            $('.header').removeClass('headerFix');
            $('.menu').css('top', '170px')
        }
    })

    $('.contacts').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.footer').offset().top
        }, 1000);
    });

    $('.burgerMenu').click(function (e) { 
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('activemenu');
    });


});