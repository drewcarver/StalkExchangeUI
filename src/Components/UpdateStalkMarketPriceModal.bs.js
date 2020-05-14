'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Int = require("bs-platform/lib/js/belt_Int.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Modal$ReasonReactExamples = require("./Modal.bs.js");
var RootReducer$ReasonReactExamples = require("../Redux/RootReducer.bs.js");

function UpdateStalkMarketPriceModal(Props) {
  var isOpen = Props.isOpen;
  var onClose = Props.onClose;
  var dispatch = Curry._1(RootReducer$ReasonReactExamples.StalkExchangeStore.useDispatch, /* () */0);
  var match = React.useState((function () {
          return ;
        }));
  var setPrice = match[1];
  var price = match[0];
  var match$1 = React.useState((function () {
          return ;
        }));
  var setDayOfWeek = match$1[1];
  var dayOfWeek = match$1[0];
  var priceAsText = Belt_Option.getWithDefault(Belt_Option.map(price, (function (prim) {
              return String(prim);
            })), "");
  return React.createElement(Modal$ReasonReactExamples.make, {
              children: null,
              isOpen: isOpen
            }, React.createElement("select", {
                  onChange: (function ($$event) {
                      var value = $$event.target.value;
                      var selectedDayOfWeek;
                      switch (value) {
                        case "friday" :
                            selectedDayOfWeek = /* Friday */4;
                            break;
                        case "monday" :
                            selectedDayOfWeek = /* Monday */0;
                            break;
                        case "saturday" :
                            selectedDayOfWeek = /* Saturday */5;
                            break;
                        case "thursday" :
                            selectedDayOfWeek = /* Thursday */3;
                            break;
                        case "tuesday" :
                            selectedDayOfWeek = /* Tuesday */1;
                            break;
                        case "wednesday" :
                            selectedDayOfWeek = /* Wednesday */2;
                            break;
                        default:
                          selectedDayOfWeek = undefined;
                      }
                      return Curry._1(setDayOfWeek, (function (param) {
                                    return selectedDayOfWeek;
                                  }));
                    })
                }, React.createElement("option", {
                      value: "monday"
                    }, "Monday"), React.createElement("option", {
                      value: "tuesday"
                    }, "Tuesday"), React.createElement("option", {
                      value: "wednesday"
                    }, "Wednesday"), React.createElement("option", {
                      value: "thursday"
                    }, "Thursday"), React.createElement("option", {
                      value: "friday"
                    }, "Friday"), React.createElement("option", {
                      value: "saturday"
                    }, "Saturday")), React.createElement("input", {
                  placeholder: "New Stalk Market Price",
                  value: priceAsText,
                  onChange: (function ($$event) {
                      var price = $$event.target.value;
                      var parsedPrice = Belt_Int.fromString(price);
                      return Curry._1(setPrice, (function (oldPrice) {
                                    if (parsedPrice !== undefined) {
                                      return parsedPrice;
                                    } else {
                                      return oldPrice;
                                    }
                                  }));
                    })
                }), React.createElement("button", {
                  onClick: onClose
                }, "Cancel"), React.createElement("button", {
                  disabled: Belt_Option.isNone(price),
                  onClick: (function (param) {
                      if (dayOfWeek !== undefined && price !== undefined) {
                        return Curry._1(dispatch, [
                                    RootReducer$ReasonReactExamples.MarketAction,
                                    /* UpdateStalkMarketSellPrice */Block.__(0, [
                                        "Charlene Carver",
                                        /* OnlyMorning */Block.__(0, [price]),
                                        dayOfWeek
                                      ])
                                  ]);
                      } else {
                        return /* () */0;
                      }
                    })
                }, "Save"));
}

var make = UpdateStalkMarketPriceModal;

exports.make = make;
/* react Not a pure module */
