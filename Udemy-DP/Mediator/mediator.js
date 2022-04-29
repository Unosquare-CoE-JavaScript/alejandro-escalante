// A mediator is a component that facilitates the
// communication between other components

class Event
{
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(index) {
    this.handlers.delete(index);
  }

  fire(sender, args) {
    this.handlers.forEach(handler => {
      handler(sender, args);
    });
  }
}

class Mediator
{
  constructor() {
    this.alert = new Event();
  }

  broadcast(sender, number) {
    this.alert.fire(sender, number);
  }
}

class Participant
{
  constructor(mediator) {
    this.mediator = mediator;
    this.value = 0;
    mediator.alert.subscribe(
      this.alert.bind(this)
    );
  }

  alert(sender, number) {
    if (sender !== this)
        console.log();
        this.value += number;
  }

  say(number) {
    this.mediator.broadcast(this, number);
  }
}

const part1 = new Participant(new Mediator());
const part2 = new Participant(new Mediator());

console.log(part1);
console.log(part2);

part1.say(3);
part2.say(2);

console.log(part1);
console.log(part2);