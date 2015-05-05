$(document).ready(function () {
  $("showModal").on("click", function(){
    console.log("hello");
  });
  console.log("Modal");
  var dressId = $(".modalDress").attr("data-drssid");
  console.log("dressId",dressId);
  var topId = $(".modalTop").attr("data-topid");
  console.log("topId",topId);
  var bottomId = $(".modalBottom").attr("data-bottomid");
  var shoeId = $(".modalShoe").attr("data-shoeid");
  var access_1Id = $(".modalAccess1").attr("data-access_1id");
  console.log("access_1Id",access_1Id);
  var access_2Id = $(".modalAccess2").attr("data-access_2id");

  if (dressId !== undefined && dressId !== null) {
    console.log("thisxxxx",this);
    var modalDressURL = "http://api.shopstyle.com/api/v2/products/"+dressId+"?pid=uid2100-27524390-36";
    $.getJSON(modalDressURL, function(data) {
      $('.modalDress').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalDress').append("<p>"+data.brand.name+"</p>");
      $('.modalDress').append("<p>"+data.unbrandedName+"</p>");
    });
  }

  if (topId !== undefined && topId !== null) {
    // console.log("thisyyyy",this.parent().children());
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
