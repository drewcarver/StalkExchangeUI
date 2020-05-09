'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Reductive = require("reductive/src/reductive.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var ReductiveContext = require("reductive/src/reductiveContext.js");
var AppState$ReasonReactExamples = require("./AppState.bs.js");
var Middleware$ReasonReactExamples = require("./Middleware.bs.js");

var MarketAction = Caml_exceptions.create("RootReducer-ReasonReactExamples.MarketAction");

function getMarkets(store) {
  fetch("http://www.google.com").then((function (prim) {
            return prim.text();
          })).then((function (text) {
          return Promise.resolve(text);
        }));
  return Reductive.Store.dispatch(store, [
              MarketAction,
              /* AddStalkMarketPrice */[
                "Mochi",
                40
              ]
            ]);
}

function updateStalkMarketPurchasePrice(broker, price, markets) {
  var findByBroker = function (m) {
    return m.stalkBroker === broker;
  };
  var marketToUpdate = Belt_List.head(Belt_List.keep(markets, findByBroker));
  if (marketToUpdate !== undefined) {
    var market = marketToUpdate;
    var listWithoutOldMarket = Belt_List.keep(markets, (function (m) {
            return m.stalkBroker !== broker;
          }));
    var updatedMarket_stalkBroker = market.stalkBroker;
    var updatedMarket_sundayPrice = price;
    var updatedMarket_mondayPrice = market.mondayPrice;
    var updatedMarket_tuesdayPrice = market.tuesdayPrice;
    var updatedMarket_wednesdayPrice = market.wednesdayPrice;
    var updatedMarket_thursdayPrice = market.thursdayPrice;
    var updatedMarket_fridayPrice = market.fridayPrice;
    var updatedMarket_saturdayPrice = market.saturdayPrice;
    var updatedMarket = {
      stalkBroker: updatedMarket_stalkBroker,
      sundayPrice: updatedMarket_sundayPrice,
      mondayPrice: updatedMarket_mondayPrice,
      tuesdayPrice: updatedMarket_tuesdayPrice,
      wednesdayPrice: updatedMarket_wednesdayPrice,
      thursdayPrice: updatedMarket_thursdayPrice,
      fridayPrice: updatedMarket_fridayPrice,
      saturdayPrice: updatedMarket_saturdayPrice
    };
    return /* :: */[
            updatedMarket,
            listWithoutOldMarket
          ];
  } else {
    return markets;
  }
}

function stalkMarketReducer(state, action) {
  return updateStalkMarketPurchasePrice(action[0], action[1], state.markets);
}

function appReducer(state, action) {
  if (action[0] === MarketAction) {
    return {
            markets: stalkMarketReducer(state, action[1])
          };
  } else {
    return state;
  }
}

function applyMiddleware(store, next) {
  return (function (param) {
      return Middleware$ReasonReactExamples.thunk(store, next, param);
    });
}

var stalkExchangeStore = Reductive.Store.create(appReducer, {
      markets: AppState$ReasonReactExamples.testStalkExchange
    }, applyMiddleware, /* () */0);

var include = ReductiveContext.Make({ });

var StalkExchangeStore = include;

exports.MarketAction = MarketAction;
exports.getMarkets = getMarkets;
exports.updateStalkMarketPurchasePrice = updateStalkMarketPurchasePrice;
exports.stalkMarketReducer = stalkMarketReducer;
exports.appReducer = appReducer;
exports.applyMiddleware = applyMiddleware;
exports.stalkExchangeStore = stalkExchangeStore;
exports.StalkExchangeStore = StalkExchangeStore;
/* stalkExchangeStore Not a pure module */
