$(function () {




  // ★★★★★轮播图逻辑
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


  //  ★★★★★tip
  $('[data-toggle="tooltip"]').tooltip()


  //  ★★★★★导航宽度计算
  var ul = $('.wjs-product .nav-tabs')
  var lis = ul.find('li')
  var totalWidth = 0
  lis.each(function (index, value) {
    totalWidth = totalWidth + $(value).outerWidth(true)
  })
  ul.width(totalWidth)


  //  ★★★★★使用插件iscroll
  var myscroll = new IScroll('.tabs_parent', {
    scrollX: true,
    scrollY: false
  })





})
