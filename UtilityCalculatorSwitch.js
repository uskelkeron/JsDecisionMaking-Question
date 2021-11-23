const prompt = require("prompt-sync")();


 

const operation = parseInt(prompt("Welcome to utility App. Enter 1 to + , 2 to -, 3 to * and 4 to / divide: "));
let  answer;
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));



switch (operation)
{
 case 1:
        answer = number1 + number2;
        console.log(`the sum of ${number1} + ${number2} is equal: ${answer}`);
     break;

    case 2:
        answer = number1 - number2;
        console.log(`the difference of ${number1} - ${number2} is equal: ${answer}`);
    break;

    case 3:
            answer = number1 * number2;
            console.log(`the product of ${number1} * ${number2} is equal: ${answer}`);
    break;

 case 4:
        if(number2 !== 0)
        {
            answer = number1 / number2;
            console.log(`the quotient of ${number1} / ${number2} is equal: ${answer}`);
        }

        else {
            console.log("You can't divide by zero!");
        }

        break;


default:
    console.log("Sorry you must enter utility number 1-4 in order to use the program");
    break;


}


