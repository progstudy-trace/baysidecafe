// ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalnav-sp').addClass('active');
      } else {
          $('.globalnav-sp').removeClass('active');
      }
  });
});




// ヘッダーが下にスクロールすると変わる
$(function () {
    // スクロールを開始したら
    $(window).on("scroll", function () {
      // ファーストビューの高さを取得
      mvHeight = $(".slide").height();
      if ($(window).scrollTop() > mvHeight) {
        // スクロールの位置がファーストビューより下の場合にclassを付与
        $("header").addClass("transform");
        $(".hamburger").addClass("transform");
        $("h1").addClass("logo-hide");
      } else {
        // スクロールの位置がファーストビューより上の場合にclassを外す
        $("header").removeClass("transform");
        $(".hamburger").removeClass("transform");
        $("h1").removeClass("logo-hide");
      }
    });
  });



// 画像が下からふわっと現れる
  $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});