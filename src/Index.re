%raw
{|
  require("./Reset.css");
  require("./Main.sass");
  require("@fortawesome/fontawesome-free/css/all.css");
|};

open RootReducer;

[@bs.val] external document: Js.t({..}) = "document";

ReactDOMRe.renderToElementWithId(
  <StalkExchangeStore.Provider store=stalkExchangeStore><App /></StalkExchangeStore.Provider>,
  "app"
);