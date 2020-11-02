/*
1. Write a function, dogFactory(). It should:

- have 3 parameters: name, breed, and weight (in that order)
- expect name and breed to be strings
- expect weight to be a number
- return an object
- have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

2. Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

3. Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.
*/

const dogFactory = (name, breed, weight) => {
  const dog = {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set age(age) {
      this._age = age;
    },
    set breed(breed) {
      this._breed = breed;
    },
    set weight(weight) {
      this._weight = weight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this.weight++;
    },
  };
  return dog;
};
console.log(dogFactory("Joe", "Pug", 27));
