// this file makes the buttons in the handlebars files work
$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#newburger")
        .val()
        .trim(),
      devoured: 0
    };
// Sends the POST request to add new burger entry
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("New burger added");
      location.reload();
    });
  });

// Code for the "devour" button in index.handlebars
  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    const id = $(this).data("id");
    const devouredState = {
      devoured: 1
    };
// Sends the PUT request to change the status of a burger to "eaten"
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });
});
