'use strict';

var React = require("react");
var StalkExchangeSellingPriceColumn$ReasonReactExamples = require("./StalkExchangeSellingPriceColumn.bs.js");
var StalkExchangePurchasePriceColumn$ReasonReactExamples = require("./StalkExchangePurchasePriceColumn.bs.js");

function StalkExchangeRow(Props) {
  var marketRow = Props.marketRow;
  return React.createElement("tr", undefined, React.createElement("td", undefined, marketRow.stalkBroker), React.createElement(StalkExchangePurchasePriceColumn$ReasonReactExamples.make, {
                  turnipPurchasePrice: marketRow.sundayPrice
                }), React.createElement(StalkExchangeSellingPriceColumn$ReasonReactExamples.make, {
                  turnipSellPrice: marketRow.mondayPrice
                }), React.createElement(StalkExchangeSellingPriceColumn$ReasonReactExamples.make, {
                  turnipSellPrice: marketRow.tuesdayPrice
                }), React.createElement(StalkExchangeSellingPriceColumn$ReasonReactExamples.make, {
                  turnipSellPrice: marketRow.wednesdayPrice
                }), React.createElement(StalkExchangeSellingPriceColumn$ReasonReactExamples.make, {
                  turnipSellPrice: marketRow.thursdayPrice
                }), React.createElement(StalkExchangeSellingPriceColumn$ReasonReactExamples.make, {
                  turnipSellPrice: marketRow.fridayPrice
                }), React.createElement(StalkExchangeSellingPriceColumn$ReasonReactExamples.make, {
                  turnipSellPrice: marketRow.saturdayPrice
                }));
}

var make = StalkExchangeRow;

exports.make = make;
/* react Not a pure module */
