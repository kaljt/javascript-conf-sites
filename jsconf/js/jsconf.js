$(function() {
  $(".speaker").hover(function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  })
  $("#directory .well").hover(function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  })
  setTimeout(function() {
    console.log('fade to black');
    $('#logo').addClass('toblack');
    $('.icons-bar').addClass('toblack');

  }, 5 * 60 * 1000);
});
