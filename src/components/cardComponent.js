import React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const CardComponent = ({ ...props }) => {
  return (
    <Stat className="bg-[#b8b5b6] py-5">
      <StatLabel className={props.className}>{props.value}</StatLabel>
      <StatNumber>{props.number.toLocaleString("en-UK")}</StatNumber>
    </Stat>
  );
};

export default CardComponent;
