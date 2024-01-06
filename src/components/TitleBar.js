import { Heading, Img } from "@chakra-ui/react";
import React from "react";

export default function TitleBar() {
  return (
    <Heading>
      <Img
        src="./Logo.jpg"
        htmlWidth="100%"
        htmlHeight="auto"
        alt="logo"
        px={3}
        mt={2}
        mb={3}
      />
    </Heading>
  );
}
