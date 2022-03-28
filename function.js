var firstName = "Shivansh";
function showName(){
    var lastName = " Sharma";
    console.log(firstName +lastName);
}
showName();
console.log(firstName );    //has global scope
console.log(lastName);  //will show error outside function scope
