import { Input } from "@chakra-ui/react";

type EcommInputPropTypes = {
  type: string;
  required: boolean;
  value: any;
  padding?: string;
  margin?: string;
  onChange: (e: any) => void;
};
const EcommInput = ({
  type,
  required,
  value,
  padding,
  margin,
  onChange,
}: EcommInputPropTypes) => {
  return (
    <Input
      p={padding}
      m={margin}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default EcommInput;
