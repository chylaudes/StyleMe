$(document).ready(function () {

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
//      cat=womens-accessories&fl=b4089&fl=b30810&fts=
//         cat = "womens-accessories";
//         fl = "b4089&fl=b30810"
//       }
//     } else if (FORECAST = Raining) {
//      cat=womens-accessories&fts=umbrella
//         cat = "womens-accessories";
//         fts ="umbrella";
//       }
//     } else if (FORECAST = Snowing) {
//      cat=scarves&fl=b4486&fts=oversized
//       if (sex === "F"){
//         cat = "scarves";
//         fts ="oversized";
//         fl = "b4486&"
//       }
//        else {
//        if (sex === "F"){
//          cat=womens-accessories&fl=b4089&fl=b30810&fts=
//          cat = "womens-accessories";
//          fl = "b4089&fl=b30810"
//        }
//      }
//MEN ACCESSORIES: (WATCHES)
//MEN ACCESSORIES: (EVERYTHING)
// if (FORECAST >= clear) {
//       if (sex === "M){
//      cat=womens-accessories&fl=b4089&fl=b30810&fts=
//         cat = "womens-accessories";
//         fl = "b4089&fl=b30810"
//       }
//     } else if (FORECAST = Raining) {
//         if (sex === "M){
//      cat=womens-accessories&fts=umbrella
//         cat = "womens-accessories";
//         fts ="umbrella";
//       }
//     } else if (FORECAST = Snowing) {
//      cat=scarves&fl=b4486&fts=oversized
//       if (sex === "M){
//         cat = "scarves";
//         fts ="oversized";
//         fl = "b4486&"
//       }
//        else {
//        if (sex === "M){
//          cat=womens-accessories&fl=b4089&fl=b30810&fts=
//          cat = "womens-accessories";
//          fl = "b4089&fl=b30810"
//        }
//      }

//========= Get weather data from user database ===========================//

 if (window.location.href==="http://localhost:3000/styles") {

    var userLocation = $("div #curLocation").text();
    var todayTemp, curCondition;
    var sex = $("#gender").text().trim();

   var femaleBrand1 = ["b4493","b2333","b728","b284","b18563"];
   var maleBrand1 = ["b284","b2446","b29798","b462","b2329"];

   var femaleShoeBrand = ["b13293", "b2333", "b1077", "b3510", "b15611"];
   var maleShoeBrand = [];

    var getRandomFTS = function(arr){
      var index = Math.floor(Math.random() * arr.length);
      return arr[index];
    };

    if (sex === 'M'){
      fl = getRandomFTS(maleBrand1);
      flshoe = getRandomFTS(maleShoeBrand);
    } else {
      fl = getRandomFTS(femaleBrand1);
      flshoe = getRandomFTS(femaleShoeBrand);
    }

    if (!userLocation){
      userLocation = 'San Francisco,CA';
    }

     var index = userLocation.indexOf(',');
     var $userCity = userLocation.slice(0, index);

    $newState = userLocation.slice(index+1, index+4);
    $newState = $newState.replace(" ", "");

    if ($newState === null || $newState === undefined){
      $newState = "CA";
    }

   $.getJSON("http://api.wunderground.com/api/fa10126c4dd3470b/geolookup/conditions/q/"+ $newState +"/"+ $userCity +".json", function(data) {
    $("div #curLocation").text('');
    $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
    $('#curLocation').append("<strong>" + data.current_observation.display_location.full + "</strong>");

   });

   $.getJSON("http://api.wunderground.com/api/fa10126c4dd3470b/forecast/q/"+ $newState +"/"+ $userCity +".json", function(data) {
    $('#curCond').append(data.forecast.simpleforecast.forecastday[0].conditions);
    curCondition = data.forecast.simpleforecast.forecastday[0].conditions;
    $('#hiTemp').append(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + " &#8457;");
    todayTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    $('#loTemp').append(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + " &#8457;");
    var $weatherIcon = data.forecast.simpleforecast.forecastday[0].icon_url;
    $('#wIcon').append("<img src=" + $weatherIcon + ">");

    var dressfts = "", dresscat = "", counter = 0;

    if (sex === "F"){
      if (todayTemp >= 90 ) {
         if (fl === "b728") {
          dresscat = "day-dresses";
          dressfts = "";
        } else {
          dresscat = "dresses";
          dressfts = "sleeveless";
        }
      } else if (todayTemp > 80) {
        dresscat = "dresses";
        dressfts = "summer dress";
        if (fl === "b4493") {
          dresscat = "day-dresses";
          dressfts = "short sleeve";
        }
        if (fl === "b2363" || fl === "b21236" || fl === "b31409" || fl === "b728" || fl === "b18563") {
          dresscat = "day-dresses";
          dressfts = "";
        }
      } else if (todayTemp > 70) {
        dresscat = "dresses";
        dressfts ="spring dress";
        if (fl === "b4493" || fl === "b728") {
          dresscat = "day-dresses";
          dressfts ="";
        }
        if (fl === "b2333") {
          dresscat = "day-dresses";
          dressfts ="long sleeve";
        }
        if (fl === "b4486") {
          dresscat = "day-dresses";
          dressfts ="light";
        }
        if (fl === "b284" || fl === "b18563") {
          dresscat = "dresses";
          dressfts ="";
        }
      } else if (todayTemp > 60) {
        dresscat = "day-dresses";
        dressfts ="longsleeve";
        if (fl === "b4493" || fl === "b2333") {
          dresscat = "dresses";
          dressfts ="long sleeve";
        }
        if (fl === "b728") {
          dresscat = "dresses";
          dressfts ="fall";
        }
        if (fl === "b284" || fl === "b18563") {
          dresscat = "evening-dresses";
          dressfts ="";
        }
      } else if (todayTemp > 50) {
        dresscat = "day-dresses";
        dressfts ="winter dress";
        if (fl === "b4493"){
          dresscat = "dresses";
          dressfts ="knit";
        }
        if (fl === "b2333"){
          dresscat = "dresses";
          dressfts ="long sleeve";
        }
          if (fl === "b728") {
          dresscat = "dresses";
          dressfts ="fall";
        }
          if (fl === "b284") {
          dresscat = "dresses";
          dressfts ="";
        }
        if (fl === "b18563") {
          dresscat = "evening-dresses";
          dressfts ="";
        }
      } else {
        dresscat = "day-dresses";
        dressfts = "winter dress";
        if (fl === "b4493" || fl === "b284") {
          dresscat = "fur-and-shearling-coats";
          dressfts ="";
        }
        if (fl === "b2333") {
          dresscat = "wool-coats";
          dressfts ="";
        }
        if (fl === "b728" || fl === "b18563") {
          dresscat = "jackets";
          dressfts ="";
        }
      }
      var dressURL = "http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat=" + dresscat + "&fts=" + dressfts + "&fl=" + fl + "&offset=0&limit=30&sort=Popular";
     $.getJSON(dressURL, function(data) {
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
          $("#selectedTop").hide();
          $("#selectedBottom").html(""); //Also append to the ruby hidden field
          $("#selectedDress").show();
          $("#selectedDress").append(this);
          $("#selectedDress").children().addClass("topbottomsize");
          $("#saveStyle").show();
        });
      });
    }

    var topfts = "", topcat = "";
    if (todayTemp >= 90 ) {
      if (sex === "F"){
        if (fl === "b4493"){
          topcat = "halter-tops";
          topfts = "";
        } else if (fl === "b284" || fl === "b31409"){
          topcat = "shortsleeve-tops";
          topfts = "";
        } else {
          topcat = "womens-clothes";
          topfts = "tank top";
        }
      } else if (sex === "M"){
        topcat = "mens-shortsleeve-shirts";
        topfts = "short";
      }
    } else if (todayTemp > 80) {
      if (sex === "F"){
        topcat = "womens-clothes";
        topfts = "summer top";
        if (fl === "b4493" || fl === "b4486" || fl === "b2363" || fl === "b21236" || fl === "b31409" || fl === "b728" || fl === "b2446"){
          topcat = "shortsleeve-tops";
          topfts = "";
        }
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
        if (fl === "b4493" || fl === "b728" || fl === "b284") {
          topcat = "tees-and-tshirts";
          topfts = "";
        }
        if (fl === "b2333") {
          topcat = "womens-tops";
          topfts = "light";
        }
        if (fl === "b4486") {
          topcat = "womens-tops";
          topfts = "";
        }
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
        if (fl === "b4493" || fl === "b18563"){
          topcat = "sweatshirts";
        }
        if (fl === "b2333") {
          topcat = "turleneck-sweaters";
        }
        if (fl === "b728" || fl === "b284") {
          topcat = "cardigan-sweaters";
        }
      } else if (sex === "M"){
        topcat = "mens-sweaters";
        topfts = "";
      }
    } else {
      if (sex === "F"){
        topcat = "womens-outerwear";
        topfts = "outerwear";
        if (fl === "b18563") {
          topcat = "cardigan-sweaters";
          topfts = "";
        }
        if (fl === "b284") {
          topcat = "turleneck-sweaters";
          topfts = "";
        }
        if (fl === "b18563") {
          topcat = "sweaters";
          topfts = "";
        }
      } else if (sex === "M"){
        if (fl==="b2683" || fl === "b3471" || fl === "b2329" || fl === "b2446") {
          topcat = "mens-jackets";
        } else if (fl === "b462" || fl==="b284"){
          topcat = "mens-wool-coats";
        } else if (fl === "b29798") {
          topcat = "mens-outerwear";
        } else {
          topcat = "mens-overcoats-and-trenchcoats";
        }
        topfts = "";
      }
    }

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ topcat + "&fl=" + fl +"&fts=" + topfts + "&offset=0&limit=30", function(data) {
      $("#top").text('');
      $("#top").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
      $("#top").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
      $("#top").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
      $("#top").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");


      counter = 4;

      $("#top").on("click","img", function(e){
        var productIdx = data.products[counter];

        counter++;
        $("#top").append("<img src="+productIdx.image.sizes.Large.url+" alt="+ productIdx.id +">");
        $("#selectedDress").html("");
        // $("#selectedDress").hide();
        $("#selectedTop").html("");

        // $("#selectedTop").append("<br><h3>Top</h3>");
        $("#selectedTop").show();
        $("#selectedTop").append(this);
        $("#selectedTop").children().addClass("topbottomsize");
        $("#saveStyle").show();
      });
   });

    var bottomcat = "", bottomfts = "";
    if (todayTemp >= 90 ) {
      if (sex === "F"){
          bottomcat = "shorts";
          bottomfts = "";
        if (fl==="b4486"){
          bottomcat = "mini-skirts";
        }
      } else if (sex === "M"){
        bottomcat = "mens-shorts";
        if (fl==="b4486" || fl==="b2329"){
          bottomfts = "";
        }
      }
    } else if (todayTemp > 80) {
      if (sex === "F") {
        bottomcat = "womens-clothes";
        bottomfts = "summer shorts";
        if (fl === "b4493" || fl === "b728"){
          bottomcat = "mid-length-skirts";
          bottomfts = "";
        }
        if (fl === "b2333" || fl === "b4486"){
          bottomcat = "mini-skirts";
          bottomfts = "";
        }
        if (fl === "b2363" || fl === "b31409"){
          bottomcat = "shorts";
          bottomfts = "";
        }
        if (fl === "b21236"){
          bottomcat = "shorts";
          bottomfts = "summer";
        }
      } else if (sex === "M"){
        bottomcat = "mens-shorts";
        bottomfts = "";
      }
    } else if (todayTemp > 70) {
      if (sex === "F"){
        bottomcat = "womens-clothes";
        bottomfts ="spring pants";
        if (fl === "b4493" || fl === "b2333" || fl === "b728") {
          bottomcat = "cropped-pants";
          bottomfts ="";
        }
        if (fl === "b284") {
          bottomcat = "mid-length-skirts";
          bottomfts ="";
        }
        if (fl === "b18563") {
          bottomcat = "womens-pants";
          bottomfts ="";
        }
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
        if (fl === "b4493" || fl === "b728" || fl === "b18563"){
          bottomcat = "straight-leg-jeans";
        }
      } else if (sex === "M"){
        if (fl === "b2329"){
          bottomcat = "mens-casual-pants";
          bottomfts="";
        } else {
          bottomcat = "mens-jeans";
          if (fl === "b2446" || fl === "b29798" || fl==="b3471" || fl === "b2363"){
            bottomfts = "";
          } else {
            bottomfts = "classic";
          }
        }
      }
    } else {
      if (sex === "F"){
        bottomcat = "classic-jeans";
        bottomfts = "";
        if (fl === "b4493" || fl === "b728" || fl === "b18563"){
          bottomcat = "straight-leg-jeans";
        }
      } else if (sex === "M"){
        if (fl === "b2329"){
          bottomcat = "mens-casual-pants";
          bottomfts="";
        } else {

        bottomcat = "mens-jeans";
        bottomfts = "";
        }
      }
    }

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ bottomcat +"&fts=" + bottomfts + "&fl=" + fl + "&offset=0&limit=30&sort=Popular", function(data) {
      console.log("bottomdata:", data);
      $("#bottom").text('');
      $("#bottom").append("<img src="+data.products[0].image.sizes.Large.url+">");
      $("#bottom").append("<img src="+data.products[1].image.sizes.Large.url+">");
      $("#bottom").append("<img src="+data.products[2].image.sizes.Large.url+">");
      $("#bottom").append("<img src="+data.products[3].image.sizes.Large.url+">");
      counter = 4;

      $("#bottom").on("click","img", function(e){
        var productIdx = data.products[counter];
        counter++;
        $("#selectedDress").html("");
        $("#selectedDress").hide();
        $("#selectedBottom").show();

    console.log(productIdx.image.sizes.Large.url);
        $("#bottom").append("<img src="+productIdx.image.sizes.Large.url+">");
        $("#selectedBottom").html("");
        // $("#selectedBottom").append("<h3>Bottom</h3>");
        $("#selectedBottom").show();
        $("#selectedBottom").append(this);
        $("#selectedBottom").children().addClass("topbottomsize");
      });
    });


    var shoescat = "", shoesfts = ""; //SHOES ALGORITHM

    if (todayTemp >= 90 ) { //done with 90
      if (sex === "F"){
        shoescat = "sandals";
        shoesfts = "flat";
        if (flshoe === "b15611"){ //if the brand is Mossimo
          shoescat = "sandals";
          shoesfts ="";
        }

      } else if (sex === "M"){
        shoescat = "mens-sandals";
        shoesfts = "";
      }
    } else if (todayTemp > 80) {
      if (sex === "F"){
        shoescat = "sandals";
        shoesfts = "flat";
        if (flshoe === "b15611"){ //if the brand is Mossimo
          shoescat = "sandals";
          shoesfts ="";
        }
      } else if (sex === "M"){
        shoescat = "mens-sandals";
        shoesfts = "";
      }
    } else if (todayTemp > 70) {
      if (sex === "F"){
        shoescat = "flats";
        shoesfts = "";
        if (flshoe === "b2333"){ //if the brand is Mossimo
          shoescat = "flats";
          shoesfts ="everyday";
        }
      } else if (sex === "M"){
        shoescat = "mens-slip-ons-shoes";
        shoesfts = "";
      }
    } else if (todayTemp > 60) {
      if (sex === "F"){
        shoescat = "womens-shoes";
        shoesfts ="boot";
        if (flshoe === "b13293"){ //if the brand is Mossimo
          shoescat = "womens-shoes";
          shoesfts ="flat";
        }
        else if( flshoe === "b3510"){
          shoescat = "womens-shoes";
          shoesfts = "ankle flat"; //DONE
        }
      } else if (sex === "M"){
        shoescat = "mens-slip-ons-shoes";
        shoesfts = "";
      }
    } else if (todayTemp > 50) {
      if (sex === "F"){
        shoescat = "boots";
        shoesfts ="";
        if (flshoe === "b13293"){
          shoescat = "boots";
          shoesfts ="chunky";
        }
        else if( flshoe === "b1077"){
          shoescat = "boots";
          shoesfts = "tall";
        }
      } else if (sex === "M"){
        shoescat = "mens-boots";
        shoesfts = "kenneth cole";
      }
    } else {
      if (sex === "F"){
        shoescat = "boots";
        shoesfts ="";
        if (flshoe === "b13293"){
          shoescat = "boots";
          shoesfts ="chunky";
        }
        else if( flshoe === "b1077"){
          shoescat = "boots";
          shoesfts = "tall";
        }
      } else if (sex === "M"){
        shoescat = "mens-boots";
        shoesfts = "kenneth cole";
      }
    }

    $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ shoescat +"&fts=" + shoesfts + "&fl=" + flshoe + "&offset=0&limit=10&sort=Popular", function(data) {
      console.log(data);
      console.log("todaytemp UNCHANGED", todayTemp);
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
  // if (todayTemp >= 90 ) {
  //   if (sex === "F"){
  //     accessory1_cat = "womens-accessories";
  //     accessory1_fts = "";
  //   } else if (sex === "M"){
  //     accessory1_cat = "mens-accessories";
  //     accessory1_fts = "summer";
  //   }
  // } else if (todayTemp > 80) {
  //   if (sex === "F"){
  //     accessory1_cat = "womens-accessories";
  //     accessory1_fts = "summer shorts";
  //   } else if (sex === "M"){
  //     accessory1_cat = "mens-accessories";
  //     accessory1_fts = "summer";
  //   }
  // } else if (todayTemp > 70) {
  //   if (sex === "F"){
  //     accessory1_cat = "womens-accessories";
  //     accessory1_fts ="spring pants";
  //   } else if (sex === "M"){
  //     accessory1_cat = "mens-accessories";
  //     accessory1_fts = "classic";
  //   }
  // } else if (todayTemp > 60) {
  //   if (sex === "F"){
  //     accessory1_cat = "womens-accessories";
  //     accessory1_fts ="";
  //   } else if (sex === "M"){
  //     accessory1_cat = "mens-accessories";
  //     accessory1_fts = "classic";
  //   }
  // } else if (todayTemp > 50) {
  //   if (sex === "F"){
  //     accessory1_cat = "womens-accessories";
  //     accessory1_fts ="";
  //   } else if (sex === "M"){
  //     accessory1_cat = "mens-accessories";
  //     accessory1_fts = "classic";
  //   }
  // } else {
  //   if (sex === "F"){
  //     accessory1_cat = "womens-accessories";
  //     accessory1_fts = "";
  //   } else if (sex === "M"){
  //     accessory1_cat = "mens-accessories";
  //     accessory1_fts = "classic";
  //   }
  // }
    if (sex === "F"){
      accessory1_cat = "womens-accessories";
      accessory1_fts = "";
    } else if (sex === "M"){
      accessory1_cat = "mens-accessories";
      accessory1_fts = "";
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
      // $("#selectedAccessory1").append("<h3>Accessory</h3>");
      $("#selectedAccessory1").append(this);
    });
  });

  var accessory2_cat = "", accessory2_fts = "";
  curCondition = curCondition.trim();
  if (curCondition === "Clear"){
    if (sex === "F"){
      accessory2_cat = "sunglasses";
      accessory2_fts = "";
    } else if (sex === "M"){
      accessory2_cat = "mens-sunglasses";
      accessory2_fts = "";
    }
  } else if (curCondition === "Light Rain" || curCondition === "Light Showers Rain" || curCondition === "Rain"){
    if (sex === "F"){
      accessory2_cat = "womens-umbrellas";
      accessory2_fts = "";
    } else if (sex === "M"){
      accessory2_cat = "mens-umbrellas";
      accessory2_fts = "";
    }
  } else if (curCondition === "Snow" || curCondition === "Light Snow"){
    if (sex === "F"){
      accessory2_cat = "scarves";
      accessory2_fts = "";
    } else if (sex === "M"){
      accessory2_cat = "mens-gloves-and-scarves";
      accessory2_fts = "";
    }
  } else {
    if (sex === "F"){
      accessory2_cat = "womens-tech-accessories";
      accessory2_fts = "";
    } else if (sex === "M"){
      accessory2_cat = "mens-tech-accessories";
      accessory2_fts = "";
    }
  }



  // if (todayTemp >= 90 ) {
  //   if (sex === "F"){
  //     accessory2_cat = "womens-accessories";
  //     accessory2_fts = "summer shorts";
  //   } else if (sex === "M"){
  //     accessory2_cat = "mens-accessories";
  //     accessory2_fts = "summer";
  //   }
  // } else if (todayTemp > 80) {
  //   if (sex === "F"){
  //     accessory2_cat = "womens-accessories";
  //     accessory2_fts = "summer shorts";
  //   } else if (sex === "M"){
  //     accessory2_cat = "mens-accessories";
  //     accessory2_fts = "summer";
  //   }
  // } else if (todayTemp > 70) {
  //   if (sex === "F"){
  //     accessory2_cat = "womens-accessories";
  //     accessory2_fts ="spring pants";
  //   } else if (sex === "M"){
  //     accessory2_cat = "mens-accessories";
  //     accessory2_fts = "classic";
  //   }
  // } else if (todayTemp > 60) {
  //   if (sex === "F"){
  //     accessory2_cat = "jeans";
  //     accessory2_fts ="";
  //   } else if (sex === "M"){
  //     accessory2_cat = "mens-accessories";
  //     accessory2_fts = "classic";
  //   }
  // } else if (todayTemp > 50) {
  //   if (sex === "F"){
  //     accessory2_cat = "classic-jeans";
  //     accessory2_fts ="";
  //   } else if (sex === "M"){
  //     accessory2_cat = "mens-accessories";
  //     accessory2_fts = "classic";
  //   }
  // } else {
  //   if (sex === "F"){
  //     accessory2_cat = "classic-jeans";
  //     accessory2_fts = "";
  //   } else if (sex === "M"){
  //     accessory2_cat = "mens-accessories";
  //     accessory2_fts = "classic";
  //   }
  // }

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
      // $("#selectedAccessory2").append("<h3>Accessory</h3>");
      $("#selectedAccessory2").append(this);
    });
  });

//========ends

   // $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&offset=0&limit=3&cat="+cat, function(data) {
   //    $("#accessory2").append("<br>womens-umbrellas<br><img src="+data.products[0].image.sizes.Large.url+"><img src="+data.products[1].image.sizes.Large.url+"><img src="+data.products[2].image.sizes.Large.url+">");
   // });


  // $(".save_outfit").on("click", function(e){
  $(".save_outfit").submit(function(e) {
    e.preventDefault();
    var formURL = $(this).attr("action");
    console.log('formURL:',formURL);
//== TOP == //
    var topInfo = $("#selectedTop").html();
    var x = topInfo.search("src");
    var y = topInfo.search("alt");
    var z = topInfo.search("class");
    var topsrc = topInfo.substring(x+5,y-2);
    var topalt = topInfo.substring(y+5,z-2);



//----------------------------------

    $.ajax({
      url : formURL,
      type: "POST",
      data : {top_url: topsrc, top: topalt},
      success:function(data, textStatus, jqXHR) {
        console.log("data submitted!");
      },
      error: function(jqXHR, textStatus, errorThrown) {
          //if fails
      }
    });

//------------------------------------


  });



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