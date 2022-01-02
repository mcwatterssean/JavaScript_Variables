console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Sean";
let lastName = "McWatters";
var age = 25;
// Exercise 2
let fullName = firstName + " " + lastName;
let templateFullName = `${firstName} ${lastName}`;
console.log("fullName: ", fullName);
console.log("templateFullName:", templateFullName);
// Exercise 3
let myStory;
let city = "York";
let pasttime = "coding, working out, and gaming"

myStory = `My name is ${fullName}. I live in ${city}, and enjoy ${pasttime}`;
console.log(myStory);