// Singleton is a component that only have to 
// be instantiated once

function returningObject(){
    return {
        name: 'Object'
    };
}

class Singleton {
    
    isSingleton(object) {
        const obj1 = object();
        const obj2 = object();

        return obj1 === obj2;
    }
}

console.log(new Singleton().isSingleton(returningObject));
