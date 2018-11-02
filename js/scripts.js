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
  if (this.size === 14){
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


pizza.calcCost();

$(document).ready(function(){
$(".build-pizza").submit(function(event){
  event.preventDefault();
  var pizzaSize = parseInt($("#pizza-size").val());
  console.log(typeof pizzaSize);

})


})
