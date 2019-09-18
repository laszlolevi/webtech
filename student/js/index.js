$(document).ready(function(){
    $("button").click(function(){
      $.ajax({url: "/manufacturerNames", success: function(result){
        $("#main").html("");
        for(manufacturer of result){
          manufacturer_listing(manufacturer)
        }
      }});
    });
  });

  $(document).ready(function(){
      $.ajax({url: "/cars", success: function(result){
        $("#main").html("");
        for(car of result){
          car_listing(car);
          console.log(car);
        }
      }});
  });

var list = document.getElementById("main");

function car_listing(car) {
    var card = document.createElement("div");
    card.className += "listing-card";
    var title = document.createElement("h3");
    title.className += "mid";
    title.textContent = car.manufacturer + " ";
    title.textContent +=  car.name;
    var color = cp();
    color.textContent = "Color: "+car.color;
    var y = cp();
    y.textContent = "Year: "+car.year;
    var avail = cp();
    avail.textContent = "Available: "+car.available;
    var cons = cp();
    cons.textContent = "Consumption: "+car.consumption;
    var hp = cp();
    hp.textContent = "Horsepower: "+car.horsepower;
    card.appendChild(title);
    card.appendChild(color);
    card.appendChild(y);
    card.appendChild(avail);
    card.appendChild(cons);
    card.appendChild(hp);
    list.appendChild(card);
}

function manufacturer_listing(manufacturer){
  var card = document.createElement("div");
  card.textContent=manufacturer;
  list.appendChild(card);
}

function cp() {
    return document.createElement("p");
}

