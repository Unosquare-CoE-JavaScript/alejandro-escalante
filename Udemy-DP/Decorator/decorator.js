// A Decorator helps us to add behaviors
// to objects without inheriting from them

class Bird
{
  constructor(age=0){
    this.age = age;
  }

  fly(){
    return this.age > 10 ? 'too old' : 'flying';
  }
}

class Lizard
{
  constructor(age=0){
    this.age = age;
  }

  crawl(){
    return this.age > 1 ? 'crawling' : 'too young';
  }
}

class Dragon
{
  constructor(age=0){
    this._bird = new Bird()
    this._lizard = new Lizard()
    this._age = age
  }
  
  set age(value) {
    this._age = this._bird.age
      = this._lizard.age = value;
  }

  get age() { return this._age; }
  
  fly() {
      return this._bird.fly()
  }
  
  crawl() {
      return this._lizard.crawl()
  }
}

const dragon = new Dragon(100);
dragon._lizard = new Lizard(20);

console.log(dragon.fly());
console.log(dragon.crawl());