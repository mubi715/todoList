import inquirer from "inquirer";
let myList = ["mubi", "marij"];
async function todoHandler(myList) {
    console.log("welcome to todos list");
    let operator = await inquirer.prompt({
        type: "list",
        message: "what do you want to do",
        name: "operation",
        choices: ["add", "view", "update", "delete"],
    });
    switch (operator.operation) {
        case "add":
            {
                let add = await inquirer.prompt({
                    type: "input",
                    name: "addItem",
                    message: "plz add item ",
                });
                myList.push(add.addItem);
                console.log(myList);
            }
            break;
        case "view":
            // Code for "view" case
            break;
        case "update":
            // Code for "update" case
            let update1 = await inquirer.prompt({
                type: "list",
                message: "which item you want to update",
                name: "updateItem",
                choices: myList
            });
            let update2 = await inquirer.prompt({
                type: "input",
                message: "write the updated value",
                name: "updateItem1",
            });
            let newMyList = myList.filter(item => item != update1.updateItem);
            myList = [...newMyList, update2.updateItem1];
            console.log(myList);
            break;
        case "delete":
            // Code for "delete" case
            break;
        default:
        // Code to handle cases other than the ones specified above
    }
}
todoHandler(myList);
