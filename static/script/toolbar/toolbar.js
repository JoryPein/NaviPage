$(function(){
	var toolbar = "";
	var countx = 1;
	for(var i in toolbars){
		toolbar += "<li class=\"tools\"><a href=\"" + toolbars[i][1] + "\" target=\"_blank\" class=\"tool\">" + toolbars[i][0] + "</a></li>";	
		if(countx%7==0){
			toolbar += "<br><br>";
		}
		countx++;
	}
	if(document.getElementById("tool")){
		document.getElementById("tool").innerHTML = toolbar;
	}
});
