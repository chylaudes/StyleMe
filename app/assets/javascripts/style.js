$(document).ready(function () {

//this is good one
//BRANDS: WOMEN
//&fl=b30810  = H&M
//&fl=b2333 = Forever21
//&fl=b30 = Ann Taylor
//&fl=b29798&fl=b284 == J. Crew and J.Crew Factory
//&fl=b7478&fl=b21236 = Madewell and AllSaints
//&fl=b18563 = LOFT
//&fl=b728 = Anthropoligie
//&fl=b2683 = Banana Republic
//&fl=b2446 = GAP
//&fl=b18530 = Club Monaco
//&fl=b4493&fl=b31409 = MANGO
//&fl=b4486 = ASOS
//&fl=b822 = Bloomingdale's
//&fl=b2363 = Barney's New York
//&fl=b427 = Nordstrom
//fl=b8031 = Topshop


//BRANDS: MEN
//&fl=b30810 = H&M
//fl=b18530 = Club Monaco
//&fl=b4486 = ASOS
//&fl=b2683 = Banana Republic
//&fl=b2446 = GAP
//&fl=b284&fl=b29798 = J CREW
//&fl=b462 = Ralph Lauren
//&fl=b2329 = VANS
//&fl=b3471 = Old Navy
//&fl=b2363 = Barney's New York
//&fl=b822 = Bloomingdale's
//&fl=b427 = Nordstrom
//&fl=b12953 = Topman


>>>>>>> 6dc2507526edbc8cfb5c029cd30ed69579518cef
//WOMEN's SHOES:
// if (FORECAST >= clear) {
//       if (sex === "F"){
//cat=womens-shoes&fl=b4089&fl=b1077
//         cat = "womens-shoes";
//         fl = "b4089&fl=b1077"
//       }
//     } else if (FORECAST = Rainning) {
//cat=boots&fts=rain
//         cat = "boots";
//         fts ="rain";
//cat=womens-shoes&fl=b4089&fl=b1077
//MEN's SHOES:
//cat=mens-shoes&sort=Popular&fl=b267&fl=b30810&fl=b552&fl=b4089&fl=b1336&fl=b14&fl=b870

//WOMEN ACCESSORIES: (BAGS)
//cat=handbags&fl=b4089
//WOMEN ACCESSORIES: (EVERYTHING)
//
// if (FORECAST >= clear) {
//       if (sex === "F"){
//cat=womens-accessories&fl=b4089&fl=b30810&fts=
//         cat = "womens-accessories";
//         fl = "b4089&fl=b30810"
//       }
//     } else if (FORECAST = Rainning) {
//cat=womens-accessories&fts=umbrella
//         cat = "womens-accessories";
//         fts ="umbrella";
//       }
//     } else if (FORECAST = Snowing) {
// cat=womens-accessories&fl=b4089&fl=b30810
//       if (sex === "F"){
//         cat = "womens-accessories";
//         fts ="";
//         fl = "b4089&fl=b30810"
//       }
//     } else if (FORECAST > 60) {
//       if (sex === "F"){
//         cat = "day-dresses";
//         fts ="longsleeve";
//       }
//     } else if (FORECAST > 50) {
//       if (sex === "F"){
//         cat = "day-dresses";
//         fts ="winter dress";
//       }
//     } else {
//       if (sex === "F"){
//         cat = "day-dresses";
//         fts = "winter dress";
//       }
//     }

//========= Get weather data from user database ===========================//

 if (window.location.href==="http://localhost:3000/styles") {

    var userLocation = $("div #curLocation").text();
    var todayTemp;
    var sex = $("#gender").text().trim();

    var femaleBrand1 = ["b4493","b29798","b7478","b30810","b2333","b30","b4486","b822","b2363","b21236","b284","b31409","b18563","b728","b2683","b2446","b18530","b427"];
    var maleBrand1 = ["b284","b18530","b4486","b2446","b427","b29798","b462","b2329","b3471","b2363","b12953","b2683"];


    var getRandowmFTS = function(arr){
      console.log('arr:', arr);
      var index = Math.floor(Math.random() * arr.length);
      console.log('index:', index);
      return arr[index];
    };  
  
    if (sex === 'M'){
      fl = getRandowmFTS(maleBrand1);     
    } else {
      fl = getRandowmFTS(femaleBrand1);
    } 
  

  fl = "b2683";
  




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

    var dressfts = "", dresscat = "", counter = 0;

    if (sex === "F"){
      // var ranDress=['sleeveless dress', 'summer dress', 'yellow dress', 'pink dress'];
      if (todayTemp >= 90 ) {
        dresscat = "womens-clothes";
        // dressfts = "sleeveless dress";
        dressfts = getRandowmFTS(ranDress);
        console.log('dressfts:',dressfts);
      } else if (todayTemp > 80) {
        dresscat = "womens-clothes";
        dressfts = "summer dress";
      } else if (todayTemp > 70) {
        dresscat = "womens-clothes";
        dressfts ="spring dress";
      } else if (todayTemp > 60) {
        dresscat = "day-dresses";
        dressfts ="longsleeve";
      } else if (todayTemp > 50) {
        dresscat = "day-dresses";
        dressfts ="winter dress";
      } else {
        dresscat = "day-dresses";
        dressfts = "winter dress";
      }

     $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat=" + dresscat + "&fts=" + dressfts + "&fl=" + fl + "&offset=0&limit=30&sort=Popular", function(data) {
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
          $("#selectedBottom").html(""); //Also append to the ruby hidden field
          $("#selectedDress").append("<br><h3>Dress</h3><br>");
          $("#selectedDress").append(this);
          $("#saveStyle").show();
        });
      });
    }


    
    todayTemp = '65';
    console.log("fl:",fl, "-temp:",todayTemp);

    var topfts = "", topcat = "";
    if (todayTemp >= 90 ) {
      if (sex === "F"){
        topcat = "womens-clothes";
        topfts = "tank top";
      } else if (sex === "M"){
        topcat = "mens-shortsleeve-shirts";
        topfts = "short";
      }
    } else if (todayTemp > 80) {
      if (sex === "F"){
        topcat = "womens-clothes";
        topfts = "summer top";
      } else if (sex === "M"){
        if (fl === ("b284")  || fl === ("b427") ||  fl === ("b29798") ||  fl === ("b2683") || fl === ("b2363")){ 
          topfts = "";
          topcat = "mens-shortsleeve-shirts";
        } else {
          topfts = "short";
          topcat = "mens-tees-and-tshirts";
        }
      }
    } else if (todayTemp > 70) {
      if (sex === "F"){
        topcat = "womens-clothes";
        topfts = "spring top";
      } else if (sex === "M"){
        if (fl === "b427"){
          topcat = "mens-polo-shirts";
          topfts = "";
        } else {
          topcat = "mens-tees-and-tshirts";
          topfts = "";          
        }
      }
    } else if (todayTemp > 60) {
      if (sex === "F"){
        topcat = "longsleeve-tops";
        topfts ="";
      } else if (sex === "M"){
        topcat = "mens-longsleeve-shirts";
        topfts = "";
      }         
    } else if (todayTemp > 50) {
      if (sex === "F"){
        topcat = "cashmere-sweaters";
        topfts ="";
      } else if (sex === "M"){
        topcat = "mens-sweaters";
        topfts = "";
      }
    } else {
      if (sex === "F"){
        topcat = "womens-outerwear";
        topfts = "outerwear";
      } else if (sex === "M"){
        topcat = "mens-overcoats-and-trenchcoats";
        topfts = "";
      }
    }

    console.log("topcat:",topcat, "|topfts:",topfts, "|fl",fl );
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ topcat + "&fl=" + fl +"&fts=" + topfts + "&offset=0&limit=30", function(data) {   
    console.log("manTop:",data);
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
        // $("#selectedTop").append("<br><h3>Top</h3>");
        $("#selectedTop").append(this);
        $("#saveStyle").show();
      });
   });

    var bottomcat = "", bottomfts = "";
    if (todayTemp >= 90 ) {
      if (sex === "F"){
        bottomcat = "womens-clothes";
        bottomfts = "summer shorts";
      } else if (sex === "M"){
        bottomcat = "mens-shorts";
        if (fl==="b4486" || fl==="b2329"){
          bottomfts = "";
        }
      }
    } else if (todayTemp > 80) {
      if (sex === "F"){
        bottomcat = "womens-clothes";
        bottomfts = "summer shorts";
      } else if (sex === "M"){
        bottomcat = "mens-shorts";
        bottomfts = "";
      }
    } else if (todayTemp > 70) {
      if (sex === "F"){
        bottomcat = "womens-clothes";
        bottomfts ="spring pants";
      } else if (sex === "M"){
        if (fl==="b2446" || fl==="b427" || fl==="b29798" || fl === "b2329") {
          bottomcat = "mens-chinos-and-khakis";
          bottomfts = "";          
        } else {
          bottomcat = "mens-jeans";
          if (fl==="b3471" || fl === "b2363"){
            bottomfts="";
          } else {
            bottomfts = "classic";
          }
        }
      }
    } else if (todayTemp > 60) {
      if (sex === "F"){
        bottomcat = "jeans";
        bottomfts ="";
      } else if (sex === "M"){
        bottomcat = "mens-jeans";
        bottomfts = "classic";
      }
    } else if (todayTemp > 50) {
      if (sex === "F"){
        bottomcat = "classic-jeans";
        bottomfts ="";
      } else if (sex === "M"){
        bottomcat = "mens-jeans";
        bottomfts = "classic";
      }
    } else {
      if (sex === "F"){
        bottomcat = "classic-jeans";
        bottomfts = "";
      } else if (sex === "M"){
        bottomcat = "mens-jeans";
        bottomfts = "classic";
      }
    }
