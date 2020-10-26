const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.appetizers = mains;
  },
  set desserts(desserts) {
    this._courses.appetizers = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    // Push the dish object into the relevant course category
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, followed by ${main.name}. For dessert, you're having ${dessert.name}. The total price is ${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "smoked salmon", 8.99);
menu.addDishToCourse("appetizers", "cullen skink", 9.99);
menu.addDishToCourse("appetizers", "goats cheese parcels", 6.99);
menu.addDishToCourse("mains", "lobster", 18.99);
menu.addDishToCourse("mains", "steak and chips", 15.99);
menu.addDishToCourse("mains", "pumpkin risotto", 10.99);
menu.addDishToCourse("desserts", "cheese", 8.99);
menu.addDishToCourse("desserts", "passion fruit ice cream", 6.99);
menu.addDishToCourse("desserts", "chocolate cake", 6.99);

console.log(menu._courses);

const meal = menu.generateRandomMeal();
console.log(meal);
