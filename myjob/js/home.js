// pc端时part1部分内容框的字体大小根据屏幕宽度变化
var dewidth = $("body").width();
// console.log($("body").width());
if (dewidth <= 1920 && dewidth >= 1620) {
    $("#t1").css("font-size", "26px");
} else if (dewidth < 1620 && dewidth >= 1420) {
    $("#t1").css("font-size", "23px");
}else if (dewidth < 1420 && dewidth >= 1220) {
    $("#t1").css("font-size", "20px");
    $("#t2").css("font-size", "14px");
}else if (dewidth < 1220 && dewidth >= 1025) {
    $("#t1").css({"font-size":"18px","line-height":"normal"});
    $("#t2").css({"font-size":"14px","line-height":"22px"});
}
