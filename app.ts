import inquirer from "inquirer";
//npm i --save-dev @types/inquirer use this command for inquirer types

//  using interface for creating the structure for the inquirer object and type checking
interface Calculator {
  operator: string;
  num1: number;
  num2: number;
}

// using Asynchronous function because inquirer.prompt function return a Promise
async function Calculate() {
  // Used Object destructuring
  const { operator, num1, num2 }: Calculator = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      choices: ["+", "-", "/", "*"],
      message: "Choose one Operator",
    },
    {
      type: "number",
      name: "num1",
      message: "Enter first number",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter Second number",
    },
  ]);

  //Using Switch case conditional check for known outputs
  switch (operator) {
    case "+":
      console.log(`The result of ${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`The result of ${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "/":
      console.log(`The result of ${num1} / ${num2} = ${num1 / num2}`);
      break;
    case "-":
      console.log(`The result of ${num1} / ${num2} = ${num1 * num2}`);
      break;
  }
}

// Calling the Calculate function
async function repeat() {
  do {
    await Calculate();
    var { repeat } = await inquirer.prompt([
      {
        type: "confirm",
        name: "repeat",
        message: "Do you want to calculate again?",
      },
    ]);
  } while (repeat === "Y" || repeat === "Yes");
}

// Calling the repeat  function
repeat();
