$(document).ready(function() {
$('#myModal').on('shown.bs.modal', function () {

});
// $(".close").off('click').click(function(r){
//   r.preventDefault();
//   $(".modalTop").html("");
//   $(".modalDress").html("");
//   $(".modalBottom").html("");
//    $(".modalShoe").html("");
//   $(".modalAccess1").html("");
//   $(".modalAccess2").html("");
//   });

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

