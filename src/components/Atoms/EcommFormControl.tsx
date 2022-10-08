import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import React from "react";
import EcommInputGroup from "./EcommInputGroup";

type EcommFormControlPropType = {
  isInvalid: boolean;
  lableText: string;
  value: any;
  onChange: (e: any) => void;
  errorMsg: string;
  type:string
};
const EcommFormControl = ({
  isInvalid,
  lableText,
  value,
  onChange,
  errorMsg,
  type
}: EcommFormControlPropType) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{lableText}</FormLabel>
      <EcommInputGroup width="18rem" type={type} value={value} onChange={onChange} />
      {!isInvalid ? (
        ""
      ) : (
        <FormErrorMessage>{errorMsg} is required</FormErrorMessage>
      )}
    </FormControl>
  );
};
export default EcommFormControl;
