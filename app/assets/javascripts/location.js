$(document).ready(function () {

//======== Change location only ========================//

 // if (window.location.href==="http://localhost:3000/styles") {

   var todayTemp = $("#hiTemp").val();
   var sex = $("#gender").text().trim();
   var fts, cat, counter, curCondition;
   var userLocation;
    if (!userLocation){
      userLocation = 'San Francisco, CA';
    }

   $("#changeLoc").on("click", function(e){
      e.preventDefault();
      var $newCity = $("#user_location").val();

      var index, $newState, $userCity;
      console.log($newCity);
      if ($newCity.indexOf(',') != -1) {
        index = $newCity.indexOf(',');
        $userCity = $newCity.slice(0, index);
        $newState = $newCity.slice(index+1, index+4);
        $newState = $newState.trim();
      }
      if ($newState === null || $newState === undefined){
        $newState = "CA";
      }

     $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/geolookup/conditions/q/"+ $newState +"/"+ $userCity +".json", function(data) {
      $("div #curLocation").text('');
      $('#curTemp').text('');
      $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
      $('#curLocation').append("<strong>" + data.current_observation.display_location.full + "</strong>");
     });

     $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/forecast/q/"+ $newState +"/"+ $userCity +".json", function(data) {
      $('#curCond').text('');
      $('#hiTemp').text('');
      $('#loTemp').text('');
      $('#wIcon').text('');

      $('#curCond').append(data.forecast.simpleforecast.forecastday[0].conditions);
      curCondition = data.forecast.simpleforecast.forecastday[0].conditions;
      $('#hiTemp').append(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + " &#8457;");
      todayTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      $('#loTemp').append(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + " &#8457;");
      var $weatherIcon = data.forecast.simpleforecast.forecastday[0].icon_url;
      $('#wIcon').append("<img src=" + $weatherIcon + ">");

  var femaleBrand1 = ["b4493","b2333","b728","b284","b18563"];
  var maleBrand1 = ["b284","b2446","b29798","b462","b2329"];

  var femaleShoeBrand = ["b13293", "b2333", "b1077", "b3510", "b15611"];
  var maleShoeBrand = ["b321", "b812", "b4089", "b4486", "b14", "b422"];

     var femaleBagBrand = ["b316", "b2333", "b2139", "b1171", "b4089", "b2098", "b1890", "b379", "b391"];
   var maleWatchBrand = ["b2098", "b372", "b172", "b31043", "b2331", "b2380", "b5715", "b1242"];

   // var maleSunKeys = ["ray ban square", "ray ban original", "tom ford" ];

  var getRandomFTS = function(arr){
  var index = Math.floor(Math.random() * arr.length);
      return arr[index];
    };

    if (sex === 'M'){
      fl = getRandomFTS(maleBrand1);
      flshoe = getRandomFTS(maleShoeBrand);
      accessory1_fl = getRandomFTS(maleWatchBrand);

    } else {
      fl = getRandomFTS(femaleBrand1);
      flshoe = getRandomFTS(femaleShoeBrand);
      accessory1_fl = getRandomFTS(femaleBagBrand);

    }

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
        $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
        $("#dress").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
        $("#dress").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
        $("#dress").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
        counter = 4;
        // $("#dress").on("click","img", function(e){
        //   var productIdx = data.products[counter];
        //   counter++;
        //    console.log("productIdx", productIdx);
        //   $("#dress").append("<img src="+productIdx.image.sizes.Large.url+">");
        //   $("#selectedDress").html("");
        //   $("#selectedTop").html("");
        //   $("#selectedTop").hide();
        //   $("#selectedBottom").html(""); //Also append to the ruby hidden field
        //   $("#selectedDress").show();
        //   $("#selectedDress").append(this);
        //   $("#selectedDress").children().addClass("topbottomsize");
        //   $("#saveStyle").show();
        // });
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

      // $("#top").on("click","img", function(e){
      //   var productIdx = data.products[counter];
      //   counter++;
      //    console.log("productIdx", productIdx);
      //   $("#top").append("<img src="+productIdx.image.sizes.Large.url+" alt="+ productIdx.id +">");
      //   $("#selectedDress").html("");
      //   // $("#selectedDress").hide();
      //   $("#selectedTop").html("");

      //   // $("#selectedTop").append("<br><h3>Top</h3>");
      //   $("#selectedTop").show();
      //   $("#selectedTop").append(this);
      //   $("#selectedTop").children().addClass("topbottomsize");
      //   $("#saveStyle").show();
      // });
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
        if (fl === "b2446" || fl === "b29798" || fl==="b3471" || fl === "b2363" || fl === "b2329"){
            bottomfts = "";
          }
        if (fl ==="b462"){
        bottomcat = "mens-jeans";
        bottomfts = "slim";
        }
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
      console.log("bottomkeywords:", bottomfts, bottomcat, fl);
      $("#bottom").text('');
      $("#bottom").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
      $("#bottom").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
      $("#bottom").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
      $("#bottom").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");

      counter = 4;

      // $("#bottom").on("click","img", function(e){
      //   var productIdx = data.products[counter];
      //   counter++;
      //     console.log("productIdx", productIdx);
      //   $("#selectedDress").html("");
      //   $("#selectedDress").hide();
      //   $("#selectedBottom").show();
      //   $("#bottom").append("<img src="+productIdx.image.sizes.Large.url+">");
      //   $("#selectedBottom").html("");
      //   // $("#selectedBottom").append("<h3>Bottom</h3>");
      //   $("#selectedBottom").show();
      //   $("#selectedBottom").append(this);
      //   $("#selectedBottom").children().addClass("topbottomsize");

      //   // console.log("bottomInfo:",$("#selectedBottom").html());

      // });
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
        shoescat = "mens-shoes";
        shoesfts = "sandals";
        if (flshoe === "b321"){ //if the brand is Mossimo
          shoescat = "men-shoes";
          shoesfts ="light";
        }
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
          shoescat = "mens-shoes";
          shoesfts = "sandals";
        if (flshoe === "b321"){ //if the brand is Mossimo
          shoescat = "mens-shoes";
          shoesfts ="light";
        }
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
        shoescat = "mens-shoes";
        shoesfts = "sandals";
        if (flshoe === "b4486" || flshoe === "b4089"){ //if the brand is Mossimo
          shoescat = "mens-shoes";
          shoesfts ="boat";
        }
        if (flshoe === "b812"){ //Men's > 70 degree
          shoescat = "mens-shoes";
          shoesfts ="";
        }
        if (flshoe === "b321"){ //Men's > 70 degree
          shoescat = "mens-shoes";
          shoesfts ="light";
        }
      }
    } else if (todayTemp > 60) {
      if (sex === "F"){
        shoescat = "womens-shoes";
        shoesfts ="boot";
        if (flshoe === "b13293"){ //if the brand is Mossimo
          shoescat = "womens-shoes";
          shoesfts ="flat";
        }
        if(flshoe === "b3510"){
          shoescat = "womens-shoes";
          shoesfts = "ankle flat"; //DONE
        }
      } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "original";
        if (flshoe === "b4486"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="loafer";
        }
        if (flshoe === "b4089"){
          shoescat = "mens-shoes";
          shoesft = "work";
        }
        if (flshoe === "b812"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="";
        }
        if (flshoe === "b321"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="oxford";
        }
        if (flshoe === "b422"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="line";
        }
        if (flshoe === "b4089"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="";
        }
      }
    } else if (todayTemp > 50) { //snflsknf TEST
      if (sex === "F"){
        shoescat = "boots";
        shoesfts ="";
        if (flshoe === "b13293"){
          shoescat = "boots";
          shoesfts ="chunky";
        }
        if( flshoe === "b1077"){
          shoescat = "boots";
          shoesfts = "tall";
        }
      } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "work";
        if (flshoe === "b4486" || flshoe === "b321"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="oxford";
        }
        if (flshoe === "b812"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="london";
        }
        if (flshoe === "b422"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="line";
        }
        if (flshoe=== "b422"){
          shoescat = "mens-shoes";
          shoesfts ="original";
        }
      }
    } else {
      if (sex === "F"){
        shoescat = "boots";
        shoesfts ="";
        if (flshoe === "b13293"){
          shoescat = "boots";
          shoesfts ="chunky";
        }
        if( flshoe === "b1077"){
          shoescat = "boots";
          shoesfts = "tall";
        }
      } else if (sex === "M"){
         shoescat = "mens-shoes";
         shoesfts = "boots";
        if (flshoe === "b14"){
          shoescat = "mens-shoes";
          shoesft = "daily";
        }
        if (flshoe === "b812"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="clogs";
        }
        if (flshoe === "b422"){ //Men's 70 degree
          shoescat = "mens-shoes";
          shoesfts ="high";
        }
      }
    }

    $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ shoescat +"&fts=" + shoesfts + "&fl=" + flshoe + "&offset=0&limit=30&sort=Popular", function(data) {
      console.log("fsakdba:", shoescat, shoesfts, flshoe);
      console.log("todaytemp UNCHANGED", todayTemp);
      console.log("shoedata", data);
      $("#shoes").text('');
      $("#shoes").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
      $("#shoes").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
      $("#shoes").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
      $("#shoes").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
      counter = 4;

      // $("#shoes").on("click","img", function(e){
      //   var productIdx = data.products[counter];
      //   counter++;
      //    console.log("productIdx", productIdx);
      //   $("#shoes").append("<img src="+productIdx.image.sizes.Large.url+">");
      //   $("#selectedShoes").html("");
      //   // $("#selectedShoes").append("<h3>Shoes</h3>");
      //   $("#selectedShoes").append(this);
      //   $("#selectedShoes").children().addClass("accshoesize");
      // });
    });

  var accessory1_cat = "", accessory1_fts = "";
  curCondition = curCondition.trim();
  if (curCondition === "Clear"){
    if (sex === "F"){
      accessory1_cat = "shoulder-bags";
      accessory1_fts = "";
    } else if (sex === "M"){
      accessory1_cat = "mens-watches";
      accessory1_fts = "";
    }
  } else if (curCondition === "Light Rain" || curCondition === "Light Showers Rain" || curCondition === "Rain"){
    if (sex === "F"){
      accessory1_cat = "tote-bags";
      accessory1_fts = "";
    } else if (sex === "M"){
      accessory1_cat = "mens-watches";
      accessory1_fts = "";
    }
  } else if (curCondition === "Snow" || curCondition === "Light Snow" || curCondition === "Overcast"){
    if (sex === "F"){
      accessory1_cat = "tote-bags";
      accessory1_fts = "";
    } else if (sex === "M"){
      accessory1_cat = "mens-watches";
      accessory1_fts = "";
    }
  } else {
    if (sex === "F"){
      accessory1_cat = "satchels";
      accessory1_fts = "";
      if(accessory1_fl === "b2098"){
      accessory1_cat = "clutches";
      accessory1_fts = "";
      }
    } else if (sex === "M"){
      accessory1_cat = "mens-watches";
      accessory1_fts = "";
    }
  }

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ accessory1_cat +"&fts=" + accessory1_fts + "&fl=" + accessory1_fl +  "&offset=0&limit=30&sort=Popular", function(data) {
    $("#accessory1").text('');
    $("#accessory1").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
    $("#accessory1").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
    $("#accessory1").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
    $("#accessory1").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
    counter = 4;

    // $("#accessory1").on("click","img", function(e){
    //   var productIdx = data.products[counter];
    //   counter++;
    //   $("#accessory1").append("<img src="+productIdx.image.sizes.Large.url+">");
    //   $("#selectedAccessory1").html("");
    //   // $("#selectedAccessory1").append("<h3>Accessory</h3>");
    //   $("#selectedAccessory1").append(this);
    //   $("#selectedAccessory1").children().addClass("accshoesize1");

    // });
  });
  var maleHatKeys = ["urban outfitters snapback", "norse", "marc jacobs", "porter"];
  var maleSunKeys = ["ray ban square", "", "tom ford", "urban outfitters classic", "ray ban wayfarer"];
  var accessory2_cat = "", accessory2_fts = "";
  curCondition = curCondition.trim();
  if (curCondition === "Clear"){
    if (sex === "F"){
      accessory2_cat = "sunglasses";
      accessory2_fts = "asos";
    } else if (sex === "M"){
      accessory2_cat = "mens-sunglasses";
      accessory2_fts = getRandomFTS(maleSunKeys);
    }
  } else if (curCondition === "Light Rain" || curCondition === "Light Showers Rain" || curCondition === "Rain"){
    if (sex === "F"){
      accessory2_cat = "womens-umbrellas";
      accessory2_fts = "marc";
    } else if (sex === "M"){
      accessory2_cat = "mens-umbrellas";
      accessory2_fts = "totes";
    }
  } else if (curCondition === "Snow" || curCondition === "Light Snow" || curCondition === "Overcast"){
    if (sex === "F"){
      accessory2_cat = "scarves";
      accessory2_fts = "asos collection";
    } else if (sex === "M"){
      accessory2_cat = "mens-gloves-and-scarves";
      accessory2_fts = "barneys knit";
    }
  } else {
    if (sex === "F"){
      accessory2_cat = "hats";
      accessory2_fts = "urban outfitters";
    } else if (sex === "M"){
      accessory2_cat = "mens-hats";
      accessory2_fts = getRandomFTS(maleHatKeys);
    }
  }

   $.getJSON("http://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ accessory2_cat +"&fts=" + accessory2_fts + "&offset=0&limit=30&sort=Popular", function(data) {
    console.log("accessory2:", accessory2_cat, accessory2_fts, curCondition);
    $("#accessory2").text('');
    $("#accessory2").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
    $("#accessory2").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
    $("#accessory2").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
    $("#accessory2").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
    counter = 4;

    // $("#accessory2").on("click","img", function(e){
    //   var productIdx = data.products[counter];
    //   counter++;
    //    console.log("productIdx", productIdx);
    //   $("#accessory2").append("<img src="+productIdx.image.sizes.Large.url+">");
    //   $("#selectedAccessory2").html("");
    //   // $("#selectedAccessory2").append("<h3>Accessory</h3>");
    //   $("#selectedAccessory2").append(this);
    //   $("#selectedAccessory2").children().addClass("accshoesize2");
    // });
  });


   }); //end of ON CLICK
});//forecast api

  // } //end of window.location.href


});//end of document.ready