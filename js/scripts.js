$(document).ready(function() {
  $("form#favthings").submit(function(event) {
    event.preventDefault();
    var food = $("input#food").val();
    var car = $("input#car").val();
    var state = $("input#state").val();

    var favoriteThings = [food, car, state];

    var newThings = favoriteThings

    $(".newThings").append("<li>" + newThings[0] + "</li>")
    $(".newThings").append("<li>" + newThings[1] + "</li>")
    $(".newThings").append("<li>" + newThings[2] + "</li>")



  })
})