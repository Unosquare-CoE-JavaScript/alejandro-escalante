// Flyweight allows us to use less memory
// by storing the common data externally 

class Capitalize {
    constructor(capitalize = false) {
      this.capitalize = capitalize;
    }
  }
  
  class Sentence {
    constructor(plainText) {
      this.plainText = plainText.split(" ");
      this.location = {};
      this.index
    }
  
    at(index) {
      let test = new Capitalize();
      this.location[index] = test;
      this.index = index;
      return this.location[index];
    }
  
    toString() {
      if (this.location[this.index] && this.location[this.index].capitalize) {
        this.plainText[this.index] = this.plainText[this.index].toUpperCase();
      }
      return this.plainText.join(' ');
    }
  }

const sentence = new Sentence('Unosquare is cool!');
sentence.at(2).capitalize = true;

console.log(sentence.toString());