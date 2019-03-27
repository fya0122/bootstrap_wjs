$(function () {
  // ★★★★★轮播图逻辑-开始
  var items = $('.carousel-inner .item')
  $(window).on('resize', function () {
    var width = $(window).width()
    if (width >= 768) {
      $(items).each(function (index, value) {
        var item = $(this);
        var imgSrc = item.data("largeImage");
        item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage", "url('" + imgSrc + "')"));
      });
    } else {
      $(items).each(function (index, value) {
        var item = $(this)
        var imgSrc = item.data('smallImage')
        item.html($('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc + '" alt=""></a>'))
      })
    }
  }).trigger('resize')
  // ★★★★★轮播图逻辑-结束





  //  ★★★★★tip-开始
  $('[data-toggle="tooltip"]').tooltip()
  //  ★★★★★tip-结束

})
