$(function navBox() {
	var content = "";
	for (var i in bookmarks) {
		var item = "<li><a href=\"#\" id=\"list"+i+"\">"+i+"<\/a><\/li>";
		content += item;
	}
	$('ul#navfocus li').after(content);
});


var bmCount = 0;
$(function(){
	var navBM = "";
	for(var set in bookmarks){
		navBM += "<div class=\"cont\" style=\"display:none;\" id=\"" + set + "\"><ul class=\"sublist clearfix\">";
		for(var sites in bookmarks[set]){
			navBM += "<li><h3 class=\"mcate-item-hd\"><span>" + sites + "</span></h3><p class=\"mcate-item-bd\" id=\""+sites+"\">";
			for(var site in bookmarks[set][sites]){
				navBM += "<a href=\"" + bookmarks[set][sites][site][1] + "\" target=\"_blank\">" + bookmarks[set][sites][site][0] + "</a>";
				bmCount += 1;
			}
			navBM += "</p></li>";
		}
		navBM += "</ul></div>";
	}
	document.getElementById("navbox").innerHTML = navBM;
});
