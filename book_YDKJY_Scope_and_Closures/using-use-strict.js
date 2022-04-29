"use strict";

function example(){
    undeclaredVariable = 1;
}

example();

// A ReferenceError will show up because we are trying to use
// a non defined variable
console.log(undeclaredVariable);