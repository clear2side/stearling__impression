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

  /* validation */
  function validateBlank(reqInput, string) {
    if (string == "") {
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

  /* sections without validation */
  $('.section__greating--button,.button--without').on('click', function () {
    screen++;
    position = (-screen * 300) + 'px';

    pages.eq(screen).addClass('active').siblings().removeClass('active')
    container.css('top', position);
    setTimeout(function () {
      inscroll = false;
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgc2NyZWVuID0gMCxcclxuICAgIGNvbnRhaW5lciA9ICQoJy5tYWluX19jb250ZW50JyksXHJcbiAgICBwYWdlcyA9ICQoJy5zZWN0aW9uJyksXHJcbiAgICBpbnNjcm9sbCA9IGZhbHNlLFxyXG4gICAgcG9zaXRpb24gPSAwO1xyXG5cclxuICAkKCdwYWdlczpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcuYnV0dG9uX190eXBlLS1yYWRpbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuc2VjdGlvbl9fYmxvZ3MtLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICAvKiBzY3JvbGwgKi9cclxuICAkKCdib2R5Jykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBhY3RpdmVQYWdlID0gcGFnZXMuZmlsdGVyKCcuYWN0aXZlJyk7XHJcbiAgICBpZiAoIWluc2Nyb2xsKSB7XHJcbiAgICAgIGluc2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcclxuICAgICAgICBpZiAoYWN0aXZlUGFnZS5wcmV2KCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzY3JlZW4tLTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVBhZ2UubmV4dCgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgc2NyZWVuKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb24gPSAoLXNjcmVlbiAqIDMwMCkgKyAncHgnO1xyXG5cclxuICAgIHBhZ2VzLmVxKHNjcmVlbikuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICBjb250YWluZXIuY3NzKCd0b3AnLCBwb3NpdGlvbik7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5zY3JvbGwgPSBmYWxzZTtcclxuICAgIH0sIDYwMCk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIHZhbGlkYXRpb24gKi9cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUJsYW5rKHJlcUlucHV0LCBzdHJpbmcpIHtcclxuICAgIGlmIChzdHJpbmcgPT0gXCJcIikge1xyXG4gICAgICByZXFJbnB1dC5zaG93KCk7XHJcbiAgICAgIHJlcUlucHV0Lmh0bWwoJ9Cf0L7QttCw0LvRg9C50YHRgtCwINC30LDQv9C+0LvQvdC40YLQtSDQv9C+0LvRjyAqJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXFJbnB1dC5odG1sKFwiXCIpO1xyXG5cclxuICAgICAgc2NyZWVuKys7XHJcbiAgICAgIHBvc2l0aW9uID0gKC1zY3JlZW4gKiAzMDApICsgJ3B4JztcclxuXHJcbiAgICAgIHBhZ2VzLmVxKHNjcmVlbikuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgIGNvbnRhaW5lci5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5zY3JvbGwgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyogLnNlY3Rpb25fX3R5cGUtLWlucHV0IHZhbGlkYXRpb24gKi9cclxuICAkKCcuc2VjdGlvbl9fdHlwZS0taW5wdXQgLmJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXFJbnB1dCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5pbnB1dF9fcmVxdWlyZW1lbnRzJyk7XHJcbiAgICB2YXIgc3RyaW5nID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnF1ZXN0aW9uX19mb3JtJykuZmluZCgnLmlucHV0X190ZXh0LS1pbXByZXNzaW9uLnZhbGlkJykudmFsKCk7XHJcblxyXG4gICAgdmFsaWRhdGVCbGFuayhyZXFJbnB1dCwgc3RyaW5nKTtcclxuICB9KTtcclxuXHJcbiAgLyogLnNlY3Rpb25fX3R5cGUtLXJhZGlvIHZhbGlkYXRpb24gKi9cclxuICAkKCcuc2VjdGlvbl9fdHlwZS0tcmFkaW8gLmJ1dHRvbl9fdHlwZS0tcmFkaW8nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVxSW5wdXQgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcuaW5wdXRfX3JlcXVpcmVtZW50cycpO1xyXG4gICAgdmFyIHN0cmluZyA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5xdWVzdGlvbl9fZm9ybScpLmZpbmQoJy5pbnB1dF9fdGV4dC0taW1wcmVzc2lvbicpLnZhbCgpO1xyXG5cclxuICAgIHZhbGlkYXRlQmxhbmsocmVxSW5wdXQsIHN0cmluZyk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIC5zZWN0aW9uX190eXBlLS1yYWRpbyYmY29tbWVudCB2YWxpZGF0aW9uICovXHJcbiAgJCgnLnNlY3Rpb25fX3R5cGUtLXJhZGlvX2FuZF9jb21tZW50IC5idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVxSW5wdXQgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcuaW5wdXRfX3JlcXVpcmVtZW50cycpO1xyXG4gICAgdmFyIHN0cmluZyA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnF1ZXN0aW9uX19jb250ZW50JykuZmluZCgnLmJ1dHRvbl9fdHlwZS0tcmFkaW8nKS5oYXNDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgdmFsaWRhdGVCbGFuayhyZXFJbnB1dCwgc3RyaW5nKTtcclxuICB9KTtcclxuXHJcbiAgLyogLnNlY3Rpb25fX3R5cGUtLXJhZGlvJiZjb21tZW50IHZhbGlkYXRpb24gKi9cclxuICAkKCcuc2VjdGlvbl9fdHlwZS0tZ3JhZGUgLmJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXFJbnB1dCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5pbnB1dF9fcmVxdWlyZW1lbnRzJyk7XHJcbiAgICB2YXIgc3RyaW5nID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcucXVlc3Rpb25fX2NvbnRlbnQnKS5maW5kKCcuc2VjdGlvbl9fYmxvZ3MtLWl0ZW0nKS5oYXNDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgdmFsaWRhdGVCbGFuayhyZXFJbnB1dCwgc3RyaW5nKTtcclxuICB9KTtcclxuXHJcbiAgLyogc2VjdGlvbnMgd2l0aG91dCB2YWxpZGF0aW9uICovXHJcbiAgJCgnLnNlY3Rpb25fX2dyZWF0aW5nLS1idXR0b24sLmJ1dHRvbi0td2l0aG91dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHNjcmVlbisrO1xyXG4gICAgcG9zaXRpb24gPSAoLXNjcmVlbiAqIDMwMCkgKyAncHgnO1xyXG5cclxuICAgIHBhZ2VzLmVxKHNjcmVlbikuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICBjb250YWluZXIuY3NzKCd0b3AnLCBwb3NpdGlvbik7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5zY3JvbGwgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
