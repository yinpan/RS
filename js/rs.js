	(function(){

    // sidebar的定位
		$(window).scroll(function(){
        	var top = $(document).scrollTop()-160;
       		if (top>=20) {
       			$("#sidebar").css("top", top + "px")
       		}else{
       			$("#sidebar").css('top', '0px');
       		};
		});

    // // 展开菜单
    // $(".add > a").click(function() {
    //       $(this).addClass('current')
    //       .next().show()
    //       .parent().siblings().children('a').removeClass('current')

    //       .next().hide();
    //       return false;
    // });

    // // 移动movenote
    // $('#banner').mousedown( 
    //     function (event) { 
    //     var isMove = true; 
    //     var abs_x = event.pageX - $('div.movenote').offset().left; 
    //     var abs_y = event.pageY - $('div.movenote').offset().top; 

    //     $(document).mousemove(function (event) { 
    //     if (isMove) { 
    //     var obj = $('div.movenote'); 
    //     obj.css({'left':event.pageX - abs_x, 'top':event.pageY - abs_y}); 
    //     } 
    //     } 
    //     ).mouseup( 
    //     function () { 
    //     isMove = false; 
    //     } 
    //     ); 
    //     } 
    // ); 
	})();