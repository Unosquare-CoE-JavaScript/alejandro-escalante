// Prototype is a copied object and use it



class Point
{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line
{
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  deepCopy() {
        const start = new Point(this.start.x, this.start.y);
        const end = new Point(this.end.x, this.end.y);
        return new Line(start, end);
  }
}

const lineObject = new Line(new Point(1,10), new Point(2, 20));
console.log(lineObject.deepCopy())