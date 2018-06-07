<!-- questionn 1 begins here -->
<script type="text/javascript">
let today = new Date();
  let day = today.getDay();
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let period = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && period===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  period=' Noon';
  } 
  else
  { 
  hour=12;
  period=' PM';
  } 
  } 
  if (hour===0 && period===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  period=' Midnight';
  } 
  else
  { 
  hour=12;
  period=' AM';
  } 
  } 
console.log("Current Time : "+hour + period + " : " + minute + " : " + second);
	</script>
<!--question 1 ends Here -->


<!--question 2 starts here -->

<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<p>Click the button to print the current window.</p>

<button onclick="myFunction()">Print this page</button>

<script>
function myFunction() {
    window.print();
}
console.log(myFunction);
</script>

</body>
</html>
<!-- question 2 ends here -->

	
<!-- question 3 starts here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>

<script>
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);
</script>

</body>
</html>
<!-- question 3 ends here -->
	
	
<!-- question 4 starts here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>

<script>
let angle1 = 5; 
let angle2 = 6; 
let angle3 = 7; 
let perimeter = (angle1 + angle2 + angle3)/2;
let area =  Math.sqrt(perimeter*((perimeter-angle1)*(perimeter-angle2)*(perimeter-angle3)));
console.log(area);
</script>

</body>
</html>
<!-- question 4 ends here -->
	

<!-- question 5 starts here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body onload="reverse_string('target')"
  <pre id="target">w3resource</pre>

<script>
function reverse_string(id) 
{
    const element = document.getElementById(id);
    const textNode = element.childNodes[0];
    let text = textNode.data;

setInterval(() => {
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 300);
}
</script>

</body>
</html>
<!-- question 5 ends here -->