console.log('bottomcat:',bottomcat," bottomfts:",bottomfts," fl",fl);
   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ bottomcat +"&fts=" + bottomfts + "&fl=" + fl + "&offset=0&limit=30&sort=Popular", function(data) {
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
        // $("#selectedBottom").append("<h3>Bottom</h3>");
        $("#selectedBottom").append(this);
      });
    });

    var shoescat = "", shoesfts = "";
    if (todayTemp >= 90 ) {
      if (sex === "F"){
        shoescat = "womens-shoes";
        shoesfts = "summer shorts";
      } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "summer";
      }
    } else if (todayTemp > 80) {
      if (sex === "F"){
        shoescat = "womens-shoes";
        shoesfts = "summer shorts";
      } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "summer";
      }
    } else if (todayTemp > 70) {
      if (sex === "F"){
        shoescat = "womens-shoes";
        shoesfts ="spring pants";
      } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "classic";
      }
    } else if (todayTemp > 60) {
      if (sex === "F"){
        shoescat = "womens-shoes";
        shoesfts ="";
      } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "classic";
      }
    } else if (todayTemp > 50) {
      if (sex === "F"){
        shoescat = "womens-shoes";
        shoesfts ="";
      } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "classic";
      }
    } else {
      if (sex === "F"){
        shoescat = "womens-shoes";
        shoesfts = "";
      } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "classic";
      }
    }

    $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ shoescat +"&fts=" + shoesfts + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#shoes").text('');
      $("#shoes").append("<img src="+data.products[0].image.sizes.Large.url+">");
      $("#shoes").append("<img src="+data.products[1].image.sizes.Large.url+">");
      $("#shoes").append("<img src="+data.products[2].image.sizes.Large.url+">");
      $("#shoes").append("<img src="+data.products[3].image.sizes.Large.url+">");
      counter = 4;

      $("#shoes").on("click","img", function(e){
        var productIdx = data.products[counter];
        counter++;
        $("#shoes").append("<img src="+productIdx.image.sizes.Large.url+">");
        $("#selectedShoes").html("");
        // $("#selectedShoes").append("<h3>Shoes</h3>");
        $("#selectedShoes").append(this);
      });
    });

  var accessory1_cat = "", accessory1_fts = "";
  if (todayTemp >= 90 ) {
    if (sex === "F"){
      accessory1_cat = "womens-accessories";
      accessory1_fts = "summer shorts";
    } else if (sex === "M"){
      accessory1_cat = "mens-accessories";
      accessory1_fts = "summer";
    }
  } else if (todayTemp > 80) {
    if (sex === "F"){
      accessory1_cat = "womens-accessories";
      accessory1_fts = "summer shorts";
    } else if (sex === "M"){
      accessory1_cat = "mens-accessories";
      accessory1_fts = "summer";
    }
  } else if (todayTemp > 70) {
    if (sex === "F"){
      accessory1_cat = "womens-accessories";
      accessory1_fts ="spring pants";
    } else if (sex === "M"){
      accessory1_cat = "mens-accessories";
      accessory1_fts = "classic";
    }
  } else if (todayTemp > 60) {
    if (sex === "F"){
      accessory1_cat = "womens-accessories";
      accessory1_fts ="";
    } else if (sex === "M"){
      accessory1_cat = "mens-accessories";
      accessory1_fts = "classic";
    }
  } else if (todayTemp > 50) {
    if (sex === "F"){
      accessory1_cat = "womens-accessories";
      accessory1_fts ="";
    } else if (sex === "M"){
      accessory1_cat = "mens-accessories";
      accessory1_fts = "classic";
    }
  } else {
    if (sex === "F"){
      accessory1_cat = "womens-accessories";
      accessory1_fts = "";
    } else if (sex === "M"){
      accessory1_cat = "mens-accessories";
      accessory1_fts = "classic";
    }
  }

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ accessory1_cat +"&fts=" + accessory1_fts + "&offset=0&limit=30&sort=Popular", function(data) {
    $("#accessory1").text('');
    $("#accessory1").append("<img src="+data.products[0].image.sizes.Large.url+">");
    $("#accessory1").append("<img src="+data.products[1].image.sizes.Large.url+">");
    $("#accessory1").append("<img src="+data.products[2].image.sizes.Large.url+">");
    $("#accessory1").append("<img src="+data.products[3].image.sizes.Large.url+">");
    counter = 4;

    $("#accessory1").on("click","img", function(e){
      var productIdx = data.products[counter];
      counter++;
      $("#accessory1").append("<img src="+productIdx.image.sizes.Large.url+">");
      $("#selectedAccessory1").html("");
      $("#selectedAccessory1").append("<h3>Accessory</h3>");
      $("#selectedAccessory1").append(this);
    });
  });

  var accessory2_cat = "", accessory2_fts = "";
  if (todayTemp >= 90 ) {
    if (sex === "F"){
      accessory2_cat = "womens-accessories";
      accessory2_fts = "summer shorts";
    } else if (sex === "M"){
      accessory2_cat = "mens-accessories";
      accessory2_fts = "summer";
    }
  } else if (todayTemp > 80) {
    if (sex === "F"){
      accessory2_cat = "womens-accessories";
      accessory2_fts = "summer shorts";
    } else if (sex === "M"){
      accessory2_cat = "mens-accessories";
      accessory2_fts = "summer";
    }
  } else if (todayTemp > 70) {
    if (sex === "F"){
      accessory2_cat = "womens-accessories";
      accessory2_fts ="spring pants";
    } else if (sex === "M"){
      accessory2_cat = "mens-accessories";
      accessory2_fts = "classic";
    }
  } else if (todayTemp > 60) {
    if (sex === "F"){
      accessory2_cat = "jeans";
      accessory2_fts ="";
    } else if (sex === "M"){
      accessory2_cat = "mens-accessories";
      accessory2_fts = "classic";
    }
  } else if (todayTemp > 50) {
    if (sex === "F"){
      accessory2_cat = "classic-jeans";
      accessory2_fts ="";
    } else if (sex === "M"){
      accessory2_cat = "mens-accessories";
      accessory2_fts = "classic";
    }
  } else {
    if (sex === "F"){
      accessory2_cat = "classic-jeans";
      accessory2_fts = "";
    } else if (sex === "M"){
      accessory2_cat = "mens-accessories";
      accessory2_fts = "classic";
    }
  }

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ accessory2_cat +"&fts=" + accessory2_fts + "&offset=0&limit=30&sort=Popular", function(data) {
    $("#accessory2").text('');
    $("#accessory2").append("<img src="+data.products[0].image.sizes.Large.url+">");
    $("#accessory2").append("<img src="+data.products[1].image.sizes.Large.url+">");
    $("#accessory2").append("<img src="+data.products[2].image.sizes.Large.url+">");
    $("#accessory2").append("<img src="+data.products[3].image.sizes.Large.url+">");
    counter = 4;

    $("#accessory2").on("click","img", function(e){
      var productIdx = data.products[counter];
      counter++;
      $("#accessory2").append("<img src="+productIdx.image.sizes.Large.url+">");
      $("#selectedAccessory2").html("");
      $("#selectedAccessory2").append("<h3>Accessory</h3>");
      $("#selectedAccessory2").append(this);
    });
  });

//========ends

   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat="+cat, function(data) {
   //    $("#accessory2").append("<br>womens-umbrellas<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   // });

   }); //end of forecast api call


  }//window.location.href





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