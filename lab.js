//Section 1

//what types are these? Write your answer in a comment beside it.

1; //'number'
"cat"; //string
true; //boolean
[]; //object
{}; //object
1.1; //number
undefined; //undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; //false
""; //false
0; //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var number = 1;
console.log(number)
//3.2 Assign a variable that is a string
var string = "string"
console.log(string)
//3.3 Assign a variable that is a boolean
var truethyfalsy = true
console.log(truethyfalsy)
//3.4 Assign a variable that is an object
var object = {}
console.log(object)

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
+ 1 === 2 ? console.log("Hello") : console.log("bye");

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var first = animals[0];
console.log(first)
//5.2. Assign the last element to a variable
var last = animals[3];
console.log(last)
//5.3. Assign the length of an array to a variable
var length = animals.length
console.log(length)
//5.4. Add an item to the end of the array
animals.push("an item");
//5.5. Add an item to the start of the array
animals.unshift("an item");
//5.6. Assign the index of hedgehog to a variable
var a = animals[1]
console.log(a)

//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["carrot", "pasnip", "turnip", "potato", "courgette"];
console.log(vegetables)
//6.2 Loop over the array and write to the console using a "while"
var i = 0;

while(i < vegetables.length){
  console.log(vegetables[i]);
  i++
}
//6.3 Loop again using a "for" with a counter
for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

//6.4 Loop again using a "for in"
for(var a in vegetables){
  console.log(vegetables[a]);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
function totalcash(){
var total = 0;

for (var i = 0; i < accounts.length; i++) {
  var account = accounts[i];
  var amount = account.amount;
  total = total + amount;
}
return total;
}

console.log('Total cash in the bank:' totalcash());

//7.2 Find the name of the account with the largest balance

function biggestaccount(){
var richest = 0;
var biggest = 0;

for (var a = 0; a < accounts.length; a++) {
  while(accounts[a]["amount"] > biggest){
    biggest = accounts[a]["amount"];
    richest = accounts[a]["name"];
  }
}
return richest;
}

console.log('Name of the account with the largest balance: ' biggestaccount());

//7.3 Find the name of the account with the smallest balance
function smallestaccount(){
var poorest = accounts[0]["name"];
var smallest = accounts[0]["amount"];

for (var a = 0; a < accounts.length; a++) {
  while(accounts[a]["amount"] < smallest){
    smallest = accounts[a]["amount"];
    poorest = accounts[a]["name"];
  }
}
return poorest;
}

console.log("Name of the account with the smallest balance: "smallestaccount());
//7.4 Calculate the average bank account value
function averageCash(){
  var a = totalcash() / accounts.length
  return a
}
console.log("The average bank account value: "averageCash().toFixed(2));
//7.5 Find the value of marcs bank account
function marcsMoney(){
  var cash = 0;
  for (var a = 0; a < accounts.length; a++) {
    if(accounts[a]["name"] === "marc"){
    cash = accounts[a]["amount"];
  }
}
  return cash
}
console.log("Value of marcs bank account: "marcsMoney());
//7.6 Find the holder of the largest bank account
console.log("Holder of the largest bank account: "biggestaccount());
//7.7 Calculate the total cash in business accounts
function businessCash(){
  var cash = 0;
  for (var a = 0; a < accounts.length; a++) {
    if(accounts[a]["type"] === "business"){
    cash += accounts[a]["amount"];
    }
  }
return cash;
}
console.log("Total cash in business accounts: "businessCash());
//7.8 Find the largest personal account owner
function biggestPersonalAccount(){
var richest = 0;
var biggest = 0;

for (var a = 0; a < accounts.length; a++) {
  if(accounts[a]["type"] === "personal"){
    while(accounts[a]["amount"] > biggest){
      biggest = accounts[a]["amount"];
      richest = accounts[a]["name"];
    }
  }
}
return richest;
}
console.log("Largest personal account owner: "biggestPersonalAccount());

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food
var myPerson = {
  name: 'Dave',
  height: 6ft,
  favourite food: 'bananas'
};