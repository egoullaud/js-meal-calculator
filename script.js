var taxAmount = 7.23335651;
console.log(taxAmount.toFixed(2));

var people = 27;
var payout = 800.29;
console.log(`You won $${(payout / people).toFixed(2)}.`);

var mealCost = 25.99;
var tip = 0.18;
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = 2;
console.log(`Your meal cost is $${mealCost}, and with the tip,
 it comes to $${total.toFixed(2)}. Your share is $${(
  total / numOfPeople
).toFixed(2)}.`);

var mealCost = prompt("Cost of Meal (ex 25.99");
var tip = prompt("How much would you like to tip? (ex: 0.18)");
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = prompt("How many people are splitting this bill? (ex: 2)");

console.log(`Your meal cost is $${mealCost}, and with the tip,
 it comes to $${total.toFixed(2)}. Your share is $${(
  total / numOfPeople
).toFixed(2)}.`);
