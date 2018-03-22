function CurrentTime(divID){ 
	var curTime=new Array(); 
	var now=new Date(); 
	var week=['日','月','火','水','木','金','土'];
	var HN=['子正','丑初','丑正','寅初','寅正','卯初','卯正','辰初','辰正','巳初','巳正','午初','午正','未初','未正','申初','申正','酉初','酉正','戌初','戌正','亥初','亥正','子初'];
	var Mon=['01','02','03','04','05','06','07','08','09','10','11','12'];
	var year=now.getFullYear();
	var tg=(year-3)%10-1;
	var dz=(year-3)%12-1;
	var month=now.getMonth();
	var day=now.getDate();
	var hh=now.getHours();
	var HH=HN[hh];
	var mm=now.getMinutes();
	var sc=now.getSeconds();
	var wk=now.getDay();
	curTime['month']=Mon[month]+'/'; 
	curTime['day']=day<10?'0'+day:day; 
	curTime['hh']=hh<10?'0'+hh:hh; 
	curTime['HH']=HH;
	curTime['mm']=mm<10?'0'+mm:mm; 
	curTime['sc']=sc<10?'0'+sc:sc; 
	curTime['wk']='['+week[wk]+']'; 
	curTime=curTime['month']+curTime['day']+' '+curTime['wk']+' '+curTime['HH']+' '+curTime['hh']+':'+curTime['mm']+':'+curTime['sc']; 
	document.getElementById(divID).innerHTML=curTime; 
	setTimeout('CurrentTime(\''+divID+'\')',1000);
	if(week[wk]=='土' || week[wk]=='日'){
		 document.getElementById("time").style.color = '#f00';
		 document.getElementById("time").style.fontStyle= '宋体';
	}
}
CurrentTime('time');