/*
  Some of the following questions will ask you to use
  arrow function syntax. On the problems that don't,
  feel free to practice with any syntax.
*/


////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/

//CODE HERE
function helloWorld() {
  console.log(`hello world`)
}
helloWorld()


////////////////// PROBLEM 2 ////////////////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

//CODE HERE
let jsNinja = () => 'I am a JS ninja!'


console.log(jsNinja())

////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE

function printName(name) {
  console.log(name)
}

printName(`Derald`)

////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

//CODE HERE

function greeting(name) {
  console.log("Hello,", name)
};

greeting(`Tanner`);
////////////////// PROBLEM 5 ////////////////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

//CODE HERE
//let compareNums = (nums1, num2) => {
 // if(num1 > num2) {
//return num1
 // }else {
 //   return num2
 // }
//}
//console.log(compareNums())
////////////////// PROBLEM 6 ////////////////////
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/

//CODE HERE

let sum = add('7',5)

function add (num1, num2){
  return Number(num1) + Number(num2)
}

console.log(sum)

////////////////// PROBLEM 7 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow')
// console.log('declaration')
 console.log('expression')



////////////////// PROBLEM 8 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}

 console.log('arrow')
// console.log('declaration')
// console.log('expression')

/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/



////////////////// PROBLEM 9 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow')
 console.log('declaration')
// console.log('expression')


////////////////// PROBLEM 10 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/

//CODE HERE

function nameCheck(NAMEPARAM) {
  if(NAMEPARAM === `Steven`) {
    return `What is up Steven?`
  } else if ( NAMEPARAM === `Bryan`) {
    return ` Hey Bryan!`
  } else {
    return `Cool name, ${NAMEPARAM}`
  }
}
let nameGreeting = nameCheck(`John`)  
console.log(nameGreeting)

////////////////// PROBLEM 11 ////////////////////
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/

//CODE HERE


function faveColorFinder (color){
  if(color === 'red'){
    return 'red is a great color'
  } else if(color === 'green'){
    return 'green is a solid favorite color'
  } else if(color === 'black'){
    return 'so trendy'
  } else {
    return 'you need to evaluate your favorite color choice'
  }
}

let colorRating = faveColorFinder('red')

console.log(colorRating)
////////////////// PROBLEM 12 ////////////////////
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/

//CODE HERE

function printAllNames(names) {
  for(let i = 0; i < names.length; i++) {
    console.log(names[i])
  }
}
printAllNames(namesArr)


////////////////// PROBLEM 13 ////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called `oddChecker` and set it equal to your function invoked, making sure to pass in an argument.
*/

//CODE HERE

function thatsOdd (num){
  if(num % 2 === 0){
    return  `That's not odd!`
  } else {
    return `That is odd indeed!`
  }
}

let oddChecker = thatsOdd(122)
console.log(oddChecker)

////////////////// PROBLEM 14 ////////////////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'
*/

//CODE HERE

let bestMovie = (movieTitle) => `${movieTitle} is the best movie ever!`
console.log(bestMovie(`Sharknado`))

////////////////// PROBLEM 15 ////////////////////
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. 
  Return the answers array inside of the function to a variable called `arrayEvaluator`.
*/

//CODE HERE

function bigOrSmall (arr) {
  let answers = []
  for (i = 0; i < bigOrSmallArray.length; i++){
    if(bigOrSmallArray[i] > 100){
      answers.push('big')
    } else {
      answers.push('small')
    } 
  }
  return answers
}

let arrayEvaluator = bigOrSmall(bigOrSmallArray)
console.log(arrayEvaluator)

////////////////// PROBLEM 16 ////////////////////
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/

//CODE HERE

function theEliminator(contestantsParam, loserParam) {
  for(let i = 0; i < contestantsParam.length; i++) {
    if( contestantsParam[i] === loserParam) {
      contestantsParam.splice(i, 1)
    
    }
  }
  return contestantsParam
}

let remainingContestantsParam = theEliminator(contestants, loser)
console.log(remainingContestantsParam)

////////////////// PROBLEM 17 ////////////////////
let sampleString = "Hi, my name is Kylo."
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

//CODE HERE

function kyloYell (string) {
  string = string.toUpperCase()
  console.log(string)
}

kyloYell(sampleString)

////////////////// PROBLEM 18 ////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/
//CODE HERE
function emailCheck(email) {
  email = String(email.trim())
  if (email.includes(`@`)) {
    return `Email verified.`
  } else {
    return `Must provide a vaild email address.`
  }
    console.log(email)
}
let message = emailCheck(` ilovecode@code.com`)
  console.log(message)

////////////////// PROBLEM 19 ////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate frogs as possible with a certain amount of gold. Each chocolate frog costs 3 gold. Your function should take in a single parameter, which is the amount of gold you are willing to spend. Your function should return a total amount of chocolate frogs you were able to purchase.
  Create a variable called `totalFrogs` and set it equal to your function invoked, passing in the amount of gold you are willing to spend.
*/

//CODE HERE

function harryPotter(budget) {
  let frogCount = (budget / 3)
  return frogCount
}
let totalFrogs = harryPotter(10)
console.log(totalFrogs)
////////////////// PROBLEM 20 ////////////////////
/*
  You might have noticed a slight bug in the previous problem. If you were to pass in 4 gold, the function would return to you 1.3333... However, you can't really go to a store and by 1.333 products. You would just be able to purchase 1 product. Re-write the function you used in the previous problem (give it the same name, just add a 2 to the end of it) that fixes this bug. Invoke the function and store the returned value to a variable called `totalFrogs2`.
*/

//CODE HERE
function harryPotter2(budget) {
  let frogCount2 = parseInt(budget / 3)
  return frogCount2 
}
let totalFrogs2 = harryPotter2(10)
console.log(totalFrogs2)
////////////////// PROBLEM 21 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, write logic to determine if the array is in ascending order. The function should return true, if it is sorted in ascending order, false if it is not. Create a variable, `arrayIsAscending` and set it equal to your function invoked. Use the sample array to test this function.
*/

//CODE HERE

function ascendingOrder(arr) {
  for( let i = 0; i < sampleArray.length; i++) {
    if(sampleArray[i] < sampleArray[i -1]) {
      return false
    }
  }
  return true
}

let arrayIsAscending = ascendingOrder(sampleArray)
console.log(arrayIsAscending)
// The ascendingOrder function takes in an array as the arr parameter. It uses a for loop to iterate over the elements of the array, starting from the second element (index 1). Inside the loop, it compares each element with the previous element (arr[i - 1]). If the current element is less than the previous element, it means the array is not in ascending order, so the function immediately returns false.
//If the loop completes without finding any elements that violate the ascending order, the function returns true, indicating that the array is sorted in ascending order.
//Outside the function, the variable arrayIsAscending is declared and assigned the result of invoking (calling) the ascendingOrder function with the sampleArray. The value of arrayIsAscending is then logged to the console, resulting in false being displayed. This indicates that the sample array [0, 1, 2, 3, 4, 7, 5, 6, 8, 9] is not in ascending order.








////////////////// PROBLEM 22 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = [duck]

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = [rubberDuck]

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = [sailorDuck]

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = [realDuck]