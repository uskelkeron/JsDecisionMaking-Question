
const prompt = require ("prompt-sync")();

const name = prompt ("please enter the student name: ");
const AVERAGEBASE = 3;

const grade1 = parseFloat(prompt(`Please enter the marks obtain by ${name} for Maths: `));
const grade2 = parseFloat(prompt(`Please enter the marks obtain by ${name} for English: `));
const grade3 = parseFloat(prompt(`Please enter the marks obtain by ${name} for Science: `));

average = ( grade1 + grade2 + grade3) / AVERAGEBASE;

if (average >= 50)
{
    console.log(`Congrats ${name} you have passed level one this semester`);
}
else
{
    console.log(` ${name} you wasn't sucessful in passing level one this semester`);
}