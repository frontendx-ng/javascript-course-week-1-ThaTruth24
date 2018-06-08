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
  
  
<!--Questio 32 STarts Here -->

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
	
	let check1 = 100 - +num1;
	let check2 = 100 - +num2;

	if (check1 > check2) {
		console.log(num2);
	} else {
		console.log(num1);
	}
}
</script>

</body>
</html>

<!--Question 32 Ends Here -->
	
	
<!--Question 33 Starts Here -->
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
	if ( (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1<= 100 && num2 >= 70 && num2<= 100)){
		console.log(true);
	} else{
		console.log(false);
	}
}
</script>

</body>
</html>

<!--Question 33 Ends Here -->

	
<!-- Question 34 starts Here -->
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
	if ( (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60)){
		if (num1 > num2) {
			console.log(num1);
		} else {
			console.log(num2);
		}
	} else{
		console.log(false);
	}
}
</script>

</body>
</html>


<!--Question 34 Ends Here -->

	
<!--Question 35 Starts Here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter String: <input type="text" id="str"/><br>
	Character To Check: <input type="text" id="chr"/><br>

	<input type="button" onClick="checkChar()" Value="Check" />
</form>

<script>

function checkChar() {
	let str = document.getElementById("str").value;
	let chr = document.getElementById("chr").value;
  let ctr = 0;
  for (let i = 0; i < str.length; i++)
  {
    if (str.charAt(i) == chr) {
      ctr++;
    }
  }
  console.log(ctr >= 2 && ctr <= 4);
}
</script>

</body>
</html>

<!-- Question 35 Ends Here -->
