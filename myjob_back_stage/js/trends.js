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


// 页面加载刷出5条动态
$(function() {

    // 行业动态5条
    $.ajax({
        type: "GET",
        url: "/zjuchWeb/news",
        data: { "length": 5, "page": 1 },
        dataType:'jsonp',
        success: function(msg) {
            $.each(msg.data.news, function(index, value) {
                var str = '<div class="trends_list "> <div class = "list_l" ><img src = "images/trends/Inews_01.png" />\
            </div> <div class = "list_r" ><p class = "title_detail"> <a target = "_blank" href = "' + value.url + '">' + value.title + '</a>\
            </p><p class = "date"> <span>' + value.date + '</span><span class="source"></span> </p> \
            <p class = "cen_detail">假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假</p> </div> </div>';
                $(str).insertBefore("#industry");
            })
        }
    })

    // 易臻云动态5条
    $.ajax({
        type: "GET",
        url: "/zjuchWeb/ecareNews",
        data: { "length": 5, "page": 1 },
        dataType:'jsonp',
        success: function(msg) {
            // debugger
            $.each(msg.data.news, function(index, value) {
                var str = '<div class="trends_list "> <div class = "list_l" ><img src = "images/trends/Enews_05.png" />\
            </div> <div class = "list_r" ><p class = "title_detail"><a target = "_blank" href = "http://127.0.0.1/work/cloud/myjob/detail.html?id='+value.id+'">'+value.title+'</a>\
            </p><p class = "date"> <span>' + value.date + '</span><span class="source"></span> </p> \
            <p class = "cen_detail">' + value.content + '</p> </div> </div>';
                $(str).insertBefore("#yizhenyun");
            })
        }
    })
})


// 对应行业动态，点击“点击更多” ，每点击一次叠加5条动态数据
var num = 1
$("#industry").click(function() {
    num = num + 1;
    $.ajax({
        type: "GET",
        url: "/zjuchWeb/news",
        data: { "length": 5, "page": num },
        dataType:'jsonp',
        success: function(msg) {
            // debugger
            if (msg.data.news.length >= 1) {
                $.each(msg.data.news, function(index, value) {
                    var str = '<div class="trends_list "> <div class = "list_l" ><img src = "images/trends/Inews_01.png" />\
            </div> <div class = "list_r" ><p class = "title_detail"> <a target = "_blank" href = "' + value.url + '">' + value.title + '</a>\
            </p><p class = "date"> <span>' + value.date + '</span><span class="source"></span> </p> \
            <p class = "cen_detail">假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假假</p> </div> </div>';
                    $(str).insertBefore("#industry");
                })
            } else {
                num = num - 1;
            }
        }
    })
})


// 对应易臻云动态，点击“点击更多” ，每点击一次叠加5条动态数据
$("#yizhenyun").click(function() {
    num = num + 1;
    $.ajax({
        type: "GET",
        url: "/zjuchWeb/ecareNews",
        data: { "length": 5, "page": num },
        dataType:'jsonp',
        success: function(msg) {
            // debugger
            if (msg.data.news.length >= 1) {
                $.each(msg.data.news, function(index, value) {
                    var str = '<div class="trends_list "> <div class = "list_l" ><img src = "images/trends/Enews_05.png" />\
            </div> <div class = "list_r" ><p class = "title_detail"><a target = "_blank" href = "http://127.0.0.1/work/cloud/myjob/detail.html?id='+value.id+'">'+value.title+'</a>\
            </p><p class = "date"> <span>' + value.date + '</span><span class="source"></span> </p> \
            <p class = "cen_detail">' + value.content + '</p> </div> </div>';
                    $(str).insertBefore("#yizhenyun");
                })
            } else {
                num = num - 1;
            }
        }
    })
})

