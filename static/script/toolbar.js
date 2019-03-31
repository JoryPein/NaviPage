var toolbarX = {
	0: ["脚本工具", "http://tools.jb51.net/"],
	1: ["站长工具", "http://tool.chinaz.com/"],
	2: ["CodePlayer", "http://www.365mini.com/"],
	3: ["代码格式化", "http://web.chacuo.net/formathtml"],
	4: ["代码DIY", "http://www.365mini.com/diy.php"],
	5: ["Ping奇云测", "http://ce.cloud.360.cn/"],
	6: ["MyIp", "http://tools.add0n.com/what-is-my-ip.php"],
	7: ["ScribblerToo", "http://www.zefrank.com/scribbler/scribblertoo/"],
	8: ["五笔在线", "http://www.52wubi.com/uploads/userup/52wubi.swf"],
	9: ["Regexper", "https://regexper.com/"],
	10: ["Dillinger", "http://dillinger.io/"],
	11: ["参考对照表", "http://tools.jb51.net/table"],
	12: ["汉字转拼音", "http://xh.5156edu.com/conversion.html"],
	13: ["PSonline", "http://tools.jb51.net/aideddesign/webps"],
	14: ["MarkDownEditor", "https://www.zybuluo.com/mdeditor"],
	15: ["base64", "http://www.mxcz.net/"],
	16: ["md5", "http://pmd5.com/"],
	17: ["网页调色板", "http://tools.jb51.net/color/color_picker"],
	18: ["haoIP", "https://haoip.cn/"],
	19: ["md_pandao", "http://pandao.github.io/editor.md/"]
};
$(function(){
	var toolbar = "";
	var countx = 1;
	for(var i in toolbarX){
		toolbar += "<li class=\"tools\"><a href=\"" + toolbarX[i][1] + "\" target=\"_blank\" class=\"tool\">" + toolbarX[i][0] + "</a></li>";	
		if(countx%7==0){
			toolbar += "<br><br>";
		}
		countx++;
	}
	if(document.getElementById("tool")){
		document.getElementById("tool").innerHTML = toolbar;
	}
});
