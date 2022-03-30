//  let time =() => {
//      setTimeout(()=>{ console.log("Hello World!");},2000);
//     }
//     time();

let num1 = 3;
let qwerty = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (num1 >= 10) {
      resolve("Number is greater.");
    } else {
      reject("Number is smaller");
    }
  }, 1000);
});

qwerty
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((message) => {
    console.log("Failed: " + message);
  });
