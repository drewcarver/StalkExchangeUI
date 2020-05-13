'use strict';

var React = require("react");

require("./Modal.sass")
;

function Modal(Props) {
  var children = Props.children;
  var isOpen = Props.isOpen;
  if (isOpen) {
    return React.createElement("div", {
                className: "modal"
              }, children);
  } else {
    return null;
  }
}

var make = Modal;

exports.make = make;
/*  Not a pure module */
