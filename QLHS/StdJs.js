//khởi tạo đối tượng
var students = [];

var std1 = {
	code: 102160274,
	name: "Nguyễn Lê Viễn",
	age: 21,
	sex: "Nam"
}

var std2 = {
	code: 102160275,
	name: "Hoàng Tấn Trường An",
	age: 21,
	sex: "Nam"
}

var std3 = {
	code: 102160276,
	name: "Phan Thị Phương Linh",
	age: 21,
	sex: "Nữ"
}

var std4 = {
	code: 102160277,
	name: "Lê Xuân Tân",
	age: 21,
	sex: "Nam"
}

var std5 = {
	code: 102160278,
	name: "Nguyễn Công Minh",
	age: 31,
	sex: "Nữ"
}

students = [std1, std2, std3, std4, std5];

//get element
var $ = function(id) {
	return document.getElementById(id);
}

//hàm show = print
var show_stds = function(){
	var x = $("table_id");
	var row_count = x.rows.length;
	for(let j = 1; j< row_count; j++){
		x.deleteRow(1);
	}

	for(let i = students.length -1; i >= 0; i--){
		var row = x.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

		var stdcode = students[i].code;
		var stdname = students[i].name;
		var stdage = students[i].age;
		var stdgender = students[i].sex;

		cell1.innerHTML = stdcode;
		cell2.innerHTML = stdname;
		cell3.innerHTML = stdage;
		cell4.innerHTML = stdgender;
	}
}

//hàm chỉnh sửa = edit
var edit_stds = function(){
	var x = parseInt($("std_code").value);
	for(let i = 0; i < students.length; i++){
		if(students[i].code == x){
			students[i].name = $("std_name").value;
			students[i].age = parseInt($("std_age").value);
			if($("gender_male").checked = true) {
				students[i].sex = "Nam";
			}
			else students[i].sex = "Nữ";
		}
	}
	show_stds();
}


//hàm reset giá trị
var reset_stds = function(){
	$("std_code").value="";
	$("std_name").value="";
	$("std_age").value="";
	$("gender_male").checked = false;
	$("gender_female").checked = false;
}


//hàm thêm 1 học sinh
var add_stds = function(){
	var code_add = parseInt($("std_code").value);
	var name_add = $("std_name").value;
	var age_add = parseInt($("std_age").value);
	//var gender_male_add = $("gender_male").value;
	var sex_add;
	if($("gender_male").checked) {
		sex_add = "Nam";
	}
	else sex_add="Nữ";

	var std_add = {
		code: code_add,
		name: name_add,
		age: age_add,
		sex: sex_add
	};

	var check_code = false;
	for(var i = 0; i < students.length; i++){
		if(code_add == students[i].code) { 
			alert("Mã số sinh viên đã tồn tại");
			check_code = true;}
		//break;
	}
	if(check_code == false) students.push(std_add);
	show_stds();

}


//hàm table row onclick
var table_click =function(){
	var x = $("table_id");
	var row_count =  x.rows.length;
	for(let i = 0; i < row_count; i++){
		x.rows[i].onclick = function(){
			var rIndex = this.rowIndex;
			$("std_code").value = this.cells[0].innerHTML;
			$("std_name").value = this.cells[1].innerHTML;
			$("std_age").value = this.cells[2].innerHTML;
			var sex_std = this.cells[3].innerHTML;
			if(sex_std == "Nữ") {
				$("gender_female").checked = true;
			}
			if(sex_std == "Nam") {
				$("gender_male").checked = true;
			}

		}

	}
}

//hàm delete
var delete_stds = function(){
	var x = parseInt($("std_code").value);
	for(let i = 0; i < students.length; i++){
		if(students[i].code == x){
			students.splice(i,1);
		}
	}
		show_stds();
		reset_stds();
}

	window.onload = function(){
		$("show_std").onclick = show_stds;
		$("edit_std").onclick = edit_stds;
		$("reset_std").onclick = reset_stds;
		$("add_std").onclick = add_stds;
		$("table_id").onclick = table_click;
		$("delete_std").onclick = delete_stds;
	}