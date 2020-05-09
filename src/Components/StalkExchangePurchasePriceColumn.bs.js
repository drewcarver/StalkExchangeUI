'use strict';

var React = require("react");

function StalkExchangePurchasePriceColumn(Props) {
  var turnipPurchasePrice = Props.turnipPurchasePrice;
  if (turnipPurchasePrice !== undefined) {
    return React.createElement("td", undefined, " " + (String(turnipPurchasePrice) + " bells "));
  } else {
    return React.createElement("td", undefined, "No Purchase Price");
  }
}

var make = StalkExchangePurchasePriceColumn;

exports.make = make;
/* react Not a pure module */
