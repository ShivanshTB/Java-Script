let laptop1 ={
    cpu: 'i9',
    ram: 8,
    brand: 'Hp',

    // compare: function(){
    //     if(this.cpu > laptop2.cpu){
    //         console.log(laptop1)
    //     }else{
    //         console.log(laptop2)
    //     }
    // },
    getConfig(){
        console.log(this.cpu);
    }
}
    // laptop1.getConfig();

    let laptop2={
        cpu: 'i7',
        ram: 16,
        brand: 'Dell',
    
        getConfig: function(){
            console.log(this.cpu);
        }
    }
    
    laptop1.sayhi = function(){
        console.log("Hello World!");
    }
    let compare = (other1,other2)=>{
            if(other1.cpu > other2.cpu){
                console.log(other1)
            }else{
                console.log(other2)
            }
        }
    // laptop2.getConfig();
 compare(laptop1,laptop2);

