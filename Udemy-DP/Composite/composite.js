// Composite is a mechanism for treating
// individual objects and compositions of obj
// in a uniform manner

class SingleValue
{
  constructor(value)
  {
    this.value = value;
  }
  
  [Symbol.iterator]()
  {
      let returned = false;
      return {
          next: () => ({
              value: this.value,
              done: returned++
          })
      }
  }
}

class ManyValues extends Array { }

function sum(containers)
{
  let result = 0
  for (let container of containers)
    for (let i of container)
      result += i;
  return result;
};

const singleValue = new SingleValue(10);
const manyValues = new ManyValues();
manyValues.push(10);
manyValues.push(10);
const containers = [singleValue, manyValues];

console.log(sum(containers));