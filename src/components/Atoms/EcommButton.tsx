import { Button } from "@chakra-ui/react";
import React from "react";
type EcommButtonPropType = {
  size: string;
  colour: string;
  onClickBtn: () => void;
  text: string;
};
const EcommButton = ({
  size,
  colour,
  onClickBtn,
  text,
}: EcommButtonPropType) => {
  return (
    <Button size={size} colorScheme={colour} onClick={onClickBtn}>
      {text}
    </Button>
  );
};

export default EcommButton;
