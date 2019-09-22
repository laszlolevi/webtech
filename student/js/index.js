$("#manufacturerNames").click(function () {
  $("#index").hide();
  $.ajax({
    url: "/manufacturerNames", success: function (result) {
      $("#main").html("");
      for (manufacturer of result) {
        manufacturer_names(manufacturer)
      }
    }
  });
});

$("#manufacturers").click(function () {
  $("#index").hide();
  $.ajax({
    url: "/manufacturers", success: function (result) {
      $("#main").html("");
      for (manufacturer of result) {
        manufacturer_details(manufacturer)
      }
    }
  });
});

$("#home").click(function () {
  $("#index").show();
  $.ajax({
    url: "/", success: function (result) {
      $("#main").html("");
    }
  });
});

$("#cars").click(function () {
  $("#index").hide();
  $.ajax({
    url: "/cars", success: function (result) {
      $("#main").html("");
      for (car of result) {
        car_details(car);
        console.log(car);
      }
    }
  });
});

var list = document.getElementById("main");

function car_details(car) {
  var card = document.createElement("div");
  card.className += "listing-card";
  var title = document.createElement("h3");
  title.className += "mid";
  title.textContent = car.manufacturer + " ";
  title.textContent += car.name;
  var color = cp();
  color.textContent = "Color: " + car.color;
  var y = cp();
  y.textContent = "Year: " + car.year;
  var avail = cp();
  avail.textContent = "Available: " + car.available;
  var cons = cp();
  cons.textContent = "Consumption: " + car.consumption;
  var hp = cp();
  hp.textContent = "Horsepower: " + car.horsepower;
  card.appendChild(title);
  card.appendChild(color);
  card.appendChild(y);
  card.appendChild(avail);
  card.appendChild(cons);
  card.appendChild(hp);
  list.appendChild(card);
}

function manufacturer_names(manufacturer) {
  var card = document.createElement("div");
  card.textContent = manufacturer;
  list.appendChild(card);
}

function manufacturer_details(manufacturer) {
  var card = document.createElement("div");
  var name = cp();
  name.textContent = "Name: " + manufacturer.name;
  var country = cp();
  country.textContent = "Country: " + manufacturer.country;
  var founded = cp();
  founded.textContent = "Founded: " + manufacturer.founded;
  card.appendChild(name);
  card.appendChild(country);
  card.appendChild(founded);
  list.appendChild(card);
}

function cp() {
  return document.createElement("p");
}

function cinput() {
  return document.createElement("input");
}

function addcar() {
  $("#form").html("");
  var form = document.getElementById("form");

  var name_p = cp();
  name_p.textContent = "name:";
  var name_input = cinput();

  var consumption_p = cp();
  consumption_p.textContent = "consumption:";
  var consumption_input = cinput();

  var color_p = cp();
  color_p.textContent = "color:";
  var color_input = cinput();

  var manufacturer_p = cp();
  manufacturer_p.textContent = "manufacturer:";
  var manufacturer_input = cinput();

  var year_p = cp();
  year_p.textContent = "year:";
  var year_input = cinput();

  var available_p = cp();
  available_p.textContent = "available:";
  var available_input = cinput();

  var horsepower_p = cp();
  horsepower_p.textContent = "horsepower:";
  var horsepower_input = cinput();

  form.appendChild(name_p);
  form.appendChild(name_input);
  form.appendChild(consumption_p);
  form.appendChild(consumption_input);
  form.appendChild(color_p);
  form.appendChild(color_input);
  form.appendChild(manufacturer_p);
  form.appendChild(manufacturer_input);
  form.appendChild(year_p);
  form.appendChild(year_input);
  form.appendChild(available_p);
  form.appendChild(available_input);
  form.appendChild(horsepower_p);
  form.appendChild(horsepower_input);

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addcar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  addcar();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
