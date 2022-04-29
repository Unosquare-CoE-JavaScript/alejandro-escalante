// Strategy enables the exact behavior of a 
// system to be selected at run time

class Creature {
    constructor(attack, health) {
      this.attack = attack;
      this.health = health;
      this.alive = this.health > 0;
    }
  }
  
  class Game {
    constructor(damageStrategy) {
      this.damageStrategy = damageStrategy;
    }
  
    springTrapOn(creature) {
      this.damageStrategy.damage(creature);
      return creature.alive;
    }
  }
  
  class DamageStrategy {
    damage(creature) {
      creature.alive = creature.health > 0;
    }
  }
  
  class ConstantDamageStrategy extends DamageStrategy {
    damage(creature) {
      creature.health -= 1;
      creature.alive = creature.health > 0;
    }
  }
  
  class GrowingDamageStrategy extends DamageStrategy {
      damage(creature) {
      creature.health -= 1;
      if(creature.health === 1)
          creature.health = 0;
      creature.alive = creature.health > 0;
    }
  }
  
  GrowingDamageStrategy.impact = {};

  const constantGame = new Game(new ConstantDamageStrategy());
  const creature = new Creature(1,2);
  console.log(creature.alive); // true
  constantGame.springTrapOn(creature);
  console.log(creature.alive); // true
  constantGame.springTrapOn(creature);
  console.log(creature.alive); // false
  