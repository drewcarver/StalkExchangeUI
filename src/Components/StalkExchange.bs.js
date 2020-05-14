'use strict';


function createNewMarket(stalkBroker, sellPrice) {
  return {
          stalkBroker: stalkBroker,
          sundayPrice: sellPrice,
          mondayPrice: /* NoPrices */0,
          tuesdayPrice: /* NoPrices */0,
          wednesdayPrice: /* NoPrices */0,
          thursdayPrice: /* NoPrices */0,
          fridayPrice: /* NoPrices */0,
          saturdayPrice: /* NoPrices */0
        };
}

function updateMondayPrice(mondayPrice, market) {
  return {
          stalkBroker: market.stalkBroker,
          sundayPrice: market.sundayPrice,
          mondayPrice: mondayPrice,
          tuesdayPrice: market.tuesdayPrice,
          wednesdayPrice: market.wednesdayPrice,
          thursdayPrice: market.thursdayPrice,
          fridayPrice: market.fridayPrice,
          saturdayPrice: market.saturdayPrice
        };
}

function updateTuesdayPrice(tuesdayPrice, market) {
  return {
          stalkBroker: market.stalkBroker,
          sundayPrice: market.sundayPrice,
          mondayPrice: market.mondayPrice,
          tuesdayPrice: tuesdayPrice,
          wednesdayPrice: market.wednesdayPrice,
          thursdayPrice: market.thursdayPrice,
          fridayPrice: market.fridayPrice,
          saturdayPrice: market.saturdayPrice
        };
}

function updateWednesdayPrice(wednesdayPrice, market) {
  return {
          stalkBroker: market.stalkBroker,
          sundayPrice: market.sundayPrice,
          mondayPrice: market.mondayPrice,
          tuesdayPrice: market.tuesdayPrice,
          wednesdayPrice: wednesdayPrice,
          thursdayPrice: market.thursdayPrice,
          fridayPrice: market.fridayPrice,
          saturdayPrice: market.saturdayPrice
        };
}

function updateThursdayPrice(thursdayPrice, market) {
  return {
          stalkBroker: market.stalkBroker,
          sundayPrice: market.sundayPrice,
          mondayPrice: market.mondayPrice,
          tuesdayPrice: market.tuesdayPrice,
          wednesdayPrice: market.wednesdayPrice,
          thursdayPrice: thursdayPrice,
          fridayPrice: market.fridayPrice,
          saturdayPrice: market.saturdayPrice
        };
}

function updateFridayPrice(fridayPrice, market) {
  return {
          stalkBroker: market.stalkBroker,
          sundayPrice: market.sundayPrice,
          mondayPrice: market.mondayPrice,
          tuesdayPrice: market.tuesdayPrice,
          wednesdayPrice: market.wednesdayPrice,
          thursdayPrice: market.thursdayPrice,
          fridayPrice: fridayPrice,
          saturdayPrice: market.saturdayPrice
        };
}

function updateSaturdayPrice(saturdayPrice, market) {
  return {
          stalkBroker: market.stalkBroker,
          sundayPrice: market.sundayPrice,
          mondayPrice: market.mondayPrice,
          tuesdayPrice: market.tuesdayPrice,
          wednesdayPrice: market.wednesdayPrice,
          thursdayPrice: market.thursdayPrice,
          fridayPrice: market.fridayPrice,
          saturdayPrice: saturdayPrice
        };
}

exports.createNewMarket = createNewMarket;
exports.updateMondayPrice = updateMondayPrice;
exports.updateTuesdayPrice = updateTuesdayPrice;
exports.updateWednesdayPrice = updateWednesdayPrice;
exports.updateThursdayPrice = updateThursdayPrice;
exports.updateFridayPrice = updateFridayPrice;
exports.updateSaturdayPrice = updateSaturdayPrice;
/* No side effect */
