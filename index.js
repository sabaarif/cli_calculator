#! /usr/bin/env node
import inquirer from 'inquirer';
let question = await inquirer.prompt([
    {
        name: "question1",
        type: "number",
        message: "Enter the first number: "
    },
    {
        name: "question2",
        type: "number",
        message: "Enter the second number: "
    },
]);
let operator = await inquirer.prompt([
    {
        name: "operator",
        type: "list",
        message: "Select the operator: ",
        choices: ["+", "-", "*", "/"]
    },
]);
if (operator.operator === "+") {
    console.log(parseInt(question.question1) + parseInt(question.question2));
}
else if (operator.operator === "-") {
    console.log(parseInt(question.question1) - parseInt(question.question2));
}
else if (operator.operator === "*") {
    console.log(parseInt(question.question1) * parseInt(question.question2));
}
else if (operator.operator === "/") {
    console.log(parseInt(question.question1) / parseInt(question.question2));
}
console.log(operator);
