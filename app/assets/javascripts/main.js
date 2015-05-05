$(document).ready(function() {


// $('#myModal').on('shown.bs.modal', function () {
//     console.log("HAPPPY");
//     setTimeout(function(){
//     console.log("ALERT");
//   $('.alert').slideUp(5000);
//   }, 10000);


// });

//=================== GET CITY/STATE BY GOOGLE PLACE API =====================//
 // if ( (window.location.href==="http://localhost:3000/styles") || (window.location.href==="http://localhost:3000/users/sign_up") ) {
  var geocoder;
  function initialize() {
    var input = document.getElementById('user_location');
     var options = {
      types: ['(cities)']
     };
    var autocomplete = new google.maps.places.Autocomplete(input,options);
      geocoder = new google.maps.Geocoder();
    }
    google.maps.event.addDomListener(window, 'load', initialize);

  // }//end of location




}); //end of document.ready

