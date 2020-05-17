let marketsSelector = (state: AppState.stalkExchangeState) => state.markets;

[@react.component]
let make = () => {
  let markets = RootReducer.StalkExchangeStore.useSelector(marketsSelector);
  let marketRows = Belt.List.map(markets, marketRow => <StalkExchangeRow key=marketRow.stalkBroker marketRow/>) 
    |> Belt.List.toArray;
  let (isOpen, setIsOpen) = React.useState(() => false);

  <div>
    <button onClick={_ => setIsOpen(_ => true)}>"Add New Broker" -> React.string</button>
    <AddNewBrokerModal isOpen onClose={_ => setIsOpen(_ => false)} />
    <table className="stalk-market-table">
      <thead>
        <tr className="stalk-market-table__header-row">
          <th>"Broker"          -> React.string</th>
          <th>"Purchase Price"  -> React.string</th>
          <th>"Monday"          -> React.string</th>
          <th>"Tuesday"         -> React.string</th>
          <th>"Wednesday"       -> React.string</th>
          <th>"Thursday"        -> React.string</th>
          <th>"Friday"          -> React.string</th>
          <th>"Saturday"        -> React.string</th>
        </tr>
      </thead>
      <tbody>
        marketRows -> React.array
      </tbody>
    </table>
  </div>
}
