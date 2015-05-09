var getDressCondition = function(todayTemp, sex, dressfts, dresscat, fl){
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

  dressArry = [{dresscat:dresscat, dressfts:dressfts}];
  return dressArry;     
};