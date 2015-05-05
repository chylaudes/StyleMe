$(document).ready(function () {

  $(".showInfo").click(function(){

  var detailsDiv = $(this).prev();
  var dressId, topId, bottomId, shoeId, access_1Id, access_2Id;

  console.log("tail ", detailsDiv.find("#dressId").length);

  if (detailsDiv.find("#dressId").length !== 0)
   dressId= detailsDiv.find("#dressId").children("img")[0].alt;

 if (detailsDiv.find("#topId").length !== 0)
  topId = detailsDiv.find("#topId").children("img")[0].alt;

 if (detailsDiv.find("#bottomId").length !== 0)
  bottomId = detailsDiv.find("#bottomId").children("img")[0].alt;


  // var bottomId = detailsDiv.find("#bottomId").children("img")[0].alt;
 if (detailsDiv.find("#shoeId").length !== 0)
    shoeId = detailsDiv.find("#shoeId").children("img")[0].alt;

 if (detailsDiv.find("#access_1Id").length !== 0)
    access_1Id = detailsDiv.find("#access_1Id").children("img")[0].alt;

 if (detailsDiv.find("#access_2Id").length !== 0)
    access_2Id = detailsDiv.find("#access_2Id").children("img")[0].alt;


  if (dressId !== undefined && dressId !== null) {
    var modalDressURL = "http://api.shopstyle.com/api/v2/products/"+dressId+"?pid=uid2100-27524390-36";
    $.getJSON(modalDressURL, function(data) {
      $('.modalDress').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalDress').append("<p>"+data.brand.name+"</p>");
      $('.modalDress').append("<p>"+data.unbrandedName+"</p>");
    });
  }

  if (topId !== undefined && topId !== null) {
    var modalTopURL = "http://api.shopstyle.com/api/v2/products/"+topId+"?pid=uid2100-27524390-36";
    $.getJSON(modalTopURL, function(data) {
      $('.modalTop').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalTop').append("<p>"+data.brand.name+"</p>");
      $('.modalTop').append("<p>"+data.unbrandedName+"</p>");
    });
  }

  if (bottomId !== undefined && bottomId !== null) {
    var modalBottomURL = "http://api.shopstyle.com/api/v2/products/"+bottomId+"?pid=uid2100-27524390-36";
    $.getJSON(modalBottomURL, function(data) {
      $('.modalBottom').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalBottom').append("<p>"+data.brand.name+"</p>");
      $('.modalBottom').append("<p>"+data.unbrandedName+"</p>");
    });
  }

  if (shoeId !== undefined && shoeId !== null) {
    var modalShoeURL = "http://api.shopstyle.com/api/v2/products/"+shoeId+"?pid=uid2100-27524390-36";
    $.getJSON(modalShoeURL, function(data) {
      console.log("what is this?");
      console.log(data);
      $('.modalShoe').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalShoe').append("<p>"+data.brand.name+"</p>");
      $('.modalShoe').append("<p>"+data.unbrandedName+"</p>");
    });
  }
console.log('access_1Id',access_1Id);
  if (access_1Id !== undefined && access_1Id !== null) {

    var modalAccess1URL = "http://api.shopstyle.com/api/v2/products/"+access_1Id+"?pid=uid2100-27524390-36";
    $.getJSON(modalAccess1URL, function(data) {
      $('.modalAccess1').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalAccess1').append("<p>"+data.brand.name+"</p>");
      $('.modalAccess1').append("<p>"+data.unbrandedName+"</p>");
    });
  }

  if (access_2Id !== undefined && access_2Id !== null) {
    var modalAccess2URL = "http://api.shopstyle.com/api/v2/products/"+access_2Id+"?pid=uid2100-27524390-36";
    $.getJSON(modalAccess2URL, function(data) {
      $('.modalAccess2').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalAccess2').append("<p>"+data.brand.name+"</p>");
      $('.modalAccess2').append("<p>"+data.unbrandedName+"</p>");
    });
  }
   });

});
