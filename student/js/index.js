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

$(function() {
  // contact form animations
  $('#addcar').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
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

