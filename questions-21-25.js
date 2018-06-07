<!-- Question 21 Starts Here -->
 
 <!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter A String: <input type="text" id="string"/><br>

	<input type="button" onClick="check()" Value="check" />
</form>

<script>

function check() {
 	let str = document.getElementById("string").value;

    if (str.substring(0 , 2) === 'Py'){
        answer = str;
    }
    else{
        answer = "Py" + str;
    }

    console.log(answer);
 }


</script>

</body>
</html>

<!-- QUestion 21 Ends Here -->
  
<!--QUestion 22 Starts Here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter A String: <input type="text" id="str"/><br>
	Enter Position: <input type="text" id="pos"/><br>

	<input type="button" onClick="removeChar()" Value="check" />
</form>

<script>

function removeChar() {
	let str = document.getElementById("str").value
	let pos = document.getElementById("pos").value
console.log( str.replace(str.substring(pos - 1, pos), ''));
}


</script>

</body>
</html>

<!-- Question 22 Ends Here -->

	
<!-- Question 23 Starts Here -->
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
  if (str.length <= 1)
  {
    return str;
  }
  mid_char = str.substring(1, str.length - 1);
  console.log( (str.charAt(str.length - 1)) + mid_char + str.charAt(0));
}
</script>

</body>
</html>
<!-- Question 23 Ends Here -->

	
<!-- Question 24 Strats Here -->

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
  console.log( (str.charAt(0)) + str + str.charAt(0));
}
</script>

</body>
</html>

<!-- QUestion 24 Ends Here -->

	
<!--Question 25 Starts Here -->

<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter A Number: <input type="text" id="num"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check() {
  	let num = document.getElementById("num").value
  	if ((num % 3 == 0) || (num % 7 == 0)){
  		console.log(true);
  	} else{
  		console.log(false);
  	}
}
</script>

</body>
</html>
<!--QUestion 25 Ends Here -->
