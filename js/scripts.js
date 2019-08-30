//FRONT END//
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    var customerPizza = new Pizza(size, toppings);
    var customerPrice = customerPizza.calcPrice();
    $("#chosen-size").text(customerPizza.size);
    $("#chosen-toppings").text(customerPizza.toppings);
    $("#price").text(customerPrice);
    $(".output").show();
  });

});

//BACK END//
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.calcPrice = function() {
  this.price = 0;
  if (this.size === "Personal") {
    this.price += 5;
  } else if (this.size === "Small") {
    this.price += 8;
  } else if (this.size === "Medium") {
    this.price += 12;
  } else if (this.size === "Large") {
    this.price += 16;
  } else if (this.size === "Extra Large") {
    this.price += 20;
  }
  this.price += this.toppings.length;
  return this.price;
}
