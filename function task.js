

function least(a,b){
    // if(a < b){
    //     return a;
    // }else{
    //     return b;
    // }

    //condition ? true : false;
    return a<b ? a : b;
}
console.log(least(22,300));

//power 

function checkPower(x,n){
    let result = 1;
    if(n < 1){
        console.log("Power should be +ve")
    }else{
        for(let i = 0; i < n;i++){
            result *= x;
            //result = result * x;
        }
        return result;
    }
}
console.log(checkPower(-3,3));