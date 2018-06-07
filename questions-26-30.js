<!--Question 26 Starts Here -->
 
 <!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter A String: <input type="text" id="str"/><br>

	<input type="button" onClick="swap()" Value="Swap" />
</form>

<script>

function swap() {
  	let str = document.getElementById("str").value
  	if (str.length >=3) {
  	let last3 = str.substring(str.length-3);
  console.log( last3 + str + last3 );
} else
	console.log("String Must Be 3 Characters And Above");
}

</script>

</body>
</html>

<!--Question 26 Ends Here -->
  

<!-- Question 27 Starts Here -->

<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter A String: <input type="text" id="str"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check() {
  	let str = document.getElementById("str").value;

  	let first4 = str.substring(0, 4);
  	if (first4 == 'Java') {
  console.log(true);
} else
	console.log(false);
}

</script>

</body>
</html>

<!-- QUestion 27 Ends Here -->

	
<!--Question 28 Starts Here -->
	
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter Number1: <input type="text" id="num1"/><br>
	Enter Number2: <input type="text" id="num2"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check() {
  	let num1 = document.getElementById("num1").value;
  	let num2 = document.getElementById("num2").value;

  	if ((num1 >= 50 && num1 <= 99  ) || (num2 >= 50 && num2 <= 99)) {
  console.log(true);
} else
	console.log(false);
}

</script>

</body>
</html>

<!--Question 28 Ends Here -->
