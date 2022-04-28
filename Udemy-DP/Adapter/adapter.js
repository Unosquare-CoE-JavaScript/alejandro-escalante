// Adapter adapts an existing interface 
// to the one that we need.

class Square
{
  constructor(side)
  {
    this.side = side;
  }
}

function calculateArea(rectangle)
{
  return rectangle._width * rectangle._height;
}

class SquareToRectangleAdapter {
    constructor(square) {
        this._width = square.side;
        this._height = square.side;
    }
    
    get width() {
        return this._width;
    }
    
    get height() {
        return this._height;
    }
}

console.log(calculateArea(new SquareToRectangleAdapter(new Square(2))));