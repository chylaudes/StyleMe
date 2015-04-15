var getShoeCondition = function(todayTemp, sex, shoescat, shoesfts, flshoe) { 
  if (todayTemp >= 90 ) { //done with 90
    if (sex === "F"){
      shoescat = "sandals";
      shoesfts = "flat";
      if (flshoe === "b15611"){ //if the brand is Mossimo
        shoescat = "sandals";
        shoesfts ="";
      }
    } else if (sex === "M"){
      shoescat = "mens-shoes";
      shoesfts = "sandals";
      if (flshoe === "b321"){ //if the brand is Mossimo
        shoescat = "men-shoes";
        shoesfts ="light";
      }
    }
  } else if (todayTemp > 80) {
    if (sex === "F"){
      shoescat = "sandals";
      shoesfts = "flat";
      if (flshoe === "b15611"){ //if the brand is Mossimo
        shoescat = "sandals";
        shoesfts ="";
      }
    } else if (sex === "M"){
        shoescat = "mens-shoes";
        shoesfts = "sandals";
      if (flshoe === "b321"){ //if the brand is Mossimo
        shoescat = "mens-shoes";
        shoesfts ="light";
      }
    }
  } else if (todayTemp > 70) {
    if (sex === "F"){
      shoescat = "flats";
      shoesfts = "";
      if (flshoe === "b2333"){ //if the brand is Mossimo
        shoescat = "flats";
        shoesfts ="everyday";
      }
    } else if (sex === "M"){
      shoescat = "mens-shoes";
      shoesfts = "sandals";
      if (flshoe === "b4486" || flshoe === "b4089"){ //if the brand is Mossimo
        shoescat = "mens-shoes";
        shoesfts ="boat";
      }
      if (flshoe === "b812"){ //Men's > 70 degree
        shoescat = "mens-shoes";
        shoesfts ="";
      }
      if (flshoe === "b321"){ //Men's > 70 degree
        shoescat = "mens-shoes";
        shoesfts ="light";
      }
    }
  } else if (todayTemp > 60) {
    if (sex === "F"){
      shoescat = "womens-shoes";
      shoesfts ="boot";
      if (flshoe === "b13293"){ //if the brand is Mossimo
        shoescat = "womens-shoes";
        shoesfts ="flat";
      }
      if(flshoe === "b3510"){
        shoescat = "womens-shoes";
        shoesfts = "ankle flat"; //DONE
      }
    } else if (sex === "M"){
      shoescat = "mens-shoes";
      shoesfts = "original";
      if (flshoe === "b4486"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="loafer";
      }
      if (flshoe === "b4089"){
        shoescat = "mens-shoes";
        shoesft = "work";
      }
      if (flshoe === "b812"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="";
      }
      if (flshoe === "b321"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="oxford";
      }
      if (flshoe === "b422"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="line";
      }
      if (flshoe === "b4089"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="";
      }
    }
  } else if (todayTemp > 50) { //snflsknf TEST
    if (sex === "F"){
      shoescat = "boots";
      shoesfts ="";
      if (flshoe === "b13293"){
        shoescat = "boots";
        shoesfts ="chunky";
      }
      if( flshoe === "b1077"){
        shoescat = "boots";
        shoesfts = "tall";
      }
    } else if (sex === "M"){
      shoescat = "mens-shoes";
      shoesfts = "work";
      if (flshoe === "b4486" || flshoe === "b321"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="oxford";
      }
      if (flshoe === "b812"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="london";
      }
      if (flshoe === "b422"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="line";
      }
      if (flshoe=== "b422"){
        shoescat = "mens-shoes";
        shoesfts ="original";
      }
    }
  } else {
    if (sex === "F"){
      shoescat = "boots";
      shoesfts ="";
      if (flshoe === "b13293"){
        shoescat = "boots";
        shoesfts ="chunky";
      }
      if( flshoe === "b1077"){
        shoescat = "boots";
        shoesfts = "tall";
      }
    } else if (sex === "M"){
       shoescat = "mens-shoes";
       shoesfts = "boots";
      if (flshoe === "b14"){
        shoescat = "mens-shoes";
        shoesft = "daily";
      }
      if (flshoe === "b812"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="clogs";
      }
      if (flshoe === "b422"){ //Men's 70 degree
        shoescat = "mens-shoes";
        shoesfts ="high";
      }
    }
  }
}; 