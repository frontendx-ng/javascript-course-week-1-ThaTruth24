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
