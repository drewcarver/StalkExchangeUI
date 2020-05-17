%raw
{|
  require("./Modal.sass")
|};

[@react.component]
let make = (~children, ~isOpen, ~className = "") => {

    if (isOpen) {
        <div className={"modal" ++ {j| $className|j}}>
            children
        </div>
    } else {
        React.null
    }
}