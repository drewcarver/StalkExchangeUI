open StalkExchange;

[@react.component]
let make = (~turnipSellPrice) => {
    switch (turnipSellPrice) {
        | NoPrices => <td> "N/A" -> React.string </td>
        | OnlyMorning(morningPrice) => <td> {j| $morningPrice / ? |j} -> React.string </td>
        | MorningAndEvening(morningPrice, eveningPrice) => <td> {j| $morningPrice / $eveningPrice |j} -> React.string </td>
    }
}