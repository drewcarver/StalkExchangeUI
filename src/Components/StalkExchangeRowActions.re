[@react.component]
let make = (~brokerName) => {
    let dispatch = RootReducer.StalkExchangeStore.useDispatch();
    let (menuAnchor, setMenuAnchor) = React.useState(_ => None);
    let openMenu = event => {
        let target = ReactEvent.Mouse.target(event);
        setMenuAnchor(_ => Some(target));
    };

    <td>
        <button type_="button" onClick=openMenu>
            <i className="fa fa-ellipsis-h" />            
            <StalkExchangeRowMenu menuAnchor />
        </button>
    </td>
}