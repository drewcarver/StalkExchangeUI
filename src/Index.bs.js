'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonReactExamples = require("./App.bs.js");
var RootReducer$ReasonReactExamples = require("./Redux/RootReducer.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(RootReducer$ReasonReactExamples.StalkExchangeStore.Provider.make, {
          children: React.createElement(App$ReasonReactExamples.make, { }),
          store: RootReducer$ReasonReactExamples.stalkExchangeStore
        }), "app");

/*  Not a pure module */
