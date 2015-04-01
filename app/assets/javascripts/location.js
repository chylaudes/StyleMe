$(document).ready(function () {

//======== Change location only ========================//

 if (window.location.href==="http://localhost:3000/styles") {
   
   var $newCity = $("#location").val();
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

     $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/geolookup/conditions/q/"+ $newState +"/"+ userLocation +".json", function(data) {
      $("div #curLocation").text('');
      $('#curTemp').text('');
      $('#curTemp').append(data.current_observation.temp_f + " &#8457;");
      $('#curLocation').append("<strong>" + data.current_observation.display_location.full + "</strong>");  
     });

     $.getJSON("http://api.wunderground.com/api/014d16d943fa6477/forecast/q/"+ $newState +"/"+ userLocation +".json", function(data) {
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
   });

  } //end of window.location.href

});//end of document.ready