<!--- question 6 starts here -->
 <!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>

<script>
year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
if (x == true) {
console.log("This Year Is A Leap Year");
}
else{
	console.log("This Year Is Not A Leap Year");
}
</script>

</body>
</html>

<!-- question 6 ends here -->
  
  
