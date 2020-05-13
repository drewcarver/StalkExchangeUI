type turnipBuyPrice = int;

type turnipSellPriceEntry =
 | NoPrices
 | OnlyMorning(int)
 | MorningAndEvening(int, int);

type stalkBroker = string;

type market = {
  stalkBroker: stalkBroker,
  sundayPrice: option(turnipBuyPrice),
  mondayPrice: turnipSellPriceEntry,
  tuesdayPrice: turnipSellPriceEntry,
  wednesdayPrice: turnipSellPriceEntry,
  thursdayPrice: turnipSellPriceEntry,
  fridayPrice: turnipSellPriceEntry,
  saturdayPrice: turnipSellPriceEntry,
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

type stalkMarkets = {
  markets: list(market)
}