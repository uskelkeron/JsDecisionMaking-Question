const prompt = require("prompt-sync")();

const student_name = prompt("Please enter student name: ");
const student_id = parseInt(prompt(`Please enter Student ID for ${student_name}: `));
const student_grade = parseFloat(prompt(`Please enter grade for ${student_name}: `))

switch(true)
{
    case student_grade >= 90:
        console.log(` Student name: ${student_name}\n Student ID: ${student_id}\n Student Grade: A`);
        break;

    case student_grade >= 80 && student_grade <= 89.9:
        console.log(` Student name: ${student_name}\n Student ID: ${student_id}\n Student Grade: B`);
        break;
    
    case student_grade >= 70 && student_grade <= 79.9:
        console.log(` Student name: ${student_name}\n Student ID: ${student_id}\n Student Grade: C`);
        break;

    case student_grade >= 60 && student_grade < 69.9:
        console.log(` Student name: ${student_name}\n Student ID: ${student_id}\n Student Grade: D`);
        break;

    case student_grade < 60:
        cconsole.log(` Student name: ${student_name}\n Student ID: ${student_id}\n Student Grade: F`);
        break;
    



}
