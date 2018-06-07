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
  
