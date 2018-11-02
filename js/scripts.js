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
  var costOfPizza = this.size * (1.25) + this.toppings[0].length
  this.cost.push(costOfPizza);

  // if (this.size === 10){
  //   if (this.toppings[0].length > 3 ){
  //     this.cost.push("$16");
  //     }
  //   if (this.toppings[0].length === 3 ){
  //     this.cost.push("$14");
  //     }
  //   if (this.toppings[0].length === 2 ){
  //     this.cost.push("$13");
  //     }
  //   if (this.toppings[0].length === 1){
  //     this.cost.push("$12");
  //     }
  // }
  // if (this.size === 14){
  //   if (this.toppings[0].length > 3 ){
  //     this.cost.push("$18");
  //     }
  //   if (this.toppings[0].length === 3 ){
  //     this.cost.push("$16");
  //     }
  //   if (this.toppings[0].length === 2 ){
  //     this.cost.push("$15");
  //     }
  //   if (this.toppings[0].length === 1){
  //     this.cost.push("$14");
  //     }
  // }
  // if (this.size === 18){
  //   if (this.toppings[0].length > 3 ){
  //     this.cost.push("$20");
  //     }
  //   if (this.toppings[0].length === 3 ){
  //     this.cost.push("$18");
  //     }
  //   if (this.toppings[0].length === 2 ){
  //     this.cost.push("$17");
  //     }
  //   if (this.toppings[0].length === 1){
  //     this.cost.push("$16");
  //     }
  // }
}

//User Interface Logic

var order = new Order();

function addPizza(size, toppings){
  order.orderPizza(size, toppings);
  order.pizzas[0].calcCost(order.pizzas[0].size);
  $(".build-pizza").hide();
  $(".display-order").show();

  $(".size").html(order.pizzas[0].size);
  $("#toppings").append(order.pizzas[0].toppings[0] + "</br>");
  $(".cost").html(order.pizzas[0].cost[0]);
}
  // function displayPizzaOrder(pizzaOrderToDisplay){
    // var orderDisplayed = $("ul#toppings");
    // var htmlForToppings = "";
    //
    // pizzaOrderToDisplay.pizzas.toppings[0].forEach(function(topping){
    //   htmlforOrder += "<li"
    // })

  // }

// function costOfOrder(){
// }

function AppendToppings(toppings) {
  var list = document.createElement('ul');

  for(var i = 0; i < toppings.length; i++){
    var item = document.createElement('li');
  }
}




$(document).ready(function(){
  var toppingsSelected = [];

  $(".build-pizza").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("#pizza-size").val());

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsChecked = $(this).val();
      toppingsSelected.push(toppingsChecked);
    })

    addPizza(pizzaSize, toppingsSelected);
    // displayPizzaOrder(order)


    // console.log(toppingsSelected)
    // console.log(pizzaSize);


})


})
