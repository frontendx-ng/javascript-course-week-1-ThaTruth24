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
