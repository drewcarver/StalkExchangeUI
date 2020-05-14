let marketsSelector = (state: AppState.stalkExchangeState) => state.markets;

[@react.component]
let make = () => {
  open RootReducer;
  let markets = StalkExchangeStore.useSelector(marketsSelector);
  let (isOpen, setIsOpen) = React.useState(() => false);
  let marketRows = Belt.List.map(markets, marketRow => <StalkExchangeRow key=marketRow.stalkBroker marketRow/>) |> Belt.List.toArray;

  <div>
    <button onClick={_ => setIsOpen(_ => true)}>"Add New Broker" -> React.string</button>
    <UpdateStalkMarketPriceModal isOpen onClose={_ => setIsOpen(_ => false)} />
    <table className="stalk-market-table">
      <tbody>
        marketRows -> React.array
      </tbody>
    </table>
  </div>
}
