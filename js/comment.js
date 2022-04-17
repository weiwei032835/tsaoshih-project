
$(function () {

    // 滑動置頂
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    // 淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#gotop").stop().fadeTo("fast", .9);
        } else {
            $("#gotop").stop().fadeOut("fast");
        }
    });

    AOS.init();

});

// product 商品
$(function(){			
    //當前
    let iCurrent = 0;

    //總數
    let iTotal = $(".product ul.pager li").length;
    //console.log(iTotal);
    //換圖
    function fnChange(argCurrent){
        
        let sUrl =$(".product ul.pager li").eq(argCurrent).data("photo");

        $(".product .col_1 figure img").attr({"src":sUrl});
    
        $(".product ul.pager li").eq(argCurrent).addClass("active").siblings().removeClass("active");

        //console.log(sUrl);
    }
    fnChange(iCurrent);
    //點擊換圖
    $(".product ul.pager li").on("click", function(){
        iCurrent = $(this).index();
        fnChange(iCurrent);
    });
    //左右鍵
    $(".product .col_2 .menu .btn_prev").on("click", function(){
        if(iCurrent <= 0) return;
        iCurrent = iCurrent -1;
        fnChange(iCurrent);
    })
    $(".product .col_2 .menu .btn_next").on("click", function(){
        if(iCurrent >= iTotal-1) return;
        iCurrent = iCurrent +1;
        fnChange(iCurrent);
    })
});

//手機選單 ================
$(function(){

	let bNavActive = false;
	let $nav = $(".nav_m");
	let $btnSwitch = $(".nav_m .btn_switch");

	$btnSwitch.on("click", function(){
		
		if(bNavActive === false){
			
			$nav.find("ul").fadeIn(20, function () {
				$btnSwitch.addClass("active");
				bNavActive = true;
			});
			
		}else{

			$nav.find("ul").fadeOut(100, function () {
				$btnSwitch.removeClass("active");
				bNavActive = false;
			});
		}
		
	});

	//console.log($nav_m.length);
});

//按漢堡選單新增版頭背景色css
$(function(){
	let bNavActive = false;
	let $btnSwitch = $(".nav_m .btn_switch");

	$btnSwitch.on("click", function(){

		if(bNavActive === false){
			$(".nav_pc").addClass("color");
			bNavActive = true;
		}else{
			$(".nav_pc").removeClass("color");
			bNavActive = false;
		}
	});
});

//選單 吸住時 變色 ================
$(function(){
	let iScrollTop = 0;
	$(window).on("scroll", function(){
		iScrollTop = $(this).scrollTop();
		if(iScrollTop > 50){
			$(".nav_pc").addClass("onTop");
			$(".nav_m").addClass("onTop");
		}else{
			$(".nav_pc").removeClass("onTop");
			$(".nav_m").removeClass("onTop");
		}
	});
});

//lightbox
$(function(){
    if ($("a[data-lightbox]").length > 0) {
        lightbox.option({
            resizeDuration: 200,
            wrapAround: true,
        });
    }
});



