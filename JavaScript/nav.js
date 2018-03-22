(function(){

	var time = null;
	var list = $("#navlist");
	var box = $("#navbox");
	var lista = list.find("a").not($("#time"));
	
	for(var i=0, j=lista.length; i<j; i++){
		if(lista[i].className == "now"){
			var olda = i;
		}
	}
	
	var box_show = function(hei){
		box.stop().animate({
			height:hei,
			opacity:1
		},400);
	}
	
	var box_hide = function(){
		box.stop().animate({
			height:0,
			opacity:0
		},400);
	}
	
	lista.hover(function(){
		lista.removeClass("now");
		$(this).addClass("now");
		clearTimeout(time);
		var index = list.find("a").index($(this)) - 1;
		box.find(".cont").hide().eq(index).show();
		var _height = box.find(".cont").eq(index).height()+54;
		box_show(_height)

	},function(){

		time = setTimeout(function(){	
			box.find(".cont").hide();
			box_hide();
		},50);

		lista.removeClass("now");
		lista.eq(olda).addClass("now");
	});
	
	box.find(".cont").hover(function(){
		var _index = box.find(".cont").index($(this));
		lista.removeClass("now");
		lista.eq(_index).addClass("now");
		clearTimeout(time);
		$(this).show();
		var _height = $(this).height()+54;
		box_show(_height);
	},function(){
		time = setTimeout(function(){		
			$(this).hide();
			box_hide();
		},50);
		lista.removeClass("now");
		lista.eq(olda).addClass("now");
	});

})();

$(function(){
	var backtop = "#backtop";
	$(window).scroll(function(){  
		if($(window).scrollTop()>200){  
			$(backtop).fadeIn(1500);  
		}  
		else{  
			$(backtop).fadeOut(1500);  
		}  
	});
	$(backtop).click(function(){  
		$('body,html').animate({scrollTop:0}, 500);  
		return false;  
	});
	$(backtop).hover(function() {
		$(backtop).attr("src","./img/backtop-1.png");
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(backtop).attr("src","./img/backtop-0.png");
	});
});