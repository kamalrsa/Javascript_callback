function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}

function cal(num1, num2, callback) {
  return callback(num1, num2);
}
let sum = console.log(cal(2, 3, add));
let Subtract = console.log(cal(2, 3, sub));
let Mul = console.log(cal(2, 3, mul));

//sorting the number by using callback function
const num = [7, 8, 2, 1];
num.sort((val1, val2) => {
  // passing a callback function inside a sort function where call back function pass a two values val1 and val2.
  if (val1 < val2) {
    return -1;
  } else {
    return 1;
  }
});
console.log(num); // [1,2,7,8]

// --------------click Counter-----------------------------
// When a button first is clicked it should first logout 0 , next time should logout 1.
// clicking the second button should also count up and logout the same variable.
//const button1 = document.getElementById("button1");
//const button2 = document.getElementById("button2");
const buttons = document.querySelectorAll("button");
let count = 0;
/*function incrementCount() {
  console.log(count);
  count++;
}*/
const incrementCount = () => {
  console.log(count);
  count++;
};
buttons.forEach((button) => {
  button.addEventListener("click", incrementCount);
});

//button1.addEventListener("click", incrementCount);

//button2.addEventListener("click", incrementCount);

//-------------Delay Clicker---------------
// when a button is clicked it should wait 3 sec and then log "delayed by 3sec"

const delayed = document.getElementById("button1");
function log() {
  console.log("delayed 8 sec");
}
const logout = () => {
  setTimeout(log, 8000);
};
delayed.addEventListener("click", logout);

//mouse position
let postX = 0;
let postY = 0;

document.addEventListener("mousemove", (event) => {
  postX = event.x;
  postY = event.y;
});

setTimeout(() => {
  console.log(`The average position is: ${(postX + postY) / 2}`);
}, 30000);

// another example of callback function

const successMessage = (squaredNumber) => {
  console.log("successfully completed homework", squaredNumber);
};

const completedHomework = function (subject, callback) {
  alert(`You have finished your ${subject} homework`);

  const squareNumber = (number) => number * number;

  const squaredNumber = squareNumber(54);

  if (typeof callback === "function") {
    callback(squaredNumber);
  }
};

completedHomework("math", successMessage);

const button = document.getElementById("clicker");

button.addEventListener("click", (event) => {
  console.log(event);
  console.log("successfully completed homework");
});
