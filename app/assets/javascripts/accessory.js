var getRandomFTS = function(arr){
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};
var maleHatKeys = ["urban outfitters snapback", "norse", "marc jacobs", "porter"];

var getAccessory1Condition = function(curCondition,sex,accessory1_cat,accessory1_fts) {
  // curCondition = curCondition.trim();
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

  accessory1Arry = [{accessory1_cat:accessory1_cat, accessory1_fts:accessory1_fts}];
  return accessory1Arry;
};

//---- Accessory2 -------//
var getAccessory2Condition = function(curCondition,sex,accessory2_cat,accessory2_fts) {
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

  accessory2Arry = [{accessory2_cat:accessory2_cat, accessory2_fts:accessory2_fts}];
  return accessory2Arry;
};