'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Modal$ReasonReactExamples = require("./Modal.bs.js");
var RootReducer$ReasonReactExamples = require("../Redux/RootReducer.bs.js");

function AddNewBrokerModal(Props) {
  var isOpen = Props.isOpen;
  var onClose = Props.onClose;
  var dispatch = Curry._1(RootReducer$ReasonReactExamples.StalkExchangeStore.useDispatch, /* () */0);
  var match = React.useState((function () {
          return "";
        }));
  var setBrokerName = match[1];
  var brokerName = match[0];
  return React.createElement(Modal$ReasonReactExamples.make, {
              children: null,
              isOpen: isOpen
            }, React.createElement("input", {
                  type: "text",
                  value: brokerName,
                  onChange: (function ($$event) {
                      var name = $$event.target.value;
                      return Curry._1(setBrokerName, (function (param) {
                                    return name;
                                  }));
                    })
                }), React.createElement("button", {
                  onClick: onClose
                }, "Cancel"), React.createElement("button", {
                  disabled: brokerName === "",
                  onClick: (function (param) {
                      return Curry._1(dispatch, [
                                  RootReducer$ReasonReactExamples.MarketAction,
                                  /* AddNewBroker */Block.__(1, [brokerName])
                                ]);
                    })
                }, "Save"));
}

var make = AddNewBrokerModal;

exports.make = make;
/* react Not a pure module */
