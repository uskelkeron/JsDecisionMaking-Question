
const prompt = require("prompt-sync")();

const number = parseFloat(prompt("Pleae enter a number"));

const result = number%2;

if(number%2 === 0)
{
    console.log(`The number ${number} is a Even number`)
}

else 

{
    console.log(`The number ${number} is a Odd number`);
}