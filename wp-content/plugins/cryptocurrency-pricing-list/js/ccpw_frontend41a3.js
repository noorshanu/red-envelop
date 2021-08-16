/*Version: 1.5*/
(function($) {
$(window).load(function() { 
$(".ccpw_loader_img").fadeOut("slow");
$(".ccpw_cp-table").css("display", "table");
$(".ccpw_custom-pagination").css("display", "block");
});
$(document).ready(function(){
$(".ccpw_coin_switcher option").click(function(){
 var ccpw_option_number = $(this).attr("ccpw_option_number_attr");  
 $(".ccpw_option_number").val(ccpw_option_number);
});
$(window).load(function() {
$('.ccpw_price_chart_container').each(function() {
var widthPercent = ($(this).parent().width() / $(window).width())*100;
if(widthPercent > 0 && widthPercent < 33){
$(this).addClass("ccpw_col_3");	
}
if(widthPercent > 34 && widthPercent < 50){
$(this).addClass("ccpw_col_2");	
}
if(widthPercent > 51 && widthPercent < 100){
$(this).addClass("ccpw_col_1");	
}
});
});
});
}(jQuery)); 