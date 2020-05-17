open StalkExchange;

[@react.component]
let make = (~marketRow) => {
  <tr>
    <td>marketRow.stalkBroker -> React.string</td>
    <StalkExchangePurchasePriceColumn turnipPurchasePrice=marketRow.sundayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=marketRow.mondayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=marketRow.tuesdayPrice/>
    <StalkExchangeSellingPriceColumn turnipSellPrice=marketRow.wednesdayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=marketRow.thursdayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=marketRow.fridayPrice />
    <StalkExchangeSellingPriceColumn turnipSellPrice=marketRow.saturdayPrice />
    <StalkExchangeRowActions brokerName=marketRow.stalkBroker />
  </tr>
}
