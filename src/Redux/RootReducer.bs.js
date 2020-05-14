'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Reductive = require("reductive/src/reductive.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var ReductiveContext = require("reductive/src/reductiveContext.js");
var AppState$ReasonReactExamples = require("./AppState.bs.js");
var Middleware$ReasonReactExamples = require("./Middleware.bs.js");
var StalkExchange$ReasonReactExamples = require("../Components/StalkExchange.bs.js");

var MarketAction = Caml_exceptions.create("RootReducer-ReasonReactExamples.MarketAction");

function getMarkets(store) {
  fetch("http://www.google.com").then((function (prim) {
            return prim.text();
          })).then((function (text) {
          return Promise.resolve(text);
        }));
  return Reductive.Store.dispatch(store, [
              MarketAction,
              /* AddStalkMarketPrice */Block.__(1, [
                  "Mochi",
                  40
                ])
            ]);
}

function negated(f, x) {
  return !Curry._1(f, x);
}

function findMarketByBroker(broker, market) {
  return market.stalkBroker === broker;
}

function findMarketsThatDoNotMatchBroker(broker, market) {
  return market.stalkBroker !== broker;
}

function getUpdateByDayOfWeek(dayOfWeek) {
  switch (dayOfWeek) {
    case /* Monday */0 :
        return StalkExchange$ReasonReactExamples.updateMondayPrice;
    case /* Tuesday */1 :
        return StalkExchange$ReasonReactExamples.updateTuesdayPrice;
    case /* Wednesday */2 :
        return StalkExchange$ReasonReactExamples.updateWednesdayPrice;
    case /* Thursday */3 :
        return StalkExchange$ReasonReactExamples.updateThursdayPrice;
    case /* Friday */4 :
        return StalkExchange$ReasonReactExamples.updateFridayPrice;
    case /* Saturday */5 :
        return StalkExchange$ReasonReactExamples.updateSaturdayPrice;
    
  }
}

function updateStalkMarketSellPrice(broker, price, dayOfWeek, markets) {
  var brokerMarket = Belt_List.head(Belt_List.keep(markets, (function (param) {
              return param.stalkBroker === broker;
            })));
  if (brokerMarket !== undefined) {
    return Belt_List.add(Belt_List.keep(markets, (function (param) {
                      return param.stalkBroker !== broker;
                    })), getUpdateByDayOfWeek(dayOfWeek)(price, brokerMarket));
  } else {
    return markets;
  }
}

function updateStalkMarketPurchasePrice(broker, sundayPrice, markets) {
  var brokerMarket = Belt_List.head(Belt_List.keep(markets, (function (param) {
              return param.stalkBroker === broker;
            })));
  if (brokerMarket !== undefined) {
    var market = brokerMarket;
    return Belt_List.add(Belt_List.keep(markets, (function (param) {
                      return param.stalkBroker !== broker;
                    })), {
                stalkBroker: market.stalkBroker,
                sundayPrice: sundayPrice,
                mondayPrice: market.mondayPrice,
                tuesdayPrice: market.tuesdayPrice,
                wednesdayPrice: market.wednesdayPrice,
                thursdayPrice: market.thursdayPrice,
                fridayPrice: market.fridayPrice,
                saturdayPrice: market.saturdayPrice
              });
  } else {
    return markets;
  }
}

function stalkMarketReducer(state, action) {
  switch (action.tag | 0) {
    case /* UpdateStalkMarketSellPrice */0 :
        return updateStalkMarketSellPrice(action[0], action[1], action[2], state);
    case /* AddStalkMarketPrice */1 :
        return updateStalkMarketPurchasePrice(action[0], action[1], state);
    case /* AddNewBroker */2 :
        return /* :: */[
                StalkExchange$ReasonReactExamples.createNewMarket(action[0], undefined),
                state
              ];
    
  }
}

function appReducer(state, action) {
  if (action[0] === MarketAction) {
    return {
            markets: stalkMarketReducer(state.markets, action[1])
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
exports.negated = negated;
exports.findMarketByBroker = findMarketByBroker;
exports.findMarketsThatDoNotMatchBroker = findMarketsThatDoNotMatchBroker;
exports.getUpdateByDayOfWeek = getUpdateByDayOfWeek;
exports.updateStalkMarketSellPrice = updateStalkMarketSellPrice;
exports.updateStalkMarketPurchasePrice = updateStalkMarketPurchasePrice;
exports.stalkMarketReducer = stalkMarketReducer;
exports.appReducer = appReducer;
exports.applyMiddleware = applyMiddleware;
exports.stalkExchangeStore = stalkExchangeStore;
exports.StalkExchangeStore = StalkExchangeStore;
/* stalkExchangeStore Not a pure module */
