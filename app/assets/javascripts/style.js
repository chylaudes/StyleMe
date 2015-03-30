$(document).ready(function () {


//========= StyleMe ==============================//

var $showInfo = $("#showInfo");
//======== WEATHER UNDERGROUND API CALL ========================//

   $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/geolookup/conditions/q/CA/pleasanton.json", function(data) {                                     
    var location = data['location']['city'];
    var temp_f = data["current_observation"]["temp_f"];
    $showInfo.append("<br><br><span style='font-weight: bold;color:red;'>GEOLOOKUP API</span><br><br>");
     $showInfo.append(data);
    $showInfo.append(data.current_observation.local_time_rfc822 + "<br>");
    $showInfo.append(data.current_observation.temperature_string + "<br>");
    $showInfo.append("Current temperature in " + location + " is: " + temp_f +"<br>");
    $showInfo.append(data.current_observation.icon + "<br>");
    $showInfo.append(data.current_observation.display_location.full + "<br>");
    $showInfo.append("<br><img src=" + data.current_observation.icon_url +"><br>");
    $showInfo.append("------------ end of geolookup --------------------<br><br>");
     // console.log(data);    
   });

   $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/forecast/q/CA/pleasanton.json", function(data) { 
    $showInfo.append("<br><span style='font-weight: bold;color:red;'>FORECAST API</span><br><br>");
    $showInfo.append(data);
    // $showInfo.append("<br><strong>Weather UNDERGROUND</strong><br>");
    // $showInfo.append("Current temperature in " + location + " is: " + temp_f +"<br>");
    // $showInfo.append(data.current_observation.icon + "<br>");
    $showInfo.append(data.forecast.simpleforecast.forecastday[0].conditions + "<br>");
    $showInfo.append("High: "+data.forecast.simpleforecast.forecastday[0].high.fahrenheit + " F <br>");
    $showInfo.append("Low: "+data.forecast.simpleforecast.forecastday[0].low.fahrenheit + " F <br>");
    var $weatherIcon = data.forecast.simpleforecast.forecastday[0].icon_url;
    $showInfo.append("<img src="+$weatherIcon+"> <br>");
    $showInfo.append("------------ end of forecast --------------------<br><br>");   
    // $showInfo.append(data.current_observation.display_location.full + "<br>");
    // $showInfo.append("<br><img src=" + data.current_observation.icon_url +">");
     // console.log(data);    
   });

   var dress = "summer dress";
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + dress + "&offset=0&limit=3&sort=Popular", function(data) {
      $("#dress").append("<img src="+data.products[0].image.sizes.XLarge.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.XLarge.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.XLarge.url+" style='border:5px solid black'><br>");
      // console.log("dress");
      // console.log(data);
   });

   var top = "summer top";
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + top + "&offset=0&limit=3&sort=Popular", function(data) {
      $("#top").append("<br>NO CAT:fts:summer top:<br><img src="+data.products[0].image.sizes.XLarge.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.XLarge.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.XLarge.url+" style='border:5px solid black'><br>");
      // console.log("top");
      // console.log(data);
   });  
   top = 'spring green';
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat=womens-tops&fts=" + top + "&offset=0&limit=3&sort=Popular", function(data) {
      $("#top").append("<br>CAT:womens-tops:spring green<br><img src="+data.products[0].image.sizes.XLarge.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.XLarge.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.XLarge.url+" style='border:5px solid black'><br>");
   }); 

   var bottom = "pants";
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + bottom + "&offset=0&limit=3&sort=Popular", function(data) {
      $("#bottom").append("<img src="+data.products[0].image.sizes.XLarge.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.XLarge.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.XLarge.url+" style='border:5px solid black'>");
      // console.log("top");
      // console.log(data);
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
      $("#hat").append("<br>womens-accessories:HAT<br><img src="+data.products[0].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.Large.url+" style='border:5px solid black'>");
      // console.log("hat");
      // console.log(data.products[0].image.sizes.Large.url);
   });

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat=womens-umbrellas", function(data) {
      $("#hat").append("<br>womens-umbrellas<br><img src="+data.products[0].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.Large.url+" style='border:5px solid black'>");
      // console.log("hat");
      // console.log(data.products[0].image.sizes.Large.url);
   });
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&fts=rain-boots", function(data) {
      $("#hat").append("<br>rainboots<br><img src="+data.products[0].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.Large.url+" style='border:5px solid black'>");
      // console.log("hat");
      // console.log(data.products[0].image.sizes.Large.url);
   });

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat=mens-dress-shirts", function(data) {
      // $("#hat").html("");
      // console.log("Dress shirts");
      $("#hat").append("<br><br>");
      $("#hat").append("<br><img src="+data.products[0].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.Large.url+" style='border:5px solid black'>");
      // console.log(data.products[0].image.sizes.Large.url);
   });
   //fl=b936 -> search by brand(fl=b) b936:Chanel 
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat=womens-suits&fl=b936", function(data) {
      $("#hat").append("<br>Chanel Suits:<br><img src="+data.products[0].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[1].image.sizes.Large.url+" style='border:5px solid black'><img src="+data.products[2].image.sizes.Large.url+" style='border:5px solid black'>");
      // console.log(data);
      // console.log(data.products[0].image.sizes.Large.url);
   }); 

 // $("form").on("submit", function (event) {

 
 //   event.preventDefault();
 //   var query = this.searchTerm.value;





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



});