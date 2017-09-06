$(document).ready(function () {

  var screen = 0,
    container = $('.main__content'),
    pages = $('.section'),
    inscroll = false,
    position = 0;

  $('pages:first-child').addClass('active');

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
    });
  });


  /* section__greating */
  $('.section__greating--button').on('click', function () {
    screen++;
    position = (-screen * 300) + 'px';

    pages.eq(screen).addClass('active').siblings().removeClass('active')
    container.css('top', position);
    setTimeout(function () {
      inscroll = false;
    });
  });


  /* section__name */
  $('.section__name--button').on('click', function () {
    screen++;
    position = (-screen * 300) + 'px';

    pages.eq(screen).addClass('active').siblings().removeClass('active')
    container.css('top', position);
    setTimeout(function () {
      inscroll = false;
    });
  });

  /* section__role */
  $('.section__role--table input').on('click', function () {
    screen++;
    position = (-screen * 300) + 'px';

    pages.eq(screen).addClass('active').siblings().removeClass('active')
    container.css('top', position);
    setTimeout(function () {
      inscroll = false;
    });
  });

  /* section__name */
  $('.section__impression--button').on('click', function () {
    screen++;
    position = (-screen * 300) + 'px';

    pages.eq(screen).addClass('active').siblings().removeClass('active')
    container.css('top', position);
    setTimeout(function () {
      inscroll = false;
    });
  });

  function validateBlank(selector, string) {
    if (string == "") {
      selector.html(string);
      selector.css('color', 'red');
    } else {
      selector.html("");
    }
  };

});

//   button clicl validateBlank(sel, message)
//   if valid == false не испольняется скролл
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIHNjcmVlbiA9IDAsXHJcbiAgICBjb250YWluZXIgPSAkKCcubWFpbl9fY29udGVudCcpLFxyXG4gICAgcGFnZXMgPSAkKCcuc2VjdGlvbicpLFxyXG4gICAgaW5zY3JvbGwgPSBmYWxzZSxcclxuICAgIHBvc2l0aW9uID0gMDtcclxuXHJcbiAgJCgncGFnZXM6Zmlyc3QtY2hpbGQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGFjdGl2ZVBhZ2UgPSBwYWdlcy5maWx0ZXIoJy5hY3RpdmUnKTtcclxuICAgIGlmICghaW5zY3JvbGwpIHtcclxuICAgICAgaW5zY3JvbGwgPSB0cnVlO1xyXG4gICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgIGlmIChhY3RpdmVQYWdlLnByZXYoKS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNjcmVlbi0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYWN0aXZlUGFnZS5uZXh0KCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzY3JlZW4rKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbiA9ICgtc2NyZWVuICogMzAwKSArICdweCc7XHJcblxyXG4gICAgcGFnZXMuZXEoc2NyZWVuKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgIGNvbnRhaW5lci5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpbnNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvKiBzZWN0aW9uX19ncmVhdGluZyAqL1xyXG4gICQoJy5zZWN0aW9uX19ncmVhdGluZy0tYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgc2NyZWVuKys7XHJcbiAgICBwb3NpdGlvbiA9ICgtc2NyZWVuICogMzAwKSArICdweCc7XHJcblxyXG4gICAgcGFnZXMuZXEoc2NyZWVuKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgIGNvbnRhaW5lci5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpbnNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvKiBzZWN0aW9uX19uYW1lICovXHJcbiAgJCgnLnNlY3Rpb25fX25hbWUtLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHNjcmVlbisrO1xyXG4gICAgcG9zaXRpb24gPSAoLXNjcmVlbiAqIDMwMCkgKyAncHgnO1xyXG5cclxuICAgIHBhZ2VzLmVxKHNjcmVlbikuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICBjb250YWluZXIuY3NzKCd0b3AnLCBwb3NpdGlvbik7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5zY3JvbGwgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvKiBzZWN0aW9uX19yb2xlICovXHJcbiAgJCgnLnNlY3Rpb25fX3JvbGUtLXRhYmxlIGlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgc2NyZWVuKys7XHJcbiAgICBwb3NpdGlvbiA9ICgtc2NyZWVuICogMzAwKSArICdweCc7XHJcblxyXG4gICAgcGFnZXMuZXEoc2NyZWVuKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgIGNvbnRhaW5lci5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpbnNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIHNlY3Rpb25fX25hbWUgKi9cclxuICAkKCcuc2VjdGlvbl9faW1wcmVzc2lvbi0tYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgc2NyZWVuKys7XHJcbiAgICBwb3NpdGlvbiA9ICgtc2NyZWVuICogMzAwKSArICdweCc7XHJcblxyXG4gICAgcGFnZXMuZXEoc2NyZWVuKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgIGNvbnRhaW5lci5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpbnNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQmxhbmsoc2VsZWN0b3IsIHN0cmluZykge1xyXG4gICAgaWYgKHN0cmluZyA9PSBcIlwiKSB7XHJcbiAgICAgIHNlbGVjdG9yLmh0bWwoc3RyaW5nKTtcclxuICAgICAgc2VsZWN0b3IuY3NzKCdjb2xvcicsICdyZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdG9yLmh0bWwoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG5cclxuLy8gICBidXR0b24gY2xpY2wgdmFsaWRhdGVCbGFuayhzZWwsIG1lc3NhZ2UpXHJcbi8vICAgaWYgdmFsaWQgPT0gZmFsc2Ug0L3QtSDQuNGB0L/QvtC70YzQvdGP0LXRgtGB0Y8g0YHQutGA0L7Qu9C7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
