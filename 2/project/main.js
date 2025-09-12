import * as data  from './data.js';
import * as uFunc from './userFunctions.js';
import * as oFunc from './orderFunctions.js';
import * as utils from './utils.js';


console.log(" --- Task 1: Data initialization ---------- ");
console.log(" --- Users array: ");
console.log(data.users);
console.log("\n --- Orders array: ");
console.log(data.orders);



console.log("\n\n\n\n --- Task 2: User functions ---------- ");
console.log(" --- Function createUser({name: \"Troll\", email: \"; DROP TABLE Users;\"}): ");
console.log(uFunc.createUser({name: "Troll", email: "; DROP TABLE Users;"}));
console.log(" Resulting users array:");
console.log(data.users);

console.log("\n\n --- Function findUserById(3): ");
console.log(uFunc.findUserById(3));
console.log(" --- Function findUserById(20000): ");
console.log(uFunc.findUserById(20000));

console.log("\n\n --- Function updateUser(1, {email: \"kenobi@deathstar.glx\"}): ");
console.log(uFunc.updateUser(1, {email: "kenobi@deathstar.glx"}))
console.log(" Resulting users array:");
console.log(data.users);



console.log("\n\n\n\n --- Task 3: Orders functions ---------- ");
console.log(" --- Function getUserOrders(0): ");
console.log(oFunc.getUserOrders(0));
console.log(" --- Function getUserOrders(3): ");
console.log(oFunc.getUserOrders(3));

console.log(" --- Function addProductToOrder(1, \"mango\"): ");
console.log(oFunc.addProductToOrder(1, "mango"))
console.log(" Resulting orders array:");
console.log(data.orders);
console.log(" --- Function addProductToOrder(12, \"mango\"): ");
console.log(oFunc.addProductToOrder(12, "mango"))
console.log(" Resulting orders array:");
console.log(data.orders);

console.log(" --- Function getOrderSummary(1): ");
console.log(oFunc.getOrderSummary(1));



console.log("\n\n\n\n --- Task 4: Utils functions ---------- ");
console.log(" --- Function calculateTotal(0, 1, 2, 3, 10): ");
console.log(utils.calculateTotal(0, 1, 2, 3, 10));
console.log(" --- Function formatUserInfo(data.users[2]): ");
console.log(utils.formatUserInfo(data.users[2]));



console.log("\n\n\n\n --- Task 5: Presentation of functions ---------- ");
console.log("Look up.")
