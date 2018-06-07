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

	
<!-- question 8 starts here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>

<script>
 let num = Math.ceil(Math.random() * 10);
 let guess = prompt('Guess the number between 1 and 10 inclusive');
 if (guess == num)
   alert('Matched');
  else
   alert('Not matched, the number was ' + num);
</script>

</body>
</html>

<!-- question 8 ends here -->
	
<!--question 9 starts here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>

<script>
today=new Date();
const cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
const one_day=1000*60*60*24;
console.log(`${Math.ceil((cmas.getTime()-today.getTime())/(one_day))} days left until Christmas!`);

</script>

</body>
</html>

<!-- question 9 ends here -->
	
