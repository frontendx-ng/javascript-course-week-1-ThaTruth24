<!--question 11 Starts Here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>

<form>

Enter A Number : <input type="text" id="value" /><br>

<input type="button" onClick="cToFahr()" Value="Convert To Fahrenheit" />
<input type="button" onClick="fToCel()" Value="Convert To Celcius" />
</form>


<script>
function cToFahr() 
{
  var cTemp = document.getElementById("value").value;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToCel() 
{
  var fTemp = document.getElementById("value").value;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
</script>

</body>
</html>
<!--Question 11 ends here -->

	
<!--Question 12 Starts Here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<script>
console.log(document.URL);
</script>

</body>
</html>
<!--Question 12 Ends Here -->
	

<!-- Question 13 Starts Here -->

<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>

<script>

let startName = 'ThnakGod Egbo';
let changeName = "Frontend X";
this[startName] = changeName;
console.log(this[startName])

</script>

</body>
</html>

<!--Question !3 ends Here -->
	
