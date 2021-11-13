
const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Enter first number"));

const num2 = parseFloat(prompt("Enter second number"));



if(num2 == 0) 
{
    console.log("Second number can't be try, try again!");
}
else
{
    const quotient = num1/num2;

    console.log(` ${num1} Quotient ${num2} is = ${quotient}`);
}
