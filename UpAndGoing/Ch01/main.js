var bankAccountBalance = 2000;
var cellPhoneCost = 600;
var accessoriesCost = 100;
const SALES_TAX_RATE = 0.085;
var phonesPurchased = 0;

while (bankAccountBalance > 0) {
    var subtotal = cellPhoneCost + accessoriesCost;
    var total = subtotal + (subtotal * SALES_TAX_RATE);
    if (total < bankAccountBalance) {
        bankAccountBalance -= total;
        phonesPurchased++;
        console.log("Phone #" + phonesPurchased + " purchased for $" + total.toFixed(2));
        console.log("Bank account balance: $" + bankAccountBalance.toFixed(2));
    } else {
        console.log("Phone cost: $" + total.toFixed(2));
        console.log("Bank account balance: $" + bankAccountBalance.toFixed(2));
        console.log("You don't have enought money.");
        break;
    }
    console.log("--------");
}