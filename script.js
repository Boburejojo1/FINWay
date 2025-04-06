$(document).ready(function () {
    //потрібно скрізь
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

    $('.aboutUs').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.first').offset().top
        }, 1000);
    });

    $('.main').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.up').offset().top
        }, 1000);
    });

    let controller = new ScrollMagic.Controller();
    let scene = new ScrollMagic.Scene({
        triggerElement: '.text1'
    })
    .setClassToggle('.first', 'showFirst')
    .reverse(false)
    .addTo(controller); 

    let controllerTwo = new ScrollMagic.Controller();
    let sceneTwo = new ScrollMagic.Scene({
        triggerElement: '.text2'
    })
    .setClassToggle('.second', 'showSecond')
    .reverse(false)
    .addTo(controller);

    let controllerThree = new ScrollMagic.Controller();
    let sceneThree = new ScrollMagic.Scene({
        triggerElement: '.text3'
    })
    .setClassToggle('.third', 'showthird')
    .reverse(false)
    .addTo(controller);

    




});