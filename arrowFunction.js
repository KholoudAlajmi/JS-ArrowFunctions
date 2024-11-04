// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
//Task1

const helloArrows = (name) => {
    console.log(`Hello, ${name}!`);
  };

  
  helloArrows("Kholoud");

// Write a simple arrow function that takes two parameters and returns their sum.
//Task2


const addition = (firstNum, secondNum) => {
    return firstNum + secondNum;
  };

console.log(addition(3,2))

// Write a simple arrow function that squares a number.
//Task3
const squares = (firstNum) => {
    return firstNum * firstNum;
  };

  console.log(squares(2))


// Create an arrow function that takes an array of numbers and returns a new array with each number squared.
// [🌶️🌶️]

const array = (firstNum, secondNum, thirdNum, fourthNum) => {
    return [firstNum*firstNum, secondNum*secondNum, thirdNum*thirdNum, fourthNum*fourthNum]; 
  };

const square = (array) => {
    return array.map((numb)=>{
        return numb*numb;
    } )

}

console.log(array(1,2,3,4));