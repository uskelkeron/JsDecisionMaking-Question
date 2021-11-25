const prompt = require("prompt-sync")();

//Washing Fee's
const COTTON_FEE = 1;
const DENIM_FEE = 2.75;
const GENERAL_FABRIC_FEE = .65;

//Drying Fee's
const DRY_RANGE1 = 2.50;
const DRY_RANGE2 = 1.50;
const DRY_RANGE3 = .55;

//VAT
const VAT = .15;


const customer_fname = prompt(" Please enter the customer first name: ")
const customer_lname = prompt(` Please enter the customer ${customer_fname} last name: `);

const cotton_fabric_weight = parseFloat(prompt(" Enter the number of lbs of Cotton fabric clothing that was washed: "));
const denim_fabric_weight = parseFloat(prompt(" Enter the number of lbs of Denim fabric clothing that was washed:  "));
const general_fabric_weight = parseFloat(prompt(" Enter the number of lbs of General fabric clothing that was washed:  "));
//total Washing Calculation Cost
let total_wash_cotton = cotton_fabric_weight * COTTON_FEE;
let total_wash_denim = denim_fabric_weight * DENIM_FEE;
let total_general_wash = general_fabric_weight * GENERAL_FABRIC_FEE;

//total cost of washing 
let total_wash_cost = total_wash_cotton + total_wash_denim + total_general_wash ; 


//weight of all clothes
let total_clothes_weight = cotton_fabric_weight + denim_fabric_weight + general_fabric_weight;

//total cost of drying
let total_dry_cost;

if(total_clothes_weight >= 1 && total_clothes_weight <=7)
{
    total_dry_cost = total_clothes_weight * DRY_RANGE1;
}

else if (total_clothes_weight > 7 && total_clothes_weight <= 12)
{
    total_dry_cost = total_clothes_weight * DRY_RANGE2;
}

else if (total_clothes_weight > 12)
{
    total_dry_cost = total_clothes_weight * DRY_RANGE3;
}

let customer_balance = total_wash_cost + total_dry_cost;

let vat_cost = customer_balance * VAT;

let customer_final_cost = customer_balance + vat_cost;


console.log(` Customer Name: ${customer_fname} ${customer_lname} `);

console.log(` Cotton Fabric Weight: ${cotton_fabric_weight}lb Cotton Fabric Cost: ${total_wash_cotton.toFixed(2)}`);
console.log(` Denim Fabric Weight: ${denim_fabric_weight}lb Cotton Fabric Cost: ${total_wash_denim.toFixed(2)}`);
console.log(` General Fabric Weight: ${general_fabric_weight}lb Cotton Fabric Cost: ${total_general_wash.toFixed(2)} `);

console.log(` Total weight of Clothes: ${total_clothes_weight}lb Drying Fee ${total_dry_cost.toFixed(2)} `);

console.log(` Customer's Balance: ${customer_balance.toFixed(2)} | Vat Amount: ${vat_cost.toFixed(2)}`);

console.log(` Final Cost: ${customer_final_cost.toFixed(2)}`);



