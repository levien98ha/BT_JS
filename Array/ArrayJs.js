var $ = function(id) {
	return document.getElementById(id);
}
var arr = [11 ,20 ,8 ,23 ,5 ,21 ,7 ,15 ,9 ,10];

var print = function(){
	$("show_result").innerHTML = arr;
}

var find = function(){
	if($("find").value=="") {
		alert("Vui lòng nhập số cần tìm");
	}
	if($("find").value!=""){
		var x = parseInt($("find").value);
		var f = false;
		for(var i = 0; i < arr.length; i++){
			if(x == arr[i]) {
				$("show_result").innerHTML = "Tìm thấy số "+x+" ở vị trí "+(i+1);
				f = true;
			}
		}
		if(f == false) {
			$("show_result").innerHTML = "Không tìm thấy số "+x+" trong mảng";
		}
	}
}

var find_max = function(){
	var max = arr[0];
	for (var i = 0; i < arr.length - 1; i++) {
		if(max < arr[i]){
			max = arr[i];
		}
	}
	$("show_result").innerHTML = "Số lớn nhất trong mảng là "+max;
}

var total = function(){
	var tol = 0;
	for(var i = 0; i < arr.length; i++){
		tol += arr[i];
	}
	$("show_result").innerHTML = "Tổng các phần tử là "+tol;
}

var sort = function(){
	var temp;
	var arr_temp = [];
	for(var i = 0; i < arr.length; i++){
		arr_temp[i]=arr[i];
	}
	for(var i = 0; i < arr_temp.length - 1; i++){
	   for(var j = i + 1; j < arr_temp.length; j++){
	   	if(arr_temp[i] > arr_temp[j]){
	   		temp = arr_temp[i];
	   		arr_temp[i] = arr_temp[j];
	   		arr_temp[j] = temp;
	   	}
	   }		
	}
	$("show_result").innerHTML = arr_temp;
}

window.onload = function(){
	$("btn1").onclick = print;
	$("btn2").onclick = find;
	$("btn3").onclick = find_max;
	$("btn4").onclick = total;
	$("btn5").onclick = sort;
}