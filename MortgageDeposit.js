const prompt = require("prompt-sync")();

const loan_amount = parseFloat(prompt("Please Enter the value of the loan: "));
const BEGINNERS_LOAN = 25000;
const MIDDLE_INCOME_LOAN = 49999;
const UPPER_CLASS_LOAN = 100000; 
let deposit;

if (loan_amount < BEGINNERS_LOAN)
{
    deposit = (loan_amount * .05); 
    console.log(` The amount: ${loan_amount}\n Deposit required: ${deposit}`);
}
else if (loan_amount < MIDDLE_INCOME_LOAN)
{
    deposit = (loan_amount * .10) + 1250;
    console.log(` The amount: ${loan_amount}\n Deposit required: ${deposit}`);
}
else if (loan_amount <= UPPER_CLASS_LOAN)
{
    deposit =  ( loan_amount * .25) + 5000;
    console.log(` The amount: ${loan_amount}\n Deposit required: ${deposit}`);
}
else
{
    console.log(" you do not qualify for low income loan")
}