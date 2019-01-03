/*                                          2.1 - Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

for(let hashtag = "#"; hashtag.length < 8; hashtag+="#"){
  console.log(hashtag);
}
/*****************************************************************************************************************/
/*****************************************************************************************************************/


/*                                          2.2 - FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible
by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and
still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

for(let i =  1; i <= 100; i++){
  if (i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz");
  else if(i % 3 === 0) console.log("Fizz");
  else if ( i % 5 === 0 && !(i % 3 === 0)) console.log("Buzz");
  else console.log(i);
}

/*****************************************************************************************************************/
/*****************************************************************************************************************/


/*                                          2.3 - Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each
position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works
for any size, outputting a grid of the given width and height. */


let size = 15;
let string = "";
for(let i = 0; i < size; i++){

  for (let j = 0; j < size; j++){
    if(( (i % 2 === 0 && j % 2 === 0) || (i % 2 != 0 && j % 2 != 0))){
      string+= " ";
    }
    else string+= "#";
  }
  string+="\n";
}

/*****************************************************************************************************************/
/*****************************************************************************************************************/


/*                                          3.1 - Minimum

 The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build
something like that now. Write a function min that takes two arguments and returns their minimum. */

function min(a, b){
  if(a < b) return a;
  else return b;
};

/*****************************************************************************************************************/
/*****************************************************************************************************************/


/*                                          3.2 - Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see
whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a
positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

function isEven(number) {
  number = Math.abs(number);
  if(number === 0) return true;
  else if(number === 1) return false;
  else return isEven(number - 2);
}
console.log(isEven(-7));

/*****************************************************************************************************************/
/*****************************************************************************************************************/


/*                                          3.3 - Bean counting

 You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string
containing only one character (for example, "b"). The first character has position 0, which causes the last one to be
found at position string.length - 1. In other words, a two-character string has length 2, and its characters have
positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase
“B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the
character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of
this new function. */


function countBs(string){
  let counter = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === "B") counter++;
  }
  return counter;
}

function countChar(string, letter) {
  let counter = 0;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === letter) counter++;
  }
  return counter;
}

console.log(countChar("BBCDCC", "c"));

/*****************************************************************************************************************/
/*****************************************************************************************************************/


/*                                          Squirrelification

Taken from Data Structures: Objects and Arrays.
Try to figure out the solution myself with as little help as possible.

******* PSEUDO - CODE *****

Figure out what causes the squirrelification
    1. Write a program that finds a correlation between the specific event and squirrelification
      1.1. Write a function that takes event and journal  and counts how many times each of the possible 4 variants
       occurs. Function takes event and journal, returns array with 4 indexes, each index has the number of
       instances occured
      E.G event is pizza, function returns array[76, 9, 4, 1]

      1.2. Write a function that takes the array from the first function adn applies the correlation formula,
      returns the coeficient.

      1.3. Make a list of every event and loop through it with the two functions
        1.3.1 List of every event - loop through each day and every event in the day, compare it to event array,
        if there's a event that matches go to next, otherwise add it to array.

    2. Isolate instances of higher correlation and expand on it
    *******     ********
*/

