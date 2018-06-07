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

	
<!--Question 17 Starts Here -->

<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter A Number: <input type="text" id="number"/><br>
	
	<input type="button" onClick="difference()" Value="Get Difference" />
</form>

<script>

function difference() {
 	let num1 = document.getElementById("number").value;

    if (num1 > 19){
        answer = (+num1 - 19) * 3;
    }
    else{
        answer = (19 - +num1);
    }

    console.log(answer);
 }


</script>

</body>
</html>

<!-- Question 17 Ends Here-->
	
<!--Question 18 STarts Here-->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter 1st Number: <input type="text" id="number1"/><br>
	Enter 2nd Number: <input type="text" id="number2"/><br>

	<input type="button" onClick="check()" Value="Add Numbers" />
</form>

<script>

function check() {
 	let num1 = document.getElementById("number1").value;
 	let num2 = document.getElementById("number2").value;

    if ((num1 || num2) == 50 || (+num1 + +num2) == 50){
        answer = true;
    }
    else{
        answer = false;
    }

    console.log(answer);
 }


</script>

</body>
</html>
<!-- Question 18 Ends Here -->

	
<!-- QUestion 19 Begins Here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter 1st Number: <input type="text" id="number1"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check() {
	let num = document.getElementById("number1").value
	let answer =  ((Math.abs(100 - +num) <= 20) || (Math.abs(400 - +num) <= 20));
console.log(answer);
}


</script>

</body>
</html>

<!-- QUestion 19 Ends Here -->
