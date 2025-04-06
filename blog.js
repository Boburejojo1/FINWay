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
        $('.burger').toggleClass('active')
        $('.menu').toggleClass('activemenu')
    });
    $('.blog').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.up').offset().top
        }, 1000)
    });





    let controllerKurs = new ScrollMagic.Controller()
    let sceneKurs = new ScrollMagic.Scene({
        triggerElement: '.kurses'
    })
    .setClassToggle('.kurses', 'show')
    .reverse(false)
    .addTo(controllerKurs); 

    let controllerTest = new ScrollMagic.Controller()
    let sceneTest = new ScrollMagic.Scene({
        triggerElement: '.test'
    })
    .setClassToggle('.test', 'showe')
    .reverse(false)
    .addTo(controllerTest)

    


    let controllerKurs1 = new ScrollMagic.Controller()

    $('.informationBig').each(function () {
        new ScrollMagic.Scene({ triggerElement: this})
            .setClassToggle(this, 'showkurs')
            .reverse(false)
            .addTo(controllerKurs1)
    });
    

    let controllerQuestion = new ScrollMagic.Controller()
    $('.question1').each(function () {
        new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false
        })
        .setClassToggle(this, 'showQuestion')
        .addTo(controllerQuestion)
    });
    


    $(function () {
        let score = 0;
    
        $('.answear button').click(function () {
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
        });
    
        $('.sendButton').click(function () {
            score = 0;
    
            $('.question1').each(function () {
                const selected = $(this).find('button.selected');
                const correct = $(this).find('button.correct');
    
                if (selected.length) {
                    if (selected.hasClass('correct')) {
                        score++;
                        selected.css('background-color', 'green');
                    } else {
                        selected.css('background-color', 'red');
                        correct.css('background-color', 'green');
                    }
                } else {
                    correct.css('background-color', 'red');
                }
    
                $(this).find('button').prop('disabled', true);
            });
            alert('Нажаль питання настільки легкі, що відповіді де більше тексту і є правильними...')
            $('.testEnd').empty();
            $('.testEnd').append(`
                <h2>Ваш потужний результат</h2>
            <h1 class="result">${score}/15</h1>
           `);
        });
    });
    

});