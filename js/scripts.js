//Business Logic for pizza
function Order(){
  this.pizzas = [];
}

Order.prototype.orderPizza = function (size, toppings){
  var newPizza = new Pizza(size, toppings);
  this.pizzas.push(newPizza);
}


//Business Logic for pizza
function Pizza(size, toppings){
  this.size = size,
  this.toppings= [];
  this.toppings.push(toppings);
  this.cost = [];
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

var order = new Order();

// function addPizza(size, toppings){
//   order.orderPizza(size, toppings)
//   $(".build-pizza").hide();
// }



$(document).ready(function(){
  var toppingsSelected = [];


  $(".build-pizza").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("#pizza-size").val());

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsChecked = $(this).val();
      toppingsSelected.push(toppingsChecked);
    })
    order.orderPizza(pizzaSize, toppingsSelected)
    order.pizzas[0].calcCost(order.pizzas[0].size)
    // addPizza(pizzaSize, toppingsSelected);
    console.log(toppingsSelected)
    console.log(pizzaSize);
    // order.newPizza.prototype.calcCost();
})


})
