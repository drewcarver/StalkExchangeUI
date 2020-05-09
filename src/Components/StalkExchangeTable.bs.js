'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var RootReducer$ReasonReactExamples = require("../Redux/RootReducer.bs.js");
var StalkExchangeRow$ReasonReactExamples = require("./StalkExchangeRow.bs.js");

function marketsSelector(state) {
  return state.markets;
}

function StalkExchangeTable(Props) {
  var markets = Curry._1(RootReducer$ReasonReactExamples.StalkExchangeStore.useSelector, marketsSelector);
  Curry._1(RootReducer$ReasonReactExamples.StalkExchangeStore.useDispatch, /* () */0);
  var store = Curry._1(RootReducer$ReasonReactExamples.StalkExchangeStore.useStore, /* () */0);
  var marketRows = Belt_List.toArray(Belt_List.map(markets, (function (marketRow) {
              return React.createElement(StalkExchangeRow$ReasonReactExamples.make, {
                          marketRow: marketRow,
                          key: marketRow.stalkBroker
                        });
            })));
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: (function (param) {
                      return RootReducer$ReasonReactExamples.getMarkets(store);
                    })
                }, "Click"), React.createElement("table", {
                  className: "stalk-market-table"
                }, React.createElement("tbody", undefined, marketRows)));
}

var make = StalkExchangeTable;

exports.marketsSelector = marketsSelector;
exports.make = make;
/* react Not a pure module */
