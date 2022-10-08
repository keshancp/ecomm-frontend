import { Text } from "@chakra-ui/react";
import React from "react";

type EcommTitlePropTypes = {
  title: string;
  fontSize?: string;
  textWeight?: any;
  margin?: string;
  padding?: string;
};

const EcommTitle = ({
  title,
  fontSize,
  textWeight,
  margin,
  padding,
}: EcommTitlePropTypes) => {
  return (
    <Text fontSize={fontSize} m={margin} p={padding} as={textWeight}>
      {title}
    </Text>
  );
};

export default EcommTitle;
