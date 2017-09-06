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