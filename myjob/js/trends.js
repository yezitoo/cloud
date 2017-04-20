$(".trends li").each(function(index) {
    $(this).click(function() {
        $(".trends li").removeClass("active");
        $(".trends li").eq(index).addClass("active");
        $(".active_mes").removeClass("block");
        $(".active_mes").eq(index).addClass("block");
    })
})

// 变量e=index=localStorage.homeItemhome.js（home.js里的内容）,获取home.js的坐标值
$(function() {
    var e = localStorage.homeItem;
    $(".trends li").removeClass("active");
    $(".trends li").eq(e).addClass("active");
    $(".active_mes").removeClass("block");
    $(".active_mes").eq(e).addClass("block");
});
