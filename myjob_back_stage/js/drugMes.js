// pc端、pad端切换
$(".part1 .pc li").each(function(index){
	$(this).click(function(){
		$(".part1 .pc li").removeClass("active");
		$(".part1 .pc li").eq(index).addClass("active");
		$(".part2").removeClass("active_mes");
		$(".part2").eq(index).addClass("active_mes");
	})
})
// 移动端切换
$(".part1 .mobile li").each(function(index){
	$(this).click(function(){
		$(".part1 .mobile li").removeClass("active");
		$(".part1 .mobile li").eq(index).addClass("active");
		$(".part2").removeClass("active_mes");
		$(".part2").eq(index).addClass("active_mes");
	})
})