[@react.component]
let make = (~market: StalkExchange.market) => {
    let (isOpen, setIsOpen) = React.useState(() => false);
    let openUpdateModal = _ => setIsOpen(_ => true);
    let closeUpdateModal = _ => setIsOpen(_ => false);

    switch (market.sundayPrice) {
        | Some(purchasePrice) => <td> {j| $purchasePrice bells |j} -> React.string </td>
        | None => 
            <td> 
                <button type_="button" onClick=openUpdateModal>"Add Price" -> React.string </button> 
                <UpdatePurchasePriceModal isOpen onClose=closeUpdateModal brokerName=market.stalkBroker currentPrice=market.sundayPrice />
            </td>
    }
}
