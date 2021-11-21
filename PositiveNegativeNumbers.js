
const ask = require("prompt-sync");

const number = parseFloat(ask("Please enter Integer"));

if(number >= 0)
{
    console.log(`The number ${number} is positive integer`);
}

else
{
    console.log(`The number ${number} is a negative integer`);
}