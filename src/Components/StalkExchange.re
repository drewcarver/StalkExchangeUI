type turnipBuyPrice = int;

type turnipSellPriceEntry =
 | NoPrices
 | OnlyMorning(int)
 | MorningAndEvening(int, int);

type market = {
  stalkBroker:    string,
  sundayPrice:    option(turnipBuyPrice),
  mondayPrice:    turnipSellPriceEntry,
  tuesdayPrice:   turnipSellPriceEntry,
  wednesdayPrice: turnipSellPriceEntry,
  thursdayPrice:  turnipSellPriceEntry,
  fridayPrice:    turnipSellPriceEntry,
  saturdayPrice:  turnipSellPriceEntry,
}

let createNewMarket = (stalkBroker, sellPrice) => {
  stalkBroker,
  sundayPrice:    sellPrice,
  mondayPrice:    NoPrices,
  tuesdayPrice:   NoPrices,
  wednesdayPrice: NoPrices,
  thursdayPrice:  NoPrices,
  fridayPrice:    NoPrices,
  saturdayPrice:  NoPrices,
}

let updateMondayPrice     = (mondayPrice, market) => { ...market, mondayPrice };
let updateTuesdayPrice    = (tuesdayPrice, market) => { ...market, tuesdayPrice };
let updateWednesdayPrice  = (wednesdayPrice, market) => { ...market, wednesdayPrice };
let updateThursdayPrice   = (thursdayPrice, market) => { ...market, thursdayPrice };
let updateFridayPrice     = (fridayPrice, market) => { ...market, fridayPrice };
let updateSaturdayPrice   = (saturdayPrice, market) => { ...market, saturdayPrice };

type stalkMarkets = {
  markets: list(market)
} 