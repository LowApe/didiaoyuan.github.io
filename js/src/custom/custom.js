$(document).ready(function () {
  $(window).scroll(function(){
    $(".top-scroll-bar").attr("style", "width: " + ($(this).scrollTop() / ($(document).height() - $(this).height()) * 100) + "%; display: block;");
  });
});

$(document).ready(function () {
    // 页面加载进度条
    NProgress.start();
    window.onload = function () {
        NProgress.done();
    };
});