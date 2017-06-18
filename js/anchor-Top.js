// top
$(function(){
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "8000");
  return false;
});
});
