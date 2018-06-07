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
	

<!--Question 14 begins Here -->
	<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter Name Of File With It's Extension : <input type="text" id="file"/><br>

	<input type="button" onClick="getExtension()" Value="Get File Extension" />
</form>

<script>

function getExtension(){
let file = document.getElementById("file").value;
let extension = file.split('.').pop();
console.log(extension);	
}


</script>

</body>
</html>
<!-- Question 14 Ends Here -->

	
<!--Question 15 Starts Here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter a Number: <input type="text" id="num"/><br>

	<input type="button" onClick="difference()" Value="Get The Difference" />
</form>

<script>

function difference()
 {
 	let num = document.getElementById("num").value;
    if (num <= 13)
        answer = 13 - num;
    else
        answer = (num - 13) * 2;

    console.log(answer);
 }


</script>

</body>
</html>

<!--Question !5 Ends Here -->
