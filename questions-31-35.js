<!--Question 31 Starts Here -->
  
 <!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter Number1: <input type="text" id="num1"/><br>
	Enter Number2: <input type="text" id="num2"/><br>
	Enter Number3: <input type="text" id="num3"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check() {
  	let num1 = document.getElementById("num1").value;
  	let num2 = document.getElementById("num2").value;
  	let num3 = document.getElementById("num3").value;
  	let maxNum = 0;

  	if (+num1 > +num2) {
  		maxNum = num1;
  	} else {
  		maxNum = num2;
  	}

  	if (+num3 > +maxNum) {
  		maxNum = num3;
  	}

  	console.log(maxNum);  
  }

</script>

</body>
</html>

<!--Question 31 Ends Here -->
  
  
