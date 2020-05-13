%raw
{|
  require("./Modal.sass")
|};

[@react.component]
let make = (~children, ~isOpen) => {

    if (isOpen) {
        <div className="modal">
            children
        </div>
    } else {
        React.null
    }
}