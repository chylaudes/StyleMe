$(document).ready(function () {
    setTimeout(function(){
      $('.alert').slideUp(500);
    }, 1000);

//========= Get weather data from user database ===========================//
//if (window.location.href==="https://localhost:3000/styles")
if ((window.location.href==="https://stylem.herokuapp.com/styles") || (window.location.href==="stylem.herokuapp.com/styles")) {

   var userLocation = $("div #curLocation").text();
   var todayTemp, curCondition;
   var sex = $("#gender").text().trim();

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

   $.getJSON("https://api.wunderground.com/api/014d16d943fa6477/geolookup/conditions/q/"+ $newState +"/"+ $userCity +".json", function(data) {
    $("div #curLocation").text('');
    $('#curTemp').text('');
    $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
    $('#curLocation').append("<strong>" + data.current_observation.display_location.full + "</strong>");
   });

   $.getJSON("https://api.wunderground.com/api/014d16d943fa6477/forecast/q/"+ $newState +"/"+ $userCity +".json", function(data) {
    $('#curCond').append(data.forecast.simpleforecast.forecastday[0].conditions);
    curCondition = data.forecast.simpleforecast.forecastday[0].conditions;
    $('#hiTemp').append(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + " &#8457;");
    todayTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    $('#loTemp').append(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + " &#8457;");
    var $weatherIcon = data.forecast.simpleforecast.forecastday[0].icon_url;
    $('#wIcon').append("<img src=" + $weatherIcon + ">");

    var dressfts = "", dresscat = "", counter = 0;

    if (sex === "F"){
      getDressCondition(todayTemp, sex, dressfts, dresscat, fl);
      dresscat = dressArry[0].dresscat;
      dressfts = dressArry[0].dressfts;
      var dressURL = "https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat=" + dresscat + "&fts=" + dressfts + "&fl=" + fl + "&offset=0&limit=30&sort=Popular";
     $.getJSON(dressURL, function(data) {
        $("#dress").text('');
        $("#dress").append("<span class='img-crop'><img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +"></span>");
        $("#dress").append("<span class='img-crop'><img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +"></span>");
        $("#dress").append("<span class='img-crop'><img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +"></span>");
        $("#dress").append("<span class='img-crop'><img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +"></span>");
        counter = 4;
        $("#dress").on("click","span", function(e){
          var productIdx = data.products[counter];
          counter++;
          $("#dress").append("<span class='img-crop'><img src="+productIdx.image.sizes.Large.url+"></span>");
          $(this).removeClass();
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

    var topcat = "", topfts = "";
    getTopCondition(todayTemp, sex, topcat, topfts, fl);
    topcat = topArry[0].topcat;
    topfts = topArry[0].topfts;

   $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ topcat + "&fl=" + fl +"&fts=" + topfts + "&offset=0&limit=30", function(data) {
      $("#top").text('');
      $("#top").append("<span class='img-crop'><img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +"></span>");
      $("#top").append("<span class='img-crop'><img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +"></span>");
      $("#top").append("<span class='img-crop'><img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +"></span>");
      $("#top").append("<span class='img-crop'><img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +"></span>");

      counter = 4;

      $("#top").on("click","span", function(e){
        var productIdx = data.products[counter];
        counter++;
        $("#top").append("<span class='img-crop'><img src="+productIdx.image.sizes.Large.url+" alt="+ productIdx.id +"></span>");
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
    getBottomCondition(todayTemp, sex, bottomcat, bottomfts, fl);
    bottomcat = bottomArry[0].bottomcat;
    bottomfts = bottomArry[0].bottomfts;

   $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ bottomcat +"&fts=" + bottomfts + "&fl=" + fl + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#bottom").text('');
      $("#bottom").append("<span class='img-crop'><img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +"></span>");
      $("#bottom").append("<span class='img-crop'><img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +"></span>");
      $("#bottom").append("<span class='img-crop'><img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +"></span>");
      $("#bottom").append("<span class='img-crop'><img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +"></span>");

      counter = 4;

      $("#bottom").on("click","img", function(e){
        var productIdx = data.products[counter];
        counter++;
        $("#selectedDress").html("");
        $("#selectedDress").hide();
        $("#selectedBottom").show();
        $("#bottom").append("<span class='img-crop'><img src="+productIdx.image.sizes.Large.url+"></span>");
        $("#selectedBottom").html("");
        // $("#selectedBottom").append("<h3>Bottom</h3>");
        $("#selectedBottom").show();
        $("#selectedBottom").append(this);
        $("#selectedBottom").children().addClass("topbottomsize");
      });
    });

    var shoescat = "", shoesfts = ""; //SHOES ALGORITHM
    getShoeCondition(todayTemp, sex, shoescat, shoesfts, flshoe);
    shoescat = shoeArry[0].shoescat;
    shoesfts = shoeArry[0].shoesfts;

    $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ shoescat +"&fts=" + shoesfts + "&fl=" + flshoe + "&offset=0&limit=30&sort=Popular", function(data) {
      $("#shoes").text('');
      $("#shoes").append("<span class='img-crop'><img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +"></span>");
      $("#shoes").append("<span class='img-crop'><img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +"></span>");
      $("#shoes").append("<span class='img-crop'><img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +"></span>");
      $("#shoes").append("<span class='img-crop'><img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +"></span>");
      counter = 4;

      $("#shoes").on("click","img", function(e){
        var productIdx = data.products[counter];
        counter++;
        $("#shoes").append("<span class='img-crop'><img src="+productIdx.image.sizes.Large.url+"></span>");
        $("#selectedShoes").html("");
        // $("#selectedShoes").append("<h3>Shoes</h3>");
        $("#selectedShoes").append(this);
        $("#selectedShoes").children().addClass("accshoesize");
      });
    });

  var accessory1_cat = "", accessory1_fts = "";
  curCondition = curCondition.trim();
  getAccessory1Condition(curCondition,sex,accessory1_cat,accessory1_fts);
  accessory1_cat = accessory1Arry[0].accessory1_cat;
  accessory1_fts = accessory1Arry[0].accessory1_fts;

   $.getJSON("https://api.shopstyle.com/api/v2/products?pid=uid2100-27524390-36&format=json&cat="+ accessory1_cat +"&fts=" + accessory1_fts + "&fl=" + accessory1_fl +  "&offset=0&limit=30&sort=Popular", function(data) {
    $("#accessory1").text('');
    $("#accessory1").append("<span class='img-crop'><img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +"></span>");
    $("#accessory1").append("<span class='img-crop'><img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +"></span>");
    $("#accessory1").append("<span class='img-crop'><img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +"></span>");
    $("#accessory1").append("<span class='img-crop'><img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +"></span>");
    counter = 4;

    $("#accessory1").on("click","img", function(e){
      var productIdx = data.products[counter];
      counter++;
      $("#accessory1").append("<span class='img-crop'><img src="+productIdx.image.sizes.Large.url+"></span>");
      $("#selectedAccessory1").html("");
      // $("#selectedAccessory1").append("<h3>Accessory</h3>");
      $("#selectedAccessory1").append(this);
      $("#selectedAccessory1").children().addClass("accshoesize1");

    });
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
    $("#accessory2").append("<span class='img-crop'><img src="+data.products[0].image.sizes.Large.url+" alt="+ data.products[0].id +">");
    $("#accessory2").append("<span class='img-crop'><img src="+data.products[1].image.sizes.Large.url+" alt="+ data.products[1].id +">");
    $("#accessory2").append("<span class='img-crop'><img src="+data.products[2].image.sizes.Large.url+" alt="+ data.products[2].id +">");
    $("#accessory2").append("<span class='img-crop'><img src="+data.products[3].image.sizes.Large.url+" alt="+ data.products[3].id +">");
    counter = 4;

    $("#accessory2").on("click","img", function(e){
      var productIdx = data.products[counter];
      counter++;
      $("#accessory2").append("<img src="+productIdx.image.sizes.Large.url+">");
      $("#selectedAccessory2").html("");
      // $("#selectedAccessory2").append("<h3>Accessory</h3>");
      $("#selectedAccessory2").append(this);
      $("#selectedAccessory2").children().addClass("accshoesize2");
    });
  });

//========ends


  //== ENV-DATA == //
      var location = $userCity;
      var weather_temp = todayTemp;
      var weather_state = $newState;

      //////////////////////////
      // Save Outfit
      //
      //////////////////////////

      $('#saveStyle').on('click', '.save_outfit',function (e) {
        e.preventDefault();
        var formURL = $("#saveStyle").attr("data-url");
        var user_id = $("#saveStyle").attr("data-userid");
        var date = $("#saveStyle").attr("data-date");

        //== DRESS == //
        var dressInfo = $("#selectedDress").html();
        var dresssrc = dressInfo.search("src");
        var dressalt = dressInfo.search("alt");
        var dressclass = dressInfo.search("class");
        var dress_id = dressInfo.substring(dressalt+5,dressclass-2);
        var dress_url = dressInfo.substring(dresssrc+5,dressalt-2);

        //== TOP == //
        var topInfo = $("#selectedTop").html();
        var topsrc = topInfo.search("src");
        var topalt = topInfo.search("alt");
        var topclass = topInfo.search("class");
        var top_id = topInfo.substring(topalt+5,topclass-2);
        var top_url = topInfo.substring(topsrc+5,topalt-2);

        //== Bottom == //
        var bottomInfo = $("#selectedBottom").html();
        var bottomsrc = bottomInfo.search("src");
        var bottomalt = bottomInfo.search("alt");
        var bottomclass = bottomInfo.search("class");
        var bottom_id = bottomInfo.substring(bottomalt+5,bottomclass-2);
        var bottom_url = bottomInfo.substring(bottomsrc+5,bottomalt-2);

        //== SHOE == //
        var shoeInfo = $("#selectedShoes").html();
        var shoesrc = shoeInfo.search("src");
        var shoealt = shoeInfo.search("alt");
        var shoeclass = shoeInfo.search("class");
        var shoe_id = shoeInfo.substring(shoealt+5,shoeclass-2);
        var shoe_url = shoeInfo.substring(shoesrc+5,shoealt-2);

        //== ACCESS 1 == //
        var access_1Info = $("#selectedAccessory1").html();
        var access_1src = access_1Info.search("src");
        var access_1alt = access_1Info.search("alt");
        var access_1class = access_1Info.search("class");
        var access_1_id = access_1Info.substring(access_1alt+5,access_1class-2);
        var access_1_url = access_1Info.substring(access_1src+5,access_1alt-2);

        //== ACCESS 2 == //
        var access_2Info = $("#selectedAccessory2").html();
        var access_2src = access_2Info.search("src");
        var access_2alt = access_2Info.search("alt");
        var access_2class = access_2Info.search("class");
        var access_2_id = access_2Info.substring(access_2alt+5,access_2class-2);
        var access_2_url = access_2Info.substring(access_2src+5,access_2alt-2);

        $.ajax({
          url : formURL,
          type: "POST",
          data : {outfits: {user_id:user_id, dress:dress_id,dress_url:dress_url, top: top_id,top_url: top_url, bottom:bottom_id,bottom_url:bottom_url, shoe:shoe_id,shoe_url:shoe_url,access_1:access_1_id,access_1_url:access_1_url,access_2:access_2_id,access_2_url:access_2_url},
                  env_data: {user_id:user_id,location:location, weather_temp:weather_temp, weather_state:weather_state, date: date}},
          success:function(data, textStatus, jqXHR) {
            $('.save_outfit').hide();
            $('.show_outfits').show();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              //if fails
          }
        });
      });
  //---------- end of save outfit --------------------------
   }); //end of forecast api call


  }//window.location.href
}); //end of document load
