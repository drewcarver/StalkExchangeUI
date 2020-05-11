'use strict';

var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function StalkExchangePurchasePriceColumn(Props) {
  var turnipPurchasePrice = Props.turnipPurchasePrice;
  if (turnipPurchasePrice !== undefined) {
    return React.createElement("td", undefined, " " + (String(Caml_option.valFromOption(turnipPurchasePrice)) + " bells "));
  } else {
    return React.createElement("td", undefined, "No Purchase Price");
  }
}

var make = StalkExchangePurchasePriceColumn;

exports.make = make;
/* react Not a pure module */
