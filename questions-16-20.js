<!Question 16 Starts Here -->
  <!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter 1st Number: <input type="text" id="number1"/><br>
	Enter 2nd Number: <input type="text" id="number2"/><br>

	<input type="button" onClick="sum()" Value="Add Numbers" />
</form>

<script>

function sum() {
 	let num1 = document.getElementById("number1").value;
 	let num2 = document.getElementById("number2").value;

    if (num1 == num2){
        answer = (+num1 + +num2)*3;
    }
    else{
        answer = (+num1 + +num2);
    }

    console.log(answer);
 }


</script>

</body>
</html>
<!-- Question 16 Ends Here -->
