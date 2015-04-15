$(document).ready(function () {
  
  var dressId = $(".modalDress").attr("data-drssid");
  var topId = $(".modalTop").attr("data-topid");
  var bottomId = $(".modalBottom").attr("data-bottomid");
  var shoeId = $(".modalShoe").attr("data-shoeid");
  var access_1Id = $(".modalAccess1").attr("data-access_1id");
  var access_2Id = $(".modalAccess2").attr("data-access_2id");


  if (dressId !== undefined && dressId !== null) {
    var modalDressURL = "http://api.shopstyle.com/api/v2/products/"+dressId+"?pid=uid2100-27524390-36";
    $.getJSON(modalDressURL, function(data) {
      $('.modalDress').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalDress').append(data.brand.name+"<br>");
      $('.modalDress').append(data.unbrandedName+"<br><br>");      
    });
  }

  if (topId !== undefined && topId !== null) {
    var modalTopURL = "http://api.shopstyle.com/api/v2/products/"+topId+"?pid=uid2100-27524390-36";
    $.getJSON(modalTopURL, function(data) {
      $('.modalTop').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalTop').append(data.brand.name+"<br>");
      $('.modalTop').append(data.unbrandedName+"<br><br>");
    });    
  }

  if (bottomId !== undefined && bottomId !== null) {
    var modalBottomURL = "http://api.shopstyle.com/api/v2/products/"+bottomId+"?pid=uid2100-27524390-36";
    $.getJSON(modalBottomURL, function(data) {
      $('.modalBottom').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalBottom').append(data.brand.name+"<br>");
      $('.modalBottom').append(data.unbrandedName+"<br><br>");        
    });    
  }

  if (shoeId !== undefined && shoeId !== null) {
    var modalShoeURL = "http://api.shopstyle.com/api/v2/products/"+shoeId+"?pid=uid2100-27524390-36";
    $.getJSON(modalShoeURL, function(data) {
      $('.modalShoe').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalShoe').append(data.brand.name+"<br>");
      $('.modalShoe').append(data.unbrandedName+"<br><br>");  
    });    
  }
console.log('access_1Id',access_1Id);
  if (access_1Id !== undefined && access_1Id !== null) {

    var modalAccess1URL = "http://api.shopstyle.com/api/v2/products/"+access_1Id+"?pid=uid2100-27524390-36";
    $.getJSON(modalAccess1URL, function(data) {
      $('.modalAccess1').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalAccess1').append(data.brand.name+"<br>");
      $('.modalAccess1').append(data.unbrandedName+"<br><br>");  
    });    
  }

  if (access_2Id !== undefined && access_2Id !== null) {
    var modalAccess2URL = "http://api.shopstyle.com/api/v2/products/"+access_2Id+"?pid=uid2100-27524390-36";
    $.getJSON(modalAccess2URL, function(data) {
      $('.modalAccess2').append("<img src="+data.image.sizes.Large.url+"><br>");
      $('.modalAccess2').append(data.brand.name+"<br>");
      $('.modalAccess2').append(data.unbrandedName+"<br><br>");  
    });    
  }

});

