open StalkExchange;

type purchaseDayOfWeek = 
  | Monday
  | Tuesday
  | Wednesday
  | Thursday
  | Friday
  | Saturday;

type stalkExchangeAction = 
  | UpdateStalkMarketSellPrice(string, turnipSellPriceEntry, purchaseDayOfWeek)
  | AddStalkMarketPrice(string, int)
  | AddNewBroker(string)

type ReduxThunk.thunk(_) +=
  | MarketAction(stalkExchangeAction);

let getMarkets = (store: Reductive.Store.t(ReduxThunk.thunk(AppState.stalkExchangeState), AppState.stalkExchangeState)) => {
  Js.Promise.(
    Fetch.fetch("http://www.google.com")
    |> then_(Fetch.Response.text)
    |> then_(text => text |> resolve)
  ) |> ignore 

  Reductive.Store.dispatch(store, MarketAction(AddStalkMarketPrice("Mochi", 40)));
}

let findMarketByBroker = (broker, market) => market.stalkBroker == broker;
let findMarketsThatDoNotMatchBroker = (broker, market) => market.stalkBroker != broker;

let getUpdateByDayOfWeek = (dayOfWeek) => {
  switch (dayOfWeek) {
    | Monday    => updateMondayPrice
    | Tuesday   => updateTuesdayPrice
    | Wednesday => updateWednesdayPrice
    | Thursday  => updateThursdayPrice
    | Friday    => updateFridayPrice
    | Saturday  => updateSaturdayPrice
  };
}

let updateStalkMarketSellPrice = (broker, price, dayOfWeek, markets) => {
  open Belt.List;
  let filterMarkets = markets -> keep;
  let brokerMarket = findMarketByBroker(broker) -> filterMarkets -> head;

  switch (brokerMarket) {
    | Some(market) => getUpdateByDayOfWeek(dayOfWeek, price, market) 
      |> findMarketsThatDoNotMatchBroker(broker) 
      -> filterMarkets 
      -> add
    | None => markets
  }
}

let updateStalkMarketPurchasePrice = (broker, sundayPrice, markets) => {
  open Belt.List;
  let filterMarkets = markets -> keep;
  let brokerMarket = findMarketByBroker(broker) -> filterMarkets -> head;

  switch (brokerMarket) {
    | Some(market) => {...market, sundayPrice }
      |> findMarketsThatDoNotMatchBroker(broker) 
      -> filterMarkets 
      -> add
    | None => markets
  }
}

let stalkMarketReducer = (state, action) => {
    switch (action) {
        | UpdateStalkMarketSellPrice(broker, price, dayOfWeek)  => updateStalkMarketSellPrice(broker, price, dayOfWeek, state)
        | AddStalkMarketPrice(broker, price)  => updateStalkMarketPurchasePrice(broker, Some(price), state)
        | AddNewBroker(stalkBroker)           => [createNewMarket(stalkBroker, None), ...state]
    }
}

let appReducer = (state: AppState.stalkExchangeState, action) => {
    switch (action) {
        | MarketAction(action) => { markets: stalkMarketReducer(state.markets, action) }
        | _ => state
    }
}

let applyMiddleware = (store, next) => 
  Middleware.thunk(store) @@ next;

let stalkExchangeStore =
  Reductive.Store.create(
    ~reducer=appReducer,
    ~preloadedState={ markets: AppState.testStalkExchange },
    ~enhancer=applyMiddleware,
    (),
  );

module StalkExchangeStore = {
  include ReductiveContext.Make({
    type action = ReduxThunk.thunk(AppState.stalkExchangeState);
    type state = AppState.stalkExchangeState;
  });
};