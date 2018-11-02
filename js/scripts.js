//Business Logic for pizza
function Pizza(toppings, size){
  this.toppings = [toppings],
  this.size = size
  this.cost = ""
}

// Pizza.prototype.createPizza() {
//
// }
//
//
Pizza.prototype.calcCost = function(size) {
  if (this.size === 10){
    this.cost.push("$12");
  }
  else if (this.size === 12){
    this.cost.push("$14");
  }
}

//User Interface Logic

var pizza = new Pizza(["artichoke"], 10);
var pizza2 = new Pizza(["peppers", "pepperoni"], 12);

pizza.calcCost();
