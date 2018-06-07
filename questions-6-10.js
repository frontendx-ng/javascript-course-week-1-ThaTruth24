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
  
  
<!-- question 7 starts here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>

<script>

for (let year = 2014; year <= 2050; year++)
    {
    let d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }

</script>

</body>
</html>
<!-- question 7 ends here -->
