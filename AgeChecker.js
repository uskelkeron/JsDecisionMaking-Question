
const prompt = require("prompt-sync")();

const name = prompt("Please enter your name: ");

const age = parseInt(prompt("Plese Enter Age: "));

if(age <= 18)
{
    console.log(`${name}, you are too young to go beyound this point`);
}
else
{
    console.log(`${name}, you have been granted access`);
}