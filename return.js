function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
console.log(result);

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let age = 21;
// checkAge(age);
if (checkAge(age)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// console.log(checkAge(age) == null);

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);  
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
showPrimes(20);