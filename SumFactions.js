const prompt = require("prompt-sync")();

const numerator1 = parseInt(prompt("Please enter numerator for the first fraction: "));
const denominator1 = parseInt(prompt("Please enter denominator for the first fraction: "));

const numerator2 = parseInt(prompt("Please enter numerator for the second fraction: "));
const denominator2 = parseInt(prompt("Please enter denominator for the second fraction: "));

const multiplier = denominator1 * denominator2;
const quotient1 = (multiplier/denominator1) * numerator1;
const quotient2 = (multiplier/denominator2) * numerator2;

const sum_quotient = quotient1 + quotient2;


if(sum_quotient >= multiplier)
{
    let whole_number, final_numerator, final_denominator2;

    final_numerator = sum_quotient%multiplier;
    whole_number = sum_quotient/multiplier;

    let new_whole_number = Math.floor(whole_number);
    
    console.log(`For modules we have ${final_numerator} and for whole number we have ${new_whole_number}`);
    console.log(`The fraction ${numerator1}/${denominator1} + ${numerator1}/${denominator1} is = ${new_whole_number} ${final_numerator}/${multiplier}`);

}
else 
{
    console.log(`The fraction ${numerator1}/${denominator1} + ${numerator1}/${denominator1} is = ${sum_quotient}/${multiplier}`);
}