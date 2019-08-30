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
