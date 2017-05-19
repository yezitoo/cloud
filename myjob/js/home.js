// pc端时part1部分内容框的字体大小根据屏幕宽度变化
var dewidth = $("body").width();
// console.log($("body").width());
if (dewidth <= 1920 && dewidth >= 1620) {
    $("#t1").css("font-size", "26px");
} else if (dewidth < 1620 && dewidth >= 1420) {
    $("#t1").css("font-size", "23px");
} else if (dewidth < 1420 && dewidth >= 1220) {
    $("#t1").css("font-size", "20px");
    $("#t2").css("font-size", "14px");
} else if (dewidth < 1220 && dewidth >= 1025) {
    $("#t1").css({ "font-size": "18px", "line-height": "normal" });
    $("#t2").css({ "font-size": "14px", "line-height": "22px" });
}

// 本地存储index坐标
$(".news1_r3 .more").each(function(index, item) {
    $(this).click(function() {
        localStorage.homeItem = index;
    })
})


//获取行业动态数据
$.ajax({
    type: "GET",
    url: "http://test.e-care.com.cn/zjuchWeb/news",
    data: { "length": 5, "page": 1 },
    // dataType:'jsonp',
    success: function(msg) {
        $.each(msg.data.news,function(index,value){
           var str='<li><a href="'+value.url+'">['+value.date+']'+value.title+'</a></li>';
           $("#industry ul").append(str);
        })
    }
})

//获取易臻云动态数据
$.ajax({
    type: "GET",
    url: "http://test.e-care.com.cn/zjuchWeb/ecareNews",
    data: { "length": 5, "page": 1 },
    // dataType:'jsonp',
    success: function(msg) {
        $.each(msg.data.news,function(index,value){
           var str='<li><a href="http://127.0.0.1/work/cloud/myjob/detail.html?id='+value.id+'">['+value.date+']'+value.title+'</a></li>';
           $("#yizhenyun ul").append(str);
        })
    }
})
