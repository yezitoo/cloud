$(".trends li").each(function(index){

	$(this).click(function(){
       $(".trends li").removeClass("active");
       $(".trends li").eq(index).addClass("active");
       $(".active_mes").removeClass("block");
       $(".active_mes").eq(index).addClass("block");
	})
})