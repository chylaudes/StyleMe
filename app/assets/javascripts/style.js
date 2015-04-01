$(document).ready(function () {

//========= StyleMe ==============================//

var $showInfo = $("#showInfo");
var todayTemp, fts, cat;
var sex = $("#gender").text();



//======== WEATHER UNDERGROUND API CALL ========================//
   var userLocation = $("div #location").text();
   console.log('UserLoc:',userLocation);
   $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/geolookup/conditions/q/AK/fairbanks.json", function(data) {
   console.log("geolookup");
   console.log(data);
    $("div #location").text('');
    $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
    $('#location').append("<strong>" + data.current_observation.display_location.full + "</strong>");
   });

   $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/forecast/q/CA/"+ userLocation +".json", function(data) {
   console.log("forecast");
   console.log(data);
    $('#curCond').append(data.forecast.simpleforecast.forecastday[0].conditions);
    $('#hiTemp').append(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + " &#8457;");
    todayTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    console.log('todayTempyy',todayTemp);
    $('#loTemp').append(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + " &#8457;");
    var $weatherIcon = data.forecast.simpleforecast.forecastday[0].icon_url;
    $('#wIcon').append("<img src=" + $weatherIcon + ">");
   });

   var dress = "summer dress";
   var counter;

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
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + dress + "&offset=0&limit=30&sort=Popular", function(data) {
    console.log("dress");
   console.log(data);
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
// }
// else  {
//   if (todayTemp >= 90 ) {
//     cat = "womens-clothes";
//     fts = "tank top";
//   } else if (80 < todayTemp < 90) {
//     cat = "womens-clothes";
//     fts = "summer top";
//   } else if (70 < todayTemp < 80) {
//       cat = "womens-clothes";
//     fts = "spring top";
//   } else if (60 < todayTemp < 70) {
//       cat = "longsleeve-tops";
//   } else if (50 < todayTemp < 60) {
//       cat = "cashmere-sweaters";
//   } else if (todayTemp <= 50) {
//       cat = "womens-outerwear";
//     fts = "outerwear";
//   }
}
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ cat +"&fts=" + fts + "&offset=0&limit=30&sort=Popular", function(data) {
        console.log("top");
   console.log(data);
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
    }
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + bottom + "&offset=0&limit=30&sort=Popular", function(data) {
        console.log("bottom");
   console.log(data);
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

   // var dress = "summer dress";
   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&fts=" + dress + "&offset=0&limit=30&sort=Popular", function(data) {
   //    $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+">");
   //    $("#dress").append("<img src="+data.products[1].image.sizes.Large.url+">");
   //    $("#dress").append("<img src="+data.products[2].image.sizes.Large.url+">");
   //    // $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+" class='dress2'><img src="+data.products[2].image.sizes.Large.url+" class='dress3'>");
   //    // console.log("dress");
   //    // console.log(data);
   // });

    // $('.carousel').carousel({
    //     interval: 3000
    // });


  // $('button').on('click', '.save_style',function (e) {
  //   e.preventDefault();
  //   var formURL = $("#search").attr("data-url");
  //   // var title = $(this).parent().find($('.tr-title')).text();
  //   // var artist = $(this).parent().find($('.tr-artist')).text();
  //   var postData = spResult[title($(this))+artist($(this))];
  //   console.log(postData.preview_url);
  //   $.ajax({
  //     url : formURL,
  //     type: "POST",
  //     data : {track: {spotify_track_id: postData.id, title: postData.name, track_uri: postData.uri, artist: postData.artists[0].name}},
  //     success:function(data, textStatus, jqXHR)
  //     {
  //       location.reload();
  //         //data: return data from server
  //         // data
  //     }
  //      });
  //   // $('#results ul').empty();
  // });



});