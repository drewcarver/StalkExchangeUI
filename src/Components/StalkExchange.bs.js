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

exports.createNewMarket = createNewMarket;
/* No side effect */
