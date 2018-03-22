function getImg(url){
	return "<img src=\'"+url+"\'>";
};

function buildWeather(data){
	var jn = JSON.parse(data);
	var err = jn.error;
	var date = jn.date;
	var res = jn.results;
	var city = res[0].currentCity;
	var weather = res[0].weather_data;
	$("#city").html(city);
	for(var i=0;i<3;i++){
		var lv = "div.lv"+(i+1);
		var w = weather[i];
		$(lv+" div span#date").html(w.date);
		$(lv+" div span#weather").html(w.weather);
		$(lv+" div span#day").html(getImg(w.dayPictureUrl));
		$(lv+" div span#night").html(getImg(w.nightPictureUrl));
		$(lv+" div span#wind p").html(w.wind);
		$(lv+" div span#temperature p").html(w.temperature);
	}
};

$(function(){
	var btn = $("div.button button#button1");
	btn.click(function(event) {		
		$.ajax({
			url: 'http://api.jirengu.com/weather.php',
			type: 'get',
			callback: "汕头",        
			success: function(data) {
				buildWeather(data);
			},
			error: function(e) {
				$("#city").html("无网络连接");
			}
		});
	});
})