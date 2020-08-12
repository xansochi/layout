$(function () {
  let i = 1;
  while (i <= 5) {
    $(".flying__symbol:nth-child(" + i + ")").addClass("symbol" + i);
    i++;
  }

  $(".menu__button").click(function () {
    $(".menu__button").toggleClass("menu__button__opened");
    $(".header__top nav").slideToggle(".header__top nav");
  });

  $("nav a").on("click", function (event) {
    event.preventDefault();

    let href = $(this).attr("href");

    let offset = $(href).offset().top;

    $("body,html").animate({
        scrollTop: offset,
      },
      700
    );

    let screenwidth = $(window).width();

    if (screenwidth <= 1200) {
      $(".menu__button").toggleClass("menu__button__opened");
      $(".header__top nav").slideToggle(".header__top nav");
    }
  });

  // callback_window

  $("body").append(
    `
    <div class="callback_window">
    <form class="callback_window__form">
      <label>* Номер телефона (в десятизначном формате)
         <input class="callback_window__phone" type="text" name="guest_phone" placeholder="1234567890"
          maxlength="10">
      </label>
      

      <label>* Имя
        <input class="callback_window__name" name="guest_phone" placeholder="Джон" maxlength="30"></input>
      </label>

      <label>Коментарий
        <textarea class="callback_window__comment" name="guest_phone" placeholder="Хочу заказать сайт"
          maxlength="200"></textarea>
      </label>

      <button class="callback_window__send-button" type="submit">Заказать звонок</button>
    </form>
    <button class="callback_window__close-button" type="button" name="callback_window__close-button"></button>
  </div>
    `
  );

  function callbutton() {
    $(".callback_window").animate({
      width: "400px"
    }, 400);
    $(".callback_window__close-button").css("transform", "rotate(180deg)");

    $(".callback_window__form").css("display", "block");
  }

  function hide_showcall() {
    let call_width = $(".callback_window").width();
    if (call_width > 200) {
      $(".callback_window__form").css("display", "none");
      $(".callback_window").animate({
        width: "0"
      }, 400);
      $(".callback_window__close-button").css("transform", "rotate(0deg)");
    } else {
      $(".callback_window").animate({
        width: "400px"
      }, 400);
      $(".callback_window__close-button").css("transform", "rotate(180deg)");
      $(".callback_window__form").css("display", "block");
    }
  }

  function scroll_top() {
    $("body,html").animate({
        scrollTop: 0,
      },
      700
    );
  }

  $(".call__button").click(callbutton);

  $(".show__more__button").click(function () {
    callbutton();
  });

  $(".first_section__button").click(function () {
    callbutton();
  });

  $(".second__section__button").click(function () {
    callbutton();
  });

  $(".footer__call__button").click(function () {
    callbutton();
  });

  $(".callback_window__close-button").click(hide_showcall);



  const form_phone = $('.callback_window__phone');
  const form_name = $('.callback_window__name');


  form_phone.bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });

  form_name.bind("change keyup input click", function () {
    if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
      this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, '');
    }
  });

  $(".callback_window__form").submit(function () {
    event.preventDefault();

    if (form_phone.val() && form_name.val()) {

      alert(
        "Ваша заявка на звонок принята. Мы перезвоним Вам в ближайшее время."
      );
      hide_showcall();
      form_phone.removeClass("error");
      form_name.removeClass("error");

      form_phone.val(' ');
      form_name.val(' ');

    } else {
      alert("Следующие поля не могут быть пустыми");
      form_phone.addClass("error");
      form_name.addClass("error");
    }
  });

  // owl-carousel

  $(".owl-carousel").owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: 20, //Отступ от элемента справа в 50px
    nav: true, //Включение навигации
    navText: [""], //Отключение стандартных стрелочек в навигации
    autoplay: false, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
    responsive: {
      //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});