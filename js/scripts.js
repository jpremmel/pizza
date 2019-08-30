//FRONT END//
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    console.log(size);

  });

});

//BACK END//
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}
