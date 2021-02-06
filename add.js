
/*music*/
document.addEventListener("DOMContentLoaded",function(){
  /*load phantu*/
    var load0 = document.getElementById('load0');
    var load1 = document.getElementById('load1');
    var load2 = document.getElementById('load2');
    var load3 = document.getElementById('load3');
    var load4 = document.getElementById('load4');
    var load5 = document.getElementById('load5');
    var load6 = document.querySelectorAll('.load6');
    var load7 = document.getElementById('load7');
    var load8 = document.getElementById('load8');
    
    
    var vitriload = load2.offsetTop - 590 ;
    var vitriload4 = load4.offsetTop - 590 ;
    var vitriload5 = load5.offsetTop - 590 ;
    var vitriload3 = load3.offsetTop - 690 ;
    var vitriload6 = load3.offsetTop -20 ;
    var vitriload7 = load7.offsetTop +1600 ;
    var vitriload8 = load8.offsetTop +1620;
     console.log(vitriload7)
     console.log(window.pageYOffset)
     load0.classList.add("load0trangdau")
    load1.classList.add("load1trangdau")
    window.addEventListener('scroll',function(){
        
    


    if(window.pageYOffset > vitriload){
      
        
        load2.classList.add("load2sangphai");
      
    }
    if(window.pageYOffset > vitriload3){
      
        load3.classList.add("load2sangphai");
      
    }
    if(window.pageYOffset > vitriload4){
      
        load4.classList.add("load4sangtrai");
      
    }
    if(window.pageYOffset > vitriload5){
      
        load5.classList.add("load4sangtrai");
      
    }
    for (var i = 0 ; i < load6.length; i++) {
      if(window.pageYOffset > vitriload6){
      
        load6[0].classList.add("load6dichlen");
        setTimeout(function(){
            load6[1].classList.add("load6dichlen"); 
        },200)
        setTimeout(function(){
            load6[2].classList.add("load6dichlen"); 
        },400)
        setTimeout(function(){
            load6[3].classList.add("load6dichlen"); 
        },600)
        setTimeout(function(){
            load6[4].classList.add("load6dichlen"); 
        },800)
        
      
    }
    }
    if(window.pageYOffset > vitriload7){
      load7.classList.add("load6dichlen");
    }
    if(window.pageYOffset > vitriload8){
      load8.classList.add("loaddichxuong");
    }
    })
    






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
var myMusic = document.getElementById("myMusic");
          var icon = document.getElementById("icon");
          icon.onclick = function(){
            if(myMusic.paused){
              myMusic.play();
              icon.src = "./img/pause.png";
            }else{
              myMusic.pause();
              icon.src="./img/play.png";
            };
          };
  },false)

