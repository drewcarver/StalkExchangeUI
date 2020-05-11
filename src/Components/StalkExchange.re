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

type stalkMarkets = {
  markets: list(market)
}