// ロード時と画面切り替え時に画像切替
$(window).on('load resize', function(){
  var width = $(window).width();
  if( width >= 1024 ){
    $(".changeImg").each(function(){
      $(this).attr("src", $(this).attr("src").replace("_sp","_pc"));
    })
  }
});
