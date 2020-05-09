open StalkExchange;

type stalkExchangeState = { 
    markets: stalkMarkets 
};

let testRow = (broker) => {
   stalkBroker    : broker,
   mondayPrice    : NoPrices,
   tuesdayPrice   : NoPrices,
   wednesdayPrice : NoPrices,
   thursdayPrice  : NoPrices,
   fridayPrice    : OnlyMorning(10),
   saturdayPrice  : NoPrices,
   sundayPrice    : None
 }

let testStalkExchange = [ testRow("Charlene Carver"), testRow("Drew Carver"), testRow("Mochi") ];