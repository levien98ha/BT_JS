var $ = function(id) {
	return document.getElementById(id)
}

var submit = function(){
	if($("toan").value ==""|| $("ly").value ==""|| $("hoa").value =="" ){
		alert("Vui lòng nhập điểm");
	}
	if($("toan").value !=""&& $("ly").value !=""&& $("hoa").value !="" ){
		var math = parseFloat($("toan").value);
		var physical = parseFloat($("ly").value);
		var chemistry = parseFloat($("hoa").value);
		var x = (math + physical + chemistry)/3;
		$("result_avg").innerHTML = x.toFixed(2);
		if(x.toFixed(2) < 5.0) {
			$("result_rank").innerHTML = "D";
		}
		if(x.toFixed(2) >= 5.0 && x.toFixed(2)<6.5) {
			$("result_rank").innerHTML = "C";
		}
		if(x.toFixed(2) >= 6.5 && x.toFixed(2)<8) {
			$("result_rank").innerHTML = "B";
		}
		if(x.toFixed(2) >= 8.0) {
			$("result_rank").innerHTML = "A";
		}
	}
}

window.onload = function(){
	$("btn").onclick = submit;
}