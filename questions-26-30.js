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
  

