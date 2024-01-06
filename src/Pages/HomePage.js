import { VStack, Text, Img } from "@chakra-ui/react";
import React from "react";

export default function HomePage() {
  return (
    <VStack>
      <Img src="./Grill2.jpg" m={2} rounded="lg" pos={"fixed"} />
      <Text
        color={"#edeeef"}
        bgColor={"#ee9972"}
        rounded={"lg"}
        padding={2}
        zIndex={100}
        ml={2}
      >
        Little Lemon is a charming neighbourhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. The restaurant
        features a locally-sourced menu with daily specials.
      </Text>
    </VStack>
  );
}
