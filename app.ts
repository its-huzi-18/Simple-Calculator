#! /usr/bin/env node
import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    message: "Enter First Number",
    type: "number",
    name: "firstNumber",
  },
  {
    message:"Enter Second Number",
    type:"number",
    name:"secondNumber",
  },
  {
    message:"Select one of the operators to perform operation",
    type:"list",
    name:"operators",
    choices:["Addition","Subraction","Multiplication","Division","Remender"],
  }
]);
//   conditions
if(answer.operators === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operators === "Subraction"){
 console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operators === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else if(answer.operators === "Remender"){
    console.log(answer.firstNumber % answer.secondNumber);
}
else{
    console.log("Please select the valid operator");
}
