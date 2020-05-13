'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");

function toLocalStorage(key, data) {
  var stringifiedDataOption = JSON.stringify(data);
  if (stringifiedDataOption !== undefined) {
    localStorage.setItem(key, stringifiedDataOption);
    return /* () */0;
  } else {
    return /* () */0;
  }
}

function fromLocalStorage(key) {
  return Caml_option.null_to_opt(localStorage.getItem(key));
}

exports.toLocalStorage = toLocalStorage;
exports.fromLocalStorage = fromLocalStorage;
/* No side effect */
