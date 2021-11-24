/*
Develop a program which requests two weights in kilograms and grams and prints the sum of the weights. 

For example, if the weights are 3kg 500g and 4kg 700g , your program should print 8kg 200g.


*/

const prompt = require("prompt-sync")();

const kgWeight1 = parseInt(prompt("Enter first Weight in KiloGrams: "));

const gWeight1 = parseInt(prompt("Enter first Weight in Grams: "));

const kgWeight2 = parseInt(prompt("Enter first Weight in KiloGrams: "));

const gWeight2 = parseInt(prompt("Enter first Weight in Grams: "));

const KILOGRAM = 1000;

let kgWeightTotal = kgWeight2 + kgWeight1;
let gWeightTotal = gWeight1 + gWeight2;

if(gWeightTotal >= KILOGRAM)
{
   
    let remainder = gWeightTotal%KILOGRAM;

    gWeightTotal = gWeightTotal / KILOGRAM;

    let remainderDecimal = remainder / 100;

    let testconvert = remainderDecimal * .1;
 
    let kiloIncrease = gWeightTotal.toFixed(5 ) - testconvert.toFixed(5);

    kgWeightTotal += kiloIncrease;

    console.log(`Total KiloGrams ${kgWeightTotal}KG Total Grams ${remainder}G`);


  
}

else
{

    console.log(`Total KiloGrams ${kgWeightTotal}KG Total Grams ${gWeightTotal}G`);
}
