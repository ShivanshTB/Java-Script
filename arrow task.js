let ask = (answer) => {
    // let answer = "yes";
//   if (answer == "yes") {
//     console.log("You can enter :)");
//   } else {
//     console.log("You can't enter :(");
//   }
return answer == "yes" ? console.log("You can enter :)") : console.log("You can't enter :(") ;
};
ask("no");

// Q1. Write an arrow function expression called greet().
//  It should accept a single argument representing a person's name.
//  It should return a greeting string
let great =(name) =>{
    return `Hey, ${name}`;
}
console.log(great("Shivansh"));
console.log(great("Sunny"));

// Q2 Write an arrow function named arrayAverage that accepts an array of numbers 
// and returns the average of those numbers.
let arrayAverage = (numbers) =>{
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    return total / numbers.length;
}
let arr=[2, 3, 4, 5, 6,7,8,9];
console.log(arrayAverage(arr));

//Q3 Convert the following JavaScript function declaration 
// to arrow function syntax.
// function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     }else {
//       counter++;
//     }
    
//     return counter;
//   }

let counterFunc = (counter) =>{
    if (counter > 100) {
              counter = 0;
            }else {
              counter++;
            }
            return counter;
        }
        console.log(counterFunc(20));