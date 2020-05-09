let marketsSelector = (state: AppState.stalkExchangeState) => state.markets;

[@react.component]
let make = () => {
  open RootReducer;
  let markets = StalkExchangeStore.useSelector(marketsSelector);
  let dispatch = StalkExchangeStore.useDispatch();
  let store = StalkExchangeStore.useStore();
  let marketRows = Belt.List.map(markets, marketRow => <StalkExchangeRow key=marketRow.stalkBroker marketRow/>) |> Belt.List.toArray;
  let updatePrice = () => dispatch(MarketAction(AddStalkMarketPrice("Charlene Carver", 20)));

  <div>
    <button onClick={_ => getMarkets(store)}>"Click" -> React.string</button>
    <table className="stalk-market-table">
      <tbody>
        marketRows -> React.array
      </tbody>
    </table>
  </div>
}
