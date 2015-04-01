$(document).ready(function () {

//========= Get weather data from user database ===========================//

 if (window.location.href==="http://localhost:3000/styles") {

    var userLocation = $("div #curLocation").text();
    var todayTemp;

    if (!userLocation){
      userLocation = 'San Francisco';
    }

    userLocation = userLocation.replace(" ", "");
    var trimmedUserLocation = userLocation;
    var index = userLocation.indexOf(',');
    userLocation = userLocation.slice(0, index);

    $newState = trimmedUserLocation.slice(index+1, index+4);
    if ($newState === null || $newState === undefined){
      $newState = "CA";
    }

   $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/geolookup/conditions/q/"+ $newState +"/"+ userLocation +".json", function(data) {
    $("div #curLocation").text('');
    $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
    $('#curLocation').append("<strong>" + data.current_observation.display_location.full + "</strong>");
   });

   $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/forecast/q/"+ $newState +"/"+ userLocation +".json", function(data) {
    $('#curCond').append(data.forecast.simpleforecast.forecastday[0].conditions);
    $('#hiTemp').append(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + " &#8457;");
    todayTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    $('#loTemp').append(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + " &#8457;");
    var $weatherIcon = data.forecast.simpleforecast.forecastday[0].icon_url;
    $('#wIcon').append("<img src=" + $weatherIcon + ">");
   });

    var sex = $("#gender").text();
    var fts, cat, counter;

    if (sex === "F"){
      if (todayTemp >= 90 ) {
        cat = "womens-clothes";
        fts = "sleeveless dress";
      } else if (todayTemp > 80) {
        cat = "womens-clothes";
        fts = "summer dress";
      } else if (todayTemp > 70) {
          cat = "womens-clothes";
          fts ="spring dress";
      } else if (todayTemp > 60) {
          cat = "day-dresses";
          fts ="longsleeve";
      } else if (todayTemp > 50) {
          cat = "day-dresses";
          fts ="winter dress";
      } else {
          cat = "day-dresses";
          fts = "winter dress";
      }
    }

    if (sex === "F"){
     $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+cat+"&fts=" + fts + "&offset=0&limit=30&sort=Popular", function(data) {
        $("#dress").text('');
        $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+">");
        $("#dress").append("<img src="+data.products[1].image.sizes.Large.url+">");
        $("#dress").append("<img src="+data.products[2].image.sizes.Large.url+">");
        $("#dress").append("<img src="+data.products[3].image.sizes.Large.url+">");
        counter = 4;
        $("#dress").on("click","img", function(e){
          var productIdx = data.products[counter];
          counter++;
          $("#dress").append("<img src="+productIdx.image.sizes.Large.url+">");
          $("#selectedDress").html("");
          $("#selectedTop").html("");
          $("#selectedBottom").html("");
          $("#selectedDress").append("<br><h3>Dress</h3><br>");
          $("#selectedDress").append(this);
          $("#saveStyle").show();
        });
      });
    }

    if (sex === "F"){
      if (todayTemp >= 90 ) {
        cat = "womens-clothes";
        fts = "tank top";
      } else if (todayTemp > 80) {
        cat = "womens-clothes";
        fts = "summer top";
      } else if (todayTemp > 70) {
          cat = "womens-clothes";
          fts = "spring top";
      } else if (todayTemp > 60) {
          cat = "longsleeve-tops";
          fts ="";
      } else if (todayTemp > 50) {
          cat = "cashmere-sweaters";
          fts ="";
      } else {
          cat = "womens-outerwear";
        fts = "outerwear";
      }
    } else  {
      //MEN
      if (todayTemp >= 90 ) {
        cat = "mens-tees-and-tshirts";
        fts = "summer";
      } else if (todayTemp > 80) {
        cat = "mens-tees-and-tshirts";
        fts = "summer";
      } else if (todayTemp > 70) {
          cat = "mens-tees-and-tshirts";
          fts = "summer";
      } else if (todayTemp > 60) {
          cat = "mens-longsleeve-shirts";
          fts = "summer";
      } else if ( todayTemp > 50) {
          cat = "mens-sweaters";
          fts = "";
      } else {
        cat = "mens-overcoats-and-trenchcoats";
        fts = "";
      }
    }
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ cat +"&fts=" + fts + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#top").text('');
      $("#top").append("<img src="+data.products[0].image.sizes.Large.url+">");
      $("#top").append("<img src="+data.products[1].image.sizes.Large.url+">");
      $("#top").append("<img src="+data.products[2].image.sizes.Large.url+">");
      $("#top").append("<img src="+data.products[3].image.sizes.Large.url+">");
      
      counter = 4;
      
      $("#top").on("click","img", function(e){
        var productIdx = data.products[counter];

        counter++;
        $("#top").append("<img src="+productIdx.image.sizes.Large.url+">");
        $("#selectedDress").html("");
        $("#selectedTop").html("");
        $("#selectedTop").append("<br><h3>Top</h3>");
        $("#selectedTop").append(this);
        $("#saveStyle").show();
      });
   });

   var bottom = "pants";
    if (sex === "F"){
      if (todayTemp >= 90 ) {
        cat = "womens-clothes";
        fts = "summer shorts";
      } else if (todayTemp > 80) {
        cat = "womens-clothes";
        fts = "summer shorts";
      } else if (todayTemp > 70) {
          cat = "womens-clothes";
          fts ="spring pants";
      } else if (todayTemp > 60) {
          cat = "jeans";
          fts ="";
      } else if (todayTemp > 50) {
          cat = "classic-jeans";
          fts ="";
      } else {
          cat = "classic-jeans";
        fts = "";
      }
    }  else  {
      //==== MEN ======//
      if (todayTemp >= 90 ) {
        cat = "mens-shorts";
        fts = "summer";
      } else if (todayTemp > 90) {
        cat = "mens-shorts";
        fts = "summer";
      } else if (todayTemp > 80) {
          cat = "mens-chinos-and-khakis";
          fts = "summer";
      } else if (todayTemp > 70) {
          cat = "mens-jeans";
          fts = "classic";
      } else if ( todayTemp > 60) {
          cat = "mens-jeans";
          fts = "classic";
      } else {
        cat = "mens-jeans";
        fts = "classic";
      }
    }

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ cat +"&fts=" + fts + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#bottom").text('');
      $("#bottom").append("<img src="+data.products[0].image.sizes.Large.url+">");
      $("#bottom").append("<img src="+data.products[1].image.sizes.Large.url+">");
      $("#bottom").append("<img src="+data.products[2].image.sizes.Large.url+">");
      $("#bottom").append("<img src="+data.products[3].image.sizes.Large.url+">");      
      counter = 4;

      $("#bottom").on("click","img", function(e){
        var productIdx = data.products[counter];
        counter++;
        $("#bottom").append("<img src="+productIdx.image.sizes.Large.url+">");
        $("#selectedDress").html("");
        $("#selectedBottom").html("");
        $("#selectedBottom").append(this);
        $("#selectedBottom").append("<h3>Bottom</h3>");
      });
   });





   //======== shop sensei brand API CALL ========================//
   /*
    ||== QUERY ==||
    fts: Text search terms, as a user would enter in a Search: field.
    cat: A product category. Only products within the category will be returned. The easiest way to find values for this parameter is to browse to a category on the ShopStyle website and take the last element of the URL path, e.g., from http://www.shopstyle.com/browse/dresses, use "dresses." Another way is to look at the complete list of categories returned by the /categories.
    fl: Specify one or more filters on the query for brand, retailer, price, discount, and/or size. Each filter value has an initial letter and a numeric id. The easiest way to construct a filter list is to do a search on ShopStyle, select one or more filters in the UI, and copy the resulting URL. To convert brand or retailer names to ids, use the /brands and /retailers calls. Here is a sample URL showing sale clothing from two brands and one retailer:
      b - brand
      r - retailer
      p - price
      d - sale
      s - size
      c - color
   */
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts="+fts+"&offset=0&limit=3&cat="+cat, function(data) {
      $("#accessory").append("<br>womens-accessories:HAT<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   });

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat="+cat, function(data) {
      $("#accessory").append("<br>womens-umbrellas<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   });
   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&fts=rain-boots", function(data) {
   //    $("#accessory").append("<br>rainboots<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   // });

   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat=mens-dress-shirts", function(data) {
   //    $("#accessory").append("<br><br>");
   //    $("#accessory").append("<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   // });
   //fl=b936 -> search by brand(fl=b) b936:Chanel
   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat=womens-suits&fl=b936", function(data) {
   //    $("#accessory").append("<br>Chanel Suits:<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   // });

  }

   // $("#saveStyleForm").on("submit", function (event) {
   //   event.preventDefault();

     // var query = this.searchTerm.value;
   // });

// $("#dress").on("click","img", function(e){
//   console.log(this);
//   counter++;
//   $("#selectedDress").html("");
//   $("#selectedDress").append(this);
// });
//======== SHOP STYLE API CALL ========================//
   // $.ajax({
   //    url: "http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + query + "&offset=0&limit=10",
   //    dataType: "json",
   //    success: function(data) {
   //       console.log(data);
   //    }
   // });
   // $.getJSON("http://api.shopstyle.com/action/apiSearch?pid=uid2100-27524390-36&fts=" + query + "&min=0&count=10", function(data) {
   //   var $results = $("#results");
   //    $results.append("Result");
   //    $results.append("Data:"+data);
   // });

   // var dress = "summer dress";
   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + dress + "&offset=0&limit=30&sort=Popular", function(data) {
   //    $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+">");
   //    $("#dress").append("<img src="+data.products[1].image.sizes.Large.url+">");
   //    $("#dress").append("<img src="+data.products[2].image.sizes.Large.url+">");
   //    // $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+" class='dress2'><img src="+data.products[2].image.sizes.Large.url+" class='dress3'>");
   //    // console.log("dress");
   //    // console.log(data);
   // });





});