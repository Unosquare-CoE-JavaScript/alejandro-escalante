function example(){
    undeclaredVariable = 1;
}

example();

// No error will show up because we are not using strict mode
// and the global variable is going to be created automatically
// NOT A GOOD PRACTICE!
console.log(undeclaredVariable); 

