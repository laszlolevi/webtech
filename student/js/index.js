$("#manufacturerNames").click(function () {
  $("#index").hide();
  $.ajax({
    url: "/manufacturerNames", success: function (result) {
      $("#main").html("");
      let cars = document.createElement("div");
      for (manufacturer of result) {
        let card = document.createElement("p");
        card.textContent = manufacturer;
        $(card).click(function () {
          document.cookie = card.textContent;
          console.log(document.cookie);
        })
        cars.appendChild(card);
      }
      list.appendChild(cars);
    }
  });
});

function manufacturer_names(manufacturer) {
  var card = document.createElement("p");
  card.textContent = manufacturer;
  $(card).click(function () {
    console.log("asdf");
    document.cookie = card.textContent;

  })
  return card;
}

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
  var card = document.createElement("p");
  card.textContent = manufacturer;
  return card;
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
  name_input.id = "name";

  var consumption_p = cp();
  consumption_p.textContent = "consumption:";
  var consumption_input = cinput();
  consumption_input.id = "consumption";

  var color_p = cp();
  color_p.textContent = "color:";
  var color_input = cinput();
  color_input.id = "color";

  var manufacturer_p = cp();
  manufacturer_p.textContent = "manufacturer:";
  var manufacturer_input = cinput();
  manufacturer_input.id = "manufacturer";

  var year_p = cp();
  year_p.textContent = "year:";
  var year_input = cinput();
  year_input.id = "year";

  var available_p = cp();
  available_p.textContent = "available:";
  var available_input = cinput();
  available_input.id = "available";

  var horsepower_p = cp();
  horsepower_p.textContent = "horsepower:";
  var horsepower_input = cinput();
  horsepower_input.id = "horsepower";

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
var addcar_open = document.getElementById("addcar");

// Get the <span> element that closes the modal
var cancel = document.getElementById("cancel");

// When the user clicks the button, open the modal 
addcar_open.onclick = function () {
  modal.style.display = "block";
  addcar();
}

function ge(id) {
  return document.getElementById(id).value;
}

$("#submit").click(function () {
  var car = { "name": ge("name"), "consumption": ge("consumption"), "color": ge("color"), "manufacturer": ge("manufacturer"), "year": ge("year"), "available": ge("available"), "horsepower": ge("horsepower") };
  console.log(car);
  $.post("/addcar", car, function (data, status) {
    alert("Data: " + data + "\nStatus: " + status);
  });
})

// When the user clicks on <span> (x), close the modal
cancel.onclick = function () {
  modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
