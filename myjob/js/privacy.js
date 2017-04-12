$(".privacy_l li").each(function(index){

	$(this).click(function(){
       $(".privacy_l li").removeClass("active");
       $(".privacy_l li").eq(index).addClass("active");
       $(".privacy_r").removeClass("active_mes");
       $(".privacy_r").eq(index).addClass("active_mes");
	})
})

$(".privacy_mobile_l li").each(function(index){
	$(this).click(function(){
       $(".privacy_mobile_l li").removeClass("active");
       $(".privacy_mobile_l li").eq(index).addClass("active");
       $(".privacy_r").removeClass("active_mes");
       $(".privacy_r").eq(index).addClass("active_mes");
	})
})