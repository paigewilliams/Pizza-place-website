//Business Logic for pizza
function Pizza(toppings, size){
  this.toppings = toppings,
  this.size = size,
  this.cost = []
}

Pizza.prototype.calcCost = function(size) {
  if (this.size === 10){
    if (this.toppings.length === 3 ){
      this.cost.push("$14");
      }
    if (this.toppings.length === 2 ){
      this.cost.push("$13");
      }
    if (this.toppings.length === 1){
      this.cost.push("$12");
      }
  }
  if (this.size === 12){
    if (this.toppings.length === 3 ){
      this.cost.push("$16");
      }
    if (this.toppings.length === 2 ){
      this.cost.push("$15");
      }
    if (this.toppings.length === 1){
      this.cost.push("$14");
      }
  }
  if (this.size === 18){
    if (this.toppings.length === 3 ){
      this.cost.push("$18");
      }
    if (this.toppings.length === 2 ){
      this.cost.push("$17");
      }
    if (this.toppings.length === 1){
      this.cost.push("$16");
      }
  }
}

//User Interface Logic

var pizza = new Pizza(["artichoke", "peppers", "spinach"], 10);
// var pizza2 = new Pizza(["peppers"], 12);

pizza.calcCost();
// pizza2.calcCost();
