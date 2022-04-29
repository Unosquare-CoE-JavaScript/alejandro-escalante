// It allows us to define the skeleton of the
// algorithm, with concrete implementations defined 
// in subclasses

class Creature
{
  constructor(attack, health) {
    this.attack = attack;
    this.health = health;
  }
}

class CardGame
{
  constructor(creatures) {
    this.creatures = creatures;
  }

  combat(creature1index, creature2index) {
    let first = this.creatures[creature1index];
    let second = this.creatures[creature2index];
    this.hit(first, second);
    this.hit(second, first);
    let firstAlive = first.health > 0;
    let secondAlive = second.health > 0;
    if (firstAlive === secondAlive) return -1;
    return firstAlive ? creature1index : creature2index;
  }

  hit(attacker, defender) { }
}

class TemporaryCardDamageGame extends CardGame
{
  constructor(creatures) {
    super(creatures);
  }

  hit(attacker, defender) {
    if (attacker.attack >= defender.health) {
        defender.health = 0;
    }
  }
}

class PermanentCardDamageGame extends CardGame
{
  constructor(creatures) {
    super(creatures);
  }

  hit(attacker, defender) {
    defender.health -= attacker.attack;
  }
}

const creature1 = new Creature(10, 10);
const creature2 = new Creature(8, 8);
const temporaryCardGame = new TemporaryCardDamageGame([creature1, creature2]);
temporaryCardGame.combat(0, 1);
console.log(temporaryCardGame); // Creature 2 is dead!

const creature3 = new Creature(10, 10);
const creature4 = new Creature(8, 8);
const permanentCardDamageGame = new PermanentCardDamageGame([creature3, creature4]);
permanentCardDamageGame.combat(0,1);
console.log(permanentCardDamageGame); // Creature 2 also dead!