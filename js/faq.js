$(document).ready(function(){
    $(".faq-q").click(function(){
      // $(".faq-a").hide(); 只出現單選項
        $(this).find(".faq-a").slideToggle("slow");
        $(this).children('i').toggleClass('fa fa-plus');
        $(this).children('i').toggleClass('fa fa-minus');

    });
});
$(document).ready(function(){
    $(".M-price-list").click(function(){
        $(this).find(".M-price-details").slideToggle("slow");
    });
});
