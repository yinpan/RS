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

    // 移动movenote
    $('#banner').mousedown( 
        function (event) { 
        var isMove = true; 
        var abs_x = event.pageX - $('div.movenote').offset().left; 
        var abs_y = event.pageY - $('div.movenote').offset().top; 

        $(document).mousemove(function (event) { 
        if (isMove) { 
        var obj = $('div.movenote'); 
        obj.css({'left':event.pageX - abs_x, 'top':event.pageY - abs_y}); 
        } 
        } 
        ).mouseup( 
        function () { 
        isMove = false; 
        } 
        ); 
        } 
    );
    $("#firstpane .menu_body:eq(0)").show();
    $("#firstpane p.menu_head").click(function(){
        $(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
        $(this).siblings().removeClass("current");
    });
    $("#secondpane .menu_body:eq(0)").show();
    $("#secondpane p.menu_head").mouseover(function(){
        $(this).addClass("current").next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp("slow");
        $(this).siblings().removeClass("current");
    });
	})();
