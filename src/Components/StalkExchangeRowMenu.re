[@react.component]
let make = (~menuAnchor) => {
    Js.Console.log(menuAnchor);

    switch (menuAnchor) {
        | Some(anchor)  => {
            <div>
            </div>
        }
        | None          => React.null
    }
}