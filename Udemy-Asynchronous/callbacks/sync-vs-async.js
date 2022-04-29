"use strict";

const function1 = function(){
    console.log('Start of request 1...');
    setTimeout(() => {
        console.log('End of request 1...');
    },2000);
}

const function2 = function(){
    console.log('Starting request 2...');
}

function1();
function2();