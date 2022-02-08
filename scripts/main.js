document.addEventListener('DOMContentLoaded', function () {


    const cb = function (el, inview) {
        if (inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    };

    const so = new ScrollObserver(".tween-animate-title", cb);

    const _inviewAnimation = function (el, inview) {
        if (inview) {
            el.classList.add("inview");
        } else {
            el.classList.remove("inview");
        }
    };

    const so2 = new ScrollObserver(".cover-slide", _inviewAnimation);


    const header = document.querySelector('.header');

    const _navAnimation = function (el, inview) {
        if (inview) {
            header.classList.remove('triggered');
        } else {
            header.classList.add('triggered');
        }
    }

    const so3 = new ScrollObserver(".nav-trigger", _navAnimation, { once: false });

    new MobileMenu();

});

function fadeAnime(){

    // ふわっ
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
 //   $(window).on('load', function(){
   //   fadeAnime();/* アニメーション用の関数を呼ぶ*/
   // });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述