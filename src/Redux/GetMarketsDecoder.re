type sellPrice = {
  morningPrice: option(int),
  eveningPrice: option(int) 
}

let sellPriceDecoder = (json) => {
  open StalkExchange;

  let decodedSellPrice = Json.Decode.{
    morningPrice:   json |> optional(field("morningPrice", int)),
    eveningPrice:   json |> optional(field("eveningPrice", int))
  }

  switch (decodedSellPrice) {
    | { morningPrice: Some(morning), eveningPrice: Some(evening) } => MorningAndEvening(morning, evening)
    | { morningPrice: Some(morning) } => OnlyMorning(morning)
    | _ => NoPrices
  }
}

let dayDecoder = (dayName, json) => {
  open Json.Decode;
  
  let dayResult = json |> optional(field(dayName, sellPriceDecoder))

  switch (dayResult) {
    | Some (sellPrice) => sellPrice
    | None => NoPrices
  }
}

let marketDecoder = json => {
  open StalkExchange;

  Json.Decode.{
    stalkBroker:    json |> field("stalkBroker", string),
    sundayPrice:    json |> optional(field("sundayPrice", int)),
    mondayPrice:    json |> dayDecoder("mondayPrice"),
    tuesdayPrice:   json |> dayDecoder("tuesdayPrice"),
    wednesdayPrice: json |> dayDecoder("wednesdayPrice"),
    thursdayPrice:  json |> dayDecoder("thursdayPrice"),
    fridayPrice:    json |> dayDecoder("fridayPrice"),
    saturdayPrice:  json |> dayDecoder("saturdayPrice"),
  };
};

let stalkExchangeDecoder = json => {
  open StalkExchange;

  Json.Decode.{
    markets:        json |> field("markets", list(marketDecoder))
  }
}