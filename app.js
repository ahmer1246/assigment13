

function calculate(){
let num1 = +prompt("Enter first Number");

if(isNaN(num1)){
    alert("Write number please ! ")
    return;
}


let operator = prompt("Enter Operator only i.e; + , - , * , / ")
if(operator !== "+" && operator !== "*" && operator !== "-" && operator !== "/"){
 alert("Please Enter Correct Operator")
 return;
}


let num2 = +prompt("Enter Second Number");
if(isNaN(num2)){
    alert("Write number please ! ")
    return;
}
let result;

switch(operator){
    case'+':
    result= num1 + num2;
    break;
    case'/':
    result= num1 / num2;
    break;
    case'-':
    result= num1 - num2;
    break;
    case'*':
    result= num1 * num2;
    break;
}

console.log(result)
alert("Result : " +result)




}
calculate();