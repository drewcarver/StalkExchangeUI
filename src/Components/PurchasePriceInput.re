[@react.component]
let make = () => {
    let (price, setPrice) = React.useState(_ => "");
    let updatePrice = (event) => {
        ReactEvent.Form.target(event)##value
            -> Belt.Int.fromString
            -> Belt.Option.map(string_of_int)
            -> Belt.Option.getWithDefault
            -> setPrice
    };

    <input placeholder="Purchase Price" value=price onChange=updatePrice />
}