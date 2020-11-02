$(function seaBox() {
	var content = "";
	for (var i in search_form) {
		var item = "<li class=\"bgx\"><a href=\"#\" id=\""+i+"\" class=\"clr0\" onmouseover=\"seaBtn(\'"+i+"\')\">" + i + "<\/a><\/li>";
		content += item;
	}
	$('body div.form div.sbox ul#sboxu').html(content);
});

function seaBtn(name) {
	var ul = $('body div.form div.sbox ul#sboxu');
	var lista = ul.find($('a')).not($('#'+name))
	lista.removeClass('clr1');
	$('#'+name).addClass("clr1");
	var content = "";
	var i = " <i class=\"btn float-buttons waves-input-wrapper waves-effect waves-float\" style=\"color: rgb(255, 255, 255);\">";
	for (var j in search_form[name]) {
		var btn_value = j;
		var btn_id = search_form[name][j][0];
		var btn_color = search_form[name][j][1];
		var item =  i+"<input value=\"" + btn_value + "\" class=\"waves-button-input\" id=\"" + btn_id + "\" style=\"background-color\: #" + btn_color + "\;\" type=\"button\" onclick=\"ss(\'" + btn_id + "\')\"><\/i>";
		content += item;
	};
	$('body div.form div.sbody').html(content);
};

function process_keyword(keyword){
	keyword = keyword.replace(/#/g, "%23");
	keyword = keyword.replace(/\+/g, "%2B");
	return keyword;
}

function ss(btn_id) {
	var keyword = $("#search_box").val();
	for (var i in search_form) {
		for (var j in search_form[i]) {
			if (search_form[i][j][0] == btn_id) {
				url = search_form[i][j][2];
				url2 = search_form[i][j][3];
				if(url2 == undefined){
					url2 = "";
				}
				keyword = process_keyword(keyword);
				window.open(url + keyword + url2);
			}
		}
	}
};
$(document).ready(function(){
	var name = "搜索";
	seaBtn(name);
	$("#search_box").keyup(function(){
		if(event.which==13){
			var keyword = $(this).val();
			var url = "https://www.bing.com/search?q=";
			keyword = process_keyword(keyword);
			window.open(url+keyword);
		};
	});
	function getSite(order){// get a site from bookmark by order
		var counts = 0;
		for(var set in bookmarks){
			for(var sites in bookmarks[set]){
				for(var site in bookmarks[set][sites]){
					if(counts==order){
						return bookmarks[set][sites][site][1];
					}
					counts += 1;
				}
			}
		}
	};
	var button1 = "div.button button#button1";
	var button2 = "div.button button#button2";
	var button3 = "div.button button#button3";
	var panel = "div.panel div.pl";
	var panel1 = panel + "#panel1";
	var panel2 = panel + "#panel2";
	var panel3 = panel + "#panel3";
	$(button1).click(function() {
		$(panel).not($(panel1)).hide(1000);
		$(panel1).toggle(1000);
	});
	$(button2).click(function() {
		$(panel).not($(panel2)).hide(1000);
		$(panel2).toggle(1000);
	});
	$(button3).click(function() {// 随机进入一个网站
		$(panel).not($(panel3)).hide(1000);
		// $(panel3).toggle(1000);
		num = parseInt(Math.random()*1024%bmCount);
		window.open(getSite(num),'_blank');
	});

	function runQrcode(divid, content){
		$("#qrcodepics").html("");
		var qrcode = new QRCode(divid);
		qrcode.makeCode(content); // 更换二维码内容
	}
	function unicodeToString(unicode){
		var str = '';  
		for(var i = 0 , len =  unicode.length ; i < len ;++i){  
		      str += String.fromCharCode(unicode[i]);  
		}
		return str;	
	}
	var bt_md5encode = "div.qrcode button#bt_md5encode";
	var bt_b64encode = "div.qrcode button#bt_b64encode";
	var bt_b64decode = "div.qrcode button#bt_b64decode";
	var bt_urlencode = "div.qrcode button#bt_urlencode";
	var bt_urldecode = "div.qrcode button#bt_urldecode";
	var ta_panel2 = "textarea#qrcodeTextArea";
	$(ta_panel2).mousemove(function(event) {
		var ta_content = $(ta_panel2).val();
		var word_count = ta_content.length;
		$(button2).html(word_count);
		runQrcode("qrcodepics", ta_content)
	});
	$(bt_b64encode).click(function(event) {
		var ta_content = $(ta_panel2).val();
		$(ta_panel2).val(BASE64.encoder(ta_content));
		runQrcode("qrcodepics", ta_content)
	});
	$(bt_b64decode).click(function(event) {
		var ta_content = $(ta_panel2).val();
		$(ta_panel2).val(unicodeToString(BASE64.decoder(ta_content)));
		runQrcode("qrcodepics", ta_content)
	});
	$(bt_md5encode).click(function(event) {
		var ta_content = $(ta_panel2).val();
		$(ta_panel2).val(hex_md5(ta_content));
		runQrcode("qrcodepics", ta_content)
	});
	$(bt_urlencode).click(function(event) {
		var ta_content = $(ta_panel2).val();
		$(ta_panel2).val(encodeURI(ta_content));
		runQrcode("qrcodepics", ta_content)
	});
	$(bt_urldecode).click(function(event) {
		var ta_content = $(ta_panel2).val();
		$(ta_panel2).val(decodeURI(ta_content));
		runQrcode("qrcodepics", ta_content)
	});
});
