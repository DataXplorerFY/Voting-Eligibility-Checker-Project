/* //Logicall Operators

var num1=parseInt(prompt("Enter 1st number?"));
var num2=parseInt(prompt("Enter 2nd number?"));

if(num1==num2 && num1===num2){
    console.log("EQUAL in DATATYPE and VALUE")
}else{
    console.log("Different")
}


// Write a program that checks whether a given number is positive and even.
 var num = parseInt(prompt("Enter a number!"));
 if (num % 2 == 0 && num>0){
    console.log("The number is positive Even");
 }else{
    console.log("The number is not even ");
 } */

 // Create a program that determines if a person is eligible to vote. The program should prompt the user to enter their age and citizenship status. The person is eligible to vote if they are 18 years or older and a citizen.

//  var age = Number(prompt("Enter your age"));
//  var city = prompt("Enter your city");

//  if (age>=18 && city=="Faisalabad" || city=="faisalabad" || city=="fsd"|| city=="FSD"){
//     console.log("You are Eligible to Vote!");
//  }else{
//     console.log("Your ate note eligile for vote!")
//  }

document.getElementById("voting-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var age = parseInt(document.getElementById("age").value);
    var city = document.getElementById("city").value.toLowerCase();
  
    // Check eligibility
    if (age >= 18 && (city === "faisalabad" || city === "fsd")) {
      document.getElementById("result").textContent = "You are eligible to vote!";
    } else {
      document.getElementById("result").textContent = "You are not eligible to vote!";
    }
  });
  
  