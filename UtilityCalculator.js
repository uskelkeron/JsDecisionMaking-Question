const prompt = require("prompt-sync")();

const operation = parseInt(prompt("Welcome to utility App. Enter 1 to + , 2 to -, 3 to * and 4 to / divide: "));
let number1, number2, answer;
if(operation === 1)
{
 number1 = parseFloat(prompt("Enter first number: "));
 number2 = parseFloat(prompt("Enter second number: "));
 answer = number1 + number2;
 console.log(`the sum of ${number1} + ${number2} is equal: ${answer}`);
 
}
else if (operation === 2)
{
    number1 = parseFloat(prompt("Enter first number: "));
    number2 = parseFloat(prompt("Enter second number: "));
    answer = number1 - number2;
    console.log(`the difference of ${number1} - ${number2} is equal: ${answer}`); 
}

else if (operation === 3)
{
    number1 = parseFloat(prompt("Enter first number: "));
    number2 = parseFloat(prompt("Enter second number: "));
    answer = number1 * number2;
    console.log(`the product of ${number1} * ${number2} is equal: ${answer}`); 
}

else if (operation === 4)
{
    number1 = parseFloat(prompt("Enter first number: "));
    number2 = parseFloat(prompt("Enter second number: "));
    
    if(number2 != 0)
    {
  
        answer = number1 / number2;
        console.log(`the quotient of ${number1} / ${number2} is equal: ${answer}`); 
    }
    else
    {
        console.log("You can't divide by zero!");
    }
}

else
{
    console.log("Sorry you must enter utility number 1-4 in order to use the program");
}

