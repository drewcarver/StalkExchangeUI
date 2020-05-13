let toLocalStorage = (key, data) => {
    let stringifiedDataOption = Js.Json.stringifyAny(data);

    switch (stringifiedDataOption) {
        | Some(stringifiedData) => Dom.Storage.setItem(key, stringifiedData, Dom.Storage.localStorage)
        | None => () 
    }
}

let fromLocalStorage = (key) => Dom.Storage.getItem(key, Dom.Storage.localStorage);