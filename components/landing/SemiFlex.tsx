import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const SemiFlex = ({ inverted, heading, text }) => {
  return (
    <Flex
      minH="100vh"
      flexDir={inverted === true ? "row-reverse" : "row"}
      py="20%"
    >
      <>
        <Image
          src="https://www.turing.com/_next/image?url=%2Fimg%2Fpic-skills-mobile.png&w=1920&q=75"
          w="50%"
        />
      </>

      <Flex h="100%" w="50%" flexDir="column" justify="center" px="8" py="15%">
        <Heading as="h3">{heading}</Heading>
        <Text mt="10">{text}</Text>
      </Flex>
    </Flex>
  );
};

export default SemiFlex;
