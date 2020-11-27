import React from "react";
import { observer } from "mobx-react";

import { Button } from "./styledComponents.js";

function ButtonComponent(props) {
  return (
    <Button
      onClick={() => props.onClickButton(props.text)}
      isSelected={props.isSelected}
    >
      {props.text}
    </Button>
  );
}

export default observer(ButtonComponent);
