[@react.component]
let make = (~turnipPurchasePrice) => {
    switch (turnipPurchasePrice) {
        | Some(purchasePrice) => <td> {j| $purchasePrice bells |j} -> React.string </td>
        | None => <td> "No Purchase Price" -> React.string </td>
    }
}
