$(document).ready(function () {

//======== Change location only ========================//

 if (window.location.href==="http://localhost:3000/styles") {
   
   var $newCity = $("#location").val();
   var todayTemp = $("#hiTemp").val();
   var sex = $("#gender").text();
   var fts, cat, counter;   

   var userLocation;
    if (!userLocation){
      userLocation = 'San Francisco, CA';
    }   
   

   $("#changeLoc").on("click", function(e){
      e.preventDefault();
      $newCity = $("#location").val();
      $newCity = $newCity.replace(" ", "");
      var index, $newState;
      if ($newCity.indexOf(',') != -1) {
        index = $newCity.indexOf(',');
        userLocation = $newCity.slice(0, index);
        $newState = $newCity.slice(index+1, index+4);
      }
      if ($newState === null || $newState === undefined){
        $newState = "CA";
      }

     $.getJSON("http://api.wunderground.com/api/fa10126c4dd3470b/geolookup/conditions/q/"+ $newState +"/"+ userLocation +".json", function(data) {
      $("div #curLocation").text('');
      $('#curTemp').text('');
      $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
      $('#curLocation').append("<strong>" + data.current_observation.display_location.full + "</strong>");  
     });

     $.getJSON("http://api.wunderground.com/api/fa10126c4dd3470b/forecast/q/"+ $newState +"/"+ userLocation +".json", function(data) {
      $('#curCond').text('');
      $('#hiTemp').text('');
      $('#loTemp').text('');
      $('#wIcon').text('');

      $('#curCond').append(data.forecast.simpleforecast.forecastday[0].conditions);
      $('#hiTemp').append(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + " &#8457;");
      todayTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      $('#loTemp').append(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + " &#8457;");
      var $weatherIcon = data.forecast.simpleforecast.forecastday[0].icon_url;
      $('#wIcon').append("<img src=" + $weatherIcon + ">");
     });    

    //======== START of SHOPSTYPLE =================//
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
          // $("#saveStyle").show();
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
      //MALE
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
          cat = "men-longsleeve-shirts";
          fts = "summer";
      } else if ( todayTemp > 50) {
          cat = "cashmere-sweaters";
          fts = "summer";
      } else {
        cat = "womens-outerwear";
        fts = "outerwear";
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
        // $("#saveStyle").show();
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
    } else  {
      //MALE
      if (todayTemp >= 90 ) {
        cat = "mens-tees-and-tshirts";
        fts = "summer";
      } else if (todayTemp > 90) {
        cat = "mens-tees-and-tshirts";
        fts = "summer";
      } else if (todayTemp > 80) {
          cat = "mens-tees-and-tshirts";
          fts = "summer";
      } else if (todayTemp > 70) {
          cat = "longsleeve-tops";
          fts = "summer";
      } else if ( todayTemp > 60) {
          cat = "cashmere-sweaters";
          fts = "summer";
      } else {
        cat = "womens-outerwear";
        fts = "outerwear";
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

   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts="+fts+"&offset=0&limit=3&cat="+cat, function(data) {
   //    $("#accessory").append("<br>womens-accessories:HAT<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   // });

   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat="+cat, function(data) {
   //    $("#accessory").append("<br>womens-umbrellas<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   // });
    //=========== SHOPSTYPLE ================//


   }); //end of ON CLICK


  } //end of window.location.href

});//end of document.ready