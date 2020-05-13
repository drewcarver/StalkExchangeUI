open StalkExchange;

type stalkExchangeAction = 
  | AddStalkMarketPrice(stalkBroker, int)
  | AddNewBroker(stalkBroker)

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

let updateStalkMarketPurchasePrice = (broker, price, markets) => {
    let findByBroker = m => m.stalkBroker == broker;
    let marketToUpdate = Belt.List.keep(markets)(findByBroker) |> Belt.List.head;

    switch (marketToUpdate) { 
        | Some(market) => {
          let listWithoutOldMarket = Belt.List.keep(markets)(m => m.stalkBroker != broker);
          let updatedMarket = { ...market, sundayPrice: Some(price) };

          [updatedMarket, ...listWithoutOldMarket]
        }
        | None => markets
    }
}

let stalkMarketReducer = (state, action) => {
    switch (action) {
        | AddStalkMarketPrice(broker, price)  => updateStalkMarketPurchasePrice(broker, price, state)
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