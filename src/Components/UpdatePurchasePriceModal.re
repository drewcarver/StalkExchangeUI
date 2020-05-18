[@react.component]
let make = (~isOpen, ~onClose, ~brokerName, ~currentPrice) => {
    open RootReducer;

    let currentPriceAsString = Belt.Option.(
        map(currentPrice, string_of_int) 
        -> getWithDefault("")
    );
    let dispatch = RootReducer.StalkExchangeStore.useDispatch();
    let (price, setPrice) = React.useState(() => currentPriceAsString);
    let clearPrice = () => setPrice(_ => "");
    let onCancel = _ => { 
        onClose(); 
        clearPrice();
    };

    <Modal isOpen className="add-new-broker-modal">
        <h2 className="add-new-broker-modal__title">{j| Update $brokerName 's Purchase Price |j} -> React.string</h2>
        <form 
            className="add-new-broker-modal__form"
            onSubmit={(event) => {
                ReactEvent.Form.stopPropagation(event);
                ReactEvent.Form.preventDefault(event);

                switch (price -> Belt.Int.fromString) { 
                    | Some(priceAsInt) => {
                        dispatch(MarketAction(AddStalkMarketPrice(brokerName, priceAsInt)));
                        clearPrice();
                    }
                    | None => () 
                }
            }}
        >
            <div className="form__body"> 
                <input className="form__broker-name-input" placeholder="Purchase Price" value=price type_="text" onChange={(event) => {
                    ReactEvent.Form.target(event)##value
                        -> Belt.Int.fromString
                        -> Belt.Option.map(string_of_int)
                        -> Belt.Option.getWithDefault
                        -> setPrice
                }} />
            </div>
            <div className="form__actions">
                <button className="form__cancel-button" type_="button" onClick=onCancel>"Cancel" -> React.string</button>
                <button className="form__submit-button" disabled={brokerName == ""}>
                    "Save" -> React.string
                </button>
            </div>
        </form>
    </Modal>
}
