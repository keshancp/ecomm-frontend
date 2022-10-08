import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type EcommInputGroupPropType = {
  type: string;
  required?: boolean;
  value: any;
  padding?: string;
  margin?: string;
  onChange: (e: any) => void;
  leftChild?: boolean;
  rightChild?: boolean;
  icon?: any;
  width?:string
};

const EcommInputGroup = ({
  type,
  required,
  value,
  padding,
  margin,
  onChange,
  leftChild,
  rightChild,
  icon,
  width
}: EcommInputGroupPropType) => {
  return (
    <InputGroup>
      {leftChild ? (
        <InputLeftElement pointerEvents="none" children={icon} />
      ) : (
        ""
      )}
      <Input
        p={padding}
        m={margin}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        width={width}
      />
      {rightChild ? (
        <InputRightElement pointerEvents="none" children={icon} />
      ) : (
        ""
      )}
    </InputGroup>
  );
};

export default EcommInputGroup;
