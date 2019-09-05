var $ = function(id) {
	return document.getElementById(id);
}

var submit1 = function(){
	if(($("user_in").value == "")) alert("Chưa nhập user name");
	if(($("pass_in").value) != ($("pass_check").value)){
		alert("Password phải giống nhau");
	}
	if(($("pass_in").value) == ($("pass_check").value)){
		if(parseInt($("day").value) > 32) {
			alert("Ngày không hợp lệ");
		};
		if(parseInt($("day").value) < 32){
			if(parseInt($("month").value) > 13) {
				alert("Tháng không hợp lệ");
			}
			if(parseInt($("month").value) < 13) {
				alert("Đã SUBMIT");
				$("form").submit();
			}
		}
	}
}

window.onload = function(){
	$("btn").onclick = submit1;
}

