//FRONT END//
var totalPrice = 0; //global variable

function displayToppings(toppings) {
  var toppingsHtml = "";
  if (toppings.length) {
    toppings.forEach(function(topping) {
      toppingsHtml += "<li>" + topping + "</li>";
    });
  } else {
    toppingsHtml = "<li>Cheese only</li>"
  }
  return toppingsHtml;
}

function additionalPizza(Pizza) {
  var nextPizzaToppingsHtml = displayToppings(Pizza.toppings);
  return nextPizzaHtml = "<div class=\"pizza card\"><h3>" + Pizza.size + " Pizza:</h3><p><strong>Toppings:</strong></p><ul>" + nextPizzaToppingsHtml + "</ul><p><strong>Price:</strong> $" + Pizza.price + "</p></div>";
}

$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    var customerPizza = new Pizza(size, toppings);
    var customerPrice = customerPizza.calcPrice();
    totalPrice += customerPrice;
    if (!$("#chosen-toppings").text()) {
      $("#chosen-size").text(customerPizza.size);
      $("#chosen-toppings").append(displayToppings(customerPizza.toppings));
      $("#price").text(customerPrice);
      $("#total-price").text(totalPrice);
      $("#orderCard").addClass("pizza")
      $(".output").show();
    } else {
      $(".additionalPizza").append(additionalPizza(customerPizza));
      $("#total-price").text(totalPrice);
    }
  });
  $("#reset").click(function() {
    totalPrice = 0;
    $("#order").trigger("reset");
    $("#orderCard").removeClass("pizza");
    $("#chosen-toppings").text("");
    $(".additionalPizza").text("");
    $(".output").hide();
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
