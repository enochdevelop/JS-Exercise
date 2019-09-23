function price() {

	var f = 0;
	var s = 0;
	var t = 0;
	var a = document.getElementById("first").value;
	var b = document.getElementById("second").value;
	var c = document.getElementById("third").value;

	if (document.getElementById("first").checked) {
		f = a;
	}
	if (document.getElementById("second").checked) {
		s = b;
	}
	if (document.getElementById("third").checked) {
		t = c;
	}

	var total = +f + +s + +t;
	var tax = .05 / total;
	var every = total + tax;

	alert("Total =" + every);


}