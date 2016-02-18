$(document).ready(function () {

//======== Change location only ========================//

 // if (window.location.href==="https://localhost:3000/styles") {
   if ((window.location.href==="https://stylem.herokuapp.com/styles") || (window.location.href==="stylem.herokuapp.com/styles")) {

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

      if ($newCity.indexOf(',') != -1) {
        index = $newCity.indexOf(',');
        $userCity = $newCity.slice(0, index);
        $newState = $newCity.slice(index+1, index+4);
        $newState = $newState.trim();
      }
      if ($newState === null || $newState === undefined){
        $newState = "CA";
      }

     $.getJSON("https://api.wunderground.com/api/014d16d943fa6477/geolookup/conditions/q/"+ $newState +"/"+ $userCity +".json", function(data) {
      $("div #curLocation").text('');
      $('#curTemp').text('');
      $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
      $('#curLocation').append("<strong>" + data.current_observation.display_location.full + "</strong>");
     });

     $.getJSON("https://api.wunderground.com/api/014d16d943fa6477/forecast/q/"+ $newState +"/"+ $userCity +".json", function(data) {
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
      getDressCondition(todayTemp, sex, dressfts, dresscat, fl);
      dresscat = dressArry[0].dresscat;
      dressfts = dressArry[0].dressfts;

      var dressURL = "https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat=" + dresscat + "&fts=" + dressfts + "&fl=" + fl + "&offset=0&limit=30&sort=Popular";
     $.getJSON(dressURL, function(data) {
        $("#dress").text('');
        $("#dress").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
        $("#dress").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
        $("#dress").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
        $("#dress").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
        counter = 4;
      });
    }

    var topfts = "", topcat = "";
    getTopCondition(todayTemp, sex, topcat, topfts, fl);
    topcat = topArry[0].topcat;
    topfts = topArry[0].topfts;

   $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ topcat + "&fl=" + fl +"&fts=" + topfts + "&offset=0&limit=30", function(data) {
      $("#top").text('');
      $("#top").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
      $("#top").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
      $("#top").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
      $("#top").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
      counter = 4;
   });

    var bottomcat = "", bottomfts = "";
    getBottomCondition(todayTemp, sex, bottomcat, bottomfts, fl);
    bottomcat = bottomArry[0].bottomcat;
    bottomfts = bottomArry[0].bottomfts;

   $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ bottomcat +"&fts=" + bottomfts + "&fl=" + fl + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#bottom").text('');
      $("#bottom").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
      $("#bottom").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
      $("#bottom").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
      $("#bottom").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");

      counter = 4;
    });

  var shoescat = "", shoesfts = ""; //SHOES ALGORITHM
    getShoeCondition(todayTemp, sex, shoescat, shoesfts, flshoe);
    shoescat = shoeArry[0].shoescat;
    shoesfts = shoeArry[0].shoesfts;

    $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ shoescat +"&fts=" + shoesfts + "&fl=" + flshoe + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#shoes").text('');
      $("#shoes").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
      $("#shoes").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
      $("#shoes").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
      $("#shoes").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
      counter = 4;
    });

  var accessory1_cat = "", accessory1_fts = "";
  curCondition = curCondition.trim();
  getAccessory1Condition(curCondition,sex,accessory1_cat,accessory1_fts);
  accessory1_cat = accessory1Arry[0].accessory1_cat;
  accessory1_fts = accessory1Arry[0].accessory1_fts;

   $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ accessory1_cat +"&fts=" + accessory1_fts + "&fl=" + accessory1_fl +  "&offset=0&limit=30&sort=Popular", function(data) {
    $("#accessory1").text('');
    $("#accessory1").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
    $("#accessory1").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
    $("#accessory1").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
    $("#accessory1").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
    counter = 4;
  });
  var maleHatKeys = ["urban outfitters snapback", "norse", "marc jacobs", "porter"];
  var maleSunKeys = ["ray ban square", "", "tom ford", "urban outfitters classic", "ray ban wayfarer"];
  var accessory2_cat = "", accessory2_fts = "";
  curCondition = curCondition.trim();
  getAccessory2Condition(curCondition,sex,accessory2_cat,accessory2_fts);
  accessory2_cat = accessory2Arry[0].accessory2_cat;
  accessory2_fts = accessory2Arry[0].accessory2_fts;

   $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ accessory2_cat +"&fts=" + accessory2_fts + "&offset=0&limit=30&sort=Popular", function(data) {
    $("#accessory2").text('');
    $("#accessory2").append("<img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
    $("#accessory2").append("<img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
    $("#accessory2").append("<img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
    $("#accessory2").append("<img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
    counter = 4;
  });


   }); //end of ON CLICK
});//forecast api

 } //end of window.location.href

});//end of document.ready
