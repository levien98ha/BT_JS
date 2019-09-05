var $ = function(id) {
	return document.getElementById(id);
}
var start = 0;

var submit =  function(){
	var dateinput = new Date($("datein").value);
	var hourinput = $("hourin").value;
	var mininput = $("minin").value;
	var secondinput = $("secondin").value;

    start = dateinput.getTime() + parseInt(($("hourin").value))*3600*1000 + parseInt(($("minin").value))*60*1000 + parseInt($("secondin").value)*1000 - 6*3600*1000-59*60*1000-57*1000;
	var x = setInterval(function(){
		var today = new Date().getTime();
		var d = start - today;

        var second = Math.floor(d/1000);
        var min = Math.floor(second/60);
		var hour = Math.floor(min/60);          
		var day = Math.floor(hour/24);

		hour %=24;
		min %=60;
		second %=60;

		$("dd").innerHTML = day;
		$("hh").innerHTML = hour;
		$("mm").innerHTML = min;
		$("ss").innerHTML = second;

		if(d<0){
			clearInterval(x);
			$("count").innerHTML = "ĐẾM NGƯỢC KẾT THÚC";
		}
	},1000);
}


window.onload = function(){
	$("btn").onclick =  submit;
}