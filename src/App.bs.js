'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var LocalStorage$ReasonReactExamples = require("./Utilities/LocalStorage.bs.js");
var StalkExchangeTable$ReasonReactExamples = require("./Components/StalkExchangeTable.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  LocalStorage$ReasonReactExamples.toLocalStorage("test", {
        value: 1
      });
  var match = url.path;
  if (match) {
    if (match[0] === "test" && !match[1]) {
      return React.createElement("div", undefined, "Test");
    } else {
      return React.createElement("div", undefined, "This is not the page you're looking for");
    }
  } else {
    return React.createElement(StalkExchangeTable$ReasonReactExamples.make, { });
  }
}

var make = App;

exports.make = make;
/* react Not a pure module */
