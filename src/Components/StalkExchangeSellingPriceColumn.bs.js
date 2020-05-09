'use strict';

var React = require("react");

function StalkExchangeSellingPriceColumn(Props) {
  var turnipSellPrice = Props.turnipSellPrice;
  if (typeof turnipSellPrice === "number") {
    return React.createElement("td", undefined, "No Price Yet...");
  } else if (turnipSellPrice.tag) {
    return React.createElement("td", undefined, " " + (String(turnipSellPrice[0]) + (" / " + (String(turnipSellPrice[1]) + " "))));
  } else {
    return React.createElement("td", undefined, " " + (String(turnipSellPrice[0]) + " / ? "));
  }
}

var make = StalkExchangeSellingPriceColumn;

exports.make = make;
/* react Not a pure module */
