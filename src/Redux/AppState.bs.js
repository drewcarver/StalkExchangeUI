'use strict';

var Block = require("bs-platform/lib/js/block.js");

function testRow(broker) {
  return {
          stalkBroker: broker,
          sundayPrice: undefined,
          mondayPrice: /* NoPrices */0,
          tuesdayPrice: /* NoPrices */0,
          wednesdayPrice: /* NoPrices */0,
          thursdayPrice: /* NoPrices */0,
          fridayPrice: /* OnlyMorning */Block.__(0, [10]),
          saturdayPrice: /* NoPrices */0
        };
}

var testStalkExchange_000 = {
  stalkBroker: "Charlene Carver",
  sundayPrice: undefined,
  mondayPrice: /* NoPrices */0,
  tuesdayPrice: /* NoPrices */0,
  wednesdayPrice: /* NoPrices */0,
  thursdayPrice: /* NoPrices */0,
  fridayPrice: /* OnlyMorning */Block.__(0, [10]),
  saturdayPrice: /* NoPrices */0
};

var testStalkExchange_001 = /* :: */[
  {
    stalkBroker: "Drew Carver",
    sundayPrice: undefined,
    mondayPrice: /* NoPrices */0,
    tuesdayPrice: /* NoPrices */0,
    wednesdayPrice: /* NoPrices */0,
    thursdayPrice: /* NoPrices */0,
    fridayPrice: /* OnlyMorning */Block.__(0, [10]),
    saturdayPrice: /* NoPrices */0
  },
  /* :: */[
    {
      stalkBroker: "Mochi",
      sundayPrice: undefined,
      mondayPrice: /* NoPrices */0,
      tuesdayPrice: /* NoPrices */0,
      wednesdayPrice: /* NoPrices */0,
      thursdayPrice: /* NoPrices */0,
      fridayPrice: /* OnlyMorning */Block.__(0, [10]),
      saturdayPrice: /* NoPrices */0
    },
    /* [] */0
  ]
];

var testStalkExchange = /* :: */[
  testStalkExchange_000,
  testStalkExchange_001
];

exports.testRow = testRow;
exports.testStalkExchange = testStalkExchange;
/* No side effect */
