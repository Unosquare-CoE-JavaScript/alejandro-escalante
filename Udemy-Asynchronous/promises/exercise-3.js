"use strict";

const massiveProcess = function(num) {
    return new Promise((res, rej) => {
        let result = 0;
        setTimeout(() => {
            if(isNaN(num)){
                rej("This is not a number");
            }
            for(let i = num ** 7; i>= 0; i--){
                result += Math.atan(i) * Math.tan(i);
            }
            res(result);
        },0);
    })
    
}

massiveProcess(10).then(amt => {
    console.log(`The number is: ${amt}`);
}).catch((err) => console.error(err));


console.log('Another code...');