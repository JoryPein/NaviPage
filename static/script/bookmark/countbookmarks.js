var bmCount = 0;
$(function(){
	for(var set in bookmarks){
		for(var sites in bookmarks[set]){
			for(var site in bookmarks[set][sites]){
				bmCount += 1;
			}
		}
	}
});
