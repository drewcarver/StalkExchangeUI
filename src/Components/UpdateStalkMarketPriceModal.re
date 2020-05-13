let parseStalkMarketPrice = Belt.Int.fromString;

[@react.component]
let make = (~isOpen, ~onClose) => {
    open RootReducer;
    let dispatch = StalkExchangeStore.useDispatch();
    let (price, setPrice) = React.useState(() => None);
    
    <Modal isOpen>
        <input placeholder="New Stalk Market Price" value={Belt.Option.getWithDefault(price, "")} onChange={event => {
            let price = ReactEvent.Form.target(event)##value;
            let parsedPrice = parseStalkMarketPrice(price) |> Belt.Option.getWithDefault;

            setPrice(parsedPrice)            
        }} />
        <button onClick=onClose>"Cancel" -> React.string</button>
        <button disabled={brokerName == ""} onClick={_ => dispatch(MarketAction(AddNewBroker(brokerName)))}>
            "Save" -> React.string
        </button>
    </Modal>
}
