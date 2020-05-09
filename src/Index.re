open RootReducer;

[@bs.val] external document: Js.t({..}) = "document";

ReactDOMRe.renderToElementWithId(
  <StalkExchangeStore.Provider store=stalkExchangeStore><App /></StalkExchangeStore.Provider>,
  "app"
);