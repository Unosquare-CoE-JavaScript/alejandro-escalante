// State is a pattern where the objects behavior
// is determined by its state

class CombinationLock
{
  constructor(combination) {
    this.combination = combination;
    this.reset();
  }

  reset() {
    this.status = 'LOCKED';
    this.digitsEntered = 0;
    this.failed = false;
  }

  enterDigit(digit) {
    if (this.status === 'LOCKED') {
        this.status = "";
    }
    this.status += `${digit}`;
    if (this.combination[this.digitsEntered] !== digit) {
        this.failed = true;
    }
    this.digitsEntered++
    if (this.digitsEntered === this.combination.length) {
        this.status = this.failed ? 'ERROR' : 'OPEN';
    }
  }
}

const lock = new CombinationLock('1234');
console.log(lock.status); // Locked
lock.enterDigit('1');
console.log(lock.status); // 1
lock.enterDigit('2');
console.log(lock.status); // 2
lock.enterDigit('3');
console.log(lock.status); // 3
lock.enterDigit('4');
console.log(lock.status); // OPEN
