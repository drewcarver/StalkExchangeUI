'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function sellPriceDecoder(json) {
  var decodedSellPrice_morningPrice = Json_decode.optional((function (param) {
          return Json_decode.field("morningPrice", Json_decode.$$int, param);
        }), json);
  var decodedSellPrice_eveningPrice = Json_decode.optional((function (param) {
          return Json_decode.field("eveningPrice", Json_decode.$$int, param);
        }), json);
  var match = decodedSellPrice_morningPrice;
  if (match !== undefined) {
    var match$1 = decodedSellPrice_eveningPrice;
    var morning = match;
    if (match$1 !== undefined) {
      return /* MorningAndEvening */Block.__(1, [
                morning,
                match$1
              ]);
    } else {
      return /* OnlyMorning */Block.__(0, [morning]);
    }
  } else {
    return /* NoPrices */0;
  }
}

function dayDecoder(dayName, json) {
  var dayResult = Json_decode.optional((function (param) {
          return Json_decode.field(dayName, sellPriceDecoder, param);
        }), json);
  if (dayResult !== undefined) {
    return dayResult;
  } else {
    return /* NoPrices */0;
  }
}

function marketDecoder(json) {
  return {
          stalkBroker: Json_decode.field("stalkBroker", Json_decode.string, json),
          sundayPrice: Json_decode.optional((function (param) {
                  return Json_decode.field("sundayPrice", Json_decode.$$int, param);
                }), json),
          mondayPrice: dayDecoder("mondayPrice", json),
          tuesdayPrice: dayDecoder("tuesdayPrice", json),
          wednesdayPrice: dayDecoder("wednesdayPrice", json),
          thursdayPrice: dayDecoder("thursdayPrice", json),
          fridayPrice: dayDecoder("fridayPrice", json),
          saturdayPrice: dayDecoder("saturdayPrice", json)
        };
}

function stalkExchangeDecoder(json) {
  return {
          markets: Json_decode.field("markets", (function (param) {
                  return Json_decode.list(marketDecoder, param);
                }), json)
        };
}

exports.sellPriceDecoder = sellPriceDecoder;
exports.dayDecoder = dayDecoder;
exports.marketDecoder = marketDecoder;
exports.stalkExchangeDecoder = stalkExchangeDecoder;
/* No side effect */
