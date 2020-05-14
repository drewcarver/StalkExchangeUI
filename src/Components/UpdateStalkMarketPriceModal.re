[@react.component]
let make = (~isOpen, ~onClose) => {
    open RootReducer;
    let dispatch = StalkExchangeStore.useDispatch();
    let (price, setPrice) = React.useState(() => None);
    let (dayOfWeek, setDayOfWeek) = React.useState(() => None);
    let priceAsText = Belt.Option.(
        map(price, string_of_int) 
        -> getWithDefault("")
    );
    
    <Modal isOpen>
        <select onChange={event => {
            let value = ReactEvent.Form.target(event)##value;

            let selectedDayOfWeek = switch (value) {
                | "monday"      => Monday       -> Some
                | "tuesday"     => Tuesday      -> Some
                | "wednesday"   => Wednesday    -> Some
                | "thursday"    => Thursday     -> Some
                | "friday"      => Friday       -> Some
                | "saturday"    => Saturday     -> Some
                | _             => None
            }

            setDayOfWeek(_ => selectedDayOfWeek);
        }}>
            <option value="monday">"Monday" -> React.string</option>
            <option value="tuesday">"Tuesday" -> React.string</option>
            <option value="wednesday">"Wednesday" -> React.string</option>
            <option value="thursday">"Thursday" -> React.string</option>
            <option value="friday">"Friday" -> React.string</option>
            <option value="saturday">"Saturday" -> React.string</option>
        </select>
        <input placeholder="New Stalk Market Price" value={priceAsText} onChange={event => {
            let price = ReactEvent.Form.target(event)##value;
            let parsedPrice = Belt.Int.fromString(price);

            setPrice(oldPrice => switch (parsedPrice) { 
                    | Some(price) => Some(price)
                    | None => oldPrice
                }
            );            
        }} />
        <button onClick=onClose>"Cancel" -> React.string</button>
        <button disabled={Belt.Option.isNone(price)} onClick={_ => {
            switch ((dayOfWeek, price)) {
                | (Some(dayOfWeek), Some(price))  => dispatch(MarketAction(UpdateStalkMarketSellPrice("Charlene Carver", OnlyMorning(price), dayOfWeek)))
                | _                               => ()
            }
        }}>
            "Save" -> React.string
        </button>
    </Modal>
}
