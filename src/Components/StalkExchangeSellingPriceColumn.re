open StalkExchange;

[@react.component]
let make = (~turnipSellPrice) => {
    switch (turnipSellPrice) {
        | NoPrices => <td> "No Price Yet..." -> React.string </td>
        | OnlyMorning(morningPrice) => <td> {j| $morningPrice / ? |j} -> React.string </td>
        | MorningAndEvening(morningPrice, eveningPrice) => <td> {j| $morningPrice / $eveningPrice |j} -> React.string </td>
    }
}