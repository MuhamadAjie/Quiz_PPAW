function tambahkan(){
	var x = parseInt (document.getElementById("number1").value);
	var y = parseInt (document.getElementById("number2").value);
	var z = x+y;
	document.getElementById("hasil").value=z;

}

function kurangkan(){
	var x = parseInt (document.getElementById("number1").value);
	var y = parseInt (document.getElementById("number2").value);
	var z = x-y;
	document.getElementById("hasil").value=z;
}


function bagikan(){
	var x = parseInt (document.getElementById("number1").value);
	var y = parseInt (document.getElementById("number2").value);
	var z = x/y;
	document.getElementById("hasil").value=z;
}

function kalikan(){
	var x = parseInt (document.getElementById("number1").value);
	var y = parseInt (document.getElementById("number2").value);
	var z = x*y;
	document.getElementById("hasil").value=z;
}

function resetForm(){
	document.form1.reset();
}