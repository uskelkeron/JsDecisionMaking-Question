/*

A computer repair shop on Queen Street charges $100 for labour plus 
the cost of parts used to repair the device. However, the minimum 
charge for any job is $150. Write a program that will prompt the 
user for the number of hours  it took to report the device   a
nd the cost of parts. Lastly, print the charge of the job. 
Do this question with an if else construct.

*/

const prompt = require("prompt-sync")();

const LABOUR = 100;
const MINCOST = 150;

const customer = prompt("Please enter Customer name: ");

const device_cost = parseFloat(prompt("Please enter the cost of the part to repair device: "));
const hours_spent = parseFloat(prompt("Please enter total numbers of hours spent repairing device: "));

if(hours_spent === 1 && device_cost < 50)
{
    console.log(`Customer: ${customer} \nPart Cost: $${device_cost} \nRepairCost : ${MINCOST}`);
}
else if (hours_spent > 1)
{
    const repair_cost = (hours_spent * LABOUR) + device_cost;
    console.log(`Customer: ${customer} \nPart Cost: $${device_cost} \nRepair Cost : ${repair_cost}`);

}

