// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=> resolve("done"),1000);
// });
// promise.then(
// result=>console.log("result"),
// error=>console.log("error")
// );

// let p = new Promise((resolve,reject)=>{
//     let a = 1+2;;
//     if(a==2){
//         resolve('Sucess');
//     }else{
//         reject('Failed');
//     }
// })

// p.then((message)=>{
//     console.log("This is in the then "+message)
// }).catch((message)=>{
//     console.log("This is in the catch "+message)
// })


const userLeft = true;
const userWatchingMovies = true;

function watchPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name: 'userLeft',
                message: ':('
            })
        }
        else if(userWatchingMovies){
                reject({
                    name: 'user watching movies ',
                    message: 'enjoy:)'
                })
            }
            else{
                resolve('Thank you for running')
            }
    })
}

watchPromise().then((message)=>{
    console.log("Success: "+message)
}).catch((error)=>{
    console.log(error.name+''+error.message);
})