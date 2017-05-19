$(document).ready(function() {


    // 移动端使用rem，获取不同手机屏幕宽度设置html字体大小
    var dewidth = $("body").width();
    // console.log(dewidth);
    if (dewidth <= 767) {
        $("html").css("font-size", (dewidth / 20 + "px"));
        console.log($("html").css("font-size"));
    }


    var t1, t2;
    $(".drug_mes").hover(
        function() {
            clearTimeout(t2);
            $(".mes").show()
        },
        function() {

            t1 = setTimeout('$(".mes").hide()', 200)

        }
    )
    $(".mes").hover(function() {
        clearTimeout(t1);
        $(".mes").show()
    }, function() {
        t2 = setTimeout(function() {
            $(".mes").hide()
        }, 200)

    })


   var t3, t4;
    $(".contactUs").hover(
        function() {
            clearTimeout(t3);
            $(".mes_about").show()
        },
        function() {

            t3 = setTimeout('$(".mes_about").hide()', 300)

        }
    )
    $(".mes_about").hover(function() {
        clearTimeout(t3);
        $(".mes_about").show()
    }, function() {
        t4 = setTimeout(function() {
            $(".mes_about").hide()
        }, 300)

    })
    // 头部点击出现菜单
    $(".logo_r").click(function() {
        $(".tab_c").toggle();
    })

  

    $(".mes li a").each(function (index,item) {
        $(item).on('click',function (e) {
            if($(".drugContainer").length>0){
                $(".mes li").removeClass("mes_block");
                $(".mes li").eq(index).addClass("mes_block");
                $(".part1 .pc li").removeClass("active");
                $(".part1 .pc li").eq(index).addClass("active");
                $(".part2").removeClass("active_mes");
                $(".part2").eq(index).addClass("active_mes");
                return false
            }else{
                localStorage.drugItem = index;
            }
        })
    })

    window.onload=function () {
        var index = localStorage.drugItem;
        $(".mes li").removeClass("mes_block");
        $(".mes li").eq(index).addClass("mes_block");
        $(".part1 .pc li").removeClass("active");
        $(".part1 .pc li").eq(index).addClass("active");
        $(".part2").removeClass("active_mes");
        $(".part2").eq(index).addClass("active_mes");
    }

})
