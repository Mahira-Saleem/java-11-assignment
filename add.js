// question 1
// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 
document.write("<h4>Question 1</h4>");
// a
var number = prompt("write a positive integers!")
document.write("Number : " + number + "<br>");
// b
var new_num = Math.round(number);
document.write("Round of : " + new_num + "<br>");
// c
var Ceil = Math.ceil(number);
document.write("Ceil-Round of : " + Ceil + "<br>");
// d
var floor = Math.floor(number);
document.write("FLOOR-Round of : " + floor + "<br>" + "<hr>");


// question 2
// 1. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 
document.write("<h4>Question 2</h4>");
// a
var num = prompt("write a negative floating point number!")
document.write("Number : " + num + "<br>");
// b
var _num = Math.round(num);
document.write("Round of : " + _num + "<br>");
// c
var _Ceil = Math.ceil(num);
document.write("Ceil-Round of : " + _Ceil + "<br>");
// d
var _floor = Math.floor(num);
document.write("FLOOR-Round of : " + _floor + "<br>" + "<hr>");

// Question 3
// 3. Write a program that displays the absolute value of a number.
//  E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
document.write("<h4>Question 3</h4>");

var q_3 = prompt("Write the absolute value of a number.");
document.write(q_3 + "<br>");
var ans_3 = Math.abs(q_3);
document.write("Absolute value: " + ans_3 + "<br>" + "<hr>");

// 4. Write a program that simulates a dice using random() method of JS Math class.
//  Display the value of dice in your browser.: 
document.write("<h4>Question 4</h4>");

var dice = parseInt(Math.random()*6)+1;
document.write(dice + "<br>");

// 5. Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser 
document.write("<h4>Question 5</h4>");

var toss = parseInt(Math.random()*2) +1;
if (toss == 1){
      document.write("Head"  + "<br>");
}else {
      document.write("Teals " + "<br>");
}
document.write("Random coin value : " + toss + "<br>");

// 6. Write a program that shows a random number between 1 and 100 in your browser
document.write("<h4>Question 6</h4>");

var random = parseInt(Math.random()*100) +1;
document.write("A random number between 1 and 100 : " + "<b>" + random  + "</b>" + "<br>");

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
// a. 50  b. 50kgs  c. 50.2kgs  d. 50.2kilograms.
document.write("<h4>Question 7</h4>");

var userInput = prompt("Enter your weight in kgs:");
var weight = parseFloat(userInput);
document.write("The weight of user is " + weight + " kilograms");

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user. 
document.write("<h4>Question 8</h4>");

var secretNum = 1;
var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

if (userGuess == secretNum) {
    alert("Congratulations! You guessed it right! 🎉");
    document.write("You won! The number was " + secretNum);
} else {
    document.write("Wrong guess! It was " + secretNum);
}
