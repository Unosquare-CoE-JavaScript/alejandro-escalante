// 


class Token
{
  constructor(value=0) {
    this.value = value;
  }
}

class Memento
{
  constructor() {
    this.tokens = [];
  }
}

class TokenMachine
{
  constructor() {
    this.tokens = [];
  }

  addTokenValue(value) {
    return this.addToken(new Token(value));
  }

  addToken(token) {
    let m = new Memento();

    this.tokens.push(token);
    m.tokens = this.tokens.map(token => new Token(token.value));
    return m;
  }

  revert(m) {
    if (this.tokens.length > 0) {
        this.tokens = m.tokens.map(token => new Token(token.value));
    } else {
        console.log('Can\'t revert!!')
    }
  }
}

const tokenMachine = new TokenMachine();

const first = tokenMachine.addTokenValue(1);
const second = tokenMachine.addTokenValue(10);
const third = tokenMachine.addTokenValue(100);
console.log(tokenMachine);

tokenMachine.revert(second);
console.log(tokenMachine);