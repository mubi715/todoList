import inquirer from "inquirer";

let myList: string[] = ["mubi", "marij", "mudasir", "ali"];

async function todoHandler(myList: string[]): Promise<void> {
 while (true) {

  
    let operator = await inquirer.prompt({
      type: "list",
      message: "Select the operation you want to perform",
      name: "operation",
      choices: ["add", "view", "update", "delete", "exit"],
    });

   
    switch (operator.operation) {
      case "add": {
        let add = await inquirer.prompt({
          type: "input",
          name: "addItem",
          message: "Please add an item:",
        });
        myList.push(add.addItem);
        console.log(myList);
        break;
      }
      case "view": {
        console.log(myList);
        break;
      }
      case "update": {
        let update1 = await inquirer.prompt({
          type: "list",
          message: "Which item do you want to update?",
          name: "updateItem",
          choices: myList,
        });
        let update2 = await inquirer.prompt({
          type: "input",
          message: "Write the updated value:",
          name: "updateItem1",
        });
        let newMyList = myList.map(item =>
          item === update1.updateItem ? update2.updateItem1 : item
        );
        myList = newMyList;
        console.log(myList);
        break;
      }
      case "delete": {
        let remove = await inquirer.prompt({
          type: "list",
          message: "Which item do you want to delete?",
          name: "deleteItem",
          choices: myList,
        });
        let indexOfDel = myList.indexOf(remove.deleteItem);
        myList.splice(indexOfDel, 1);
        console.log("Item deleted successfully.");
        console.log(myList);
        break;
      }
      case "exit": {
        console.log("Exiting...");
        return;
      }
    }
  }
}

todoHandler(myList);

