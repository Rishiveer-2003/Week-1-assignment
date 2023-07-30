/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/*function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;
*/
function solve(transactions){
  var spendEstimates = {};
  for (var i =0; i<transactions.length; i++){
    var t = transactions[i];
    //this if basically checks whether the category is already there or not in the spendEstimates object, if not there then it will create one
    if(spendEstimates[t.category]){
      spendEstimates[t.category] = spendEstimates[t.category] + t.price;
    } else{
      spendEstimates[t.category] = t.price;
    }
  }
  console.log(spendEstimates)
}
var transactions = [
  {
    itemName:"Water",
    category:"drink",
    price:20,
    timestamp:"20-23" 
  },
  {
    itemName:"jeeru",
    category:"drink",
    price:40,
    timestamp:"20-23 "
  },
  {
    itemName:"tablet",
    category:"medicine",
    price:200,
    timestamp:"20-23" 
  },
  {
    itemName:"elcipin",
    category:"medicine",
    price:400,
    timestamp:"20-23" 
  }
]
solve(transactions);
