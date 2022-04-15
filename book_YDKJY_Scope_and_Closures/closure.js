function outerFunction(studentName) {
    return function innerFunction(){
        console.log( `Hello, ${ studentName }!` );
    };
}

outerFunction("Alex")();