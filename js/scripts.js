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

}

//User Interface Logic

var order = new Order();

function addPizza(size, toppings){
  order.orderPizza(size, toppings);
  order.pizzas[0].calcCost(order.pizzas[0].size);
  $(".build-pizza").hide();
  $(".display-order").show();

  $(".size").html(order.pizzas[0].size);
  $(".cost").html(order.pizzas[0].cost[0]);

}
function displayToppings(toppingsToDisplay){
  var toppingsList = $("ul#toppings");
  var htmlForToppingList = "";
  toppingsToDisplay.pizzas.toppings.forEach(function(topping){
    htmlForToppingList += "<li> " + toppingsToDislay.pizzas.toppings + "</li>";
  });
  toppingList.html(htmlforToppingList);
  }
  // $("#toppings").html(order.pizzas[0].toppings[0] + "</li>");


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

    displayToppings(order);
    // displayPizzaOrder(order)


    // console.log(toppingsSelected)
    // console.log(pizzaSize);


})


})
