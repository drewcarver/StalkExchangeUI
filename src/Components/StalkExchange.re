type turnipBuyPrice = option(int)

type turnipSellPriceEntry =
 | NoPrices
 | OnlyMorning(int)
 | MorningAndEvening(int, int);

type stalkBroker = string;

type market = {
  stalkBroker: stalkBroker,
  sundayPrice: turnipBuyPrice,
  mondayPrice: turnipSellPriceEntry,
  tuesdayPrice: turnipSellPriceEntry,
  wednesdayPrice: turnipSellPriceEntry,
  thursdayPrice: turnipSellPriceEntry,
  fridayPrice: turnipSellPriceEntry,
  saturdayPrice: turnipSellPriceEntry,
}

type stalkMarkets = list(market);