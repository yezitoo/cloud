// 移动端使用rem，获取不同手机屏幕宽度设置html字体大小
var dewidth = $("body").width();
// console.log(dewidth);
if (dewidth <= 767) {
    $("html").css("font-size", (dewidth / 20 + "px"));
    console.log($("html").css("font-size"));
}


var t1,t2;
$(".drug_mes").hover(
    function() {
    	clearTimeout(t2);
        $(".mes").show()
    },
    function() {

        t1 = setTimeout('$(".mes").hide()',200)
       
    }
)
$(".mes").hover(function () {
	clearTimeout(t1);
	$(".mes").show()
},function () {
	t2 = setTimeout(function () {
		$(".mes").hide()
	},200)
	
})

// 头部点击出现菜单
$(".logo_r").click(function(){
    $(".tab_c").toggle();
})







$(".logo_r img").click(function() {

})
