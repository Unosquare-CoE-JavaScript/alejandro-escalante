// A bridge decouples an interface
// from an implementation

class Shape {
    constructor(renderer, name) {
        this.renderer = renderer.whatToRenderAs;
        this.name = name;
    }
    
    toString() {
        return `Drawing ${this.name} as ${this.renderer}`;
    }
}

class Circle extends Shape {
    constructor(renderer) {
        super(renderer, 'circle');
    }
}

class Square extends Shape {
    constructor(renderer) {
        super(renderer, 'square');
    }
}

class Triangle extends Shape {
    constructor(renderer) {
        super(renderer, 'triangle');
    }
}

class VectorRenderer {
    get whatToRenderAs() {
        return 'lines';
    }
}

class RasterRenderer {
    get whatToRenderAs() {
        return 'pixels';
    }
}

const squareVectorR = new Square(new VectorRenderer());
const squareRasterR = new Square(new RasterRenderer());

console.log(squareVectorR.toString());
console.log(squareRasterR.toString());