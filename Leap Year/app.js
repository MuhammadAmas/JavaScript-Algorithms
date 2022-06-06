var year = prompt("Enter Year You Want to Check.");
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            prompt(year + " is a Leap year");
        }
        else{
            prompt(year + " is Not a leap year");
        }
    }
    else{
        prompt(year + " is a Leap year");
    }
}
else{
    prompt( year + " is Not a Leap Year");
}