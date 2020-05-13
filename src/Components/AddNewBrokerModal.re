[@react.component]
let make = (~isOpen, ~onClose) => {
    open RootReducer;
    let dispatch = StalkExchangeStore.useDispatch();
    let (brokerName, setBrokerName) = React.useState(() => "");

    <Modal isOpen>
        <input value=brokerName type_="text" onChange={(event) => {
            let name = ReactEvent.Form.target(event)##value;

            setBrokerName(_ => name);
        }} />
        <button onClick=onClose>"Cancel" -> React.string</button>
        <button disabled={brokerName == ""} onClick={_ => dispatch(MarketAction(AddNewBroker(brokerName)))}>
            "Save" -> React.string
        </button>
    </Modal>
}