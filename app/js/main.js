$(document).ready(function () {

  var screen = 0,
    container = $('.main__content'),
    pages = $('.section'),
    inscroll = false,
    position = 0;

  $('pages:first-child').addClass('active');
  $('.button__type--radio').on('click', function () {
    $(this).addClass('active');
  });

  $('.section__blogs--item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  /* scroll */
  $('body').on('mousewheel', function (event) {
    var activePage = pages.filter('.active');
    if (!inscroll) {
      inscroll = true;
      if (event.deltaY > 0) {
        if (activePage.prev().length) {
          screen--;
        }
      } else {
        if (activePage.next().length) {
          screen++;
        }
      }
    }

    position = (-screen * 300) + 'px';

    pages.eq(screen).addClass('active').siblings().removeClass('active')
    container.css('top', position);
    setTimeout(function () {
      inscroll = false;
    }, 600);
  });

  /* section__greating */
  $('.section__greating--button,.button--without').on('click', function () {
    screen++;
    position = (-screen * 300) + 'px';

    pages.eq(screen).addClass('active').siblings().removeClass('active')
    container.css('top', position);
    setTimeout(function () {
      inscroll = false;
    });
  });

  /* validation */
  function validateBlank(reqInput, string) {
    if ((string == "") || (string == "checked")) {
      reqInput.show();
      reqInput.html('Пожалуйста заполните поля *');
    } else {
      reqInput.html("");

      screen++;
      position = (-screen * 300) + 'px';

      pages.eq(screen).addClass('active').siblings().removeClass('active')
      container.css('top', position);
      setTimeout(function () {
        inscroll = false;
      });
    }
  };

  /* .section__type--input validation */
  $('.section__type--input .button').on('click', function () {
    var reqInput = $(this).parent().siblings('.input__requirements');
    var string = $(this).parent().siblings('.question__form').find('.input__text--impression.valid').val();

    validateBlank(reqInput, string);
  });

  /* .section__type--radio validation */
  $('.section__type--radio .button__type--radio').on('click', function () {
    var reqInput = $(this).parent().siblings('.input__requirements');
    var string = $(this).parent().siblings('.question__form').find('.input__text--impression').val();

    validateBlank(reqInput, string);
  });

  /* .section__type--radio&&comment validation */
  $('.section__type--radio_and_comment .button').on('click', function () {
    var reqInput = $(this).parent().siblings('.input__requirements');
    var string = $(this).parent().parent().parent().find('.question__content').find('.button__type--radio').hasClass('active');

    validateBlank(reqInput, string);
  });

  /* .section__type--radio&&comment validation */
  $('.section__type--grade .button').on('click', function () {
    var reqInput = $(this).parent().siblings('.input__requirements');
    var string = $(this).parent().parent().parent().find('.question__content').find('.section__blogs--item').hasClass('active');

    validateBlank(reqInput, string);
  });

});