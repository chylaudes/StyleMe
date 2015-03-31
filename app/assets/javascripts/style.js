$(document).ready(function () {

//========= StyleMe ==============================//

var $showInfo = $("#showInfo");
//======== WEATHER UNDERGROUND API CALL ========================//

   $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/geolookup/conditions/q/CA/pleasanton.json", function(data) {                                     

    $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
    $('#location').append("<strong>" + data.current_observation.display_location.full + "</strong>");



    // var location = data['location']['city'];
    // var temp_f = data["current_observation"]["temp_f"];
    // $showInfo.append("<br><br><span style='font-weight: bold;color:red;'>GEOLOOKUP API</span><br><br>");
    //  $showInfo.append(data);
    // $showInfo.append(data.current_observation.local_time_rfc822 + "<br>");
    // $showInfo.append(data.current_observation.temperature_string + "<br>");
    // $showInfo.append("Current temperature in " + location + " is: " + temp_f +"<br>");
    // $showInfo.append(data.current_observation.icon + "<br>");    
    // $('#wIcon').append("<br><img src=" + data.current_observation.icon_url +"><br>");
    // $showInfo.append("------------ end of geolookup --------------------<br><br>");
     // console.log(data);    
   });

   $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/forecast/q/CA/pleasanton.json", function(data) { 

    $('#curCond').append(data.forecast.simpleforecast.forecastday[0].conditions);
    $('#hiTemp').append(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + " &#8457;");
    $('#loTemp').append(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + " &#8457;");
    var $weatherIcon = data.forecast.simpleforecast.forecastday[0].icon_url;
    $('#wIcon').append("<img src=" + $weatherIcon + ">");


    // $showInfo.append("<br><span style='font-weight: bold;color:red;'>FORECAST API</span><br><br>");
    // $showInfo.append(data);
    // $showInfo.append("<br><strong>Weather UNDERGROUND</strong><br>");
    // $showInfo.append("Current temperature in " + location + " is: " + temp_f +"<br>");
    // $showInfo.append(data.current_observation.icon + "<br>");    
    // $showInfo.append("------------ end of forecast --------------------<br><br>");   
    // $showInfo.append(data.current_observation.display_location.full + "<br>");
    // $showInfo.append("<br><img src=" + data.current_observation.icon_url +">");
     // console.log(data);    
   });

   // var dress = "summer dress";
   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + dress + "&offset=0&limit=30&sort=Popular", function(data) {
   //    $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+">");
   //    $("#dress").append("<img src="+data.products[1].image.sizes.Large.url+">");
   //    $("#dress").append("<img src="+data.products[2].image.sizes.Large.url+">");
   //    // $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+" class='dress2'><img src="+data.products[2].image.sizes.Large.url+" class='dress3'>");
   //    // console.log("dress");
   //    // console.log(data);
   // });

   var dress = "summer dress";
   var counter;
   
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + dress + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+">");
      $("#dress").append("<img src="+data.products[1].image.sizes.Large.url+">");
      $("#dress").append("<img src="+data.products[2].image.sizes.Large.url+">");

      counter = 3;

      $("#dress").on("click","img", function(e){
        var productIdx = data.products[counter];
        counter++;
        $("#dress").append("<img src="+productIdx.image.sizes.Large.url+">");
        $("#selectedDress").html("");
        $("#selectedTop").html("");
        $("#selectedBottom").html("");
        $("#selectedDress").append("<br><h3>Dress</h3><br>");
        $("#selectedDress").append(this);
      });
    });

   var top = "summer top";
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + top + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#top").append("<img src="+data.products[0].image.sizes.Large.url+">");
      $("#top").append("<img src="+data.products[1].image.sizes.Large.url+">");
      $("#top").append("<img src="+data.products[2].image.sizes.Large.url+">");

      counter = 3;
      $("#top").on("click","img", function(e){
        var productIdx = data.products[counter];
        
        counter++;
        $("#top").append("<img src="+productIdx.image.sizes.Large.url+">");
        $("#selectedDress").html("");
        $("#selectedTop").html("");
        $("#selectedTop").append("<br><h3>Top</h3><br>");
        $("#selectedTop").append(this);
      });

   }); 

   // top = 'spring green';
   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat=womens-tops&fts=" + top + "&offset=0&limit=3&sort=Popular", function(data) {
   //    $("#top").append("<br>CAT:womens-tops:spring green<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   // }); 

   var bottom = "pants";
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + bottom + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#bottom").append("<img src="+data.products[0].image.sizes.Large.url+">");
      $("#bottom").append("<img src="+data.products[1].image.sizes.Large.url+">");
      $("#bottom").append("<img src="+data.products[2].image.sizes.Large.url+">");
      counter = 3;

      $("#bottom").on("click","img", function(e){
        var productIdx = data.products[counter];
        console.log(counter);
        console.log(productIdx);
        
        counter++;
        $("#bottom").append("<img src="+productIdx.image.sizes.Large.url+">");
        $("#selectedDress").html("");
        $("#selectedBottom").html("");
        $("#selectedBottom").append("<br><h3>Bottom</h3><br>");
        $("#selectedBottom").append(this);
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
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=hat&offset=0&limit=3&cat=womens-accessories", function(data) {
      $("#accessory").append("<br>womens-accessories:HAT<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
      // console.log("hat");
      // console.log(data.products[0].image.sizes.Large.url);
   });

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat=womens-umbrellas", function(data) {
      $("#accessory").append("<br>womens-umbrellas<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
      // console.log("hat");
      // console.log(data.products[0].image.sizes.Large.url);
   });
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&fts=rain-boots", function(data) {
      $("#accessory").append("<br>rainboots<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
      // console.log("hat");
      // console.log(data.products[0].image.sizes.Large.url);
   });

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat=mens-dress-shirts", function(data) {
      // $("#accessory").html("");
      // console.log("Dress shirts");
      $("#accessory").append("<br><br>");
      $("#accessory").append("<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
      // console.log(data.products[0].image.sizes.Large.url);
   });
   //fl=b936 -> search by brand(fl=b) b936:Chanel 
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat=womens-suits&fl=b936", function(data) {
      $("#accessory").append("<br>Chanel Suits:<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
      // console.log(data);
      // console.log(data.products[0].image.sizes.Large.url);
   }); 



 // $("form").on("submit", function (event) {
 //   event.preventDefault();
 //   var query = this.searchTerm.value;
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
    
    // $('.carousel').carousel({
    //     interval: 3000
    // });

});