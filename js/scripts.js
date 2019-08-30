//FRONT END//
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    console.log(size);
    toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    console.log(toppings);

  });

});

//BACK END//
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.calcPrice = function() {
  var price = 0;
  if (this.size === "Personal") {
    price += 5;
  } else if (this.size === "Small") {
    price += 8;
  } else if (this.size === "Medium") {
    price += 12;
  } else if (this.size === "Large") {
    price += 16;
  } else if (this.size === "Extra Large") {
    price += 20;
  }
  price += this.toppings.length;
  return price;
}
