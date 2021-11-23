const prompt = require("prompt-sync")();

const player_name = prompt("Hi, What's your name ?");

    console.log(`Welcome to our show, ${player_name}`)
const age = parseInt(prompt(`How old are you?`));


    if(age < 1)
    {
        console.log(`Sorry ${player_name}, This is not a valid age`);
    }
    else if (Number.isNaN(age))
    {
        console.log(`Sorry ${player_name}, This is not a valid age`);
    }
    else if (age < 22)
    {
        console.log(`Sorry ${player_name}, This game is for persons 22 years and above.`);
    }
    else 
    {

        console.log(`Hmmm, ${player_name} you don't look a day over ${age - 5}`);

        const cars = parseInt(prompt(`Tell me, ${player_name}, how many cars do you own ?`));

        if(Number.isNaN(cars))
        {
            console.log(`${player_name}, Please enter a valid number of cars! Integers only!`);
        }
        else if (cars === 0 || cars < 0)
        {
            console.log(`Wow, come on now ${player_name}, you are ${age} and do not own a car!`);
        }
        else
        {
            const brand  = prompt(`${player_name}, what is the brand and model of hyour car ?`);

            console.log (`The ${brand} is a great choice for a car`);

            console.log(`${player_name}, have a great day. Good Bye!!!`);
        }
    }