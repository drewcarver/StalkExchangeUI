'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function FunctorExtensions(F) {
  var $less$hash$great = function (fa, f) {
    return Curry._2(F.map, f, fa);
  };
  return {
          $less$$great: F.map,
          $less$hash$great: $less$hash$great
        };
}

function map(f, option) {
  if (option !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(option)));
  }
  
}

var Functor = {
  map: map
};

function $less$hash$great(fa, f) {
  return map(f, fa);
}

var FunctorExt = {
  $less$$great: map,
  $less$hash$great: $less$hash$great
};

var $$Option = {
  map: map,
  Functor: Functor,
  FunctorExt: FunctorExt,
  $less$$great: map,
  $less$hash$great: $less$hash$great
};

function map$1(f, promiseA) {
  return promiseA.then((function (a) {
                return Promise.resolve(Curry._1(f, a));
              }));
}

var Functor$1 = {
  map: map$1
};

function $less$hash$great$1(fa, f) {
  return map$1(f, fa);
}

var FunctorExt$1 = {
  $less$$great: map$1,
  $less$hash$great: $less$hash$great$1
};

var $$Promise$1 = {
  map: map$1,
  Functor: Functor$1,
  FunctorExt: FunctorExt$1,
  $less$$great: map$1,
  $less$hash$great: $less$hash$great$1
};

function map$2(f, fa) {
  if (fa.tag) {
    return /* Error */Block.__(1, [fa[0]]);
  } else {
    return /* Ok */Block.__(0, [Curry._1(f, fa[0])]);
  }
}

var Result = {
  map: map$2
};

function even(x) {
  if (x <= 0) {
    return true;
  } else {
    return odd(x - 1 | 0);
  }
}

function odd(x) {
  if (x <= 0) {
    return false;
  } else {
    return even(x - 1 | 0);
  }
}

function half(x) {
  if (even(x)) {
    return x / 2 | 0;
  }
  
}

exports.FunctorExtensions = FunctorExtensions;
exports.$$Option = $$Option;
exports.$$Promise = $$Promise$1;
exports.Result = Result;
exports.even = even;
exports.odd = odd;
exports.half = half;
/* No side effect */
