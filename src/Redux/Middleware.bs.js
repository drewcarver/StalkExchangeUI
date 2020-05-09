'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Reductive = require("reductive/src/reductive.js");
var ReduxThunk$ReasonReactExamples = require("./ReduxThunk.bs.js");

function logger(store, next, action) {
  console.log(action);
  var returnValue = Curry._1(next, action);
  console.log(Reductive.Store.getState(store));
  return returnValue;
}

function thunk(store, next, action) {
  if (action[0] === ReduxThunk$ReasonReactExamples.Thunk) {
    return Curry._1(action[1], store);
  } else {
    return Curry._1(next, action);
  }
}

exports.logger = logger;
exports.thunk = thunk;
/* Reductive Not a pure module */
