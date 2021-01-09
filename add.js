
/*scrollTop*/
$(window).scroll(function(){
    if($(window).scrollTop() >= 10) {
      $('.scroll-up').show();
    } else {
      $('.scroll-up').hide();
    }
  });
  function page_scroll2top(){
    $('html,body').animate({
      scrollTop: 0
      }, 'fast');
  }
  /*menu-btn*/

$(document).ready(function () {

                $('.menu-btn').click(function () {
                    $('.menu-list').toggleClass("active");
                    $('.menu-btn').toggleClass("active");
                });
            });
/*music*/
