open StalkExchange;

[@react.component]
let make = (~market) => {
  <tr>
    <td>market.stalkBroker -> React.string</td>
    <StalkExchangePurchasePriceColumn market />
    <StalkExchangeSellingPriceColumn turnipSellPrice=market.mondayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=market.tuesdayPrice/>
    <StalkExchangeSellingPriceColumn turnipSellPrice=market.wednesdayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=market.thursdayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=market.fridayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=market.saturdayPrice />
  </tr>
}
