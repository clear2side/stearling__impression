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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBzY3JlZW4gPSAwLFxyXG4gICAgY29udGFpbmVyID0gJCgnLm1haW5fX2NvbnRlbnQnKSxcclxuICAgIHBhZ2VzID0gJCgnLnNlY3Rpb24nKSxcclxuICAgIGluc2Nyb2xsID0gZmFsc2UsXHJcbiAgICBwb3NpdGlvbiA9IDA7XHJcblxyXG4gICQoJ3BhZ2VzOmZpcnN0LWNoaWxkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICQoJy5idXR0b25fX3R5cGUtLXJhZGlvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5zZWN0aW9uX19ibG9ncy0taXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gIC8qIHNjcm9sbCAqL1xyXG4gICQoJ2JvZHknKS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGFjdGl2ZVBhZ2UgPSBwYWdlcy5maWx0ZXIoJy5hY3RpdmUnKTtcclxuICAgIGlmICghaW5zY3JvbGwpIHtcclxuICAgICAgaW5zY3JvbGwgPSB0cnVlO1xyXG4gICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgIGlmIChhY3RpdmVQYWdlLnByZXYoKS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNjcmVlbi0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYWN0aXZlUGFnZS5uZXh0KCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzY3JlZW4rKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbiA9ICgtc2NyZWVuICogMzAwKSArICdweCc7XHJcblxyXG4gICAgcGFnZXMuZXEoc2NyZWVuKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgIGNvbnRhaW5lci5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpbnNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfSwgNjAwKTtcclxuICB9KTtcclxuXHJcbiAgLyogc2VjdGlvbl9fZ3JlYXRpbmcgKi9cclxuICAkKCcuc2VjdGlvbl9fZ3JlYXRpbmctLWJ1dHRvbiwuYnV0dG9uLS13aXRob3V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgc2NyZWVuKys7XHJcbiAgICBwb3NpdGlvbiA9ICgtc2NyZWVuICogMzAwKSArICdweCc7XHJcblxyXG4gICAgcGFnZXMuZXEoc2NyZWVuKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgIGNvbnRhaW5lci5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpbnNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIHZhbGlkYXRpb24gKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUJsYW5rKHJlcUlucHV0LCBzdHJpbmcpIHtcclxuICAgIGlmICgoc3RyaW5nID09IFwiXCIpIHx8IChzdHJpbmcgPT0gXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgIHJlcUlucHV0LnNob3coKTtcclxuICAgICAgcmVxSW5wdXQuaHRtbCgn0J/QvtC20LDQu9GD0LnRgdGC0LAg0LfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9GPIConKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcUlucHV0Lmh0bWwoXCJcIik7XHJcblxyXG4gICAgICBzY3JlZW4rKztcclxuICAgICAgcG9zaXRpb24gPSAoLXNjcmVlbiAqIDMwMCkgKyAncHgnO1xyXG5cclxuICAgICAgcGFnZXMuZXEoc2NyZWVuKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgY29udGFpbmVyLmNzcygndG9wJywgcG9zaXRpb24pO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbnNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKiAuc2VjdGlvbl9fdHlwZS0taW5wdXQgdmFsaWRhdGlvbiAqL1xyXG4gICQoJy5zZWN0aW9uX190eXBlLS1pbnB1dCAuYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlcUlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLmlucHV0X19yZXF1aXJlbWVudHMnKTtcclxuICAgIHZhciBzdHJpbmcgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcucXVlc3Rpb25fX2Zvcm0nKS5maW5kKCcuaW5wdXRfX3RleHQtLWltcHJlc3Npb24udmFsaWQnKS52YWwoKTtcclxuXHJcbiAgICB2YWxpZGF0ZUJsYW5rKHJlcUlucHV0LCBzdHJpbmcpO1xyXG4gIH0pO1xyXG5cclxuICAvKiAuc2VjdGlvbl9fdHlwZS0tcmFkaW8gdmFsaWRhdGlvbiAqL1xyXG4gICQoJy5zZWN0aW9uX190eXBlLS1yYWRpbyAuYnV0dG9uX190eXBlLS1yYWRpbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXFJbnB1dCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5pbnB1dF9fcmVxdWlyZW1lbnRzJyk7XHJcbiAgICB2YXIgc3RyaW5nID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnF1ZXN0aW9uX19mb3JtJykuZmluZCgnLmlucHV0X190ZXh0LS1pbXByZXNzaW9uJykudmFsKCk7XHJcblxyXG4gICAgdmFsaWRhdGVCbGFuayhyZXFJbnB1dCwgc3RyaW5nKTtcclxuICB9KTtcclxuXHJcbiAgLyogLnNlY3Rpb25fX3R5cGUtLXJhZGlvJiZjb21tZW50IHZhbGlkYXRpb24gKi9cclxuICAkKCcuc2VjdGlvbl9fdHlwZS0tcmFkaW9fYW5kX2NvbW1lbnQgLmJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXFJbnB1dCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5pbnB1dF9fcmVxdWlyZW1lbnRzJyk7XHJcbiAgICB2YXIgc3RyaW5nID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcucXVlc3Rpb25fX2NvbnRlbnQnKS5maW5kKCcuYnV0dG9uX190eXBlLS1yYWRpbycpLmhhc0NsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICB2YWxpZGF0ZUJsYW5rKHJlcUlucHV0LCBzdHJpbmcpO1xyXG4gIH0pO1xyXG5cclxuICAvKiAuc2VjdGlvbl9fdHlwZS0tcmFkaW8mJmNvbW1lbnQgdmFsaWRhdGlvbiAqL1xyXG4gICQoJy5zZWN0aW9uX190eXBlLS1ncmFkZSAuYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlcUlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLmlucHV0X19yZXF1aXJlbWVudHMnKTtcclxuICAgIHZhciBzdHJpbmcgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5xdWVzdGlvbl9fY29udGVudCcpLmZpbmQoJy5zZWN0aW9uX19ibG9ncy0taXRlbScpLmhhc0NsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICB2YWxpZGF0ZUJsYW5rKHJlcUlucHV0LCBzdHJpbmcpO1xyXG4gIH0pO1xyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
