type test = { value: int };

[@react.component]
let make = () => {
    let url = ReasonReactRouter.useUrl();

    LocalStorage.toLocalStorage("test", { value: 1 });
        
    switch (url.path) {
        | [] => <StalkExchangeTable />
        | ["test"] => <div>"Test" -> React.string </div>
        | _ => <div>"This is not the page you're looking for" -> React.string </div>
    }
}