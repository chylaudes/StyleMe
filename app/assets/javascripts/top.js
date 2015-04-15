// var getTopCondition = function(todayTemp, sex){
//   if (todayTemp >= 90 ) {
//     if (sex === "F"){
//       if (fl === "b4493"){
//         topcat = "halter-tops";
//         topfts = "";
//       } else if (fl === "b284" || fl === "b31409"){
//         topcat = "shortsleeve-tops";
//         topfts = "";
//       } else {
//         topcat = "womens-clothes";
//         topfts = "tank top";
//       }
//     } else if (sex === "M"){
//       topcat = "mens-shortsleeve-shirts";
//       topfts = "short";
//     }
//   } else if (todayTemp > 80) {
//     if (sex === "F"){
//       topcat = "womens-clothes";
//       topfts = "summer top";
//       if (fl === "b4493" || fl === "b4486" || fl === "b2363" || fl === "b21236" || fl === "b31409" || fl === "b728" || fl === "b2446"){
//         topcat = "shortsleeve-tops";
//         topfts = "";
//       }
//     } else if (sex === "M"){
//       if (fl === ("b284")  || fl === ("b427") ||  fl === ("b29798") ||  fl === ("b2683") || fl === ("b2363")){
//         topfts = "";
//         topcat = "mens-shortsleeve-shirts";
//       } else {
//         topfts = "short";
//         topcat = "mens-tees-and-tshirts";
//       }
//     }
//   } else if (todayTemp > 70) {
//     if (sex === "F"){
//       topcat = "womens-clothes";
//       topfts = "spring top";
//       if (fl === "b4493" || fl === "b728" || fl === "b284") {
//         topcat = "tees-and-tshirts";
//         topfts = "";
//       }
//       if (fl === "b2333") {
//         topcat = "womens-tops";
//         topfts = "light";
//       }
//       if (fl === "b4486") {
//         topcat = "womens-tops";
//         topfts = "";
//       }
//     } else if (sex === "M"){
//       if (fl === "b427"){
//         topcat = "mens-polo-shirts";
//         topfts = "";
//       } else {
//         topcat = "mens-tees-and-tshirts";
//         topfts = "";
//       }
//     }
//   } else if (todayTemp > 60) {
//     if (sex === "F"){
//       topcat = "longsleeve-tops";
//       topfts ="";
//     } else if (sex === "M"){
//       topcat = "mens-longsleeve-shirts";
//       topfts = "";
//     }
//   } else if (todayTemp > 50) {
//     if (sex === "F"){
//       topcat = "cashmere-sweaters";
//       topfts ="";
//       if (fl === "b4493" || fl === "b18563"){
//         topcat = "sweatshirts";
//       }
//       if (fl === "b2333") {
//         topcat = "turleneck-sweaters";
//       }
//       if (fl === "b728" || fl === "b284") {
//         topcat = "cardigan-sweaters";
//       }
//     } else if (sex === "M"){
//       topcat = "mens-sweaters";
//       topfts = "";
//     }
//   } else {
//     if (sex === "F"){
//       topcat = "womens-outerwear";
//       topfts = "outerwear";
//       if (fl === "b18563") {
//         topcat = "cardigan-sweaters";
//         topfts = "";
//       }
//       if (fl === "b284") {
//         topcat = "turleneck-sweaters";
//         topfts = "";
//       }
//       if (fl === "b18563") {
//         topcat = "sweaters";
//         topfts = "";
//       }
//     } else if (sex === "M"){
//       if (fl==="b2683" || fl === "b3471" || fl === "b2329" || fl === "b2446") {
//         topcat = "mens-jackets";
//       } else if (fl === "b462" || fl==="b284"){
//         topcat = "mens-wool-coats";
//       } else if (fl === "b29798") {
//         topcat = "mens-outerwear";
//       } else {
//         topcat = "mens-overcoats-and-trenchcoats";
//       }
//       topfts = "";
//     }
//   }
// };