var JOURNAL = [
{"events":["carrot","exercise","weekend"],"squirrel":false},
{"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
{"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
{"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
{"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
{"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
{"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
{"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
{"events":["cauliflower","brushed teeth","work"],"squirrel":false},
{"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
{"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
{"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
{"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
{"events":["spaghetti","brushed teeth","work"],"squirrel":false},
{"events":["brushed teeth","computer","work"],"squirrel":false},
{"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
{"events":["carrot","brushed teeth","running","work"],"squirrel":false},
{"events":["brushed teeth","work"],"squirrel":false},
{"events":["cauliflower","reading","weekend"],"squirrel":false},
{"events":["bread","brushed teeth","weekend"],"squirrel":false},
{"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
{"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
{"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
{"events":["spaghetti","nachos","work"],"squirrel":false},
{"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
{"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
{"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
{"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
{"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
{"events":["potatoes","exercise","work"],"squirrel":false},
{"events":["pizza","ice cream","computer","work"],"squirrel":false},
{"events":["lasagna","ice cream","work"],"squirrel":false},
{"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
{"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
{"events":["potatoes","brushed teeth","work"],"squirrel":false},
{"events":["carrot","work"],"squirrel":false},
{"events":["pizza","beer","work","dentist"],"squirrel":false},
{"events":["lasagna","pudding","cycling","work"],"squirrel":false},
{"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
{"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
{"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
{"events":["lasagna","peanuts","work"],"squirrel":true},
{"events":["pizza","work"],"squirrel":false},
{"events":["potatoes","exercise","work"],"squirrel":false},
{"events":["brushed teeth","exercise","work"],"squirrel":false},
{"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
{"events":["pizza","cycling","weekend"],"squirrel":false},
{"events":["carrot","brushed teeth","weekend"],"squirrel":false},
{"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
{"events":["pizza","peanuts","candy","work"],"squirrel":true},
{"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
{"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
{"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
{"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
{"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
{"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
{"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
{"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
{"events":["bread","candy","work"],"squirrel":false},
{"events":["potatoes","nachos","work"],"squirrel":false},
{"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
{"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
{"events":["brussel sprouts","running","work"],"squirrel":false},
{"events":["brushed teeth","work"],"squirrel":false},
{"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
{"events":["candy","brushed teeth","work"],"squirrel":false},
{"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
{"events":["bread","brushed teeth","weekend"],"squirrel":false},
{"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
{"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
{"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
{"events":["lettuce","brushed teeth","work"],"squirrel":false},
{"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
{"events":["pizza","brushed teeth","work"],"squirrel":false},
{"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
{"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
{"events":["brushed teeth","running","work"],"squirrel":false},
{"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
{"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
{"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
{"events":["carrot","brushed teeth","running","work"],"squirrel":false},
{"events":["carrot","reading","weekend"],"squirrel":false},
{"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
{"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
{"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
{"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
{"events":["pizza","brushed teeth","running","work"],"squirrel":false},
{"events":["lettuce","brushed teeth","work"],"squirrel":false},
{"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
{"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function correlate(event, journal) { //counts how many of each of 4 possible variants there is.
  let table = [0,0,0,0];
  for(let i = 0; i < journal.length; i++) {
    let events = journal[i], index = 0;
    if(events.events.includes(event)) index+= 1;
    if(events.squirrel) index+= 2;
    table[index] += 1;
  }
  return table;
}

function phi(table) { // calculates the correlation (-1, 0, 1) between two events from the table given by correlate
return (table[3] * table[0] - table[2] * table[1]) /
Math.sqrt((table[2] + table[3]) *
          (table[0] + table[1]) *
          (table[1] + table[3]) *
          (table[0] + table[2]));
}

function eventList(journal) { // loops through each event and puts it in array if it's not already there
let events = [];
for(let entry of journal) {
  for(let event of entry.events) {
    if (!events.includes(event)) events.push(event);
  }
}
return events;
}


let events = eventList(JOURNAL);

for(let event of events){ // outputs all events that have more than 0.1 or -0.1 correlation
  let correlation = phi(correlate(event,JOURNAL));
  if(correlation > 0.1 || correlation < -0.1) console.log(event + ": " + correlation);
}

for(let entry of JOURNAL) { // "adds peanut teeth" event on each event that has peanuts and doesn't have brushed
  if(entry.events.includes("peanuts") && //teeth (used primarly so we can test correlation on console.log below);
    !entry.events.includes("brushed teeth")) entry.events.push("peanut teeth");
}

console.log(phi(correlate("peanut teeth", JOURNAL))); // tests for correlation, result is 1

/*****************************************************************************************************************/
/*****************************************************************************************************************/


/*                                          4.1 - The Sum of a Range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

  console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array
containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program
and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value
used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old
behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step
values so that range(5, 2, -1) produces [5, 4, 3, 2]. */

function range(a, b, step) {
  let array = [];
  if(step && step < 0) {
    while(a >= b) {
      array.push(a);
      a+= step;
    }
    return array;
  }
  while(a <= b) {
     array.push(a);
     if(step) a+= step;
     else a++;
  }
  return array;
}

function sum(array) {
  let sum = 0;
  for(let number of array) {
    sum+= number;
  }
  return sum;
}
console.log(sum(range(1,10)));

/*****************************************************************************************************************/
/*****************************************************************************************************************/
