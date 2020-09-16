function setclock(){
    // declearing variable of clock in javascript 
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    //this ko variable is used to decleare am or pm
    var ko = ' AM';
    if(hour<12)
    {
        ko=' AM';
    } 
    else{
        ko=' PM';
    }
    // this condition is used for showing the time from range 12AM To 12 PM
    if(hour>12)
    {
    hour=hour-12;
    }
    
    if(hour==0)
   {
    hour=12;
   }

//    we are using this condition loop to print  01,02,03,04 ... 09 such number 
   if(hour<10)
   {
       hour='0'+ hour;
   }
   if(min<10)
   {
       min='0'+ min;
   }
 
//    the document method getElementById() returns an element object representing  the element whose id match the specfic string 
document.getElementById('clock').innerHTML=hour+':'+min+':'+sec+ ko;
}
// setInterval repeats our function after every 1sec (1000 millsec)
setInterval(setclock,1000);