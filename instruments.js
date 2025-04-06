$(document).ready(function () {
    $('.logoFoot').click(function (e) {
        alert('БУ')
    });

    let headerClass = document.getElementsByClassName('header')
    window.addEventListener("scroll", function () {
        const scrollPos = this.window.scrollY
        if (scrollPos >= 140) {
            $('.header').addClass('headerFix');
            $('.menu').css('top', '90px')
        } else {
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

    $('.calculationOfCosts').click(function (e) { 
        e.preventDefault();
            $('html, body').animate({
                scrollTop: $('.calculationOfCostsOffSet').offset().top
            }, 1000);
        });




    $(".checkExpenses").click(function () {
        const salary = parseFloat($(".salaryAmount").val())
        const housingSpent = parseFloat($(".housingSpent").val())
        const foodSpent = parseFloat($(".foodSpent").val())
        const transportSpent = parseFloat($(".transportSpent").val())
        const entertainmentSpent = parseFloat($(".entertainmentSpent").val())

        if (isNaN(salary) || salary <= 0) {
            alert("Будь ласка, введіть коректну суму зарплати.")
            return
        }

        const adviceList = []

        if (housingSpent > salary * 0.30) {
            adviceList.push("Витрати на житло занадто високі. Спробуйте знайти дешевше житло.")
        } else if (housingSpent < salary * 0.20) {
            adviceList.push("Витрати на житло дуже низькі. Можливо, варто подумати про покращення умов проживання.")
        } else {
            adviceList.push("Витрати на житло в нормі.")
        }

        if (foodSpent > salary * 0.20) {
            adviceList.push("Витрати на їжу високі. Можливо, варто планувати меню та шукати знижки.")
        } else if (foodSpent < salary * 0.15) {
            adviceList.push("Витрати на їжу занадто низькі. Переконайтеся, що ви достатньо харчуєтесь та не економите на здоров'ї.")
        } else {
            adviceList.push("Витрати на їжу в нормі.")
        }

        if (transportSpent > salary * 0.10) {
            adviceList.push("Витрати на транспорт можна зменшити, використовуючи громадський транспорт або пішки.")
        } else if (transportSpent < salary * 0.05) {
            adviceList.push("Витрати на транспорт дуже низькі. Можливо, варто подумати про зручніший спосіб пересування.")
        } else {
            adviceList.push("Витрати на транспорт в нормі.")
        }

        if (entertainmentSpent > salary * 0.05) {
            adviceList.push("Витрати на розваги можна знизити, шукаючи безкоштовні або дешевші варіанти.")
        } else if (entertainmentSpent < salary * 0.03) {
            adviceList.push("Витрати на розваги дуже низькі. Не забувайте про відпочинок і релаксацію — це важливо для вашого здоров'я.")
        } else {
            adviceList.push("Витрати на розваги в нормі.")
        }

        if (adviceList.length === 0) {
            adviceList.push("Ваші витрати в нормі. Продовжуйте в тому ж дусі!")
        }

        $(".expenseAdvice").empty()
        adviceList.forEach(function (advice) {
            $(".expenseAdvice").append("<li>" + advice + "</li>")
        })
    })

    $(".calculateDeposit").click(function() {
        const depositAmount = parseFloat($(".depositAmount").val())
        const interestRate = parseFloat($(".interestRate").val())
        const depositTerm = parseFloat($(".depositTerm").val())

        if (isNaN(depositAmount) || depositAmount <= 0 || isNaN(interestRate) || interestRate <= 0 || isNaN(depositTerm) || depositTerm <= 0) {
            alert("Будь ласка, введіть правильні дані для депозиту.")
            return
        }

        const futureAmount = depositAmount * Math.pow((1 + interestRate / 100), depositTerm)
        $(".depositResult").text("Майбутня сума на депозиті: " + futureAmount.toFixed(2) + " грн")
    })

    $(".calculateExpenses").click(function() {
        const salary = parseFloat($(".salaryAmountDepoz").val())

        if (isNaN(salary) || salary <= 0) {
            alert("Будь ласка, введіть правильну суму зарплати.")
            return
        }

        const adviceList = []

        const housing = salary*0.30
        const food = salary*0.20
        const transport = salary*0.10
        const entertainment = salary*0.05

        adviceList.push("Оптимальні витрати на житло: " + housing.toFixed(2) + " грн")
        adviceList.push("Оптимальні витрати на їжу: " + food.toFixed(2) + " грн")
        adviceList.push("Оптимальні витрати на транспорт: " + transport.toFixed(2) + " грн")
        adviceList.push("Оптимальні витрати на розваги: " + entertainment.toFixed(2) + " грн")

        $(".expenseAdviceDepoz").empty()
        adviceList.forEach(function(advice) {
            $(".expenseAdviceDepoz").append("<li>" + advice + "</li>")
        })
    })

    $(".checkEmainder").click(function (e) { 
        const salary1 = parseFloat($(".salaryAmount1").val())
        const housingSpent1 = parseFloat($(".housingSpent1").val())
        const foodSpent1 = parseFloat($(".foodSpent1").val())
        const transportSpent1 = parseFloat($(".transportSpent1").val())
        const entertainmentSpent1 = parseFloat($(".entertainmentSpent1").val())
    
        const remainder = salary1 - housingSpent1 - foodSpent1 - transportSpent1 - entertainmentSpent1;
    
        $('.result').text('Залишок від зарплати буде складати: ' + remainder);
    });


});
